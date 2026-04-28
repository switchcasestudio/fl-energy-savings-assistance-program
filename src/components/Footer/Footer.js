import { Shield } from '../icons/Icons.js';
import styles from './Footer.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.seal} aria-hidden="true">
            <Shield />
          </span>
          © {year} Florida Energy Savings Assistance Program
        </div>
        <div>Florida · 754-799-8995</div>
      </div>
    </footer>
  );
}

export default Footer;
