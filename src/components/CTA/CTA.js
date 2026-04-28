import { Phone } from '../icons/Icons.js';
import useReveal from '../../hooks/useReveal.js';
import styles from './CTA.module.css';

const PHONE_DISPLAY = '754-799-8995';
const PHONE_HREF = 'tel:7547998995';

function CTA() {
  const leftRef = useReveal({ delay: 0 });
  const rightRef = useReveal({ delay: 120 });

  return (
    <section className={styles.cta} id="contact">
      <div className={`container ${styles.inner}`}>
        <div ref={leftRef}>
          <span className={`eyebrow ${styles.eyebrow}`}>Get Started</span>
          <h2 className={styles.title}>
            Want to upgrade your <em>Florida home?</em> We're here to help.
          </h2>
          <p className={styles.sub}>
            Speak with a program specialist to confirm availability in your area
            and find the option that fits your project.
          </p>
        </div>

        {/* <aside ref={rightRef} className={styles.panel}>
          <div className={styles.panelEyebrow}>Call to check availability</div>
          <a href={PHONE_HREF} className={styles.phone}>
            {PHONE_DISPLAY}
          </a>
          <a href={PHONE_HREF} className={styles.btn}>
            <Phone />
            Call now
          </a>
          <p className={styles.small}>Mon–Fri, 9 AM – 6 PM ET · No obligation</p>
        </aside> */}
      </div>
    </section>
  );
}

export default CTA;
