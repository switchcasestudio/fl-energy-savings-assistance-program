/**
 * Renders the static brand images in scripts/*.html to PNGs in public/.
 *
 * Run with: npm run og
 *
 * These are checked-in binaries that other things depend on (Open Graph tags,
 * Organization JSON-LD, the iOS home-screen icon), so the source markup lives
 * beside them — changing the phone number or headline is an HTML edit plus a
 * re-run, not a trip to a design tool.
 *
 * Uses the locally installed Chrome in headless mode; no npm dependency.
 */

import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const CHROME_CANDIDATES = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
];

const ASSETS = [
  { src: 'og-image.html', out: 'og-image.png', width: 1200, height: 630 },
  { src: 'logo.html', out: 'logo.png', width: 600, height: 200 },
  { src: 'apple-touch-icon.html', out: 'apple-touch-icon.png', width: 180, height: 180 },
];

const chrome = CHROME_CANDIDATES.find((p) => existsSync(p));
if (!chrome) {
  console.error('No Chrome/Chromium found. Checked:\n  ' + CHROME_CANDIDATES.join('\n  '));
  process.exit(1);
}

for (const asset of ASSETS) {
  const srcPath = path.join(__dirname, asset.src);
  const outPath = path.join(ROOT, 'public', asset.out);

  execFileSync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--force-device-scale-factor=1',
      `--window-size=${asset.width},${asset.height}`,
      `--screenshot=${outPath}`,
      // Webfonts are fetched from Google Fonts; give the network time to settle
      // before the capture, or the text renders in the fallback stack.
      '--virtual-time-budget=8000',
      `file://${srcPath}`,
    ],
    { stdio: ['ignore', 'ignore', 'ignore'] }
  );

  console.log(`✓ public/${asset.out} (${asset.width}×${asset.height})`);
}
