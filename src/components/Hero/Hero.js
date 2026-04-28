import useReveal from '../../hooks/useReveal.js';
import styles from './Hero.module.css';

function Hero() {
  const eyebrowRef = useReveal({ delay: 0 });
  const titleRef = useReveal({ delay: 100 });
  const ledeRef = useReveal({ delay: 200 });
  const metaRef = useReveal({ delay: 300 });
  const figureRef = useReveal({ delay: 200 });

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div>
          <span ref={eyebrowRef} className="eyebrow">
            Florida Homeowner Programs
          </span>
          <h1 ref={titleRef} className={styles.title}>
            Upgrade your home <em>with our programs.</em>
          </h1>
          <p ref={ledeRef} className={styles.lede}>
            Three programs that help Florida homeowners achieve the projects they
            want - with $0 down, 100% financing, and grants up to $8,000.
          </p>

          <div ref={metaRef} className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaNum}>
                <span>$</span>0
              </span>
              <span className={styles.metaLabel}>Down payment</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaNum}>
                100<span>%</span>
              </span>
              <span className={styles.metaLabel}>Financing available</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaNum}>5</span>
              <span className={styles.metaLabel}>Tailored programs</span>
            </div>
          </div>
        </div>

        <figure ref={figureRef} className={styles.figure} aria-hidden="true">
          <div className={styles.img} />
          {/* <span className={styles.stamp}>Program Verified</span> */}
          <figcaption className={styles.caption}>
            Solar, HVAC, windows &amp; insulation - all eligible upgrades.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Hero;
