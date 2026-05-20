import { useT } from '../../i18n/LanguageContext.js';
import { ShieldCheck } from '../icons/Icons.js';
import styles from './Header.module.css';

const PHONE_DISPLAY = '855-549-3521';
const PHONE_HREF = 'tel:8555493521';

function Header() {
  const { t } = useT();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div
          className={styles.brand}
          aria-label={t('header.brandAria')}
        >
          <span className={styles.seal} aria-hidden="true">
            <ShieldCheck />
          </span>

          <span className={styles.text}>
            <span className={styles.name}>
              <a href="#" className={styles.homeLink}>
                {t('header.brandName')}
              </a>
            </span>

            <a
              href={PHONE_HREF}
              className={styles.phone}
              aria-label={`${t('header.phoneAria')} ${PHONE_DISPLAY}`}
            >
              <span className={styles.phoneNumber}>{PHONE_DISPLAY}</span>
            </a>
          </span>
        </div>

        <a href="#contact" className={styles.cta}>
          <span className={styles.labelLong}>{t('header.cta')}</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}

export default Header;