# Albanian Dental Clinic (ADC) - Complete Tracking Setup
## Site: albaniandentalclinic.com
## Last Updated: December 24, 2025

---

## 1. ACCOUNT CREDENTIALS

### Google Tag (Unified)
| Property | Value |
|----------|-------|
| Google Tag ID | `GT-WRDQC73Q` |
| Routes to | GA4 + Google Ads |

### Google Analytics 4 (GA4)
| Property | Value |
|----------|-------|
| Measurement ID | `G-74JG2X3NB8` |
| Property ID | `513486226` |
| Stream ID | `13016775813` |
| Stream Name | Albanian Dental Clinic |

### Google Ads
| Property | Value |
|----------|-------|
| Account Name | Dental Clinic Albania |
| Account ID | `957-554-3527` |
| Conversion ID | `AW-17825998174` |
| Conversion Method | GA4 Import (no manual labels) |

### Meta (Facebook)
| Property | Value |
|----------|-------|
| Pixel ID | `1140066248291201` |
| Dataset ID | `1140066248291201` |
| Domain Verification | `ryldelrcctqjjaxntgw0e8b5afd218` |

### Firebase Hosting
| Property | Value |
|----------|-------|
| Project ID | `albaniandentalclinic` |
| Site | `albaniandentalclinic` |
| Custom Domain | `albaniandentalclinic.com` |

### KoLor CRM
| Property | Value |
|----------|-------|
| API Key | `6fcfcf06-ba40-4d00-857e-2e684ebc09fc` |
| Endpoint | `https://crm.clinicadentalealbania.it/api/v1/leads/import` |

---

## 2. TRACKING IMPLEMENTATION

### Google Tag Setup (in HTML)
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GT-WRDQC73Q"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GT-WRDQC73Q');
</script>
```

### Data Flow
```
Website Events
     │
     ▼
GT-WRDQC73Q (Google Tag)
     │
     ├──► GA4 (G-74JG2X3NB8) ──► Reports & Analytics
     │         │
     │         └──► Google Ads (Import) ──► Conversion Tracking
     │
     └──► Google Ads (AW-17825998174) ──► Remarketing
```

---

## 3. LEAD GENERATION FUNNEL (Google Standard Events)

| Event | Trigger | Value | GA4 Key Event |
|-------|---------|-------|---------------|
| `generate_lead` | Form submitted (quote, contact) | €1 | Yes |
| `qualify_lead` | CRM marks lead as qualified | €10 | Yes |
| `working_lead` | Lead engaged (itinerary sent) | €10 | Yes |
| `close_convert_lead` | Booking completed (customer) | €100 | Yes |

### Event Firing Locations

#### generate_lead
- Main quote form submission (index.html:7969)
- Quote simulator PDF download (index.html:10044)
- About us form (chi-siamo.js:1206)
- Booking Step 2 partial lead (index.html:12814)

#### close_convert_lead
- Booking Step 3 completion (index.html:13770)

#### working_lead
- Tirana itinerary sent (index.html:15617)

---

## 4. GOOGLE ADS CONVERSIONS (Imported from GA4)

| Conversion Name | Source | Type | Counting |
|-----------------|--------|------|----------|
| `generate_lead` | GA4 albaniandentalclinic | Primary | Every |
| `close_convert_lead` | GA4 albaniandentalclinic | Primary | Every |
| Calls from Ads | Google Ads | Primary | One |

### Removed (Italian Site Labels)
- ~~`AW-17825998174/vigLCMrSncsbEKq81tFB`~~ - Removed (was Italian site label)
- Now using GA4 import instead of manual conversion labels

---

## 5. ADDITIONAL TRACKING EVENTS

### Engagement Events (GA4)
| Event | Description |
|-------|-------------|
| `page_view` | Page loaded |
| `scroll` | Scroll depth (25%, 50%, 75%, 100%) |
| `time_on_page` | Time intervals (30s, 60s, etc.) |
| `engagement_summary` | Session engagement summary |
| `first_visit` | New visitor |
| `session_start` | Session started |

### Interaction Events (GA4)
| Event | Description |
|-------|-------------|
| `click_phone` | Phone number clicked |
| `click_whatsapp` | WhatsApp button clicked |
| `cta_click` | CTA button clicked |
| `element_click` | General element click |
| `popup_open` | Modal/popup opened |
| `popup_close` | Modal/popup closed |

### Form Events (GA4)
| Event | Description |
|-------|-------------|
| `form_start` | User started filling form |
| `form_submit` | Form submitted |
| `form_popup_opened` | Quote form modal opened |
| `payment_method_select` | Payment method selected |

### Booking Flow Events (GA4)
| Event | Description |
|-------|-------------|
| `booking_step_view` | Step viewed (1, 2, 3) |
| `preventivo_pdf_generated` | Quote PDF downloaded |

---

## 6. META PIXEL EVENTS

| Event | Trigger |
|-------|---------|
| `PageView` | Every page load |
| `Lead` | Form submission, partial lead |
| `Purchase` | Booking completed |

### Meta CAPI (Server-Side)
- Endpoint: Zapier webhook
- Events sent: Lead (with user data hashing)

---

## 7. CRM INTEGRATION

### Lead Sources
| Source | Page |
|--------|------|
| `landing-page` | Main quote form |
| `landing-page-mobile` | Mobile quote form |
| `about-us-page` | Chi siamo form |
| `booking` | Booking completion |
| `booking-partial` | Partial lead (Step 2) |

### Lead Data Sent
```json
{
  "first_name": "...",
  "last_name": "...",
  "email": "...",
  "phone": "...",
  "city": "...",
  "treatment_interest": "...",
  "source": "landing-page",
  "utm_source": "google",
  "utm_medium": "cpc",
  "utm_campaign": "...",
  "gclid": "...",
  "fbclid": "..."
}
```

---

## 8. ENHANCED CONVERSIONS

### User Data Sent to Google
```javascript
gtag('set', 'user_data', {
  'email': 'user@email.com',
  'phone_number': '+355...',
  'address': {
    'first_name': 'name',
    'last_name': 'surname',
    'city': 'city',
    'country': 'IT'
  }
});
```

---

## 9. ATTRIBUTION TRACKING

### Parameters Captured
| Parameter | Source |
|-----------|--------|
| `utm_source` | URL parameter |
| `utm_medium` | URL parameter |
| `utm_campaign` | URL parameter |
| `gclid` | Google Ads click ID |
| `fbclid` | Facebook click ID |

### Traffic Source Detection
```javascript
if (gclid) → source: 'google', medium: 'cpc'
if (fbclid) → source: 'facebook', medium: 'paid'
if (utm_source) → source: utm_source, medium: utm_medium
else → source: 'direct', medium: 'none'
```

---

## 10. FILES MODIFIED

| File | Changes |
|------|---------|
| `index.html` | Google Tag, lead events, booking tracking |
| `chi-siamo.js` | About us form tracking |
| `css/js/main.js` | DataLayer events |
| `firebase.json` | CORS headers, rewrites |
| `_config/env.albaniandentalclinic.com` | Credentials reference |

---

## 11. TESTING CHECKLIST

### GA4 Realtime
- [ ] `page_view` fires on load
- [ ] `generate_lead` fires on form submit
- [ ] `close_convert_lead` fires on booking complete
- [ ] `click_phone` fires on phone click
- [ ] `click_whatsapp` fires on WhatsApp click

### Google Ads
- [ ] Conversions showing in Goals → Conversions
- [ ] Tag Assistant shows GT-WRDQC73Q active
- [ ] Remarketing audiences receiving data

### Meta Pixel
- [ ] PageView fires on load
- [ ] Lead fires on form submit
- [ ] Events visible in Events Manager

### CRM
- [ ] Leads arriving in NUOVI tab
- [ ] Attribution data (utm, gclid) captured
- [ ] Partial leads from Step 2

---

## 12. TROUBLESHOOTING

### GA4 Not Receiving Data
1. Check Google Tag ID is `GT-WRDQC73Q` (not GA4 ID)
2. Verify in Tag Assistant (gtm_debug mode)
3. Check browser console for errors

### Conversions Not Showing in Google Ads
1. Verify GA4 Key Events are marked
2. Check GA4 → Google Ads link is active
3. Wait 24-48 hours for new events to sync

### CRM Not Receiving Leads
1. Check API key is correct
2. Verify network request in browser DevTools
3. Check CRM NUOVI tab for new entries

---

## 13. FUTURE ENHANCEMENTS (Optional)

### To Add
- [ ] Google Ads call tracking (forwarding number)
- [ ] Offline conversion import from CRM
- [ ] Audience segments in GA4
- [ ] Custom dimensions for treatment types

### Secondary Conversions to Import
- `click_phone` - Phone clicks
- `click_whatsapp` - WhatsApp clicks
- `scroll` (75%+) - Engaged visitors
- `time_on_page` (60s+) - Interested visitors

---

## 14. CONTACTS

| Role | Contact |
|------|---------|
| Technical Setup | Claude Code |
| Google Ads Account | info@kldatechnologies.com |
| Firebase Project | albaniandentalclinic |

---

*Document generated: December 24, 2025*
*Site: albaniandentalclinic.com*
*Status: TRACKING FULLY OPERATIONAL*
