import { useT } from '../../i18n/LanguageContext.js';
import useReveal from '../../hooks/useReveal.js';
import useAmbientVideo from '../../hooks/useAmbientVideo.js';
import { HERO_IMAGE, HERO_VIDEO } from '../../lib/media.js';
import styles from './Hero.module.css';

function Hero() {
  const { t } = useT();
  const video = useAmbientVideo();
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
            {t('hero.eyebrow')}
          </span>
          <h1 ref={titleRef} className={styles.title}>
            {t('hero.titlePart1')} <em>{t('hero.titleEm')}</em>
          </h1>
          <p ref={ledeRef} className={styles.lede}>
            {t('hero.lede')}
          </p>

          <div ref={metaRef} className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaNum}>
                <span>$</span>0
              </span>
              <span className={styles.metaLabel}>{t('hero.metaDown')}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaNum}>
                100<span>%</span>
              </span>
              <span className={styles.metaLabel}>{t('hero.metaFinancing')}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaNum}>3</span>
              <span className={styles.metaLabel}>{t('hero.metaPrograms')}</span>
            </div>
          </div>
        </div>

        <figure ref={figureRef} className={styles.figure}>
          {/* Source order matters: the browser takes the first <source> whose
              media and type both match, so WebP must precede JPEG within each
              orientation. */}
          <picture>
            <source
              media={HERO_IMAGE.portrait.media}
              type="image/webp"
              srcSet={HERO_IMAGE.portrait.webp}
              sizes={HERO_IMAGE.portrait.sizes}
            />
            <source
              media={HERO_IMAGE.portrait.media}
              type="image/jpeg"
              srcSet={HERO_IMAGE.portrait.jpg}
              sizes={HERO_IMAGE.portrait.sizes}
            />
            <source
              type="image/webp"
              srcSet={HERO_IMAGE.landscape.webp}
              sizes={HERO_IMAGE.landscape.sizes}
            />
            <img
              className={styles.img}
              src={HERO_IMAGE.fallback}
              srcSet={HERO_IMAGE.landscape.jpg}
              sizes={HERO_IMAGE.landscape.sizes}
              width={HERO_IMAGE.width}
              height={HERO_IMAGE.height}
              alt={t('hero.imageAlt')}
              fetchpriority="high"
              decoding="async"
            />
          </picture>

          {/* Decorative only — it shows the same house as the <img> above, so
              it is hidden from assistive tech and the alt text is not
              duplicated. No `autoplay` attribute: useAmbientVideo starts it,
              and only when reduced motion is not requested. */}
          <video
            ref={video.ref}
            className={`${styles.video} ${video.ready ? styles.videoReady : ''}`}
            muted
            loop
            playsInline
            preload="none"
            tabIndex={-1}
            aria-hidden="true"
          >
            <source src={HERO_VIDEO.webm} type="video/webm" />
            <source src={HERO_VIDEO.mp4} type="video/mp4" />
          </video>

          <span className={styles.scrim} aria-hidden="true" />
          <figcaption className={styles.caption}>{t('hero.caption')}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Hero;
