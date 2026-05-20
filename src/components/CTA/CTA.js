import { useT } from '../../i18n/LanguageContext.js';
import { Phone } from '../icons/Icons.js';
import ContactForm from '../ContactForm/ContactForm.js';
import useReveal from '../../hooks/useReveal.js';
import { trackEvent } from '../../lib/analytics.js';
import styles from './CTA.module.css';

const PHONE_DISPLAY = '855-549-3521';
const PHONE_HREF = 'tel:8555493521';

function CTA() {
  const { t } = useT();
  const leftRef = useReveal({ delay: 0 });
  const rightRef = useReveal({ delay: 120 });

  return (
    <section className={styles.cta} id="contact">
      <div className={`container ${styles.inner}`}>
        <div ref={leftRef} className={styles.copy}>
          <span className={`eyebrow ${styles.eyebrow}`}>{t('cta.eyebrow')}</span>
          <h2 className={styles.title}>
            {t('cta.titlePart1')} <em>{t('cta.titleEm')}</em>{t('cta.titlePart2')}
          </h2>
          <p className={styles.sub}>
            {t('cta.sub')}
          </p>
          <ul className={styles.bullets}>
            <li>
              <span className={styles.bulletDot} aria-hidden="true" />
              {t('cta.bullet1')}
            </li>
            <li>
              <span className={styles.bulletDot} aria-hidden="true" />
              {t('cta.bullet2')}
            </li>
            <li>
              <span className={styles.bulletDot} aria-hidden="true" />
              {t('cta.bullet3')}
            </li>
          </ul>

          <div className={styles.phoneCard}>
            <div className={styles.phoneCardLabel}>{t('cta.phoneLabel')}</div>
            <a
              href={PHONE_HREF}
              className={styles.phoneCardLink}
              aria-label={`${t('cta.phoneAria')} ${PHONE_DISPLAY}`}
            >
              <span className={styles.phoneCardIcon} aria-hidden="true">
                <Phone />
              </span>
              <span className={styles.phoneCardNumber}>{PHONE_DISPLAY}</span>
            </a>
            <div className={styles.phoneCardHours}>
              {t('cta.phoneHours')}
            </div>
          </div>
        </div>

        <aside ref={rightRef} className={styles.panel}>
          <div className={styles.panelEyebrow}>{t('cta.panelEyebrow')}</div>
          <ContactForm />
        </aside>
      </div>
    </section>
  );
}

export default CTA;