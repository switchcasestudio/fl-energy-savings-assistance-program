import { useT } from '../../i18n/LanguageContext.js';
import { steps } from '../../data/steps.js';
import Step from './Step/Step.js';
import styles from './HowItWorks.module.css';

function HowItWorks() {
  const { lang, t } = useT();
  const list = steps[lang] || steps.en;

  return (
    <section className={styles.how} id="how">
      <div className="container">
        <div className={styles.head}>
          <h2 className={styles.headTitle}>{t('howItWorks.title')}</h2>
        </div>

        <div className={styles.grid}>
          {list.map((step, index) => (
            <Step
              key={step.id}
              number={step.id}
              title={step.title}
              body={step.body}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;