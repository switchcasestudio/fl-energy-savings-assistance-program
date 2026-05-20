import { useT } from '../../i18n/LanguageContext.js';
import ReactCountryFlag from 'react-country-flag';
import styles from './TopBar.module.css';

const PHONE_DISPLAY = '855-549-3521';
const PHONE_HREF = 'tel:8555493521';

function TopBar() {
  const { lang, setLang, t } = useT();

  return (
    <div className={styles.topbar}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.left}>
          <span className={styles.dot} aria-hidden="true" />
          {t('topBar.authority')}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className={styles.right}>{t('topBar.rightText')}</span>
          <div role="group" aria-label={t('topBar.langToggle.aria')} className={styles.langToggle}>
            
            <button
              type="button"
              className={`${styles.langBtn} ${lang === 'en' ? styles.langActive : ''}`}
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              <ReactCountryFlag countryCode="US" svg title="US Flag" />
              {t('topBar.langToggle.en')}
            </button>

            <span className={styles.langSep} aria-hidden="true">|</span>
            
            <button
              type="button"
              className={`${styles.langBtn} ${lang === 'es' ? styles.langActive : ''}`}
              aria-pressed={lang === 'es'}
              onClick={() => setLang('es')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              <ReactCountryFlag countryCode="ES" svg title="Spain Flag" />
              {t('topBar.langToggle.es')}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;