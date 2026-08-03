import { useT } from '../i18n/LanguageContext.js';
import { homePath } from '../lib/site.js';
import { Link } from '../router/Router.js';
import CountyGrid from '../components/CountyGrid/CountyGrid.js';
import styles from './ThankYou.module.css';

function NotFound() {
  const { lang, t } = useT();

  return (
    <>
      <section className={styles.wrap}>
        <div className={`container ${styles.inner}`}>
          <h1 className={styles.title}>{t('notFound.title')}</h1>
          <p className={styles.body}>{t('notFound.body')}</p>
          <div className={styles.actions}>
            <Link to={homePath(lang)} className={styles.phone}>
              {t('notFound.backHome')}
            </Link>
            <Link to={homePath(lang)} hash="#contact" className={styles.back}>
              {t('notFound.checkCta')}
            </Link>
          </div>
        </div>
      </section>
      <CountyGrid compact />
    </>
  );
}

export default NotFound;
