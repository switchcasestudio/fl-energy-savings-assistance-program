import { useT } from '../../i18n/LanguageContext.js';
import { Link } from '../../router/Router.js';
import { homePath, SITE } from '../../lib/site.js';
import { trackEvent } from '../../lib/analytics.js';
import { ShieldCheck } from '../icons/Icons.js';
import styles from './Header.module.css';

function Header() {
  const { lang, t } = useT();
  const home = homePath(lang);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.seal} aria-hidden="true">
            <ShieldCheck />
          </span>

          <span className={styles.text}>
            <span className={styles.name}>
              <Link to={home} className={styles.homeLink} aria-label={t('header.brandAria')}>
                {t('header.brandName')}
              </Link>
            </span>

            <a
              href={SITE.phoneHref}
              className={styles.phone}
              onClick={() => trackEvent('phone_call_click', { location: 'header' })}
              aria-label={`${t('header.phoneAria')} ${SITE.phoneDisplay}`}
            >
              <span className={styles.phoneNumber}>{SITE.phoneDisplay}</span>
            </a>
          </span>
        </div>

        {/* Section links only. The individual program and county URLs are
            linked sitewide from the footer block, which distributes authority
            just as well without a header that overflows once the Spanish
            program names ("Mejoras Energéticas de Hogar Completo") render.
            Anchors resolve on the home page, so link to home + hash. */}
        <nav className={styles.nav} aria-label={t('nav.ariaMain')}>
          <Link to={home} hash="#programs" className={styles.navLink}>
            {t('nav.programs')}
          </Link>
          <Link to={home} hash="#counties" className={styles.navLink}>
            {t('nav.counties')}
          </Link>
          <Link to={home} hash="#faq" className={styles.navLink}>
            {t('nav.faq')}
          </Link>
        </nav>

        <Link
          to={home}
          hash="#contact"
          className={styles.cta}
          onClick={() => trackEvent('cta_click', { location: 'header' })}
        >
          <span className={styles.labelLong}>{t('header.cta')}</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
