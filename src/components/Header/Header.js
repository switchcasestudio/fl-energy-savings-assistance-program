import { ShieldCheck } from '../icons/Icons.js';
import styles from './Header.module.css';

const PHONE_DISPLAY = '866-627-9518';
const PHONE_HREF = 'tel:8666279518';

function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div
          className={styles.brand}
          aria-label="Florida Energy Assistance home"
        >
          <span className={styles.seal} aria-hidden="true">
            <ShieldCheck />
          </span>

          <span className={styles.text}>
            <span className={styles.name}>
              <a href="#" className={styles.homeLink}>
                Florida Energy Assistance
              </a>
            </span>

            <a
              href={PHONE_HREF}
              className={styles.phone}
              aria-label={`Call us at ${PHONE_DISPLAY}`}
            >
              <span className={styles.phoneNumber}>{PHONE_DISPLAY}</span>
            </a>
          </span>
        </div>

        <a href="#contact" className={styles.cta}>
          <span className={styles.labelLong}>Check eligibility</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
