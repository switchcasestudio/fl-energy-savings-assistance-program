import { useT } from '../i18n/LanguageContext.js';
import { programs } from '../data/programs.js';
import { homePath, programPath } from '../lib/site.js';
import { Link } from '../router/Router.js';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs.js';
import CTA from '../components/CTA/CTA.js';
import { iconMap } from '../components/icons/Icons.js';
import styles from './ProgramPage.module.css';

function ProgramPage({ id }) {
  const { lang, t } = useT();
  const list = programs[lang] || programs.en;
  const program = list.find((p) => p.id === id);
  const others = list.filter((p) => p.id !== id);
  const Icon = iconMap[program.icon];

  return (
    <>
      <Breadcrumbs
        items={[
          { name: t('nav.home'), path: homePath(lang) },
          { name: program.title },
        ]}
      />

      <article>
        <header className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div>
              <span className="eyebrow">{t('programPage.eyebrow')}</span>
              <h1 className={styles.h1}>{program.title}</h1>
              <p className={styles.tagline}>{program.tagline}</p>
            </div>
            <div className={styles.icon} aria-hidden="true">
              {Icon && <Icon />}
            </div>
          </div>
        </header>

        <section className={styles.glance} aria-labelledby="glance-title">
          <div className="container">
            <h2 id="glance-title" className={styles.sectionTitle}>
              {t('programPage.atAGlance')}
            </h2>
            <dl className={styles.stats}>
              <div className={styles.stat}>
                <dt>{t('programPage.fundingLabel')}</dt>
                <dd>{program.funding}</dd>
              </div>
              <div className={styles.stat}>
                <dt>{t('programPage.grantLabel')}</dt>
                <dd>{program.grant}</dd>
              </div>
              <div className={styles.stat}>
                <dt>{t('programPage.downLabel')}</dt>
                <dd>$0</dd>
              </div>
              <div className={styles.stat}>
                <dt>{t('programPage.firstLabel')}</dt>
                <dd>{t('programPage.monthsAfter')(program.deferMonths)}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className={styles.body} aria-labelledby="how-title">
          <div className={`container ${styles.bodyInner}`}>
            <div className={styles.prose}>
              <h2 id="how-title" className={styles.sectionTitle}>
                {t('programPage.howTitle')}
              </h2>
              <p>{program.description}</p>
              <p className={styles.bestFor}>
                <strong>{t('programPage.bestForLabel')}:</strong> {program.bestFor}
              </p>
            </div>

            <aside className={styles.upgrades} aria-labelledby="upgrades-title">
              <h2 id="upgrades-title" className={styles.asideTitle}>
                {t('programPage.upgradesTitle')}
              </h2>
              <ul className={styles.upgradeList}>
                {program.upgrades.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className={styles.others} aria-labelledby="others-title">
          <div className="container">
            <h2 id="others-title" className={styles.sectionTitle}>
              {t('programPage.otherTitle')}
            </h2>
            <ul className={styles.otherGrid}>
              {others.map((p) => (
                <li key={p.id}>
                  <Link to={programPath(lang, p.id)} className={styles.otherCard}>
                    <span className={styles.otherName}>{p.title}</span>
                    <span className={styles.otherMeta}>
                      {t('programPage.fundingLabel')} {p.funding} · {t('programPage.grantLabel')} {p.grant}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>

      {/* No FAQ block here on purpose — repeating the home page's FAQ across
          six program pages would duplicate the same ~1,200 words site-wide
          and dilute which URL Google treats as the answer source. */}
      <CTA />
    </>
  );
}

export default ProgramPage;
