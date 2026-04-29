/**
 * Push an event to GTM's dataLayer. Safe to call whether or not GTM has loaded.
 *
 * @param {string} event — event name (e.g. 'form_submission')
 * @param {object} [params] — additional event parameters
 *
 * @example
 *   trackEvent('form_submission', { program: 'Program Two' });
 */
export function trackEvent(event, params = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
