/**
 * Hero image definition. Shared by the Hero component and the prerender
 * script, which emits matching <link rel="preload"> tags so the browser
 * starts the LCP fetch before it has parsed the app bundle.
 *
 * The files are self-hosted in /public/hero/. They were previously loaded
 * from images.unsplash.com, which put a third-party DNS lookup and TLS
 * handshake in front of the single most important pixel on the page and made
 * the LCP dependent on a host we do not control. Same-origin files also share
 * the existing HTTP/2 connection and pick up the immutable cache header.
 *
 * Regenerate with `python3 scripts/hero-image.py` (see that file for the
 * source photo and licence).
 *
 * Two crops, not one: Hero.module.css renders the figure at aspect-ratio 4/5
 * above 900px and 5/4 below it. A single shape would force the browser to
 * download pixels object-fit crops straight back off — covering a 4:5 box
 * with a 5:4 source needs roughly 1.56x the box width in source pixels.
 */

const DIR = '/hero';

/** Media query boundary — must match the breakpoint in Hero.module.css. */
export const HERO_BREAKPOINT = 900;

function srcSet(name, ext, widths) {
  return widths.map((w) => `${DIR}/hero-${name}-${w}.${ext} ${w}w`).join(', ');
}

const PORTRAIT_WIDTHS = [400, 528, 700, 900, 1100];
const LANDSCAPE_WIDTHS = [480, 700, 900, 1200, 1500];

export const HERO_IMAGE = {
  // Shown above the breakpoint, where the figure is portrait.
  portrait: {
    media: `(min-width: ${HERO_BREAKPOINT + 1}px)`,
    sizes: '44vw',
    webp: srcSet('portrait', 'webp', PORTRAIT_WIDTHS),
    jpg: srcSet('portrait', 'jpg', PORTRAIT_WIDTHS),
  },
  // Shown at and below the breakpoint, where the figure is landscape.
  landscape: {
    media: `(max-width: ${HERO_BREAKPOINT}px)`,
    sizes: '92vw',
    webp: srcSet('landscape', 'webp', LANDSCAPE_WIDTHS),
    jpg: srcSet('landscape', 'jpg', LANDSCAPE_WIDTHS),
  },
  // Final fallback for anything that understands neither <picture> nor srcset.
  fallback: `${DIR}/hero-landscape-1200.jpg`,
  width: 1200,
  height: 960,
};
