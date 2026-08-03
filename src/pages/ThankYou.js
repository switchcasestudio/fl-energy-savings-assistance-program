import { useEffect } from 'react';
import { useT } from '../i18n/LanguageContext.js';
import { homePath, SITE } from '../lib/site.js';
import { Link } from '../router/Router.js';
import { trackEvent } from '../lib/analytics.js';
import { Phone } from '../components/icons/Icons.js';
import styles from './ThankYou.module.css';

/**
 * Dedicated conversion URL.
 *
 * Google Ads and Meta both support URL-based conversion actions, which are
 * far more robust than event-only tracking (they survive GTM misconfiguration
 * and consent-mode edge cases). Having a real /thank-you/ URL also creates a
 * remarketing audience of people who converted, so you can exclude them.
 * The page is noindex — see buildHead() in lib/seo.js.
 */
function ThankYou() {
  const { lang, t } = useT();

  useEffect(() => {
    trackEvent('conversion_page_view', { page: 'thank_you' });
  }, []);

  return (
    <section className={styles.wrap}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.badge} aria-hidden="true">
          ✓
        </div>
        <h1 className={styles.title}>{t('thanks.title')}</h1>
        <p className={styles.body}>{t('thanks.body')}</p>

        <div className={styles.actions}>
          <a
            href={SITE.phoneHref}
            className={styles.phone}
            onClick={() => trackEvent('phone_call_click', { location: 'thank_you' })}
          >
            <Phone />
            {SITE.phoneDisplay}
          </a>
          <Link to={homePath(lang)} className={styles.back}>
            {t('thanks.backHome')}
          </Link>
        </div>

        <p className={styles.hours}>{t('footer.hours')}</p>
      </div>
    </section>
  );
}

export default ThankYou;
