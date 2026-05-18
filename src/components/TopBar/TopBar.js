import { useT } from '../../i18n/LanguageContext.js';
import styles from './TopBar.module.css';

const PHONE_DISPLAY = '866-627-9518';
const PHONE_HREF = 'tel:8666279518';

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
            >{t('topBar.langToggle.en')}</button>
            <span className={styles.langSep} aria-hidden="true">|</span>
            <button
              type="button"
              className={`${styles.langBtn} ${lang === 'es' ? styles.langActive : ''}`}
              aria-pressed={lang === 'es'}
              onClick={() => setLang('es')}
            >{t('topBar.langToggle.es')}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;