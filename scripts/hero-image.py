#!/usr/bin/env python3
"""
Regenerates the self-hosted hero images in public/hero/.

    python3 scripts/hero-image.py

Requires Pillow and cwebp:
    pip3 install pillow
    brew install webp

Only needed when the hero photo changes — the outputs are committed, so a
normal build and deploy never runs this.

Source photo: https://unsplash.com/photos/a6ada4e480ed
Used under the Unsplash License, which permits commercial use and does not
require attribution.

Two crops are produced on purpose. Hero.module.css renders the figure at
aspect-ratio 4/5 above 900px and 5/4 below it. Serving one shape to both
means the browser downloads pixels that object-fit immediately crops away —
on the 4:5 box a 5:4 source has to be ~1.56x the box width before it covers.
Art-directing the two crops separately keeps the LCP download honest.
"""

import io
import os
import subprocess
import sys
import urllib.request

SRC = 'https://images.unsplash.com/photo-1647579350413-a6ada4e480ed?fm=jpg&q=95&w=2400'
OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'hero')

# (name, aspect w/h, crop centre x as fraction of source width, widths)
VARIANTS = [
    ('portrait', 4 / 5, 0.542, [400, 528, 700, 900, 1100]),
    ('landscape', 5 / 4, 0.500, [480, 700, 900, 1200, 1500]),
]

JPEG_QUALITY = 78
WEBP_QUALITY = 72

try:
    from PIL import Image
except ImportError:
    sys.exit('Pillow is required: pip3 install pillow')


def crop_to(img, ratio, centre_x):
    """Largest centre-weighted crop of `img` matching w/h == ratio."""
    w, h = img.size
    if w / h > ratio:
        new_w = int(round(h * ratio))
        left = int(round(centre_x * w - new_w / 2))
        left = max(0, min(left, w - new_w))
        return img.crop((left, 0, left + new_w, h))
    new_h = int(round(w / ratio))
    top = max(0, min((h - new_h) // 2, h - new_h))
    return img.crop((0, top, w, top + new_h))


def main():
    os.makedirs(OUT, exist_ok=True)

    print(f'Fetching {SRC[:60]}…')
    with urllib.request.urlopen(SRC) as r:
        source = Image.open(io.BytesIO(r.read())).convert('RGB')
    print(f'  source {source.size[0]}x{source.size[1]}')

    for name, ratio, centre_x, widths in VARIANTS:
        base = crop_to(source, ratio, centre_x)
        for w in widths:
            h = int(round(w / ratio))
            resized = base.resize((w, h), Image.LANCZOS)

            jpg = os.path.join(OUT, f'hero-{name}-{w}.jpg')
            resized.save(jpg, 'JPEG', quality=JPEG_QUALITY, optimize=True, progressive=True)

            webp = os.path.join(OUT, f'hero-{name}-{w}.webp')
            subprocess.run(
                ['cwebp', '-quiet', '-q', str(WEBP_QUALITY), '-m', '6', jpg, '-o', webp],
                check=True,
            )

            print(
                f'  {name} {w}x{h}  '
                f'jpg {os.path.getsize(jpg) // 1024}K  '
                f'webp {os.path.getsize(webp) // 1024}K'
            )


if __name__ == '__main__':
    main()
