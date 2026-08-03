# Florida Energy Assistance - Landing Page

Single-page React landing page built with Vite.

## Stack

- React 18
- Vite 5 + **build-time prerendering** (every route ships as static HTML)
- CSS Modules (scoped per component)
- Plain `.js` files (JSX enabled via Vite config)
- Zero-dependency path router (`src/router/`)

## Build output

`npm run build` runs three steps:

1. `build:client` — normal Vite client bundle
2. `build:ssr` — SSR bundle of `src/entry-server.js` into `dist-ssr/`
3. `build:prerender` — `prerender.js` renders every route to
   `dist/<path>/index.html` with per-route `<head>` + JSON-LD, then writes
   `sitemap.xml` and `404.html`

34 pages are produced: home, 3 program pages, 12 county pages and a thank-you
page, in English and Spanish.

**Language lives in the URL** (`/` vs `/es/`), not in localStorage — that is
what makes the Spanish content indexable. Add a route by editing the route
table in `src/router/routes.js`; the sitemap and prerender list read from it,
so they cannot drift apart.

## Brand images

`npm run og` re-renders `public/og-image.png` (1200×630 social card),
`public/logo.png` (Organization JSON-LD) and `public/apple-touch-icon.png`
from the HTML sources in `scripts/`, using local headless Chrome. Edit the
HTML, re-run, commit the PNGs.

See `SEM-SETUP.md` for analytics, conversion tracking, and the remaining
business to-dos.

## Setup

```bash
npm install
npm run dev
```

Open <http://localhost:5173>.

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/
│   ├── icons/          # Inline SVG icon components
│   ├── TopBar/
│   ├── Header/
│   ├── Hero/
│   ├── Programs/
│   │   └── ProgramCard/
│   ├── HowItWorks/
│   │   └── Step/
│   ├── CTA/
│   └── Footer/
├── data/               # Static content (programs, steps, counties, faq)
├── pages/              # Route-level page components
├── router/             # Route table + minimal router
├── i18n/               # en/es dictionaries, URL-driven language context
├── lib/                # site config, seo (head + JSON-LD), attribution, media
├── hooks/              # Custom hooks (useReveal)
├── styles/
│   ├── tokens.css      # Design tokens / CSS variables
│   └── global.css      # Reset + base styles
├── App.js
└── main.js
```

## Design tokens

All colors, fonts, and spacing live in `src/styles/tokens.css`. Edit there to retheme.
