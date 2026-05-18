import { useT } from '../../../i18n/LanguageContext.js';
import { iconMap } from '../../icons/Icons.js';
import useReveal from '../../../hooks/useReveal.js';
import styles from './ProgramCard.module.css';

function ProgramCard({ program, index }) {
  const { t } = useT();
  const ref = useReveal({ delay: index * 90 });
  const Icon = iconMap[program.icon];

  return (
    <article ref={ref} className={styles.card}>
      <header className={styles.head}>
        <div>
          <div className={styles.num}>{program.number}</div>
          <h3 className={styles.title}>{program.title}</h3>
        </div>
        <div className={styles.icon} aria-hidden="true">
          {Icon && <Icon />}
        </div>
      </header>

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
    </article>
  );
}

export default ProgramCard;