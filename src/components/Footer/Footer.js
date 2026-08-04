import { useT } from '../../i18n/LanguageContext.js';
import { Link } from '../../router/Router.js';
import { homePath, programPath, countyPath, privacyPath, termsPath, SITE } from '../../lib/site.js';
import { programs } from '../../data/programs.js';
import { counties } from '../../data/counties.js';
import { Phone, Shield } from '../icons/Icons.js';
import { trackEvent } from '../../lib/analytics.js';
import styles from './Footer.module.css';

function Footer() {
  const { lang, t } = useT();
  const year = new Date().getFullYear();

  const handlePhoneClick = () => {
    trackEvent('phone_call_click', { location: 'footer' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Site-wide link block: gives every program and county page a link
            from every page, which is how a small site distributes authority
            without needing external backlinks pointing at each URL. */}
        <div className={styles.columns}>
          <div className={styles.col}>
            <h2 className={styles.colTitle}>{t('footer.programsTitle')}</h2>
            <ul className={styles.linkList}>
              {programs[lang].map((p) => (
                <li key={p.id}>
                  <Link to={programPath(lang, p.id)} className={styles.link}>
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h2 className={styles.colTitle}>{t('footer.legalTitle')}</h2>
            <ul className={styles.linkList}>
              <li>
                <Link to={privacyPath(lang)} className={styles.link}>
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to={termsPath(lang)} className={styles.link}>
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.colWide}>
            <h2 className={styles.colTitle}>{t('footer.countiesTitle')}</h2>
            <ul className={styles.countyList}>
              {counties.map((c) => (
                <li key={c.id}>
                  <Link to={countyPath(lang, c)} className={styles.link}>
                    {c.name[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.inner}>
          <div className={styles.brand}>
            <span className={styles.seal} aria-hidden="true">
              <Shield />
            </span>
            © {year}{' '}
            <Link to={homePath(lang)} className={styles.link}>
              {t('footer.brandName')}
            </Link>
          </div>

          <div className={styles.contact}>
            <span className={styles.contactItem}>{t('footer.noObligation')}</span>
            <span className={styles.divider} aria-hidden="true">
              ·
            </span>
            <a
              href={SITE.phoneHref}
              className={styles.phone}
              onClick={handlePhoneClick}
              aria-label={`${t('footer.phoneAria')} ${SITE.phoneDisplay}`}
            >
              <Phone />
              {SITE.phoneDisplay}
            </a>
            <span className={styles.divider} aria-hidden="true">
              ·
            </span>
            <span className={styles.contactItem}>{t('footer.hours')}</span>
          </div>
        </div>

        {/* Explicit non-affiliation notice. Keep it — the site name reads as
            governmental, and both Google's misrepresentation policy and the
            Google Ads government-affiliation policy look for this disclaimer. */}
        <p className={styles.disclaimer}>{t('footer.disclaimer')}</p>
      </div>
    </footer>
  );
}

export default Footer;
