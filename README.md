# Smartiz — Creative Design Studio

> A polished, media-rich portfolio website for **Smartiz**, a creative design studio focused on visual storytelling.

[![Live Demo](https://img.shields.io/badge/Live-Demo-3b82f6?style=for-the-badge)](#deployment)
[![Vanilla JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-f7df1e?style=for-the-badge&logo=javascript&logoColor=111827)](#tech-stack)
[![Responsive](https://img.shields.io/badge/Layout-Responsive-22d3ee?style=for-the-badge)](#features)

Smartiz is a fast, elegant, dependency-free portfolio experience for showcasing book covers, editorial layouts, motion graphics, and poster artwork. The interface combines a dark navy visual system with electric-blue accents, fluid transitions, responsive layouts, and folder-driven galleries.

## Preview

![Smartiz logo](logo.png)

## Features

- Single-page application with hash-based routing
- Distinct home, portfolio, gallery, and contact views
- Four media collections out of the box:
  - Cover Design
  - Layout & Editorial
  - Motion Design
  - Poster Art
- Image and video galleries with lazy loading
- Full-screen lightbox with previous/next navigation
- Keyboard support for gallery items and lightbox controls
- Responsive navigation with mobile menu
- Scroll-reveal animations and page transitions
- Sticky navigation with back-to-top control
- Inline SVG icon system with no external icon dependency
- Folder-driven media loading that automatically scales with new work
- Static hosting support for GitHub Pages
- Optional Node.js server with media-listing API and HTTP range requests for video seeking

## Tech Stack

- HTML5
- CSS3 with custom design tokens, gradients, animations, and responsive breakpoints
- Vanilla JavaScript (ES6+)
- Node.js built-in `http`, `fs`, and `path` modules for local development
- Google Fonts: Sora and Inter

No framework, bundler, database, or package installation is required.

## Project Structure

```text
.
├── index.html          # Application shell
├── app.js              # SPA rendering, routing, galleries, lightbox, interactions
├── config.js           # Brand copy, services, stats, pages, and contact details
├── styles.css          # Complete visual system and responsive styling
├── server.js           # Optional local Node.js server
├── logo.png            # Brand mark and favicon
├── media/
│   ├── cover.json      # Static asset manifest for GitHub Pages
│   ├── lay.json
│   ├── motions.json
│   └── poster.json
├── cover/              # Book cover artwork
├── lay/                # Editorial layout artwork
├── motions/            # Motion design videos
└── poster/             # Poster artwork
```

## Quick Start

### Option 1: Run with Node.js

```bash
node server.js
```

Open `http://localhost:2999` in your browser.

The server serves the website and exposes media through:

```text
GET /api/media/cover
GET /api/media/lay
GET /api/media/motions
GET /api/media/poster
```

### Option 2: Use a static server

Because the project has no build step, it can be served by any static web server. For example:

```bash
npx serve .
```

Opening `index.html` directly may work for the shell, but a local server is recommended because browsers can restrict `fetch()` requests from `file://` URLs.

## Customization

Most content can be changed from one place: [`config.js`](config.js).

You can update:

- Studio name, tagline, logo, and hero copy
- About section and services
- Portfolio categories and descriptions
- Stats shown on the home page
- Contact channels and social links
- Footer copy and copyright text

The rendering logic lives in `app.js`, while all colors, spacing, typography, animations, and responsive behavior are defined in `styles.css`.

## Adding New Portfolio Work

1. Add the new image or video to the matching folder.
2. For GitHub Pages, add its public path to the matching manifest in `media/`:

   ```json
   [
     "cover/v(1).jpg",
     "cover/v(2).jpg",
     "cover/new-project.jpg"
   ]
   ```

3. For local development with `server.js`, the folder API discovers supported files automatically.

Supported formats:

- Images: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`
- Motion: `.mp4`, `.webm`, `.mov`

## Deployment

### GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Choose the publishing branch and the repository root (`/`).
5. Save and wait for GitHub Pages to publish the site.

The checked-in JSON manifests in `media/` allow the galleries to work on static hosting without a backend.

### Other hosting providers

The project can also be deployed directly to Netlify, Vercel, Cloudflare Pages, or any static file host. Upload the repository as-is; no build command is needed.

## Design Direction

Smartiz uses a carefully tuned dark visual language:

- Deep navy surfaces for focus and contrast
- Electric blue, cyan, and indigo accent gradients
- Sora for expressive headings and Inter for readable body copy
- Glass-inspired navigation and cards
- Subtle ambient blobs, dot-grid texture, and motion-led transitions

## Accessibility & UX

- Semantic navigation and heading structure
- Descriptive image `alt` text
- Keyboard-operable gallery cards
- Visible, labeled controls for the lightbox
- Responsive layout for desktop, tablet, and mobile
- Reduced reliance on large framework bundles for fast initial loading

## Browser Support

The site targets modern browsers with support for ES6 modules/features, `fetch`, `IntersectionObserver`, CSS gradients, and `backdrop-filter`. Current versions of Chrome, Edge, Firefox, and Safari are recommended.

## License

This repository does not currently include a license file. Unless a license is added, all source code, visual assets, and portfolio artwork remain the property of their respective owners.

## Contact

For project inquiries, use the contact details configured in `config.js`, or visit the contact page inside the website.

