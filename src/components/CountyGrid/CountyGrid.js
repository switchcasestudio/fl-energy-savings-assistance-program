import { useT } from '../../i18n/LanguageContext.js';
import { counties } from '../../data/counties.js';
import { countyPath } from '../../lib/site.js';
import { Link } from '../../router/Router.js';
import useReveal from '../../hooks/useReveal.js';
import styles from './CountyGrid.module.css';

/**
 * Internal linking hub for the county pages.
 *
 * Programmatic pages only rank if something links to them — orphaned pages
 * sit in the sitemap and never accumulate authority. This grid on the home
 * page plus the cross-links at the bottom of each county page is what makes
 * the set crawlable as a cluster rather than 12 dead ends.
 *
 * @param {{excludeId?: string, title?: string, intro?: string, compact?: boolean}} props
 */
function CountyGrid({ excludeId, title, intro, compact = false }) {
  const { lang, t } = useT();
  const ref = useReveal({ delay: 0 });
  const list = excludeId ? counties.filter((c) => c.id !== excludeId) : counties;

  return (
    <section className={`${styles.section} ${compact ? styles.compact : ''}`} id="counties" aria-labelledby="counties-title">
      <div className="container">
        <div ref={ref} className={styles.head}>
          <h2 id="counties-title" className={styles.title}>
            {title || t('countiesSection.title')}
          </h2>
          {(intro || !compact) && <p className={styles.intro}>{intro || t('countiesSection.intro')}</p>}
        </div>

        <ul className={styles.grid}>
          {list.map((county) => (
            <li key={county.id}>
              <Link to={countyPath(lang, county)} className={styles.card}>
                <span className={styles.name}>{county.name[lang]}</span>
                <span className={styles.meta}>
                  {county.seat} · {county.utilities[0]}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CountyGrid;
