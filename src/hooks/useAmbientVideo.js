import { useEffect, useRef, useState } from 'react';

/**
 * Drives a decorative, silent, looping <video> that sits on top of a still.
 *
 * Playback is started from an effect rather than the `autoplay` attribute so
 * that nothing is fetched during the initial page load. The element carries
 * `preload="none"`, so the bytes are requested only once this runs — after
 * hydration, well behind the LCP image.
 *
 * Three things stop it, and in each the still underneath simply stays visible:
 *
 *   1. `prefers-reduced-motion: reduce` — the video is never loaded at all.
 *      Users get the setting honoured, not a video they have to sit through.
 *   2. A rejected `play()` — iOS low-power mode and some data-saver modes
 *      refuse muted autoplay. The promise rejection is expected, not an error.
 *   3. `document.hidden` — no point decoding frames in a background tab.
 *
 * @returns {{ ref: React.RefObject, ready: boolean }} `ready` flips true on
 *   the first `playing` event, which is the cue to fade the video in.
 */
export default function useAmbientVideo() {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    const onPlaying = () => setReady(true);
    node.addEventListener('playing', onPlaying);

    // play() rejects rather than throws when a policy blocks it.
    node.load();
    const attempt = node.play();
    if (attempt && typeof attempt.catch === 'function') {
      attempt.catch(() => {});
    }

    const onVisibility = () => {
      if (document.hidden) {
        node.pause();
      } else {
        const resumed = node.play();
        if (resumed && typeof resumed.catch === 'function') {
          resumed.catch(() => {});
        }
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      node.removeEventListener('playing', onPlaying);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return { ref, ready };
}
