# French Landing Page - Project Knowledge
**File:** `french/index.html`
**Canonical Domain:** sanmarcodental.fr (separate domain)
**Live URL in this repo:** albaniandentalclinic.com/french/
**Target Market:** France (FR)
**Language:** French (fr)

---

## Current State & Critical Issues

### Brand Identity - NOT UPDATED
The French page **has NOT been rebranded** to San Marco Dental like the other language pages (DE/NL/ES/PL). It still shows the old ADC branding:

| Element | Current (WRONG) | Should Be |
|---------|-----------------|-----------|
| Navbar logo | ADC text letters (A-D-C colored) | San Marco logo image (`sanmarco-logo.jpg`) |
| Navbar text | "Albanian Dental Clinic" | "San Marco" / "Dental Clinic" / "albaniandentalclinic.com" |
| Footer logo | ADC text + "ALBANIAN DENTAL CLINIC" | San Marco logo image + "SAN MARCO DENTAL" |
| Footer copyright | "2025 Albanian Dental Clinic" | "2026 San Marco Dental Clinic" |
| Chat widget header | "Albanian Dental Clinic" | "San Marco Dental" |
| Reviews section H3 | "Albanian Dental Clinic" | "San Marco Dental" |
| OG site_name | "Albanian Dental Clinic" | "San Marco Dental" |
| Schema.org name | "Albanian Dental Clinic" | "San Marco Dental Clinic" |
| Schema.org alternateName | "ADC - Réseau de cliniques..." | Should reference San Marco |
| Schema.org sameAs | Old social URLs | New @sanmarcodental URLs |
| Title tag | "Clinique Dentaire Albanaise" | Should include "San Marco Dental" |
| Calculator header | ADC letters + "Albanian Dental Clinic" | San Marco branding |
| Chat bot message | "Clinique Dentaire Albanaise" | "San Marco Dental" |

### Untranslated English Content
Large sections still in English:

| Section | Lines | Issue |
|---------|-------|-------|
| Cost Calculator header | ~8970 | "Cost Calculator", "Calculate an estimate..." |
| Flight Search header | ~10235 | "Find Flights to Tirana" |
| Flight dates | ~10275-10301 | "Departure Date", "Return Date", "Select date" |
| Flight duration | ~10308 | "Duration: 2 nights" |
| Flight search button | ~10318 | "Search on Skyscanner", "Compare prices..." |
| Flight tips | ~10330-10336 | All 4 tips in English |
| Flight WhatsApp text | ~10342 | English URL-encoded message |
| Booking subtitle | ~11231 | "Confirm with the coordination service..." |
| Booking step labels | ~11249-11259 | "Documents", "Details", "Payment" |
| Booking Step 1 headings | ~11267-11319 | "Upload Your Quote", "Treatment Dates", "Flight Ticket" |
| Booking date options | ~11294-11301 | "I already have dates", "To be arranged" |
| Booking file hints | ~11268-11325 | All placeholder text in English |
| Booking continue button | ~11338 | "Continue" |
| Clinic carousel descriptions | ~7251-7401 | ALL carousel item descriptions in English |
| Product card descriptions | ~7416-7428 | English product descriptions |

### Social Media Links - OLD
| Current | Should Be |
|---------|-----------|
| instagram.com/dental.clinic.albania/ | instagram.com/sanmarcodental/ |
| facebook.com/profile.php?id=61582986368461 | facebook.com/profile.php?id=61579720681623 |
| youtube.com/channel/UCVJIQrLD9U0TVT_HLnVUMwg | youtube.com/@sanmarcodental |
| youtube.com/@clinicadentalealbania (reviews) | youtube.com/@sanmarcodental |

### Other Issues
- **Year shows 2025** in pricing header and footer copyright (should be 2026)
- **Missing keywords meta tag** (other language pages have it)
- **H1 tag** is "Réserver Maintenant" (a CTA, wasted SEO real estate)
- **OG URL** points to `/french/` on albaniandentalclinic.com but canonical is sanmarcodental.fr
- **Phone in Schema.org** shows "+355-69-XXX-XXXX" placeholder instead of +372 5445 0188
- **Top banner** says "-75% vs Italia" (Italian comparison, should be vs France for French market)

---

## Page Structure

```
french/index.html (~13,000+ lines, single-file SPA)
├── <head>
│   ├── Meta tags (description, OG, Twitter)
│   ├── Canonical → sanmarcodental.fr
│   ├── Hreflang tags (all 6 languages + x-default)
│   ├── Consent Mode v2 (granted by default)
│   ├── Google Tag (GT-WRDQC73Q + AW-17825998174)
│   ├── Meta Pixel (1140066248291201)
│   └── CSS (~5400 lines inline)
├── <body>
│   ├── Top Banner (-75% vs Italia)
│   ├── Navbar (ADC text logo - NEEDS UPDATE)
│   ├── Hero Section
│   │   ├── H1: "Réserver Maintenant"
│   │   ├── Clinic photo carousel (14 slides)
│   │   └── Hero clinic badge: "San Marco Dental Clinic"
│   ├── Pricing Section
│   │   ├── 3 treatment cards (Implant, Couronne, Arcade)
│   │   └── ALL ON 4 treatment plan
│   ├── 4-Step Journey Overview
│   ├── "How It Works" Section (6 steps with videos)
│   │   ├── Step 1: Devis Gratuit
│   │   ├── Step 2: Prêt à Voyager
│   │   ├── Step 3: Transfert Gratuit
│   │   ├── Step 4: Séjour Confortable
│   │   ├── Step 5: Traitements Sans Douleur
│   │   └── Step 6: Experts en Implantologie
│   ├── Treatment Phases (3 phases) ← May need removal to match EN
│   ├── CTA "Commencez Votre Voyage"
│   ├── Reviews Section (YouTube channel link)
│   ├── Doctor Cards (8 doctors)
│   ├── Footer
│   │   ├── Treatments links
│   │   ├── Information links
│   │   └── Contact info
│   ├── Floating CTA Bar (mobile)
│   ├── Chat Widget
│   └── Quote Form Popup
├── Modals
│   ├── Product Detail Modal
│   ├── Clinic Carousel Modal
│   ├── Cost Calculator Modal (ENGLISH!)
│   ├── Flight Search Modal (MOSTLY ENGLISH!)
│   └── Booking Modal (PARTLY ENGLISH!)
└── Scripts
    ├── Carousel logic
    ├── Product catalog (JS objects with EN descriptions)
    ├── Tracking (GA4 + Meta Pixel + CAPI)
    ├── CRM integration (paese_provenienza: "FR")
    └── Booking/payment logic
```

---

## Tracking Configuration

| Tracker | ID | Status |
|---------|-----|--------|
| Google Tag | GT-WRDQC73Q | Active |
| GA4 | G-74JG2X3NB8 (via GT) | Active |
| Google Ads | AW-17825998174 | Active |
| Meta Pixel | 1140066248291201 | Active |
| CAPI | Direct Graph API + Zapier | Active |
| CRM paese_provenienza | FR | Correct |
| Consent Mode | All granted | Active |

### Event Labels (should all be in English for consistency)
- Phone Click, WhatsApp Click, Quote Simulator, City Selection, Google Reviews, PDF Downloaded, Booking, Flight Search

---

## Canonical Domain Situation

The French page exists in **two locations**:
1. **This repo:** `french/index.html` → deployed to `albaniandentalclinic.com/french/`
2. **Separate repo/domain:** `sanmarcodental.fr` (canonical)

The `<link rel="canonical">` correctly points to `sanmarcodental.fr`, meaning Google should index the separate domain version. The version in this repo serves as the source file and also as a hreflang alternate.

---

## Reference: English Page Navbar (Target State)

```html
<a href="#" class="navbar-logo">
    <img src="images/sanmarco-logo.jpg" alt="San Marco Dental Clinic">
    <div class="navbar-logo-text">
        <span class="brand-name">San Marco</span>
        <span class="brand-sub">Dental Clinic</span>
        <span class="brand-url">albaniandentalclinic.com</span>
    </div>
</a>
```

## Reference: English Page Footer Logo (Target State)

```html
<img src="images/sanmarco-logo.jpg" alt="San Marco Dental" style="height: 60px; width: 60px; object-fit: contain; border-radius: 8px;">
<span class="footer-logo-sub">SAN MARCO DENTAL</span>
```

---

## Priority Actions for French Page

1. **CRITICAL:** Full rebrand to San Marco Dental (navbar, footer, chat, reviews, Schema, OG, calculator)
2. **CRITICAL:** Translate all remaining English content (calculator, flights, booking, carousel descriptions)
3. **HIGH:** Update social media links to @sanmarcodental
4. **HIGH:** Fix title/description/keywords for French dental tourism SEO
5. **HIGH:** Fix H1 tag (currently wasted on "Réserver Maintenant")
6. **MEDIUM:** Fix year 2025 → 2026
7. **MEDIUM:** Fix top banner from "vs Italia" to "vs France"
8. **MEDIUM:** Fix Schema.org phone number placeholder
9. **LOW:** Consider removing Treatment Phases section (removed from EN page)
10. **LOW:** Add hreflang for Italian (clinicadentalealbania.it)
