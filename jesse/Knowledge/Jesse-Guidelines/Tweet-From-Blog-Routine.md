# Tweet from Blog Routine

## Input

A blog post markdown file with YAML frontmatter containing:

- `title` -- the post title
- `date` -- publication date
- `excerpt` -- a brief human-written summary
- `slug` -- URL-friendly identifier
- `tweet` (optional) -- a custom tweet hook. When present, the script uses this verbatim (+ URL) instead of building a tweet from title/excerpt. Use this to write sharper, hand-crafted hooks that match the voice guidelines.

## Output

A single tweet (not a thread) containing:

1. A hook derived from the title and excerpt. Do not copy them verbatim -- rephrase for a conversational tone.
2. The blog post URL: `https://jacquesjean.info/writing/{slug}`
3. No hashtags unless directly relevant to the topic. Avoid looking like marketing spam.
4. Must be under 280 characters total.

## Template Fallback

If no AI rewriting is available, use this heuristic:

- Primary: `{title}\n\n{excerpt}\n\n{url}`
- If over 280 chars: `{title} -- {excerpt} {url}` (single line)
- If still over 280 chars: truncate excerpt with `...` to fit

## Dedup Rule

Never tweet the same slug twice. Before posting, check `jesse/Projects/drafts/tweet-log.json`. If the slug exists in the log, skip it.

## Tone

Follow the guidelines in `Writing-Voice-Guidelines.md`. The tweet should sound like something a person would actually type, not something an AI generated.
