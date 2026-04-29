import { Phone } from '../icons/Icons.js';
import styles from './TopBar.module.css';

const PHONE_DISPLAY = '866-627-9518';
const PHONE_HREF = 'tel:8666279518';

function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.left}>
          <span className={styles.dot} aria-hidden="true" />
          An Authorized Florida Home Energy Program
        </span>
        <a
          href={PHONE_HREF}
          className={styles.phone}
          aria-label={`Call us at ${PHONE_DISPLAY}`}
        >
          <Phone />
          <span className={styles.phoneNumber}>{PHONE_DISPLAY}</span>
        </a>
        {/* <span className={styles.phoneHours}>Mon–Fri, 9–6 ET</span> */}
        <span className={styles.right}>Now accepting 2026 applications</span>
      </div>
    </div>
  );
}

export default TopBar;
