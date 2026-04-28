import { steps } from '../../data/steps.js';
import Step from './Step/Step.js';
import styles from './HowItWorks.module.css';

function HowItWorks() {
  return (
    <section className={styles.how} id="how">
      <div className="container">
        <div className={styles.head}>
          <h2 className={styles.headTitle}>How does it work?</h2>
          <span className={styles.headNum}>ii. Process</span>
        </div>

        <div className={styles.grid}>
          {steps.map((step, index) => (
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
