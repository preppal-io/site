# PrepPal Site

Official landing page and blog for PrepPal at [preppal.io](https://preppal.io)

## About

This is the website for PrepPal, an emergency stock management application. The site showcases the app's features and provides a blog for emergency preparedness tips.

PrepPal helps users manage their emergency supplies with features like offline support, expiration tracking, shopping list generation, and integration with Swiss emergency preparedness standards.

## Tech Stack

- **Framework**: [Astro](https://astro.build) v5
- **Content**: MDX for blog posts
- **Integrations**:
  - `@astrojs/mdx` - MDX support for blog content
  - `@astrojs/sitemap` - Automatic sitemap generation
  - `@astrojs/rss` - RSS feed for blog
- **Image Optimization**: Sharp

## Project Structure

```
prep-pal-site/
├── public/              # Static assets (logo, images)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/
│   │   └── blog/        # Blog posts (MDX/Markdown)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Routes (index, blog, etc.)
│   └── consts.ts        # Site constants
├── astro.config.mjs     # Astro configuration
└── package.json
```

## Development

All commands run from the project root:

```bash
# Install dependencies
npm install

# Start dev server at localhost:4321
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Content Management

### Adding Blog Posts

Create new `.md` or `.mdx` files in `src/content/blog/`:

```markdown
---
title: "Post Title"
description: "Post description"
pubDate: "Jan 01 2025"
heroImage: "../../assets/image.jpg"
---

Your content here...
```

### Site Configuration

Edit `astro.config.mjs` to configure:
- Site URL
- Integrations
- Redirects

## License

See [LICENSE](LICENSE) in the main repository.
