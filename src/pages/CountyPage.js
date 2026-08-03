import { useT } from '../i18n/LanguageContext.js';
import { findCountyById } from '../data/counties.js';
import { programs } from '../data/programs.js';
import { homePath, programPath } from '../lib/site.js';
import { Link } from '../router/Router.js';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs.js';
import CountyGrid from '../components/CountyGrid/CountyGrid.js';
import CTA from '../components/CTA/CTA.js';
import styles from './CountyPage.module.css';

function CountyPage({ countyId }) {
  const { lang, t } = useT();
  const county = findCountyById(countyId);
  const copy = county[lang];
  const list = programs[lang] || programs.en;
  const name = county.name[lang];

  return (
    <>
      <Breadcrumbs
        items={[
          { name: t('nav.home'), path: homePath(lang) },
          { name },
        ]}
      />

      <article>
        <header className={styles.hero}>
          <div className="container">
            <span className="eyebrow">{t('countyPage.eyebrowTpl')}</span>
            <h1 className={styles.h1}>{t('countyPage.h1Tpl')(name)}</h1>
            <p className={styles.intro}>{copy.intro}</p>
          </div>
        </header>

        <section className={styles.glance} aria-labelledby="glance-title">
          <div className="container">
            <h2 id="glance-title" className={styles.sectionTitle}>
              {t('countyPage.atAGlance')}
            </h2>
            <dl className={styles.facts}>
              <div className={styles.fact}>
                <dt>{t('countyPage.countySeat')}</dt>
                <dd>{county.seat}</dd>
              </div>
              <div className={styles.fact}>
                <dt>{t('countyPage.region')}</dt>
                <dd>{county.region[lang]}</dd>
              </div>
              <div className={styles.fact}>
                <dt>{t('countyPage.population')}</dt>
                <dd>{county.population}</dd>
              </div>
              <div className={styles.fact}>
                <dt>{t('countyPage.utility')}</dt>
                <dd>{county.utilities.join(', ')}</dd>
              </div>
              <div className={styles.fact}>
                <dt>{t('countyPage.climateZone')}</dt>
                <dd>{county.climateZone}</dd>
              </div>
              <div className={styles.fact}>
                <dt>{t('countyPage.summerHigh')}</dt>
                <dd>{county.summerHigh}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className={styles.body}>
          <div className={`container ${styles.prose}`}>
            <h2 className={styles.sectionTitle}>{t('countyPage.housingTitle')}</h2>
            <p>{copy.housing}</p>

            <h2 className={styles.sectionTitle}>{t('countyPage.utilityTitle')}</h2>
            <p>{copy.utility}</p>

            <h2 className={styles.sectionTitle}>{t('countyPage.whyTitle')}</h2>
            <p>{copy.why}</p>

            <h2 className={styles.sectionTitle}>{t('countyPage.citiesTitle')}</h2>
            <p>{t('countyPage.citiesIntro')}</p>
            <ul className={styles.cities}>
              {county.cities.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.programs} aria-labelledby="programs-title">
          <div className="container">
            <h2 id="programs-title" className={styles.sectionTitle}>
              {t('countyPage.programsTitle')}
            </h2>
            <ul className={styles.programGrid}>
              {list.map((p) => (
                <li key={p.id}>
                  <Link to={programPath(lang, p.id)} className={styles.programCard}>
                    <span className={styles.programName}>{p.title}</span>
                    <span className={styles.programMeta}>{p.bestFor}</span>
                    <span className={styles.programNums}>
                      {p.funding} · {p.grant}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>

      <CTA />

      <CountyGrid excludeId={county.id} title={t('countyPage.nearbyTitle')} intro="" compact />
    </>
  );
}

export default CountyPage;
