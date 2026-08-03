# SEM / Analytics setup

Everything the site can do in code is done. This file covers the parts that
live in third-party dashboards and cannot be committed.

---

## 1. Environment variable

Netlify → Site settings → Environment variables:

```
VITE_GTM_ID = GTM-XXXXXXX
```

If unset, `src/components/Analytics/Analytics.js` renders nothing — dev and
preview stay clean. Nothing else is needed to install GTM.

---

## 2. Events the site pushes to `dataLayer`

| Event | Fires when | Parameters |
| --- | --- | --- |
| `form_start` | First keystroke in the eligibility form, once per page | `form_name` |
| `form_submission` | Successful POST to Netlify | `form_name`, `program`, `value`, `currency`, `lang`, `gclid`, `utm_source`, `utm_campaign` |
| `conversion_page_view` | `/thank-you/` or `/es/gracias/` renders | `page` |
| `phone_call_click` | Any `tel:` link clicked | `location` = `header` \| `cta` \| `footer` \| `thank_you` |
| `cta_click` | Header "Check eligibility" button | `location` |

`value` on `form_submission` is the program's funding cap (25000 / 55000 /
100000, or 0 for "not sure"). Feed it to Google Ads as the conversion value so
bidding optimizes toward the higher-tier programs instead of treating a
$25k and a $100k lead as identical.

### GTM configuration

1. **Variables** → New → Data Layer Variable for each of: `program`, `value`,
   `currency`, `lang`, `location`, `gclid`, `utm_source`, `utm_campaign`.
2. **Triggers** → Custom Event, one per event name in the table above.
3. **Tags** → GA4 Event tag per trigger, plus the Google Ads conversion tags
   below.

---

## 3. Google Ads conversion actions

Create three, in this order of importance:

| Conversion | Type | Setup |
| --- | --- | --- |
| **Lead — form** | Primary | Fire on `form_submission`. Use `value` from dataLayer, currency USD. Count: **one** |
| **Lead — phone click** | Secondary | Fire on `phone_call_click`. Count: **one**. Mark as secondary — a tel: click is not a verified call |
| **Thank-you page** | Backup | URL contains `/thank-you/` or `/gracias/`. Count: one |

Keep the thank-you URL conversion even though the event conversion exists.
It is the one that keeps working when GTM is misconfigured, when consent mode
blocks the event, or when an ad blocker kills the dataLayer push.

**Do not** set both "Lead — form" and "Thank-you page" as primary, or every
conversion is counted twice and Smart Bidding over-bids accordingly.

### Offline conversion import (highest-value step)

Every Netlify form submission now carries `gclid` / `wbraid` / `gbraid`. When a
lead actually closes, upload the click ID plus the real revenue to Google Ads
(Tools → Conversions → Uploads). This is what moves bidding from "optimize for
form fills" to "optimize for money", and it is the single largest available
improvement to paid performance. The n8n workflow in `n8n/` is the natural
place to automate the upload.

---

## 4. Search Console & Bing

1. **Google Search Console** → add property `https://floridaenergyassistance.com`
   (Domain property, verified via a NameCheap DNS TXT record — covers www and
   all subdomains in one go).
2. Submit `https://floridaenergyassistance.com/sitemap.xml`.
3. Settings → confirm the `/es/` pages are being discovered; hreflang issues
   surface under **Indexing → Pages**.
4. **Bing Webmaster Tools** → import from GSC. Bing feeds ChatGPT search, so
   this matters more for GEO than its market share suggests.

---

## 5. Landing pages for paid campaigns

Send campaign traffic to the page that matches the ad, not the home page:

| Ad theme | Destination |
| --- | --- |
| Generic "$0 down Florida energy" | `/` |
| Single-system / HVAC / windows | `/programs/essential-home-energy-upgrade/` |
| Multi-upgrade | `/programs/whole-home-energy-upgrade/` |
| Solar / full retrofit | `/programs/premium-home-energy-upgrade/` |
| Geo-targeted by metro | `/florida/<county>-county/` |
| Spanish-language campaigns | `/es/…` equivalents |

All of these are prerendered static HTML, so paid traffic hits a fully painted
page rather than waiting on a JS bundle — that alone moves paid conversion rate.

Append UTMs freely; `src/lib/attribution.js` captures them, persists first and
last touch, and posts both with the lead. Tracking parameters do not create
duplicate-content problems: every page carries a self-referencing canonical.

---

## 6. Still to do (needs assets or business input)

- [x] ~~`/public/og-image.png`, `/public/logo.png`, `/public/apple-touch-icon.png`~~
      Generated. Source markup is in `scripts/*.html`; re-render with `npm run og`
      after changing the phone number, headline, or brand colours.
- [ ] **Verify the FAQ answers** flagged `needsOwnerReview: true` in
      `src/data/faq.js`. They assert things about credit handling, program
      authorization, and grant mechanics that the original site never stated.
- [ ] **Confirm the program names.** `Essential` / `Whole-Home` / `Premium` were
      chosen to be searchable replacements for "Program One/Two/Three". If the
      real names differ, change `title` in `src/data/programs.js` and the slugs
      in `src/lib/site.js`.
- [ ] **Business address** — if there is a public office, add `address` to the
      Organization node in `src/lib/seo.js` and switch it to `LocalBusiness`.
      That unlocks local pack eligibility, which a bare Organization cannot get.
- [ ] **Google Business Profile** — the single biggest local-SEO lever not
      available from the codebase.
- [ ] **Self-host the hero image** — see the note in `src/lib/media.js`.
