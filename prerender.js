/**
 * Build-time static site generation.
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle).
 * For every route in the route table it renders the React tree to HTML,
 * writes the per-route <head>, and emits dist/<path>/index.html.
 *
 * Why this exists: the site was a client-rendered SPA, so the HTML served to
 * a crawler was an empty <div id="root">. Googlebot can execute JS and would
 * eventually see the content; GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot
 * and Bingbot's non-JS path cannot and never would. Prerendering is the
 * difference between being citable by AI answer engines and being invisible.
 *
 * Also emits sitemap.xml (from the same route table, so they cannot drift)
 * and 404.html.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');
const SSR_ENTRY = path.join(__dirname, 'dist-ssr', 'entry-server.js');

const { render, allRoutes, HERO_IMAGE, SITE, SITE_URL } = await import(SSR_ENTRY);

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** JSON-LD must not be able to break out of the <script> element. */
const safeJsonLd = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

function headTags(head) {
  const tags = [];

  tags.push(`<title>${escapeHtml(head.title)}</title>`);
  tags.push(`<meta name="description" content="${escapeHtml(head.description)}" />`);
  tags.push(`<meta name="robots" content="${head.robots}" />`);
  tags.push(`<link rel="canonical" href="${head.canonical}" />`);

  head.alternates.forEach((alt) => {
    tags.push(`<link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`);
  });

  // Open Graph
  tags.push(`<meta property="og:type" content="${head.ogType}" />`);
  tags.push(`<meta property="og:site_name" content="${escapeHtml(SITE.name)}" />`);
  tags.push(`<meta property="og:title" content="${escapeHtml(head.title)}" />`);
  tags.push(`<meta property="og:description" content="${escapeHtml(head.description)}" />`);
  tags.push(`<meta property="og:url" content="${head.canonical}" />`);
  tags.push(`<meta property="og:image" content="${head.ogImage}" />`);
  tags.push(`<meta property="og:image:width" content="${SITE.ogImageWidth}" />`);
  tags.push(`<meta property="og:image:height" content="${SITE.ogImageHeight}" />`);
  tags.push(`<meta property="og:image:alt" content="${escapeHtml(head.title)}" />`);
  tags.push(`<meta property="og:locale" content="${head.lang === 'es' ? 'es_US' : 'en_US'}" />`);
  tags.push(
    `<meta property="og:locale:alternate" content="${head.lang === 'es' ? 'en_US' : 'es_US'}" />`
  );

  // Twitter / X
  tags.push(`<meta name="twitter:card" content="summary_large_image" />`);
  tags.push(`<meta name="twitter:title" content="${escapeHtml(head.title)}" />`);
  tags.push(`<meta name="twitter:description" content="${escapeHtml(head.description)}" />`);
  tags.push(`<meta name="twitter:image" content="${head.ogImage}" />`);
  if (SITE.twitterHandle) {
    tags.push(`<meta name="twitter:site" content="${SITE.twitterHandle}" />`);
  }

  if (head.jsonLd.length) {
    tags.push(
      `<script type="application/ld+json" data-seo-jsonld>${safeJsonLd({
        '@context': 'https://schema.org',
        '@graph': head.jsonLd,
      })}</script>`
    );
  }

  return tags.map((t) => '    ' + t).join('\n');
}

/**
 * Preload the LCP image so the fetch starts before the bundle is parsed.
 *
 * One preload per orientation, each gated by the same media query the
 * <picture> uses — without `media` the browser would preload both crops and
 * throw one away. `type` keeps browsers without WebP support from preloading
 * a file they cannot decode; they fall back to the <picture> JPEG sources.
 */
function preloadTags(isHome) {
  if (!isHome) return '';
  const out = [HERO_IMAGE.portrait, HERO_IMAGE.landscape].map(
    (v) =>
      `    <link rel="preload" as="image" type="image/webp" media="${v.media}" imagesrcset="${v.webp}" imagesizes="${v.sizes}" fetchpriority="high" />`
  );
  return '\n' + out.join('\n');
}

function outFileFor(routePath) {
  const clean = routePath.replace(/^\/|\/$/g, '');
  return clean ? path.join(DIST, clean, 'index.html') : path.join(DIST, 'index.html');
}

function buildSitemap(routes) {
  const entries = routes
    .filter((r) => !r.noindex)
    .map((r) => {
      const loc = SITE_URL + r.path;
      // Self-referencing + alternate hreflang inside the sitemap. Google reads
      // these, and it is the only place x-default can be declared for a URL
      // that has no <head> alternate (there are none here, but it keeps the
      // two sources consistent).
      const alts = routes
        .filter((o) => !o.noindex && o.group === r.group)
        .map(
          (o) =>
            `    <xhtml:link rel="alternate" hreflang="${o.lang === 'es' ? 'es-US' : 'en-US'}" href="${SITE_URL + o.path}" />`
        )
        .join('\n');

      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        alts,
        `    <changefreq>${r.changefreq}</changefreq>`,
        `    <priority>${r.priority.toFixed(1)}</priority>`,
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n');
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`;
}

async function main() {
  const template = await fs.readFile(path.join(DIST, 'index.html'), 'utf-8');

  if (!template.includes('<!--seo-head-start-->')) {
    throw new Error('index.html is missing the <!--seo-head-start--> marker — cannot inject head tags.');
  }
  if (!template.includes('<div id="root"></div>')) {
    throw new Error('index.html is missing <div id="root"></div> — cannot inject rendered markup.');
  }

  const routes = allRoutes();

  // Pair each EN route with its ES counterpart for sitemap hreflang.
  // Slugs differ per language (`/programs/premium-...` vs `/es/programas/...`),
  // so pairing has to be positional — allRoutes() emits both languages in the
  // same order, which is the invariant this relies on.
  const en = routes.filter((r) => r.lang === 'en');
  const es = routes.filter((r) => r.lang === 'es');
  en.forEach((r, i) => {
    r.group = `g${i}`;
    if (es[i]) es[i].group = `g${i}`;
  });

  let count = 0;
  for (const route of routes) {
    const { html, head } = render(route.path);

    const injected = template
      .replace(
        /<!--seo-head-start-->[\s\S]*?<!--seo-head-end-->/,
        `<!--seo-head-start-->\n${headTags(head)}\n    <!--seo-head-end-->`
      )
      .replace('</head>', `${preloadTags(route.path === '/' || route.path === '/es/')}\n  </head>`)
      .replace('<html lang="en">', `<html lang="${head.lang === 'es' ? 'es' : 'en'}">`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    const file = outFileFor(route.path);
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, injected, 'utf-8');
    count += 1;
  }

  // 404 page — Netlify serves dist/404.html for unmatched paths
  const { html: nfHtml, head: nfHead } = render('/__not_found__/');
  await fs.writeFile(
    path.join(DIST, '404.html'),
    template
      .replace(
        /<!--seo-head-start-->[\s\S]*?<!--seo-head-end-->/,
        `<!--seo-head-start-->\n${headTags(nfHead)}\n    <!--seo-head-end-->`
      )
      .replace('<div id="root"></div>', `<div id="root">${nfHtml}</div>`),
    'utf-8'
  );

  await fs.writeFile(path.join(DIST, 'sitemap.xml'), buildSitemap(routes), 'utf-8');

  console.log(`✓ prerendered ${count} pages + 404.html`);
  console.log(`✓ sitemap.xml with ${routes.filter((r) => !r.noindex).length} URLs`);
}

await main();
