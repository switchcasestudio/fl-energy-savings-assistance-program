import { useEffect, useRef } from 'react';

/**
 * Reveals an element when it scrolls into view by toggling
 * the `io-hidden` / `io-visible` classes defined in global.css.
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
