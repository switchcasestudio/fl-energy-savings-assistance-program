import { programs } from '../../data/programs.js';
import ProgramCard from './ProgramCard/ProgramCard.js';
import styles from './Programs.module.css';

function Programs() {
  return (
    <section className={styles.programs} id="programs">
      <div className="container">
        <div className={styles.head}>
          <h2 className={styles.headTitle}>
            Three programs. One purpose: home upgrades you can actually afford.
          </h2>
        </div>

        <div className={styles.grid}>
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
