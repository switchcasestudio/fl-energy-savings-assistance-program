import { useT } from '../../i18n/LanguageContext.js';
import { useRouter, Link } from '../../router/Router.js';
import { homePath } from '../../lib/site.js';
import { FlagUS, FlagES } from '../icons/Icons.js';
import styles from './TopBar.module.css';

/**
 * The language toggle is a real <a href> to the alternate-language URL, not a
 * state flip. That gives crawlers a followable link into the /es/ tree and
 * makes the hreflang pair bidirectional, which is what Google requires before
 * it will honour the annotation.
 */
function TopBar() {
  const { lang, t } = useT();
  const { route } = useRouter();

  const other = lang === 'es' ? 'en' : 'es';
  const alt = route.altPath || homePath(other);

  const langs = [
    { code: 'en', Flag: FlagUS, label: t('topBar.langToggle.en'), name: 'English' },
    { code: 'es', Flag: FlagES, label: t('topBar.langToggle.es'), name: 'Español' },
  ];

  return (
    <div className={styles.topbar}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.left}>
          <span className={styles.dot} aria-hidden="true" />
          {t('topBar.authority')}
        </span>

        <div className={styles.rightGroup}>
          <span className={styles.right}>{t('topBar.rightText')}</span>

          <nav className={styles.langToggle} aria-label={t('topBar.langToggle.aria')}>
            {langs.map(({ code, Flag, label, name }, i) => {
              const isActive = code === lang;
              return (
                <span key={code} className={styles.langWrap}>
                  {i > 0 && (
                    <span className={styles.langSep} aria-hidden="true">
                      |
                    </span>
                  )}
                  {isActive ? (
                    <span className={`${styles.langBtn} ${styles.langActive}`} aria-current="true">
                      <Flag />
                      {label}
                    </span>
                  ) : (
                    <Link to={alt} className={styles.langBtn} hrefLang={code} lang={code} title={name}>
                      <Flag />
                      {label}
                    </Link>
                  )}
                </span>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
