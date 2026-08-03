import { useEffect } from 'react';
import { buildHead } from '../../lib/seo.js';

/**
 * Keeps <head> correct after a client-side navigation.
 *
 * On first load the head is already correct — the prerender script wrote it
 * into the static HTML, which is what crawlers and AI bots read. This
 * component only matters once the user starts navigating in-app.
 */

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

function upsertLink(rel, attrs, key) {
  const sel = key ? `link[rel="${rel}"][${key}="${attrs[key]}"]` : `link[rel="${rel}"]`;
  let el = document.head.querySelector(sel);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

function Head({ route }) {
  useEffect(() => {
    const head = buildHead(route);

    document.title = head.title;
    document.documentElement.lang = head.lang;

    upsertMeta('meta[name="description"]', { name: 'description', content: head.description });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: head.robots });

    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: head.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: head.description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: head.canonical });
    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: head.lang === 'es' ? 'es_US' : 'en_US',
    });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: head.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: head.description });

    upsertLink('canonical', { href: head.canonical });

    // Alternates change per route — replace wholesale rather than patch
    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    head.alternates.forEach((alt) => {
      const el = document.createElement('link');
      el.setAttribute('rel', 'alternate');
      el.setAttribute('hreflang', alt.hreflang);
      el.setAttribute('href', alt.href);
      document.head.appendChild(el);
    });

    const existing = document.head.querySelector('script[data-seo-jsonld]');
    if (existing) existing.remove();
    if (head.jsonLd.length) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', '');
      script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': head.jsonLd });
      document.head.appendChild(script);
    }
  }, [route]);

  return null;
}

export default Head;
