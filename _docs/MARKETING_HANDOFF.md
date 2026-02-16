# San Marco Dental - Multilingual Landing Pages
## Marketing Team Handoff Document
**Date:** February 16, 2026
**Brand:** San Marco Dental Clinic
**Domain:** albaniandentalclinic.com
**Repository:** https://github.com/xyVar/albaniandentalclinic.com

---

## Live Landing Pages

| Language | URL | Target Market | Country Code | Status |
|----------|-----|---------------|--------------|--------|
| **English** | https://albaniandentalclinic.com | UK / Ireland | GB | LIVE |
| **German** | https://albaniandentalclinic.com/deutsch/ | Germany, Austria, Switzerland | DE | LIVE |
| **Dutch** | https://albaniandentalclinic.com/dutch/ | Netherlands, Belgium | NL | LIVE |
| **Spanish** | https://albaniandentalclinic.com/espagnol/ | Spain | ES | LIVE |
| **Polish** | https://albaniandentalclinic.com/poland/ | Poland | PL | LIVE |

### Separate Domains (NOT in this repo)
| Language | Domain | Repository |
|----------|--------|------------|
| **French** | sanmarcodental.fr | Separate repo |
| **Italian** | clinicadentalealbania.it | Separate repo |

---

## Branding

- **Brand Name:** San Marco Dental / San Marco Dental Clinic
- **Logo:** Lion crest (sanmarco-logo.jpg)
- **Email:** contact@sanmarcodental.fr (ALL pages)
- **Phone:** +372 5445 0188
- **WhatsApp:** +372 5445 0188 (wa.me/37254450188)
- **Address:** Rruga e Dibres, Kompleksi Arlis, Kati 1, Tirana, Albania

### Social Media
- **Instagram:** https://www.instagram.com/sanmarcodental/
- **Facebook:** https://www.facebook.com/profile.php?id=61579720681623
- **YouTube:** https://www.youtube.com/@sanmarcodental

---

## Tracking & Analytics (Same across ALL 5 pages)

### Google Tag
- **Tag ID:** `GT-WRDQC73Q`
- **GA4 Measurement ID:** `G-74JG2X3NB8` (routed through GT tag)
- **Google Ads Account:** `AW-17825998174`
- **Enhanced Conversions:** Enabled

### Meta Pixel
- **Pixel ID:** `1140066248291201`
- **CAPI:** Enabled (Direct Graph API + Zapier webhook backup)
- **Deduplication:** Yes, via `event_id` (prefix: `smd_`)

### Consent Mode v2
All markets: granted by default (no cookie banner)

---

## Lead Generation Events (Google Standard Funnel)

**IMPORTANT:** All event names are in English across ALL language pages for consistent GA4 reporting.

| Event Name | Trigger | Google Ads | Meta Pixel | Value |
|------------|---------|------------|------------|-------|
| `generate_lead` | Form submit / PDF download / Booking Step 2 | PRIMARY | `Lead` | EUR 1 |
| `close_convert_lead` | Booking Step 3 (EUR 100 deposit) | PRIMARY | `Lead` | EUR 100 |
| `click_phone` | Phone number clicked | SECONDARY | - | - |
| `click_whatsapp` | WhatsApp button clicked | PRIMARY | - | - |

### Event Labels (consistent English across all pages)
| Label | Used In |
|-------|---------|
| `Phone Click` | Phone number tap |
| `WhatsApp Click` | WhatsApp button tap |
| `Quote Simulator` | Cost calculator modal |
| `City Selection` | Flight search city picker |
| `Google Reviews` | Google Reviews link |
| `PDF Downloaded` | Quote PDF generated |
| `Booking` | Booking modal |
| `Flight Search` | Flight search modal |

---

## CRM Integration

- **Endpoint:** https://crm.clinicadentalealbania.it/api/v1/leads/import
- **Lead Source Field:** `paese_provenienza` (set per language page)

| Page | `paese_provenienza` Value |
|------|--------------------------|
| English | `GB` |
| German | `DE` |
| Dutch | `NL` |
| Spanish | `ES` |
| Polish | `PL` |

This allows filtering leads in the CRM by source country.

---

## Meta Campaign Setup (per language)

### Ad Account Structure
Each language page should have its own ad set targeting the respective country/language.

### Recommended UTM Parameters
```
?utm_source=facebook&utm_medium=paid&utm_campaign={campaign_name}&utm_content={ad_name}
```

### Landing Page URLs for Ads

| Target | URL |
|--------|-----|
| UK/Ireland | `https://albaniandentalclinic.com/?utm_source=facebook&utm_medium=paid&utm_campaign=uk_leads` |
| Germany/Austria/Switzerland | `https://albaniandentalclinic.com/deutsch/?utm_source=facebook&utm_medium=paid&utm_campaign=de_leads` |
| Netherlands/Belgium | `https://albaniandentalclinic.com/dutch/?utm_source=facebook&utm_medium=paid&utm_campaign=nl_leads` |
| Spain | `https://albaniandentalclinic.com/espagnol/?utm_source=facebook&utm_medium=paid&utm_campaign=es_leads` |
| Poland | `https://albaniandentalclinic.com/poland/?utm_source=facebook&utm_medium=paid&utm_campaign=pl_leads` |

### Meta Pixel Events to Track in Ads Manager
1. **PageView** - fires on every page load
2. **Lead** - fires on form submission (browser-side)
3. **Lead** - fires via CAPI (server-side, deduplicated)

### Custom Conversions to Create
| Name | Event | Rule | Value |
|------|-------|------|-------|
| Quote Request | Lead | URL contains page path | EUR 1 |
| Booking Complete | Lead | URL contains page path + booking step 3 | EUR 100 |

---

## Page Features (identical across all 5 languages)

### Hero Section
- San Marco Dental Clinic heading
- Brand logos strip (Straumann, Megagen, JD Dental, Tecom, Osstem)
- Trust bar (4.8/5 Google, 2,847 patients, 5 Year Warranty)
- Clinic photo carousel (14 slides)

### How It Works (5 Steps)
1. **Free Consultation** - Video + description
2. **Treatment** - Video + description
3. **Your Apartment** - Photo carousel (10 images of partner apartment)
4. **Tirana Experience** - Photo carousel (7 images of Tirana)
5. **Booking** - Integrated booking form

### Pricing Section
- Dental Implants (from EUR 300)
- Dental Crowns (from EUR 100)
- Full Arch / All-on-4 (from EUR 3,500)

### Cost Calculator
Interactive tool where users add treatments and get instant PDF estimate.

### Flight Search
Embedded Skyscanner search for flights to Tirana from local cities.

### Booking System
3-step booking: Documents → Personal Details → Payment (EUR 100 deposit via Wise).

### Tirana Experience
Tourist guide with attractions, restaurants, support info, and trip planner.

### Reviews
Google Reviews carousel (7 reviews, 4.8/5 average).

### Estella Video Testimonial
YouTube Short of Estera from London with translated subtitles overlay.

---

## Deployment Info

### Hosting
- **Platform:** Firebase Hosting
- **Project:** albaniandentalclinic
- **Custom Domain:** albaniandentalclinic.com

### Deploy Command
```bash
cd "landing page - multilingual"
firebase deploy
```
Single command deploys ALL 5 language pages simultaneously.

### Repository
- **GitHub:** https://github.com/xyVar/albaniandentalclinic.com
- **Branch:** main
- **Secrets:** `_config/secrets.js` (gitignored, must exist on deploy machine)

---

## Change Log

### February 16, 2026
- Full content translation of DE/NL/ES/PL (product descriptions, calculator, booking, reviews, Tirana experience)
- Fixed tracking event labels to consistent English across all pages
- Fixed country codes (paese_provenienza) for CRM lead routing
- Fixed iPhone detection bug in Spanish page
- Fixed footer logo sizing
- Standardized email to contact@sanmarcodental.fr everywhere
- Deployed all pages

### February 15, 2026
- Full structural sync of DE/NL/ES/PL with English reference page
- Added Step 01/02 videos, removed Treatment Phases section
- Updated YouTube/Instagram to @sanmarcodental
- Added keywords meta tags for SEO
- Fixed CSS layout consistency

### February 14, 2026
- Complete rebrand from Albanian Dental Clinic (ADC) to San Marco Dental
- San Marco logo in navbar (desktop + mobile) across all pages
- Removed hero price boxes, replaced with brand logos strip
- Updated all meta tags, Schema.org, OG tags
- Added favicon (San Marco lion crest)
- Synced carousels (apartment + Tirana) to all language pages
- Added Estella video with translated subtitles
- Removed "About Us" from navigation
- Fixed GitGuardian secret exposure (moved to _config/secrets.js)

### January 6, 2026
- Fixed Google Tag ID (G- → GT-) across all pages
- GA4 receiving data correctly

### December 31, 2025
- Initial deployment of all language subfolders
