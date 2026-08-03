import { useT } from '../../../i18n/LanguageContext.js';
import { iconMap } from '../../icons/Icons.js';
import { Link } from '../../../router/Router.js';
import { programPath } from '../../../lib/site.js';
import useReveal from '../../../hooks/useReveal.js';
import styles from './ProgramCard.module.css';

function ProgramCard({ program, index }) {
  const { lang, t } = useT();
  const ref = useReveal({ delay: index * 90 });
  const Icon = iconMap[program.icon];
  const href = programPath(lang, program.id);

  return (
    <article ref={ref} className={styles.card}>
      <header className={styles.head}>
        <div>
          <div className={styles.num}>{program.number}</div>
          <h3 className={styles.title}>
            <Link to={href} className={styles.titleLink}>
              {program.title}
            </Link>
          </h3>
        </div>
        <div className={styles.icon} aria-hidden="true">
          {Icon && <Icon />}
        </div>
      </header>

      <p className={styles.tagline}>{program.tagline}</p>

      <ul className={styles.rows}>
        {program.rows.map((row) => (
          <li key={row.label} className={styles.row}>
            <span className={styles.rowLabel}>{row.label}</span>
            <span className={styles.rowValue}>{row.value}</span>
          </li>
        ))}
      </ul>

      <div className={styles.pillars}>
        <div className={styles.pillar}>
          <span className={styles.pillarLabel}>{t('programCard.fundingLabel')}</span>
          <span className={styles.pillarNum}>{program.funding}</span>
        </div>
        <div className={`${styles.pillar} ${styles.pillarGrant}`}>
          <span className={styles.pillarLabel}>{t('programCard.grantLabel')}</span>
          <span className={styles.pillarNum}>{program.grant}</span>
        </div>
      </div>

      <Link to={href} className={styles.more}>
        {t('programs.learnMore')}
        <span aria-hidden="true"> →</span>
      </Link>
    </article>
  );
}

export default ProgramCard;
