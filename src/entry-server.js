import { renderToString } from 'react-dom/server';
import App from './App.js';
import { buildHead } from './lib/seo.js';
import { resolveRoute, allRoutes } from './router/routes.js';
import { HERO_IMAGE } from './lib/media.js';

/**
 * SSR entry used only at build time by prerender.js.
 * Nothing here runs in the browser.
 */
export function render(path) {
  const route = resolveRoute(path);
  const html = renderToString(<App initialPath={path} />);
  const head = buildHead(route);
  return { html, head, route };
}

export { allRoutes, HERO_IMAGE };
export { SITE, SITE_URL } from './lib/site.js';
