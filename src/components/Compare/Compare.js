import { useT } from '../../i18n/LanguageContext.js';
import { programs } from '../../data/programs.js';
import { programPath } from '../../lib/site.js';
import { Link } from '../../router/Router.js';
import useReveal from '../../hooks/useReveal.js';
import styles from './Compare.module.css';

/**
 * A real <table> with <caption>, <th scope>, and no layout divs.
 *
 * This is the single highest-leverage GEO element on the page: generative
 * answer engines extract and reproduce comparison tables far more readily
 * than prose, because the row/column relationships are unambiguous. The same
 * data expressed as styled divs is not extractable.
 */
function Compare() {
  const { lang, t } = useT();
  const list = programs[lang] || programs.en;
  const ref = useReveal({ delay: 0 });

  return (
    <section className={styles.section} id="compare" aria-labelledby="compare-title">
      <div className="container">
        <h2 id="compare-title" className={styles.title}>
          {t('compare.title')}
        </h2>

        <div ref={ref} className={styles.scroller}>
          <table className={styles.table}>
            <caption className={styles.caption}>{t('compare.caption')}</caption>
            <thead>
              <tr>
                <th scope="col">{t('compare.colProgram')}</th>
                <th scope="col">{t('compare.colBestFor')}</th>
                <th scope="col">{t('compare.colFunding')}</th>
                <th scope="col">{t('compare.colGrant')}</th>
                <th scope="col">{t('compare.colDown')}</th>
                <th scope="col">{t('compare.colFirst')}</th>
              </tr>
            </thead>
            <tbody>
              {list.map((p) => (
                <tr key={p.id}>
                  <th scope="row" className={styles.rowHead}>
                    <Link to={programPath(lang, p.id)} className={styles.link}>
                      {p.title}
                    </Link>
                  </th>
                  <td>{p.bestFor}</td>
                  <td className={styles.num}>{p.funding}</td>
                  <td className={styles.num}>{p.grant}</td>
                  <td className={styles.num}>$0</td>
                  <td className={styles.num}>
                    {p.deferMonths} {t('compare.months')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Compare;
