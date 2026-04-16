# jacquesjean.info

Personal portfolio and blog for Jacques Jean — building systems in energy and water. Based in Austin, Texas.

## Tech Stack

- **React 18** + TypeScript
- **Vite** for development and builds
- **styled-components** for styling
- **React Router** for client-side routing
- **React Helmet Async** for SEO meta tags
- **Markdown** blog posts processed with gray-matter and remark

## Getting Started

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
├── content/posts/        # Markdown blog posts
├── public/               # Static assets (images, favicons, OG images)
│   └── ventures/         # OG images for current ventures
├── scripts/              # Build scripts (posts processing)
└── src/
    ├── components/       # Reusable components and styled-components
    │   ├── GlobalStyles.tsx
    │   ├── HomeStyles.tsx
    │   ├── LibraryStyles.tsx
    │   ├── BlogStyles.tsx
    │   ├── SEO.tsx
    │   └── Globe.tsx
    ├── data/             # Generated posts.json
    └── pages/            # Page components (Home, Library, Writing, Article)
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

Deployed via Firebase Hosting:

```bash
npm run deploy
```

## License

MIT
