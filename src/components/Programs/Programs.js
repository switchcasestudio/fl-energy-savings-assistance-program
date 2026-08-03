import { useT } from '../../i18n/LanguageContext.js';
import { programs } from '../../data/programs.js';
import ProgramCard from './ProgramCard/ProgramCard.js';
import styles from './Programs.module.css';

function Programs() {
  const { lang, t } = useT();
  const list = programs[lang] || programs.en;

  return (
    <section className={styles.programs} id="programs" aria-labelledby="programs-title">
      <div className="container">
        <div className={styles.head}>
          <h2 id="programs-title" className={styles.headTitle}>
            {t('programs.title')}
          </h2>
          <p className={styles.headIntro}>{t('programs.intro')}</p>
        </div>

        <div className={styles.grid}>
          {list.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
