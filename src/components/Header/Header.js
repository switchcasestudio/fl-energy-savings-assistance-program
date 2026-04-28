import { ShieldCheck } from '../icons/Icons.js';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a
          href="#"
          className={styles.brand}
          aria-label="Energy Efficiency Saving Foundation home"
        >
          <span className={styles.seal} aria-hidden="true">
            <ShieldCheck />
          </span>
          <span className={styles.text}>
            <span className={styles.name}>Energy Efficiency Saving Foundation</span>
            <span className={styles.sub}>Florida · Est. Program</span>
          </span>
        </a>
        <a href="#contact" className={styles.cta}>
          <span className={styles.labelLong}>Check eligibility</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
