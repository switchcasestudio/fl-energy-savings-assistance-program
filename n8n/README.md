# n8n — Monthly Client Insights

Automated monthly report combining GA4 analytics + Netlify form submissions, emailed to the client on the 1st of each month at 9:00.

## Import

1. Open n8n → **Workflows** → **Import from File**
2. Select `monthly-insights.workflow.json`
3. Save (don't activate yet — credentials needed first)

## Required credentials

### 1. Google Analytics Data API

Two parts — service account in Google Cloud, then n8n credential.

**In Google Cloud Console:**
1. Create a project (or use existing)
2. Enable the **Google Analytics Data API**
3. Create a service account → **Keys** → **Add key** → JSON. Download the file.

**In Google Analytics (admin):**
1. Property → **Property Access Management** → add the service account email as **Viewer**

**In n8n:**
1. **Credentials** → **New** → **Google API**
2. Authentication: **Service Account**
3. Paste the service account email + private key from the JSON file
4. Save

### 2. Netlify (optional — for form submission counts)

1. Netlify → **User settings** → **Applications** → **Personal access tokens** → **New**
2. Copy the token (starts with `nfp_...`)
3. Set as n8n env var (next section)

### 3. SMTP (for sending the email)

n8n → **Credentials** → **New** → **SMTP**. Use any provider (Postmark, Resend, SendGrid, your own mailbox).

## Required environment variables

Set these in n8n (`Settings` → `Environment Variables`, or via `.env` if self-hosted):

| Variable | Value | How to get it |
|---|---|---|
| `GA4_PROPERTY_ID` | numeric, e.g. `123456789` | GA4 → Admin → Property Settings → Property ID |
| `NETLIFY_PAT` | `nfp_...` | Netlify user settings (above) |
| `NETLIFY_SITE_ID` | UUID | Netlify → Site → Site configuration → Site ID |
| `CLIENT_EMAIL` | recipient | — |
| `REPORT_FROM_EMAIL` | sender | must match SMTP credential |

## Test before activating

1. Open the workflow
2. Click **Execute Workflow** (manually triggers, ignores schedule)
3. Verify the email arrives and looks right
4. Check each node's output if anything fails — most failures are auth or property-ID typos

## Activate

Toggle the workflow to **Active**. It will fire on the 1st of every month at 09:00 in the timezone configured in n8n's settings.

## Customizing

- **Different schedule:** edit the cron expression in the Schedule node. `0 9 1 * *` = 9 AM on the 1st.
- **Add metrics:** edit the `metrics` array in the GA4 HTTP nodes ([full list](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#metrics))
- **Send to Slack instead:** swap the Email node for a Slack node, point at the rendered HTML or build a blocks payload
- **PDF output:** add a node like `n8n-nodes-puppeteer` to convert the HTML to PDF before sending
