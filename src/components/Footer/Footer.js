import { useT } from '../../i18n/LanguageContext.js';
import { Phone, Shield } from '../icons/Icons.js';
import { trackEvent } from '../../lib/analytics.js';
import styles from './Footer.module.css';

const PHONE_DISPLAY = '866-627-9518';
const PHONE_HREF = 'tel:8666279518';

function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();

  const handlePhoneClick = () => {
    trackEvent('phone_call_click', { location: 'footer' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.seal} aria-hidden="true">
            <Shield />
          </span>
          © {year} {t('footer.brandName')}
        </div>
        <div className={styles.contact}>
          <span className={styles.contactItem}>{t('footer.noObligation')}</span>
          <span className={styles.divider} aria-hidden="true">
            ·
          </span>
          <a
            href={PHONE_HREF}
            className={styles.phone}
            onClick={handlePhoneClick}
            aria-label={`${t('footer.phoneAria')} ${PHONE_DISPLAY}`}
          >
            <Phone />
            {PHONE_DISPLAY}
          </a>
          <span className={styles.divider} aria-hidden="true">
            ·
          </span>
          <span className={styles.contactItem}>{t('footer.hours')}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;