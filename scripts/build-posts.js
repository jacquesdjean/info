import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'content/posts');
const outputPath = path.join(process.cwd(), 'src/data/posts.json');

async function buildPosts() {
  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Check if posts directory exists
  if (!fs.existsSync(postsDir)) {
    console.log('No posts directory found, creating empty posts.json');
    fs.writeFileSync(outputPath, JSON.stringify([], null, 2));
    return;
  }

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'));

  if (files.length === 0) {
    console.log('No markdown files found, creating empty posts.json');
    fs.writeFileSync(outputPath, JSON.stringify([], null, 2));
    return;
  }

  const posts = await Promise.all(
    files.map(async (filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      const processedContent = await remark().use(html).process(content);
      const contentHtml = processedContent.toString();

      // Calculate reading time (~200 words per minute)
      const wordCount = content.split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / 200);

      return {
        slug: data.slug || filename.replace('.md', ''),
        title: data.title,
        date: data.date,
        excerpt: data.excerpt || content.slice(0, 150).replace(/\n/g, ' ').trim() + '...',
        content: contentHtml,
        readingTime: readingTime || 1,
      };
    })
  );

  // Sort by date, newest first
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2));
  console.log(`Built ${posts.length} posts to ${outputPath}`);
}

buildPosts().catch(console.error);
