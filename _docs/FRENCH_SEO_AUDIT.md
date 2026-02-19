# SEO Optimization Audit - French Landing Page
**Page:** `french/index.html`
**Domain:** sanmarcodental.fr (canonical)
**Date:** February 19, 2026

---

## Executive Summary

The French landing page has **severe SEO deficiencies** that prevent it from ranking for any meaningful dental tourism queries in French Google. The brand identity is inconsistent (mixing "Clinique Dentaire Albanaise", "Albanian Dental Clinic", and "San Marco Dental"), there are no keywords meta tag, the H1 is wasted on a CTA, and major content sections remain in English - which kills French-language relevance signals.

**Estimated organic traffic potential if fixed:** HIGH - there is very low French-language competition for dental tourism in Albania. Major competitors (Eurodentaire, SmilePartner) focus on Hungary/Turkey/Spain.

---

## 1. Current Meta Tags vs Recommended

### Title Tag
| | Value |
|---|---|
| **Current** | `Clinique Dentaire Albanaise \| Réseau de Cliniques Certifiées \| Économisez 75%` |
| **Problem** | No brand name, no city, no specific service keyword, generic phrasing |
| **Recommended** | `San Marco Dental Tirana \| Implants Dentaires en Albanie - Économisez 70%` |

### Meta Description
| | Value |
|---|---|
| **Current** | `Clinique Dentaire Albanaise - Réseau de cliniques dentaires certifiées en Albanie. Économisez jusqu'à 75% sur les implants et traitements dentaires. 10+ ans d'expérience, 4.8 étoiles Google.` |
| **Problem** | No brand, no city "Tirana", no specific treatments (All-on-4, couronnes), no CTA |
| **Recommended** | `San Marco Dental à Tirana : implants dentaires dès 300€, couronnes zircone dès 100€, All-on-4 dès 3 500€. Devis gratuit en 24h. Transfert aéroport offert. 4.8/5 Google, 2 847 patients.` |

### Keywords Meta Tag
| | Value |
|---|---|
| **Current** | MISSING |
| **Recommended** | `tourisme dentaire Albanie, implant dentaire Albanie, implant dentaire pas cher, soins dentaires Albanie, dentiste Tirana, couronne dentaire Albanie, All-on-4 Albanie, facette dentaire Albanie, San Marco Dental, clinique dentaire Tirana, refaire ses dents étranger, devis dentaire gratuit` |

### H1 Tag
| | Value |
|---|---|
| **Current** | `Réserver Maintenant` (a button CTA - no SEO value) |
| **Problem** | H1 is the most important on-page SEO signal. A CTA wastes it entirely. |
| **Recommended** | `Tourisme Dentaire en Albanie : Implants et Couronnes à Tirana` |

---

## 2. Keyword Match Analysis: Services vs Search Queries

### How French Users Search (Google.fr)

| What Users Search | Monthly Volume (est.) | Current Page Matches? | Notes |
|-------------------|----------------------|----------------------|-------|
| **tourisme dentaire** | 12,000+ | NO | Term not in title, H1, or description |
| **tourisme dentaire Albanie** | 500-1,000 | PARTIAL | "Albanie" in description only |
| **implant dentaire pas cher** | 8,000+ | NO | "pas cher" nowhere in page |
| **implant dentaire prix** | 15,000+ | PARTIAL | Prices shown but not in meta |
| **implant dentaire étranger** | 3,000+ | NO | "étranger" not used |
| **soins dentaires Albanie** | 800+ | PARTIAL | In footer only |
| **dentiste Tirana** | 300+ | NO | "Tirana" barely appears in main content |
| **All-on-4 prix** | 2,000+ | PARTIAL | Price shown in section |
| **All-on-4 Albanie** | 200+ | NO | No explicit combination |
| **couronne dentaire pas cher** | 3,000+ | NO | Not in searchable text |
| **facette dentaire prix** | 4,000+ | NO | Facettes mentioned but not optimized |
| **refaire ses dents à l'étranger** | 2,000+ | NO | This exact phrase is never used |
| **devis dentaire gratuit** | 1,500+ | PARTIAL | "Devis Gratuit" in CTA only |
| **clinique dentaire Albanie** | 400+ | PARTIAL | In description |
| **San Marco Dental** | Growing | NO | Brand name NOT in title/description |
| **remboursement soins dentaires étranger** | 2,500+ | NO | Zero reimbursement content |
| **combien coûte un implant dentaire** | 5,000+ | NO | No question-format content |

**Match Rate: 2/17 full matches (12%) - VERY POOR**

---

## 3. Content in English (Killing French SEO Signals)

Google uses content language to determine relevance. Having English sections on a French page confuses the language signal.

### Sections Still in English

| Section | English Content | French Translation Needed |
|---------|----------------|--------------------------|
| Cost Calculator H2 | "Cost Calculator" | "Calculateur de Coûts" |
| Calculator subtitle | "Calculate an estimate of costs for your dental treatment" | "Calculez une estimation des coûts de votre traitement dentaire" |
| Calculator clinic badge | "Albanian Dental Clinic" | "San Marco Dental" |
| Flight Search H2 | "Find Flights to Tirana" | "Rechercher des Vols vers Tirana" |
| Flight subtitle | "Search for the best flights from Europe to Albania" | "Recherchez les meilleurs vols depuis la France vers l'Albanie" |
| Flight labels | "Destination", "Departure Date", "Return Date" | "Destination", "Date de Départ", "Date de Retour" |
| Flight date pickers | "Select date" | "Sélectionner la date" |
| Flight duration | "Duration: 2 nights" | "Durée : 2 nuits" |
| Flight search btn | "Search on Skyscanner" / "Compare prices from all airlines" | "Rechercher sur Skyscanner" / "Comparez les prix de toutes les compagnies" |
| Flight tips H4 | "Tips to Save Money" | "Astuces pour Économiser" |
| Flight tips (4 items) | All English | All need French translation |
| Flight WhatsApp msg | English URL text | French URL text |
| Booking subtitle | "Confirm with the coordination service and you will be contacted by the clinic" | "Confirmez avec le service de coordination et vous serez contacté par la clinique" |
| Booking steps | "Documents", "Details", "Payment" | "Documents", "Détails", "Paiement" |
| Booking Step 1 H3s | "Upload Your Quote", "Treatment Dates", "Flight Ticket" | "Télécharger Votre Devis", "Dates du Traitement", "Billet d'Avion" |
| Booking radio labels | "I already have dates", "To be arranged" | "J'ai déjà des dates", "À déterminer" |
| Booking file hints | All English placeholders | All need French |
| Booking continue btn | "Continue" | "Continuer" |
| Clinic carousel (~20 items) | ALL descriptions in English | ALL need French translation |
| Product JS descriptions | English in JS objects | Need French translations |

**Estimated English content: ~30% of interactive UI is still in English**

---

## 4. Heading Hierarchy Analysis

```
H1: "Réserver Maintenant" ← WASTED (should be keyword-rich)
  H2: "Prix Transparents" ← OK
    H3: "Prix des Services Dentaires en Albanie 2025" ← Year wrong
    H3: "Implant Dentaire" ← Good
    H3: "Couronne Dentaire" ← Good
    H3: "Arcade Complète" ← Good
  H2: "Plan de Traitement ALL ON 4" ← Good
  H2: "Votre Parcours en 4 Étapes Simples" ← Good
  H1: "Comment Fonctionne le Tourisme Dentaire en Albanie ?" ← SECOND H1! Bad for SEO
    H2: "Demandez Votre Devis Gratuit depuis l'Europe" ← Good
    H2: "Prêt à Voyager..." ← OK
    H2: "De l'Aéroport à la Clinique : Transfert Gratuit" ← Good
    H2: "Séjour Confortable à Tirana" ← Good
    H2: "Traitements Sans Douleur avec Technologie Avancée" ← Good
    H2: "Experts en Implantologie et Prothèses Dentaires" ← Good
  H2: "Phases du Traitement" ← OK
  H2: "Commencez Votre Voyage Aujourd'hui" ← CTA, not keyword
  H2: "Cost Calculator" ← ENGLISH!
  H2: "Find Flights to Tirana" ← ENGLISH!
  H2: "Réservez Votre Traitement" ← Good
```

**Issues:**
- Two H1 tags (only one allowed for optimal SEO)
- First H1 is a CTA with zero keyword value
- Second H1 ("Comment Fonctionne le Tourisme Dentaire en Albanie ?") is actually good but shouldn't be H1
- Two H2s are in English
- No H1 contains the brand name or primary keywords

---

## 5. Schema.org / Structured Data Issues

| Field | Current | Problem |
|-------|---------|---------|
| name | "Albanian Dental Clinic" | Should be "San Marco Dental Clinic" |
| alternateName | "ADC - Réseau de cliniques dentaires certifiées" | Should reference San Marco |
| telephone | "+355-69-XXX-XXXX" | PLACEHOLDER! Should be +372 5445 0188 |
| sameAs | Old social media URLs | Should be @sanmarcodental URLs |
| url | albaniandentalclinic.com/french/ | Could point to sanmarcodental.fr |

**Missing Schema types:**
- `FAQPage` - would enable rich snippets for question-based queries
- `Review` / `AggregateRating` on individual service pages
- `Offer` with explicit pricing for price snippets

---

## 6. Competitor Landscape (French SERP)

### Top Ranking Sites for "tourisme dentaire Albanie"
| Domain | Authority | Albania Focus | Content Depth |
|--------|-----------|---------------|---------------|
| eurodentaire.com | HIGH | Low (Hungary/Romania focus) | Deep articles |
| smilepartner.fr | HIGH | Medium (overview page) | Good pricing |
| 123.clinic | MEDIUM | Low | Aggregator |
| novacorpus.fr | MEDIUM | Very Low | Medical tourism generalist |
| **sanmarcodental.fr** | **LOW** | **HIGH** | **Thin - needs improvement** |

**Opportunity:** No authoritative French site is championing Albania as a dental destination. SmilePartner and Eurodentaire cover it superficially. San Marco Dental can own this niche with proper SEO.

---

## 7. Top 20 Priority Keywords to Target

| # | Keyword | Est. Volume | Competition | Current Match |
|---|---------|-------------|-------------|---------------|
| 1 | tourisme dentaire Albanie | 500-1K | MEDIUM | NO |
| 2 | implant dentaire Albanie | 300-500 | LOW | NO |
| 3 | implant dentaire pas cher | 8K+ | HIGH | NO |
| 4 | soins dentaires Albanie prix | 200-400 | LOW | PARTIAL |
| 5 | All-on-4 Albanie prix | 100-200 | VERY LOW | NO |
| 6 | clinique dentaire Tirana | 100-200 | VERY LOW | NO |
| 7 | San Marco Dental | growing | NONE | NO |
| 8 | refaire ses dents à l'étranger | 2K+ | HIGH | NO |
| 9 | couronne dentaire Albanie | 100+ | VERY LOW | NO |
| 10 | devis dentaire gratuit | 1.5K+ | MEDIUM | PARTIAL |
| 11 | dentiste Tirana français | 50-100 | VERY LOW | NO |
| 12 | facette dentaire Albanie | 50-100 | VERY LOW | NO |
| 13 | All-on-6 Albanie prix | 50-100 | VERY LOW | NO |
| 14 | Albanie vs Hongrie dentaire | 100+ | VERY LOW | NO |
| 15 | remboursement soins dentaires Albanie | 200+ | LOW | NO |
| 16 | avis tourisme dentaire Albanie | 100+ | LOW | NO |
| 17 | meilleure clinique dentaire Albanie | 50-100 | VERY LOW | NO |
| 18 | prix implant dentaire 2026 | 500+ | MEDIUM | NO |
| 19 | tourisme dentaire pas cher Europe | 300+ | MEDIUM | NO |
| 20 | combien coûte un implant dentaire en Albanie | 200+ | LOW | NO |

---

## 8. Action Plan: SEO Fixes (Priority Order)

### Phase 1: Critical Meta Tags (Immediate Impact)

**1.1 Fix Title Tag**
```html
<title>San Marco Dental Tirana | Implants Dentaires en Albanie - Économisez 70%</title>
```

**1.2 Fix Meta Description**
```html
<meta name="description" content="San Marco Dental à Tirana : implants dentaires dès 300€, couronnes zircone dès 100€, All-on-4 dès 3 500€. Devis gratuit en 24h. Transfert aéroport offert. 4.8/5 Google, 2 847 patients traités.">
```

**1.3 Add Keywords Meta**
```html
<meta name="keywords" content="tourisme dentaire Albanie, implant dentaire Albanie, implant dentaire pas cher, soins dentaires Albanie, dentiste Tirana, couronne dentaire Albanie, All-on-4 Albanie, facette dentaire Albanie, San Marco Dental, clinique dentaire Tirana, refaire ses dents étranger, devis dentaire gratuit">
```

**1.4 Fix OG Tags**
```html
<meta property="og:title" content="San Marco Dental | Tourisme Dentaire en Albanie - Implants dès 300€" />
<meta property="og:description" content="Clinique dentaire certifiée à Tirana. Implants, couronnes, All-on-4 à prix albanais. Devis gratuit, transfert aéroport inclus." />
<meta property="og:site_name" content="San Marco Dental" />
```

**1.5 Fix Twitter Cards**
```html
<meta name="twitter:title" content="San Marco Dental | Tourisme Dentaire en Albanie - Implants dès 300€" />
<meta name="twitter:description" content="Clinique dentaire certifiée à Tirana. Implants, couronnes, All-on-4 à prix albanais. Devis gratuit." />
```

### Phase 2: Heading Structure

**2.1 Fix H1** (only one H1 per page)
- Change current H1 "Réserver Maintenant" to H2
- Make new H1: `Tourisme Dentaire en Albanie : Implants et Soins Dentaires à Tirana`
- Change second H1 "Comment Fonctionne le Tourisme Dentaire en Albanie ?" to H2

### Phase 3: Full French Translation
- Translate ALL English sections (calculator, flights, booking, carousel descriptions)
- This is critical for language relevance signals

### Phase 4: Schema.org Enhancement
- Fix business name to "San Marco Dental Clinic"
- Fix phone number (remove placeholder)
- Add FAQPage schema with top 5-10 patient questions in French
- Update sameAs to correct social URLs

### Phase 5: Content Optimization
- Add a section addressing **remboursement sécurité sociale** (French patients' #1 concern)
- Add comparison content: **Albanie vs Hongrie vs Turquie** (captures comparison searches)
- Add FAQ section with question-based keywords
- Ensure "Tirana" appears naturally 10-15 times in visible content

---

## 9. Footer SEO Links (Already Good, Could Be Better)

Current footer links are decent for internal linking:
- "Tourisme Dentaire en Albanie"
- "Dentiste en Albanie"
- "Soins Dentaires Albanie"

**Add:**
- "Implants Dentaires Tirana"
- "All-on-4 Albanie"
- "Avis Patients"
- "Remboursement Mutuelle"

---

## 10. Technical SEO Notes

| Check | Status |
|-------|--------|
| `lang="fr"` | OK |
| Canonical URL | OK (sanmarcodental.fr) |
| Hreflang tags | OK (6 languages + x-default) |
| Mobile responsive | OK |
| HTTPS | OK |
| Page speed | NEEDS CHECK (single 528KB HTML file is very heavy) |
| robots.txt | EXISTS in repo root |
| sitemap.xml | EXISTS in repo root |
| Favicon | OK (sanmarco-logo.jpg) |
| Image alt texts | PARTIAL (some generic) |

### Page Weight Concern
At 528KB for a single HTML file (with all CSS/JS inline), this is significantly above Google's recommended page weight. Consider:
- Externalizing CSS to a separate file
- Lazy-loading non-critical JavaScript
- Compressing inline images
