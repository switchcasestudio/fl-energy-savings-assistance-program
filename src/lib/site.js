/**
 * Single source of truth for the site's canonical identity and URL structure.
 *
 * Everything SEO-related (canonical tags, hreflang, sitemap, JSON-LD, OG tags)
 * derives from this file. Changing the production domain is a one-line edit here.
 */

export const SITE_URL = 'https://floridaenergyassistance.com';

export const SITE = {
  name: 'Florida Energy Assistance',
  legalName: 'Florida Energy Assistance',
  phoneDisplay: '866-627-9518',
  phoneE164: '+18666279518',
  phoneHref: 'tel:+18666279518',
  email: '',
  hoursText: 'Mon–Fri, 9 AM – 6 PM ET',
  // schema.org openingHours shorthand
  hoursSpec: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
  areaServed: 'Florida',
  ogImage: '/og-image.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterHandle: '',
  themeColor: '#0a2540',
  foundingYear: 2024,
};

export const LANGS = ['en', 'es'];
export const DEFAULT_LANG = 'en';

/** Absolute URL from a site-relative path. */
export function absUrl(path) {
  if (!path) return SITE_URL + '/';
  if (path.startsWith('http')) return path;
  return SITE_URL + (path.startsWith('/') ? path : '/' + path);
}

/* ------------------------------------------------------------------ *
 * Programs
 *
 * NOTE: slugs are keyword-bearing on purpose — "Program One" has zero
 * search volume. Replace titles/slugs here if the real program names
 * differ; every page, sitemap entry and schema block reads from this.
 * ------------------------------------------------------------------ */

export const PROGRAM_SLUGS = {
  1: { en: 'essential-home-energy-upgrade', es: 'mejoras-energeticas-esenciales' },
  2: { en: 'whole-home-energy-upgrade', es: 'mejoras-energeticas-hogar-completo' },
  3: { en: 'premium-home-energy-upgrade', es: 'mejoras-energeticas-premium' },
};

/* ------------------------------------------------------------------ *
 * Path builders — the ONLY place URL shapes are defined.
 * ------------------------------------------------------------------ */

/**
 * Date shown on the privacy policy and terms. Update whenever either
 * document's substance changes — a stale "last updated" on a policy that has
 * actually changed is worse than no date.
 */
export const LEGAL_UPDATED = '2026-08-03';

const SEGMENT = {
  en: { programs: 'programs', counties: 'florida', thanks: 'thank-you', privacy: 'privacy', terms: 'terms' },
  es: { programs: 'programas', counties: 'florida', thanks: 'gracias', privacy: 'privacidad', terms: 'terminos' },
};

export function homePath(lang) {
  return lang === 'es' ? '/es/' : '/';
}

export function programPath(lang, id) {
  const slug = PROGRAM_SLUGS[id][lang];
  return lang === 'es'
    ? `/es/${SEGMENT.es.programs}/${slug}/`
    : `/${SEGMENT.en.programs}/${slug}/`;
}

export function countyPath(lang, county) {
  const slug = county.slug[lang];
  return lang === 'es'
    ? `/es/${SEGMENT.es.counties}/${slug}/`
    : `/${SEGMENT.en.counties}/${slug}/`;
}

export function thanksPath(lang) {
  return lang === 'es' ? `/es/${SEGMENT.es.thanks}/` : `/${SEGMENT.en.thanks}/`;
}

export function privacyPath(lang) {
  return lang === 'es' ? `/es/${SEGMENT.es.privacy}/` : `/${SEGMENT.en.privacy}/`;
}

export function termsPath(lang) {
  return lang === 'es' ? `/es/${SEGMENT.es.terms}/` : `/${SEGMENT.en.terms}/`;
}

export { SEGMENT };
