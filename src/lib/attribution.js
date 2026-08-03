/**
 * Paid-traffic attribution capture.
 *
 * Without this, every lead reaches Netlify (and the n8n workflow) with no
 * indication of which campaign, keyword, or channel produced it — so paid
 * spend cannot be tied to closed revenue and the Google Ads algorithm gets
 * no offline-conversion signal to optimize against.
 *
 * Stores BOTH first touch and last touch. First touch answers "what created
 * demand", last touch answers "what closed it"; optimizing on last touch
 * alone systematically over-credits branded search.
 */

const STORAGE_KEY = 'fea_attribution';

export const ATTRIBUTION_FIELDS = [
  'gclid',
  'wbraid',
  'gbraid',
  'msclkid',
  'fbclid',
  'ttclid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
];

const CLICK_IDS = ['gclid', 'wbraid', 'gbraid', 'msclkid', 'fbclid', 'ttclid'];

function emptyRecord() {
  const out = {};
  ATTRIBUTION_FIELDS.forEach((f) => {
    out[f] = '';
  });
  return out;
}

function readStored() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function write(data) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* private mode / storage disabled — attribution degrades, form still works */
  }
}

/**
 * Reads the current URL, merges into stored attribution, and persists.
 * Safe to call on every page view.
 */
export function captureAttribution() {
  if (typeof window === 'undefined') return null;

  const params = new URLSearchParams(window.location.search);
  const incoming = emptyRecord();
  let sawAny = false;

  ATTRIBUTION_FIELDS.forEach((field) => {
    const value = params.get(field);
    if (value) {
      incoming[field] = value.slice(0, 512);
      sawAny = true;
    }
  });

  const stored = readStored();
  const now = new Date().toISOString();

  // No stored record yet — this visit is first touch, whatever it carries.
  if (!stored) {
    const record = {
      first: { ...incoming, ts: now, landing_page: window.location.pathname, referrer: document.referrer || '' },
      last: { ...incoming, ts: now, landing_page: window.location.pathname, referrer: document.referrer || '' },
    };
    write(record);
    return record;
  }

  // Only overwrite last touch when this visit actually carries campaign data.
  // An internal navigation with a clean URL must not blank out a live gclid.
  if (sawAny) {
    stored.last = {
      ...incoming,
      ts: now,
      landing_page: window.location.pathname,
      referrer: document.referrer || '',
    };
    write(stored);
  }

  return stored;
}

/**
 * Flat key/value map suitable for hidden form inputs.
 * Click IDs are reported from last touch (that is what the ad platform
 * expects back for offline conversion import); UTMs report both.
 */
export function getAttributionFields() {
  const stored = readStored();
  const out = {};

  ATTRIBUTION_FIELDS.forEach((f) => {
    out[f] = stored?.last?.[f] || '';
  });

  CLICK_IDS.forEach((f) => {
    if (!out[f] && stored?.first?.[f]) out[f] = stored.first[f];
  });

  out.first_touch_source = stored?.first?.utm_source || '';
  out.first_touch_campaign = stored?.first?.utm_campaign || '';
  out.first_touch_at = stored?.first?.ts || '';
  out.landing_page = stored?.first?.landing_page || '';
  out.referrer = stored?.first?.referrer || '';
  out.page_path = typeof window !== 'undefined' ? window.location.pathname : '';

  return out;
}

/** Field names the Netlify static form must declare for these to be saved. */
export const ALL_HIDDEN_FIELD_NAMES = [
  ...ATTRIBUTION_FIELDS,
  'first_touch_source',
  'first_touch_campaign',
  'first_touch_at',
  'landing_page',
  'referrer',
  'page_path',
  'lang',
];
