# jacquesjean.info

Personal website and blog for Jacques Jean. Built with React, TypeScript, and Vite.

## Tech Stack

- **React 18** + TypeScript
- **Vite** for fast builds
- **Styled Components** for styling
- **React Router** for client-side routing
- **React Helmet Async** for SEO meta tags
- **Markdown** blog posts with gray-matter and remark

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── content/posts/     # Markdown blog posts
├── public/            # Static assets
├── scripts/           # Build scripts
└── src/
    ├── components/    # React components
    ├── data/          # Generated posts.json
    └── pages/         # Page components
```

## Adding Blog Posts

Create a new `.md` file in `content/posts/`:

```markdown
---
title: "Post Title"
date: "2024-01-15"
excerpt: "Brief description of the post."
slug: "url-friendly-slug"
---

Your markdown content here...
```

Run `npm run build:posts` to regenerate the posts data.

## Deployment

Configured for Firebase Hosting:

```bash
npm run deploy
```

## License

MIT
