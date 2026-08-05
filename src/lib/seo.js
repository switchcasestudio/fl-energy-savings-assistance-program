/**
 * Per-route head metadata + JSON-LD.
 *
 * Pure functions — consumed by the prerender script to write real <head>
 * tags into static HTML, and by the client to keep the head correct after
 * a client-side navigation.
 *
 * Design note: the JSON-LD is emitted as a single @graph with stable @ids
 * rather than several disconnected blocks. Disconnected blocks force search
 * engines and AI crawlers to guess that "the Organization on page A" and
 * "the provider on page B" are the same entity. A graph states it.
 */

import { SITE, SITE_URL, absUrl, homePath, programPath, countyPath } from './site.js';
import { programs } from '../data/programs.js';
import { counties, findCountyById } from '../data/counties.js';
import { faq } from '../data/faq.js';
import { steps } from '../data/steps.js';
import { PAGE } from '../router/routes.js';

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

const META = {
  en: {
    home: {
      title: 'Florida Home Energy Programs | $0 Down, Grants to $8,000',
      description:
        'Three home energy upgrade programs for Florida homeowners. $0 down, 100% financing, and grants up to $8,000 for solar, HVAC, windows, and insulation.',
      h1: 'Florida home energy upgrade programs',
    },
    program: {
      titleTpl: (p) => `${p.title} | Up to ${p.funding}, $0 Down`,
      descTpl: (p) =>
        `${p.title}: up to ${p.funding} financing and ${p.grant} in grants for Florida homeowners. $0 down, first payment after ${p.deferMonths} months.`,
    },
    county: {
      titleTpl: (c) => `Home Energy Programs in ${c.name.en}, FL | $0 Down`,
      descTpl: (c) =>
        `${c.name.en} home energy programs: $0 down, 100% financing, grants to $8,000 for solar, HVAC, windows, insulation. Serving ${c.cities.slice(0, 2).join(', ')}.`,
    },
    thanks: {
      title: 'Application received | Florida Energy Assistance',
      description: 'Your eligibility check was received. A program specialist will reach out within one business day.',
    },
    privacy: {
      title: 'Privacy Policy | Florida Energy Assistance',
      description:
        'What Florida Energy Assistance collects, how we use it, who we share it with, and how to exercise your privacy rights under the Florida Digital Bill of Rights.',
    },
    terms: {
      title: 'Terms of Service | Florida Energy Assistance',
      description:
        'Terms governing use of floridaenergyassistance.com: eligibility, what we do and do not provide, consent to be contacted, and limitations of liability.',
    },
    notFound: {
      title: 'Page not found | Florida Energy Assistance',
      description: 'The page you were looking for does not exist.',
    },
  },
  es: {
    home: {
      title: 'Programas de Energía para el Hogar en Florida | $0 Inicial',
      description:
        'Tres programas de mejoras energéticas para propietarios en Florida. $0 de pago inicial, financiamiento del 100% y subvenciones de hasta $8,000.',
      h1: 'Programas de mejoras energéticas para el hogar en Florida',
    },
    program: {
      titleTpl: (p) => `${p.title} | Hasta ${p.funding}, $0 Inicial`,
      descTpl: (p) =>
        `${p.title}: hasta ${p.funding} de financiamiento y ${p.grant} en subvenciones. $0 inicial, primer pago después de ${p.deferMonths} meses.`,
    },
    county: {
      titleTpl: (c) => `Programas de Energía en ${c.name.es}, FL | $0 Inicial`,
      descTpl: (c) =>
        `Programas de energía en ${c.name.es}: $0 inicial, financiamiento del 100% y subvenciones de hasta $8,000. Servicio en ${c.cities.slice(0, 2).join(', ')}.`,
    },
    thanks: {
      title: 'Solicitud recibida | Florida Energy Assistance',
      description: 'Recibimos su verificación de elegibilidad. Un especialista se comunicará dentro de un día hábil.',
    },
    privacy: {
      title: 'Política de Privacidad | Florida Energy Assistance',
      description:
        'Qué información recopila Florida Energy Assistance, cómo la usamos, con quién la compartimos y cómo ejercer sus derechos de privacidad en Florida.',
    },
    terms: {
      title: 'Términos de Servicio | Florida Energy Assistance',
      description:
        'Términos que rigen el uso de floridaenergyassistance.com: elegibilidad, qué ofrecemos y qué no, consentimiento para ser contactado y límites de responsabilidad.',
    },
    notFound: {
      title: 'Página no encontrada | Florida Energy Assistance',
      description: 'La página que buscaba no existe.',
    },
  },
};

/* ------------------------------------------------------------------ *
 * Shared entity nodes
 * ------------------------------------------------------------------ */

function organizationNode(lang) {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE_URL + '/',
    logo: {
      '@type': 'ImageObject',
      url: absUrl('/logo.png'),
    },
    image: absUrl(SITE.ogImage),
    telephone: SITE.phoneE164,
    areaServed: {
      '@type': 'State',
      name: 'Florida',
      alternateName: 'FL',
    },
    knowsLanguage: ['en-US', 'es-US'],
    // Typed as a private Organization, not GovernmentOrganization. If the
    // business does hold a formal state authorization, add it here as an
    // `award` or `hasCredential` node with the issuing body named.
    description:
      lang === 'es'
        ? 'Empresa privada que ayuda a propietarios de vivienda en Florida a acceder a programas de financiamiento y subvenciones para mejoras energéticas del hogar.'
        : 'Private company helping Florida homeowners access home energy upgrade financing and grant programs.',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE.phoneE164,
        contactType: 'customer service',
        areaServed: 'US-FL',
        availableLanguage: ['English', 'Spanish'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: SITE.hoursSpec.days,
          opens: SITE.hoursSpec.opens,
          closes: SITE.hoursSpec.closes,
        },
      },
    ],
  };
}

function websiteNode(lang) {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: SITE_URL + '/',
    name: SITE.name,
    publisher: { '@id': ORG_ID },
    inLanguage: lang === 'es' ? 'es-US' : 'en-US',
  };
}

function webPageNode({ url, title, description, lang, breadcrumbId }) {
  const node = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: lang === 'es' ? 'es-US' : 'en-US',
  };
  if (breadcrumbId) node.breadcrumb = { '@id': breadcrumbId };
  return node;
}

function serviceNode(p, lang) {
  const url = absUrl(programPath(lang, p.id));
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: p.title,
    description: p.description,
    url,
    serviceType: lang === 'es' ? 'Financiamiento de mejoras energéticas del hogar' : 'Home energy upgrade financing',
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'State', name: 'Florida' },
    audience: {
      '@type': 'Audience',
      audienceType: lang === 'es' ? 'Propietarios de vivienda en Florida' : 'Florida homeowners',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: 0,
        maxPrice: p.fundingValue,
        priceCurrency: 'USD',
        valueAddedTaxIncluded: false,
      },
      eligibleRegion: { '@type': 'State', name: 'Florida' },
    },
  };
}

function breadcrumbNode(items, url) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  };
}

function faqNode(lang, url) {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faq[lang].map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

function howToNode(lang, url) {
  return {
    '@type': 'HowTo',
    '@id': `${url}#howto`,
    name:
      lang === 'es'
        ? 'Cómo solicitar un programa de mejoras energéticas en Florida'
        : 'How to apply for a Florida home energy upgrade program',
    description:
      lang === 'es'
        ? 'Cuatro pasos para verificar la elegibilidad y comenzar un proyecto de mejoras energéticas del hogar en Florida.'
        : 'Four steps to check eligibility and start a Florida home energy upgrade project.',
    totalTime: 'P1D',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: 0 },
    step: steps[lang].map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.body,
      url: `${url}#how`,
    })),
  };
}

/* ------------------------------------------------------------------ *
 * Main entry
 * ------------------------------------------------------------------ */

/**
 * @param {{page: string, lang: string, params: object, path: string, altPath: string|null}} route
 * @returns {{title, description, canonical, alternates, robots, ogType, ogImage, jsonLd, lang}}
 */
export function buildHead(route) {
  const { page, lang, params, path, altPath } = route;
  const url = absUrl(path);
  const m = META[lang];

  const base = {
    lang,
    canonical: url,
    ogType: 'website',
    ogImage: absUrl(SITE.ogImage),
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    alternates: altPath
      ? [
          { hreflang: lang === 'en' ? 'en-US' : 'es-US', href: url },
          { hreflang: lang === 'en' ? 'es-US' : 'en-US', href: absUrl(altPath) },
          { hreflang: 'x-default', href: absUrl(lang === 'en' ? path : altPath) },
        ]
      : [],
  };

  const graph = [organizationNode(lang), websiteNode(lang)];

  if (page === PAGE.HOME) {
    graph.push(webPageNode({ url, title: m.home.title, description: m.home.description, lang }));
    graph.push(...programs[lang].map((p) => serviceNode(p, lang)));
    graph.push(howToNode(lang, url));
    graph.push(faqNode(lang, url));
    return { ...base, title: m.home.title, description: m.home.description, jsonLd: graph };
  }

  if (page === PAGE.PROGRAM) {
    const p = programs[lang].find((x) => x.id === params.id);
    const title = m.program.titleTpl(p);
    const description = m.program.descTpl(p);
    const crumbs = breadcrumbNode(
      [
        { name: lang === 'es' ? 'Inicio' : 'Home', path: homePath(lang) },
        { name: p.title, path: programPath(lang, p.id) },
      ],
      url
    );
    graph.push(crumbs);
    graph.push(webPageNode({ url, title, description, lang, breadcrumbId: crumbs['@id'] }));
    graph.push(serviceNode(p, lang));
    return { ...base, title, description, jsonLd: graph };
  }

  if (page === PAGE.COUNTY) {
    const c = findCountyById(params.countyId);
    const title = m.county.titleTpl(c);
    const description = m.county.descTpl(c);
    const crumbs = breadcrumbNode(
      [
        { name: lang === 'es' ? 'Inicio' : 'Home', path: homePath(lang) },
        { name: c.name[lang], path: countyPath(lang, c) },
      ],
      url
    );
    graph.push(crumbs);
    graph.push(webPageNode({ url, title, description, lang, breadcrumbId: crumbs['@id'] }));
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: title,
      description,
      url,
      provider: { '@id': ORG_ID },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: c.name.en,
        containedInPlace: { '@type': 'State', name: 'Florida' },
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: lang === 'es' ? 'Programas disponibles' : 'Available programs',
        itemListElement: programs[lang].map((p) => ({
          '@type': 'Offer',
          itemOffered: { '@id': `${absUrl(programPath(lang, p.id))}#service` },
        })),
      },
    });
    return { ...base, title, description, jsonLd: graph };
  }

  if (page === PAGE.PRIVACY || page === PAGE.TERMS) {
    const key = page === PAGE.PRIVACY ? 'privacy' : 'terms';
    const title = m[key].title;
    const description = m[key].description;
    const crumbs = breadcrumbNode(
      [
        { name: lang === 'es' ? 'Inicio' : 'Home', path: homePath(lang) },
        { name: title.split(' | ')[0], path },
      ],
      url
    );
    graph.push(crumbs);
    graph.push(webPageNode({ url, title, description, lang, breadcrumbId: crumbs['@id'] }));
    return { ...base, title, description, jsonLd: graph };
  }

  if (page === PAGE.THANKS) {
    return {
      ...base,
      title: m.thanks.title,
      description: m.thanks.description,
      robots: 'noindex,follow',
      alternates: [],
      jsonLd: [],
    };
  }

  return {
    ...base,
    title: m.notFound.title,
    description: m.notFound.description,
    robots: 'noindex,follow',
    alternates: [],
    jsonLd: [],
  };
}

export { META };
