import { Phone } from '../icons/Icons.js';
import ContactForm from '../ContactForm/ContactForm.js';
import useReveal from '../../hooks/useReveal.js';
import { trackEvent } from '../../lib/analytics.js';
import styles from './CTA.module.css';

const PHONE_DISPLAY = '866-627-9518';
const PHONE_HREF = 'tel:8666279518';

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

          <div className={styles.phoneCard}>
            <div className={styles.phoneCardLabel}>Prefer to talk?</div>
            <a
              href={PHONE_HREF}
              className={styles.phoneCardLink}
              aria-label={`Call us at ${PHONE_DISPLAY}`}
            >
              <span className={styles.phoneCardIcon} aria-hidden="true">
                <Phone />
              </span>
              <span className={styles.phoneCardNumber}>{PHONE_DISPLAY}</span>
            </a>
            <div className={styles.phoneCardHours}>
              Mon–Fri, 9 AM – 6 PM ET · No obligation
            </div>
          </div>
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
