import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { TwitterApi } from 'twitter-api-v2';

const SITE_URL = 'https://jacquesjean.info';
const TWEET_LOG_PATH = path.join(process.cwd(), 'jesse/Projects/drafts/tweet-log.json');
const MAX_TWEET_LENGTH = 280;

const filePath = process.argv[2];
if (!filePath) {
  console.error('Usage: node scripts/tweet-on-publish.js <path-to-post.md>');
  process.exit(1);
}

// Parse frontmatter
const fileContent = fs.readFileSync(filePath, 'utf-8');
const { data } = matter(fileContent);
const { title, excerpt, slug, tweet: customTweet } = data;

if (!title || !slug) {
  console.error(`Missing required frontmatter (title, slug) in ${filePath}`);
  process.exit(1);
}

// Check dedup log
let log = [];
if (fs.existsSync(TWEET_LOG_PATH)) {
  log = JSON.parse(fs.readFileSync(TWEET_LOG_PATH, 'utf-8'));
}
if (log.some(entry => entry.slug === slug)) {
  console.log(`Already tweeted: ${slug}`);
  process.exit(0);
}

// Build tweet text
const url = `${SITE_URL}/writing/${slug}`;

function buildTweet(title, excerpt, url, customTweet) {
  // If a custom tweet hook is provided in frontmatter, use it + the URL
  if (customTweet) {
    const custom = `${customTweet}\n\n${url}`;
    if (custom.length <= MAX_TWEET_LENGTH) return custom;
    // Custom tweet too long -- truncate
    const available = MAX_TWEET_LENGTH - url.length - 5; // "\n\n" + "..."
    return `${customTweet.slice(0, available)}...\n\n${url}`;
  }

  if (excerpt) {
    const full = `${title}\n\n${excerpt}\n\n${url}`;
    if (full.length <= MAX_TWEET_LENGTH) return full;

    const oneLine = `${title} -- ${excerpt} ${url}`;
    if (oneLine.length <= MAX_TWEET_LENGTH) return oneLine;

    const available = MAX_TWEET_LENGTH - title.length - url.length - 8; // " -- " + "... "
    if (available > 20) {
      return `${title} -- ${excerpt.slice(0, available)}... ${url}`;
    }
  }

  // Fallback: title + url only
  const minimal = `${title}\n\n${url}`;
  if (minimal.length <= MAX_TWEET_LENGTH) return minimal;

  return `${title.slice(0, MAX_TWEET_LENGTH - url.length - 5)}... ${url}`;
}

const tweetText = buildTweet(title, excerpt, url, customTweet);

// Verify Twitter credentials are present
const { TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET } = process.env;
if (!TWITTER_API_KEY || !TWITTER_API_SECRET || !TWITTER_ACCESS_TOKEN || !TWITTER_ACCESS_SECRET) {
  console.error('Missing Twitter API credentials. Set TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, and TWITTER_ACCESS_SECRET.');
  const missing = ['TWITTER_API_KEY', 'TWITTER_API_SECRET', 'TWITTER_ACCESS_TOKEN', 'TWITTER_ACCESS_SECRET']
    .filter(k => !process.env[k]);
  console.error(`Missing: ${missing.join(', ')}`);
  process.exit(1);
}

// Diagnostic: confirm credential shapes (no secret values logged)
console.log(`API Key: ${TWITTER_API_KEY.length} chars, starts with "${TWITTER_API_KEY.slice(0, 4)}..."`);
console.log(`API Secret: ${TWITTER_API_SECRET.length} chars`);
console.log(`Access Token: ${TWITTER_ACCESS_TOKEN.length} chars, starts with "${TWITTER_ACCESS_TOKEN.slice(0, 6)}..."`);
console.log(`Access Secret: ${TWITTER_ACCESS_SECRET.length} chars`);
console.log(`Tweet text: ${tweetText}`);

// Post to Twitter
const client = new TwitterApi({
  appKey: TWITTER_API_KEY,
  appSecret: TWITTER_API_SECRET,
  accessToken: TWITTER_ACCESS_TOKEN,
  accessSecret: TWITTER_ACCESS_SECRET,
});

try {
  const { data: tweet } = await client.v2.tweet(tweetText);

  // Update log
  log.push({
    slug,
    title,
    tweetedAt: new Date().toISOString(),
    tweetId: tweet.id,
    tweetText,
  });
  fs.writeFileSync(TWEET_LOG_PATH, JSON.stringify(log, null, 2) + '\n');
  console.log(`Tweeted: ${tweet.id} -- ${tweetText}`);
} catch (err) {
  console.error(`Failed to tweet for ${slug}`);
  if (err.data) console.error('API response:', JSON.stringify(err.data, null, 2));
  if (err.code) console.error('HTTP status:', err.code);
  if (err.headers?.['x-access-level']) console.error('Access level:', err.headers['x-access-level']);
  process.exit(1);
}
