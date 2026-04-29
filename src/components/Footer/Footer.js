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
          © {year} Florida Energy Assistance
        </div>
      </div>
    </footer>
  );
}

export default Footer;
