import { useT } from '../../i18n/LanguageContext.js';
import { faq } from '../../data/faq.js';
import useReveal from '../../hooks/useReveal.js';
import styles from './FAQ.module.css';

/**
 * Rendered as <details>/<summary> — the answer text stays in the DOM whether
 * open or closed, so crawlers and AI answer engines read all of it. An
 * accordion that mounts answers on click hides the entire content from
 * anything that does not execute JS.
 */
function FAQ() {
  const { lang, t } = useT();
  const list = faq[lang] || faq.en;
  const headRef = useReveal({ delay: 0 });

  return (
    <section className={styles.faq} id="faq" aria-labelledby="faq-title">
      <div className="container">
        <div ref={headRef} className={styles.head}>
          <h2 id="faq-title" className={styles.title}>
            {t('faq.title')}
          </h2>
          <p className={styles.intro}>{t('faq.intro')}</p>
        </div>

        <div className={styles.list}>
          {list.map((item, i) => (
            <details key={item.id} className={styles.item} open={i === 0}>
              <summary className={styles.q}>
                <span>{item.q}</span>
                <span className={styles.chev} aria-hidden="true" />
              </summary>
              <div className={styles.a}>
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
