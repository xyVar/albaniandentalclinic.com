# San Marco Dental - UK Campaign Tracking Configuration
**Site:** sanmarcodental.com (English - UK/Ireland)
**Brand:** San Marco Dental Clinic
**Last Updated:** February 14, 2026

---

## Target Markets
- **Current:** London, Manchester, Edinburgh (UK)
- **April 2026:** Birmingham, Liverpool, Dublin (Ireland)
- **Country Code:** GB
- **Currency:** EUR

---

## Google Tag (USE THIS IN HTML)
- **Google Tag ID:** GT-WRDQC73Q
- **IMPORTANT:** Use `GT-WRDQC73Q` in HTML, NOT `G-74JG2X3NB8`

## Google Analytics 4
- **Measurement ID:** G-74JG2X3NB8 (routed via Google Tag)
- **Property ID:** 513486226
- **Note:** G-74JG2X3NB8 returns 404 if loaded directly - must use GT-WRDQC73Q

## Google Ads
- **Account ID:** AW-17825998174
- **Account Name:** Dental Clinic Albania (957-554-3527)
- **Enhanced Conversions:** ENABLED
- **Conversion Import:** From GA4 events

## Meta Pixel
- **Pixel ID:** 1140066248291201
- **CAPI (Server-side):** Direct Graph API + Zapier webhook (dual tracking)
- **Zapier Webhook:** `https://hooks.zapier.com/hooks/catch/24843962/uz6apko/`
- **CAPI Access Token:** Configured in `sendMetaCAPI()` function

## CRM
- **Endpoint:** https://crm.clinicadentalealbania.it/api/v1/leads/import
- **Note:** CRM URL stays as clinicadentalealbania.it (backend API)

## Firebase
- **Project:** albaniandentalclinic
- **Live URL:** https://sanmarcodental.com

---

## Consent Mode v2
- **UK/Ireland:** All granted by default (no cookie banner required)
  - `ad_storage`: granted
  - `analytics_storage`: granted
  - `ad_user_data`: granted
  - `ad_personalization`: granted

---

## Correct HTML Code

```html
<!-- Consent Mode v2 -->
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
    'ad_storage': 'granted',
    'analytics_storage': 'granted',
    'ad_user_data': 'granted',
    'ad_personalization': 'granted'
});
</script>

<!-- Google Tag (GA4 + Google Ads) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GT-WRDQC73Q"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GT-WRDQC73Q', {
    'send_page_view': true,
    'allow_google_signals': true,
    'allow_ad_personalization_signals': true,
    'cookie_flags': 'SameSite=None;Secure'
});
gtag('config', 'AW-17825998174', {
    'allow_enhanced_conversions': true
});
</script>

<!-- Meta Pixel -->
<script>
!function(f,b,e,v,n,t,s){...}
fbq('init', '1140066248291201');
fbq('track', 'PageView');
</script>
```

---

## Lead Generation Funnel (Google Standard Events)

**IMPORTANT:** These match Google's Lead Generation Funnel and the Italian campaign (Team Kosta Rudi). DO NOT change without updating HTML and Google Ads imports.

| Event | Trigger | Google Ads | Value |
|-------|---------|------------|-------|
| `generate_lead` | Form submit, PDF download, Booking Step 2 | PRIMARY | EUR 1 |
| `working_lead` | Tirana itinerary sent | SECONDARY | - |
| `close_convert_lead` | Booking Step 3 complete (EUR 100 deposit) | PRIMARY | EUR 100 |
| `click_phone` | Phone number clicked | SECONDARY | - |
| `click_whatsapp` | WhatsApp button clicked | PRIMARY | - |

---

## Google Ads Conversions (Imported from GA4)

| Conversion | Type | Value | Status |
|------------|------|-------|--------|
| `generate_lead` | PRIMARY | EUR 1 | ACTIVE |
| `close_convert_lead` | PRIMARY | EUR 100 | ACTIVE |
| Calls from Ads | PRIMARY | - | ACTIVE |

### Setup Steps for Google Ads
1. Go to Google Ads > Goals > Conversions
2. Click "+ New conversion action" > Import > Google Analytics 4
3. Select `generate_lead` and `close_convert_lead` events
4. Set values as above
5. Enable Enhanced Conversions for Leads in account settings

---

## Meta Tracking (Dual: Browser Pixel + Server CAPI)

### Browser-side Events
- `PageView` - on page load
- `Lead` - on form submit (quote request)
- `Lead` - on booking completion

### Server-side CAPI Events
- Sent via direct Graph API call from `sendMetaCAPI()` function
- Also sent via Zapier webhook as backup
- Event deduplication via `event_id` (prefix: `smd_`)
- User data hashed with SHA-256 for matching

### CAPI Verification Steps
1. Go to Meta Events Manager > Pixel 1140066248291201
2. Check "Test Events" tab
3. Submit a test lead on the site
4. Verify both browser AND server events appear
5. Check deduplication is working (same event_id)

---

## CRM Integration

### Form Fields Mapping
| HTML Field | CRM Field | Notes |
|------------|-----------|-------|
| `first_name` + `last_name` | `nome` | Combined name |
| `telefono` | `telefono` | Phone with country code |
| `email` | `email` | Optional |
| `treatment` | `trattamento` | Selected treatment |
| `message` | `note` | User message |
| `paese_provenienza` | `paese_provenienza` | Set to "GB" |
| `source` | `piattaforma` | Traffic source |

### Lead Flow
```
User submits form
  ├── 1. Google Ads Enhanced Conversion (user_data set)
  ├── 2. GA4 generate_lead event (with attribution data)
  ├── 3. Meta Pixel Lead event (browser-side)
  ├── 4. Meta CAPI Lead event (server-side via Graph API)
  ├── 5. Meta CAPI via Zapier webhook (backup)
  └── 6. CRM Import (POST to crm.clinicadentalealbania.it)
```

---

## Pre-Deployment Verification Checklist

### Google Analytics 4
- [ ] Open GA4 > Realtime
- [ ] Load the site in a new browser tab
- [ ] Verify `page_view` event appears
- [ ] Submit a test form
- [ ] Verify `generate_lead` event fires
- [ ] Check user properties: country=GB

### Google Ads
- [ ] Go to Google Ads > Conversions
- [ ] Verify `generate_lead` conversion exists (imported from GA4)
- [ ] Verify `close_convert_lead` conversion exists
- [ ] Check Enhanced Conversions is enabled
- [ ] Run Google Tag Assistant on the site to verify tags

### Meta Pixel
- [ ] Open Meta Events Manager
- [ ] Use Test Events with the site open
- [ ] Verify `PageView` fires on load
- [ ] Submit test form, verify `Lead` fires
- [ ] Check CAPI events appear alongside browser events
- [ ] Verify event deduplication (no double counting)

### CRM
- [ ] Submit test lead through the form
- [ ] Check CRM at crm.clinicadentalealbania.it
- [ ] Verify lead appears with correct fields
- [ ] Verify `paese_provenienza` = "GB"
- [ ] Verify phone number format is correct

### Content Verification
- [ ] All branding says "San Marco Dental" (no ADC/CDA/Albanian Dental Clinic)
- [ ] Email is contact@sanmarcodental.fr
- [ ] Phone is +372 5445 0188
- [ ] Country code in form is GB
- [ ] Estella video plays correctly with subtitles
- [ ] Apartment carousel works (10 images)
- [ ] Tirana tour carousel works (7 images)
- [ ] "About Us" removed from navigation

---

## Deployment

```bash
cd "landing page - multilingual"
firebase deploy
```

**Last Deploy:** [TO BE UPDATED]

---

## Meta Lead Ads (Zapier Integration)

- **Meta Page:** San Marco Dental
- **Page ID:** 865244536673113
- **Form Name:** Multi.Form.Lingual
- **Zap Name:** multilingual.crm.adc
- **Status:** WORKING

See `_docs/ZAPIER_META_INTEGRATION.md` for full webhook configuration.

---

## Tracking History

### February 14, 2026
- **MAJOR UPDATE:** Full rebrand from Albanian Dental Clinic to San Marco Dental
- Replaced hero video: Dr. Edlir → Estera from London (YouTube Short)
- Added video subtitles with blue background, white bold text
- Added apartment carousel (Step 03, 10 images)
- Added Tirana tour carousel (Step 04, 7 images)
- Removed "About Us" from navigation
- Updated all branding references (social media, platform tracking, PDF, events)
- Fixed CAPI country code: EU → GB
- All domain references updated to sanmarcodental.com
- CRM endpoint kept as crm.clinicadentalealbania.it (backend API)

### January 6, 2026
- **CRITICAL FIX:** Changed Google Tag from G-74JG2X3NB8 (404 error) to GT-WRDQC73Q (working)
- GA4 now receiving data correctly
- All 6 language sites updated and deployed
- Verified tracking in GA4 Realtime

### January 4, 2026
- Fixed form phone field: `phone` → `telefono` (CRM expects Italian field name)
- Configured Zapier webhook for Meta Lead Ads
- Tested and verified leads flowing from Meta → Zapier → CRM
- Deployed all 6 language sites with phone fix

### December 31, 2025
- Deployed all language subfolders
- Verified event names correct (generate_lead, close_convert_lead, working_lead)
