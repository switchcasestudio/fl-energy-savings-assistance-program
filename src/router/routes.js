/**
 * Route table + resolver. Pure functions only — imported by both the browser
 * bundle and the prerender script, so nothing here may touch `window`.
 *
 * Every route knows its counterpart in the other language, which is what makes
 * correct hreflang annotation possible. A route with no counterpart returns
 * `altPath: null` and gets no alternate tag rather than a wrong one.
 */

import { counties } from '../data/counties.js';
import { programs } from '../data/programs.js';
import { PROGRAM_SLUGS, homePath, programPath, countyPath, thanksPath } from '../lib/site.js';

export const PAGE = {
  HOME: 'home',
  PROGRAM: 'program',
  COUNTY: 'county',
  THANKS: 'thanks',
  NOT_FOUND: 'notFound',
};

/** Normalize to a leading-and-trailing-slash form: "/a/b/" */
export function normalizePath(pathname) {
  let p = (pathname || '/').split('?')[0].split('#')[0];
  if (!p.startsWith('/')) p = '/' + p;
  if (!p.endsWith('/')) p += '/';
  return p.replace(/\/{2,}/g, '/');
}

/**
 * @returns {{page: string, lang: 'en'|'es', params: object, path: string, altPath: string|null}}
 */
export function resolveRoute(pathname) {
  const path = normalizePath(pathname);
  const segments = path.split('/').filter(Boolean);

  const lang = segments[0] === 'es' ? 'es' : 'en';
  const rest = lang === 'es' ? segments.slice(1) : segments;
  const other = lang === 'es' ? 'en' : 'es';

  // Home
  if (rest.length === 0) {
    return { page: PAGE.HOME, lang, params: {}, path, altPath: homePath(other) };
  }

  // Programs
  const programSeg = lang === 'es' ? 'programas' : 'programs';
  if (rest[0] === programSeg && rest.length === 2) {
    const slug = rest[1];
    const entry = Object.entries(PROGRAM_SLUGS).find(([, s]) => s[lang] === slug);
    if (entry) {
      const id = Number(entry[0]);
      return {
        page: PAGE.PROGRAM,
        lang,
        params: { id },
        path,
        altPath: programPath(other, id),
      };
    }
  }

  // Counties
  if (rest[0] === 'florida' && rest.length === 2) {
    const county = counties.find((c) => c.slug[lang] === rest[1]);
    if (county) {
      return {
        page: PAGE.COUNTY,
        lang,
        params: { countyId: county.id },
        path,
        altPath: countyPath(other, county),
      };
    }
  }

  // Thank-you
  if (rest.length === 1 && rest[0] === (lang === 'es' ? 'gracias' : 'thank-you')) {
    return { page: PAGE.THANKS, lang, params: {}, path, altPath: thanksPath(other) };
  }

  return { page: PAGE.NOT_FOUND, lang, params: {}, path, altPath: null };
}

/** Every URL the site should prerender and list in the sitemap. */
export function allRoutes() {
  const out = [];
  for (const lang of ['en', 'es']) {
    out.push({ path: homePath(lang), lang, priority: 1.0, changefreq: 'weekly' });

    for (const p of programs[lang]) {
      out.push({ path: programPath(lang, p.id), lang, priority: 0.9, changefreq: 'monthly' });
    }

    for (const c of counties) {
      out.push({ path: countyPath(lang, c), lang, priority: 0.7, changefreq: 'monthly' });
    }

    // Prerendered so the conversion page is a real URL, but noindex'd —
    // see seo.js. Excluded from the sitemap by the `noindex` flag.
    out.push({ path: thanksPath(lang), lang, priority: 0.1, changefreq: 'yearly', noindex: true });
  }
  return out;
}
