# Prysmn Demo Engine

Automated demo site generator for Australian trades businesses. Hermes (or any system) POSTs business data to the deploy API, and a custom demo site is instantly deployed on Vercel.

## How It Works

```
Hermes POST /api/deploy  →  Vercel creates new deployment  →  Returns preview URL
```

Each deployment is a fully branded, responsive single-page website for the target business — ready to share with prospects.

## Deploy API

### POST `/api/deploy`

Creates a new Vercel preview deployment with custom business data.

**Required fields:**
| Field | Type | Example |
|---|---|---|
| `business_name` | string | "Luke Ginger Plumbing" |
| `phone` | string | "0402 613 075" |
| `suburb` | string | "Melton" |
| `state` | string | "VIC" |

**Optional fields:**
| Field | Type | Example |
|---|---|---|
| `services` | array | `[{"name":"Emergency Plumbing","description":"24/7 callouts"}]` |
| `brand_color` | string | "#0078d4" |
| `service_areas` | array | `["Melton","Bacchus Marsh"]` |
| `tagline` | string | "Your local plumbing experts" |
| `email` | string | "info@example.com.au" |
| `year_founded` | string | "15+" |
| `owner_name` | string | "Luke" |
| `license_number` | string | "Lic #12345" |
| `description` | string | Business description |
| `about_text` | string | About section text |
| `testimonials` | array | `[{"name":"Sarah","text":"Great!","rating":5,"suburb":"Melton"}]` |

### Example Request

```bash
curl -X POST https://prysmn-demo-engine.vercel.app/api/deploy \
  -H "Content-Type: application/json" \
  -d '{
    "business_name": "Luke Ginger Plumbing",
    "phone": "0402 613 075",
    "suburb": "Melton",
    "state": "VIC",
    "services": [
      {"name": "Emergency Plumbing", "description": "24/7 fast response"},
      {"name": "Hot Water Systems", "description": "Install & repair"}
    ],
    "brand_color": "#0078d4",
    "service_areas": ["Melton", "Bacchus Marsh", "Caroline Springs"]
  }'
```

### Response

```json
{
  "status": "deploying",
  "message": "Creating demo site for Luke Ginger Plumbing",
  "slug": "luke-ginger-plumbing",
  "previewUrl": "https://luke-ginger-plumbing-abc123.vercel.app"
}
```

## Setup

1. Clone and install:
   ```bash
   git clone https://github.com/Low3ndDev/prysmn-demo-engine.git
   cd prysmn-demo-engine
   bun install
   ```

2. Create `.env.local` (copy `.env.example`):
   ```bash
   cp .env.example .env.local
   # Edit with your Vercel API token and project ID
   ```

3. Push to GitHub and import to Vercel

4. In Vercel project settings, add env vars:
   - `VERCEL_API_TOKEN` — your Vercel API token
   - `VERCEL_PROJECT_ID` — the Vercel project ID
   - `VERCEL_TEAM_ID` — (if using a team)

5. Deploy!

## Local Development

```bash
bun run dev
```

The template will render with the default env vars. Edit `.env.local` to test different businesses.

## Architecture

- **Template**: Next.js 16 single-page app, reads from `NEXT_PUBLIC_*` env vars
- **Deploy API**: `/api/deploy` route calls Vercel REST API to create preview deployments
- **Branding**: Brand color is applied via CSS custom property (`--brand-color`)
- **Zero AI credits**: Template-based, no AI generation needed per deployment
