# ALBANIAN DENTAL CLINIC - MULTILINGUAL SITE PLAN
## albaniandentalclinic.com

**Created:** December 24, 2025
**Updated:** December 24, 2025
**Status:** Implementation Phase

---

## 1. SITE OVERVIEW

| Setting | Value |
|---------|-------|
| Domain | albaniandentalclinic.com |
| Firebase Project | albaniandentalclinic |
| Template Source | clinicadentalealbania.it (Italian site) |
| Approach | Copy Italian site → Translate to each language |

---

## 2. LANGUAGES & FOLDER STRUCTURE

| Language | Folder Path | Target Countries | Priority |
|----------|-------------|------------------|----------|
| English | / (root) | US, UK, Ireland + countries with direct Tirana Rinas flights | Default |
| Polish | /poland/ | Poland | High |
| German | /deutsch/ | Germany, Austria, Switzerland | High |
| Spanish | /espagnol/ | Spain | Medium |
| Dutch | /dutch/ | Netherlands, Belgium | Medium |
| French | /french/ | France, Belgium, Switzerland | Medium |

### File Structure
```
albaniandentalclinic.com/
│
├── index.html              # English (default)
├── sanmarco.html           # San Marco page (English)
│
├── poland/
│   ├── index.html          # Polish
│   └── sanmarco.html
│
├── deutsch/
│   ├── index.html          # German
│   └── sanmarco.html
│
├── espagnol/
│   ├── index.html          # Spanish
│   └── sanmarco.html
│
├── dutch/
│   ├── index.html          # Dutch
│   └── sanmarco.html
│
├── french/
│   ├── index.html          # French
│   └── sanmarco.html
│
├── images/                 # Shared images (all languages)
│
├── _config/
│   └── env.albaniandentalclinic.com
│
└── _docs/
    └── MULTILINGUAL_SITE_PLAN.md
```

---

## 3. TRACKING CONFIGURATION

### Google Ads
| Setting | Value |
|---------|-------|
| Account Name | Dental Clinic Albania |
| Account ID | 957-554-3527 |
| Google Ads Tag ID | AW-17825998174 |
| Conversion Label | (TO BE CREATED after site is ready) |

### Google Analytics 4
| Setting | Value |
|---------|-------|
| Measurement ID | G-74JG2X3NB8 |
| Property ID | 513486226 |
| Stream ID | 13016775813 |

### Meta Pixel
| Setting | Value |
|---------|-------|
| Pixel ID | (TO BE CONFIRMED) |

---

## 4. IMPLEMENTATION APPROACH

### Correct Order of Operations:
```
1. Copy Italian site structure → English base
2. Update tracking IDs (GA4: G-74JG2X3NB8, Ads: AW-17825998174)
3. Translate content: Italian → English
4. Deploy clean English site
5. Create conversion action in Google Ads → Get label
6. Update code with conversion label
7. Test English site completely
8. Create language folders (copy English → translate)
9. Deploy all languages
```

### DO NOT:
- Add conversion labels before site is properly structured
- Deploy half-finished code
- Mix old code with new structure

---

## 5. GOOGLE ADS CAMPAIGN STRUCTURE

### Campaign: EN - English Speaking
- **Target Countries:** UK, Ireland, USA (cities with direct Tirana flights)
- **Language Setting:** English
- **Landing Page:** albaniandentalclinic.com/
- **Budget:** TBD

### Campaign: PL - Polish Speaking
- **Target Countries:** Poland
- **Cities:** Warsaw, Krakow, Gdansk, Poznan, Wroclaw
- **Language Setting:** Polish
- **Landing Page:** albaniandentalclinic.com/poland/
- **Budget:** TBD

### Campaign: DE - German Speaking
- **Target Countries:** Germany, Austria, Switzerland
- **Cities:** Berlin, Munich, Hamburg, Frankfurt, Vienna, Zurich
- **Language Setting:** German
- **Landing Page:** albaniandentalclinic.com/deutsch/
- **Budget:** TBD

### Campaign: ES - Spanish Speaking
- **Target Countries:** Spain
- **Cities:** Madrid, Barcelona, Valencia, Seville
- **Language Setting:** Spanish
- **Landing Page:** albaniandentalclinic.com/espagnol/
- **Budget:** TBD

### Campaign: NL - Dutch Speaking
- **Target Countries:** Netherlands, Belgium (Dutch)
- **Cities:** Amsterdam, Rotterdam, The Hague, Antwerp
- **Language Setting:** Dutch
- **Landing Page:** albaniandentalclinic.com/dutch/
- **Budget:** TBD

### Campaign: FR - French Speaking
- **Target Countries:** France, Belgium (French), Switzerland (French)
- **Cities:** Paris, Lyon, Marseille, Brussels, Geneva
- **Language Setting:** French
- **Landing Page:** albaniandentalclinic.com/french/
- **Budget:** TBD

---

## 6. TRACKING PATH (Same for all languages)

```
User clicks ad (language-specific campaign)
    ↓
Lands on language-specific page (e.g., /deutsch/)
    ↓
Fills form → triggers form_submit event
    ↓
GA4 receives form_submit (G-74JG2X3NB8)
    ↓
Google Ads imports conversion (AW-17825998174)
    ↓
Campaign reports conversion with language attribution
```

---

## 7. DEVELOPMENT TASKS

### Phase 1: Create English Base (from Italian template)
- [x] Fix Google Ads ID in existing code - DONE Dec 24
- [x] Copy Italian index.html → multilingual index.html - DONE Dec 24
- [x] Copy Italian chi-siamo.html, chi-siamo.js, chi-siamo.css - DONE Dec 24
- [x] Copy Italian terms-conditions.html, 404.html, facebook.html, instagram.html - DONE Dec 24
- [x] Copy images folder from Italian site - DONE Dec 24
- [x] Update tracking IDs (GA4: G-74JG2X3NB8, Ads: AW-17825998174) - DONE Dec 24
- [x] Translate index.html: Italian → English - DONE Dec 24
- [x] Translate chi-siamo.html and chi-siamo.js: Italian → English - DONE Dec 24
- [x] Translate terms-conditions.html: Italian → English - DONE Dec 24
- [x] Translate 404.html, facebook.html, instagram.html - DONE Dec 24
- [x] Update meta tags, title, description for English - DONE Dec 24

### Phase 2: Deploy & Configure Tracking
- [ ] Deploy English version to Firebase
- [ ] Verify GA4 receives events
- [ ] Create conversion action in Google Ads
- [ ] Get conversion label
- [ ] Update code with real conversion label
- [ ] Re-deploy and test conversion tracking

### Phase 3: Create Language Versions
- [ ] Create /poland/ folder + Polish content
- [ ] Create /deutsch/ folder + German content
- [ ] Create /espagnol/ folder + Spanish content
- [ ] Create /dutch/ folder + Dutch content
- [ ] Create /french/ folder + French content

### Phase 4: Final Deployment
- [ ] Deploy all language versions
- [ ] Test each language page
- [ ] Verify tracking on all pages
- [ ] Set up Google Ads campaigns per language

---

## 8. COMPARISON: ITALIAN (Template) vs MULTILINGUAL

| Feature | Italian Site (Template) | Multilingual Site (New) |
|---------|-------------------------|-------------------------|
| Domain | clinicadentalealbania.it | albaniandentalclinic.com |
| Google Ads ID | AW-17619590698 | AW-17825998174 |
| GA4 ID | G-EBGJHF8FDF | G-74JG2X3NB8 |
| Meta Pixel | 1608107910166053 | TBD |
| Languages | Italian only | EN, PL, DE, ES, NL, FR |
| Conversion | form_submit (GA4 import) | form_submit (GA4 import) |
| Status | LIVE & WORKING | IN DEVELOPMENT |

---

## 9. CONTACT INFORMATION (for all languages)

| Setting | Value |
|---------|-------|
| WhatsApp | (TO BE SET - same for all) |
| Phone | (TO BE SET - same for all) |
| Email | (TO BE SET - same for all) |

---

## 10. NOTES

- Italian site is the TEMPLATE - copy structure exactly
- Use GA4 Enhanced Measurement form_submit (same as Italian)
- Keep ONE simple tracking path
- All language pages use SAME tracking IDs
- Each language folder is a complete copy with translated content

---

**Current Step:** Deploy English version and test tracking

**Completed Dec 24:**
- Copied Italian site structure (images folder)
- Removed sanmarco.html (not needed)
- Copied and translated ALL files to English:
  - index.html - Full translation
  - chi-siamo.html + chi-siamo.js - Full translation (About Us page)
  - terms-conditions.html - Full translation
  - 404.html - Branded for Albanian Dental Clinic
  - facebook.html, instagram.html - Translated redirect pages
- Updated all tracking IDs:
  - GA4: G-74JG2X3NB8
  - Google Ads: AW-17825998174
- English base site is READY FOR DEPLOYMENT
- Conversion labels to be set after creating conversion action in Google Ads
