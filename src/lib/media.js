/**
 * Hero image definition. Shared by the Hero component and the prerender
 * script, which emits a matching <link rel="preload" imagesrcset> so the
 * browser starts the LCP fetch before it has parsed the app bundle.
 *
 * ⚠️ RECOMMENDED NEXT STEP: replace this with a self-hosted photo.
 * Two reasons, in order of importance:
 *   1. A third-party image host adds a DNS + TLS handshake in front of the
 *      single most important pixel on the page.
 *   2. A stock photo used on thousands of other sites contributes nothing to
 *      image search or to the E-E-A-T signal that you do this work in Florida.
 *      One real photo of a completed local install outperforms it on both.
 * Drop the file in /public/ and change `src`/`srcSet` to local paths.
 */

const UNSPLASH_ID = 'photo-1647579350413-a6ada4e480ed';
const BASE = `https://images.unsplash.com/${UNSPLASH_ID}?auto=format&fit=crop&q=72`;

export const HERO_IMAGE = {
  src: `${BASE}&w=1000`,
  srcSet: [640, 800, 1000, 1400, 1800].map((w) => `${BASE}&w=${w} ${w}w`).join(', '),
  sizes: '(max-width: 900px) 92vw, 44vw',
  width: 1000,
  height: 1250,
  // Origins the prerendered <head> should preconnect to. Empty this array
  // once the image is self-hosted.
  preconnect: ['https://images.unsplash.com'],
};
