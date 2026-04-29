import ContactForm from '../ContactForm/ContactForm.js';
import useReveal from '../../hooks/useReveal.js';
import styles from './CTA.module.css';

function CTA() {
  const leftRef = useReveal({ delay: 0 });
  const rightRef = useReveal({ delay: 120 });

  return (
    <section className={styles.cta} id="contact">
      <div className={`container ${styles.inner}`}>
        <div ref={leftRef} className={styles.copy}>
          <span className={`eyebrow ${styles.eyebrow}`}>Get Started</span>
          <h2 className={styles.title}>
            Want to upgrade your <em>Florida home?</em> We're here to help.
          </h2>
          <p className={styles.sub}>
            Tell us a little about your project and a program specialist will
            reach out within one business day to confirm availability and find
            the option that fits.
          </p>

          <ul className={styles.bullets}>
            <li>
              <span className={styles.bulletDot} aria-hidden="true" />
              No obligation — eligibility check only
            </li>
            <li>
              <span className={styles.bulletDot} aria-hidden="true" />
              Response within one business day
            </li>
            <li>
              <span className={styles.bulletDot} aria-hidden="true" />
              Florida homeowners only
            </li>
          </ul>
        </div>

        <aside ref={rightRef} className={styles.panel}>
          <div className={styles.panelEyebrow}>Check your eligibility</div>
          <ContactForm />
        </aside>
      </div>
    </section>
  );
}

export default CTA;
