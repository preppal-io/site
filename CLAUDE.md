# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the **PrepPal landing page and blog**, built with **Astro v5**. It's a content-driven site showcasing an emergency preparedness application, with MDX-based blog posts in French.

- **Site URL**: https://preppal.io
- **App URL**: https://app.preppal.io (redirected from /app)
- **Content Language**: French (fr)

## Common Commands

```bash
# Install dependencies
npm install

# Start dev server (runs on localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Astro CLI (for other commands)
npm run astro
```

## Project Structure

```
src/
├── pages/              # Routes (file-based routing)
│   ├── index.astro     # Home page with hero + features
│   └── blog/
│       ├── index.astro # Blog listing page
│       └── [...slug].astro # Dynamic blog post route
├── layouts/            # Page templates
│   └── BlogPost.astro  # Layout for individual blog posts
├── components/         # Reusable Astro components
│   ├── Header.astro    # Fixed navigation header
│   ├── Footer.astro
│   ├── BaseHead.astro  # Common <head> setup
│   ├── HeaderLink.astro # Styled nav link
│   └── FormattedDate.astro # Date formatter
├── content/
│   └── blog/           # Blog post files (markdown/MDX)
│       └── YYYY-MM-*.md
├── styles/
│   └── global.css      # Global styles and CSS variables
├── consts.ts           # Site title and description constants
└── content.config.ts   # Content collection schema (blog frontmatter)
```

## Key Architectural Concepts

### Content Collections

Blog posts are stored as markdown/MDX files in `src/content/blog/`. The collection schema is defined in `src/content.config.ts`:

- **Required frontmatter fields**: `title`, `description`, `pubDate` (auto-converted to Date)
- **Optional fields**: `updatedDate`, `heroImage` (optimized with Sharp)

### Routing

- Home page: `/` (index.astro)
- Blog listing: `/blog/` (blog/index.astro)
- Individual posts: `/blog/[slug]` where slug is the post filename without extension (e.g., `2025-02-post-title.md` → `/blog/2025-02-post-title`)

### Styling

- **Global variables** in `src/styles/global.css`: colors, transitions, button styles, typography
- **Scoped styles** within `.astro` components using `<style>` blocks
- **Mobile-first responsive design** with breakpoint at 768px
- **CSS variables** used throughout:
  - `--primary-color`: #3498db (blue)
  - `--secondary-color`: #2ecc71 (green)
  - `--dark-color`: #2c3e50
  - `--text-color`: #333
  - `--text-light`: #666

### Components Pattern

Components follow a composition pattern:
- `BaseHead` - shared metadata and fonts
- `Header` - sticky navigation (with mobile menu button but menu not fully implemented)
- `Footer` - site footer
- Other components are mostly presentational

### Blog Post Creation

When adding a new blog post:

1. Create `src/content/blog/YYYY-MM-slug.md` (or .mdx)
2. Include required frontmatter at top:
   ```yaml
   ---
   title: "Post Title"
   description: "Short description for metadata"
   pubDate: "Mon DD YYYY"
   heroImage: "../../assets/image-file.jpg"  # Optional
   ---
   ```
3. Content uses standard markdown syntax; the BlogPost layout handles rendering

## Integrations

- **@astrojs/mdx** - Enables MDX support for blog content
- **@astrojs/sitemap** - Auto-generates `sitemap.xml` at build time
- **@astrojs/rss** - Can be configured for RSS feeds (currently set up but not actively used)
- **Sharp** - Image optimization for hero images

## Data and Configuration

- `src/consts.ts` - Exports `SITE_TITLE` and `SITE_DESCRIPTION` (currently in French)
- `astro.config.mjs` - Configure site domain, integrations, and redirects
- `tsconfig.json` - TypeScript configuration for strict type checking

## Static Assets

Public files go in `public/` directory:
- Logo files: `PrepPal.png`, `preppal-logo.png`
- Blog images: stored in `src/assets/` and referenced in frontmatter

## Important Notes

- The site is **fully static** - built at build time with no server-side rendering
- Blog posts are **content-driven** - add new posts by creating markdown files; the route is auto-generated
- The **Home page features section** is hardcoded in `src/pages/index.astro` - modify there to change feature list
- Responsive design uses **CSS Grid and Flexbox**; mobile menu button exists but full mobile nav not implemented
- **No external CMS** - content lives in git alongside code
