# Albanian Dental Clinic - Tracking Status
## albaniandentalclinic.com
## Date: December 24, 2025

---

## COMPLETED

### Google Tag Setup
- [x] Google Tag ID: `GT-WRDQC73Q` (routes to GA4 + Google Ads)
- [x] GA4: `G-74JG2X3NB8`
- [x] Google Ads: `AW-17825998174` (Account: 957-554-3527)
- [x] Removed Italian conversion label (`vigLCMrSncsbEKq81tFB`)

### GA4 Key Events Created
- [x] `generate_lead` - Form submissions (working, has stream data)
- [x] `close_convert_lead` - Booking completed (created, awaiting stream data)
- [x] `qualify_lead` - CRM qualification (created)
- [x] `purchase` - Purchase event (created)

### Google Ads Conversions Imported
- [x] `generate_lead` - Primary conversion
- [x] `close_convert_lead` - Primary conversion
- [x] Calls from Ads - Primary conversion

### Code Changes
- [x] Changed `lead_submit` to `generate_lead` (Google standard event)
- [x] Added `close_convert_lead` for booking completion
- [x] Added `working_lead` for Tirana itinerary
- [x] Enhanced conversions with user data
- [x] Deployed to Firebase

---

## PENDING / NEXT SESSION

### 1. Secondary Conversions to Import (Google Ads)
Import these from GA4 as **Secondary** conversions:
- [ ] `click_phone` - Phone clicks
- [ ] `click_whatsapp` - WhatsApp clicks
- [ ] `whatsapp_click` - WhatsApp widget clicks

### 2. Call Tracking Setup
- [ ] Set up "Calls from website visits" in Google Ads
- [ ] Add Google forwarding number snippet to website
- [ ] Configure call duration threshold

### 3. GA4 Stream Data Issue
- [ ] `close_convert_lead` shows "No stream data detected"
- [ ] Wait 24-48 hours for sync, or delete and recreate from Recent Events
- [ ] Verify by completing another test booking

### 4. Create Language Folders
- [ ] /pl/ - Polish
- [ ] /de/ - German (Deutsch)
- [ ] /es/ - Spanish
- [ ] /nl/ - Dutch
- [ ] /fr/ - French

### 5. Optional Enhancements
- [ ] Import offline conversions from CRM to Google Ads
- [ ] Set up GA4 audiences for remarketing
- [ ] Add custom dimensions for treatment types
- [ ] Configure engagement conversions (scroll 75%, time 60s+)

---

## QUICK REFERENCE

### Credentials
```
Google Tag:     GT-WRDQC73Q
GA4:            G-74JG2X3NB8
Google Ads:     AW-17825998174
Meta Pixel:     1140066248291201
CRM API Key:    6fcfcf06-ba40-4d00-857e-2e684ebc09fc
Firebase:       albaniandentalclinic
```

### Event Mapping
```
Form Submit     → generate_lead
Booking Done    → close_convert_lead
Itinerary Sent  → working_lead
Phone Click     → click_phone
WhatsApp Click  → click_whatsapp
```

### Test URLs
- Live: https://albaniandentalclinic.com
- Debug: https://albaniandentalclinic.com/?gtm_debug=1
- Tag Assistant: https://tagassistant.google.com

### Console Logs to Watch
```
✅ GA4 generate_lead fired
✅ GA4 close_convert_lead fired
✅ Booking sent to CRM
📊 Enhanced conversion user_data set
```

---

## FILES MODIFIED THIS SESSION
- `index.html` - Lead events, booking tracking
- `chi-siamo.js` - Form tracking
- `css/js/main.js` - DataLayer events
- `_config/env.albaniandentalclinic.com` - Updated credentials
- `firebase.json` - CORS headers

---

## NOTES
- Italian conversion label was REMOVED (was wrong account)
- Using GA4 import for conversions (cleaner than manual labels)
- CRM receives leads with full attribution (utm, gclid, fbclid)
- Enhanced conversions enabled for better matching

---

*Last updated: December 24, 2025*
*Status: TRACKING OPERATIONAL - Minor pending items*
