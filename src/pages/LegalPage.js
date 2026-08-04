import { useT } from '../i18n/LanguageContext.js';
import { legal } from '../data/legal.js';
import { homePath, privacyPath, termsPath, LEGAL_UPDATED } from '../lib/site.js';
import { Link } from '../router/Router.js';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs.js';
import styles from './LegalPage.module.css';

const LOCALE = { en: 'en-US', es: 'es-US' };

function formatDate(lang) {
  const [y, m, d] = LEGAL_UPDATED.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString(LOCALE[lang], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

function Block({ block }) {
  if (block.type === 'ul') {
    return (
      <ul className={styles.list}>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p>{block.text}</p>;
}

/**
 * @param {{doc: 'privacy' | 'terms'}} props
 */
function LegalPage({ doc }) {
  const { lang, t } = useT();
  const content = legal[doc][lang] || legal[doc].en;
  const isPrivacy = doc === 'privacy';

  return (
    <>
      <Breadcrumbs
        items={[{ name: t('nav.home'), path: homePath(lang) }, { name: content.title }]}
      />

      <article className={styles.wrap}>
        <div className={`container ${styles.inner}`}>
          <header className={styles.head}>
            <h1 className={styles.h1}>{content.title}</h1>
            <p className={styles.updated}>
              {t('legal.updated')} <time dateTime={LEGAL_UPDATED}>{formatDate(lang)}</time>
            </p>
            <p className={styles.intro}>{content.intro}</p>
          </header>

          {content.sections.map((section) => (
            <section key={section.h} className={styles.section}>
              <h2 className={styles.h2}>{section.h}</h2>
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </section>
          ))}

          <p className={styles.cross}>
            <Link to={isPrivacy ? termsPath(lang) : privacyPath(lang)} className={styles.crossLink}>
              {isPrivacy ? t('legal.termsLink') : t('legal.privacyLink')}
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}

export default LegalPage;
