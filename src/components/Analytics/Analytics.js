import { useEffect } from 'react';

/**
 * Google Tag Manager injection.
 *
 * Reads container ID from VITE_GTM_ID env var (e.g. "GTM-XXXXXXX").
 * If unset, this component renders nothing — keeps dev/preview envs clean.
 *
 * Set the variable in Netlify's UI (Site settings → Environment variables)
 * or in a local .env file (see .env.example).
 */
function Analytics() {
  const gtmId = import.meta.env.VITE_GTM_ID;

  useEffect(() => {
    if (!gtmId) return;
    if (window.__gtmInjected) return;
    window.__gtmInjected = true;

    // Initialize dataLayer first so events queued before GTM loads aren't lost
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);
  }, [gtmId]);

  // <noscript> iframe fallback per GTM install instructions
  if (!gtmId) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}

export default Analytics;
