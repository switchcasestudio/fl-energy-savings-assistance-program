import { Phone, Shield } from '../icons/Icons.js';
import { trackEvent } from '../../lib/analytics.js';
import styles from './Footer.module.css';

const PHONE_DISPLAY = '866-627-9518';
const PHONE_HREF = 'tel:8666279518';

function Footer() {
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
          © {year} Florida Energy Assistance
        </div>
        <div className={styles.contact}>
          <span className={styles.contactItem}>No obligation</span>
          <span className={styles.divider} aria-hidden="true">
            ·
          </span>
          <a
            href={PHONE_HREF}
            className={styles.phone}
            onClick={handlePhoneClick}
            aria-label={`Call us at ${PHONE_DISPLAY}`}
          >
            <Phone />
            {PHONE_DISPLAY}
          </a>
          <span className={styles.divider} aria-hidden="true">
            ·
          </span>
          <span className={styles.contactItem}>Mon–Fri, 9 AM – 6 PM ET</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
