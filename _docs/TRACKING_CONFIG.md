# Albanian Dental Clinic - Tracking Configuration
**Site:** albaniandentalclinic.com (Multilingual)
**Last Updated:** December 31, 2025

---

## Google Analytics 4
- **Measurement ID:** G-74JG2X3NB8
- **Property ID:** 513486226

## Google Ads
- **Account ID:** AW-17825998174
- **Account Name:** Dental Clinic Albania (957-554-3527)

## Meta Pixel
- **Pixel ID:** 1140066248291201

## CRM
- **Endpoint:** https://crm.clinicadentalealbania.it/api/v1/leads/import

## Firebase
- **Project:** albaniandentalclinic
- **Live URL:** https://albaniandentalclinic.com

---

## Language Subfolders

| Language | Path | Status |
|----------|------|--------|
| English | `/` (root) | LIVE |
| German | `/deutsch/` | LIVE |
| French | `/french/` | LIVE |
| Spanish | `/espagnol/` | LIVE |
| Dutch | `/dutch/` | LIVE |
| Polish | `/poland/` | LIVE |

All subfolders use the same GA4 ID (G-74JG2X3NB8) and event names.

---

## Lead Generation Funnel (Google Standard Events)

**IMPORTANT:** These match Google's Lead Generation Funnel. DO NOT change without updating HTML and Google Ads imports.

| Event | Trigger | Google Ads |
|-------|---------|------------|
| `generate_lead` | Form submit, PDF download, Booking Step 2 | PRIMARY |
| `working_lead` | Tirana itinerary sent | SECONDARY |
| `close_convert_lead` | Booking Step 3 complete | PRIMARY |
| `click_phone` | Phone number clicked | SECONDARY |
| `click_whatsapp` | WhatsApp button clicked | PRIMARY |

---

## Google Ads Conversions (Imported from GA4)

| Conversion | Type | Value | Status |
|------------|------|-------|--------|
| `generate_lead` | PRIMARY | EUR 1 | ACTIVE |
| `close_convert_lead` | PRIMARY | EUR 100 | ACTIVE |
| Calls from Ads | PRIMARY | - | ACTIVE |

---

## Deployment

```bash
cd "landing page - multilingual"
firebase deploy
```

**Last Deploy:** December 31, 2025

---

## Tracking History

### December 31, 2025
- Deployed all language subfolders
- Verified GA4 ID correct in all 6 language files
- Verified event names correct (generate_lead, close_convert_lead, working_lead)
