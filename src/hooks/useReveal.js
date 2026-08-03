import { useEffect, useRef } from 'react';

/**
 * Reveals an element when it scrolls into view by toggling
 * the `io-hidden` / `io-visible` classes defined in global.css.
 *
 * Elements already inside the viewport when this runs are left alone.
 *
 * That guard matters now that pages are prerendered: the server-rendered HTML
 * paints immediately, and the old behaviour then added `io-hidden` on
 * hydration — blanking content the user could already see and fading it back
 * in after the transition delay. For the hero that meant repainting the LCP
 * element up to ~1.1s late, which is what Core Web Vitals would score as LCP.
 *
 * @param {object} options
 * @param {number} [options.threshold=0.15]
 * @param {string} [options.rootMargin='0px 0px -40px 0px']
 * @param {number} [options.delay=0] - transition delay in ms
 * @returns {React.RefObject}
 */
export default function useReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px',
  delay = 0,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) {
      node.classList.add('io-visible');
      return;
    }

    if (delay) {
      node.style.transitionDelay = `${delay}ms`;
    }
    node.classList.add('io-hidden');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.remove('io-hidden');
            node.classList.add('io-visible');
            observer.unobserve(node);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, delay]);

  return ref;
}
