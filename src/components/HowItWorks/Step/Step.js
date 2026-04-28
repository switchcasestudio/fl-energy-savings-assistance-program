import useReveal from '../../../hooks/useReveal.js';
import styles from './Step.module.css';

function Step({ number, title, body, index }) {
  const ref = useReveal({ delay: index * 90 });

  return (
    <div ref={ref} className={styles.step}>
      <div className={styles.num}>{number}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
    </div>
  );
}

export default Step;
