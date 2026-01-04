# Zapier Meta Lead Ads Integration
**Last Updated:** January 4, 2026

---

## Overview

Two Zapier integrations connect Meta Lead Ads to CRM:

| Site | Meta Page | Zap Name | Status |
|------|-----------|----------|--------|
| Italian | clinicadentalealbania | crm.clinicadentalealbania.it | WORKING |
| Multilingual | Dental Clinic Albania | multilingual.crm.adc | WORKING |

---

## CRM Endpoint

**URL:** `https://api.clinicadentalealbania.it/api/v1/leads/import`

**API Key:** `6fcfcf06ba404d00857e2e684ebc09fc`

---

## Zapier Webhook Configuration

### Payload Structure (JSON)

```json
{
  "api_key": "6fcfcf06ba404d00857e2e684ebc09fc",
  "platform": "albaniandentalclinic",
  "campaign_type": "fissa",
  "campaign_name": "{{Campaign Name from Meta}}",
  "adset_name": "{{Adset Name from Meta}}",
  "ad_name": "{{Ad Name from Meta}}",
  "leads": [
    {
      "nome": "{{Full Name}}",
      "telefono": "{{Phone Number}}",
      "email": "{{Email}}",
      "city": "{{City}}",
      "trattamento": "{{Treatment Interest}}",
      "albania_disposto": "{{Would Travel to Albania}}"
    }
  ]
}
```

### Critical Field Mappings

| CRM Field | Meta Field | Notes |
|-----------|------------|-------|
| `nome` | Full Name | NOT "name" or "full_name" |
| `telefono` | Phone Number | NOT "phone" - must be "telefono" |
| `email` | Email | |
| `city` | City | |
| `trattamento` | What Treatment Are You Interested In | |
| `albania_disposto` | Would You Travel To Albania | |

### Zapier Settings

| Setting | Value |
|---------|-------|
| Payload Type | JSON |
| Wrap Request In Array | No |
| Unflatten | Yes |
| Headers | Content-Type: application/json |

---

## Meta Lead Forms

### Italian (clinicadentalealbania)

- **Page ID:** (Italian page)
- **Form Name:** Various
- **Platform:** `Meta Ad`

### Multilingual (Dental Clinic Albania)

- **Page ID:** 865244536673113
- **Form Name:** Multi.Form.Lingual
- **Platform:** `albaniandentalclinic`

---

## Lead Flow

```
User sees Meta Ad
    ↓
User fills Lead Form in Facebook/Instagram
    ↓
Meta stores lead
    ↓
Zapier Trigger: "New Lead in Facebook Lead Ads"
    ↓
Zapier Action: POST webhook to CRM
    ↓
CRM imports lead to NUOVI tab
    ↓
Email notification sent to admin/team
```

---

## Testing

### How to Test Zapier Connection

1. Go to Zapier → Your Zap
2. Step 1 (Meta Lead Ads trigger) → Click "Test trigger"
3. Select a real lead from Meta (not dummy data)
4. Step 2 (Webhook) → Click "Test action"
5. Check CRM server logs for success

### Server Log Success Example

```
[API] Received: POST /api/v1/leads/import
Body: {'api_key': '...', 'platform': 'albaniandentalclinic', 'leads': [...]}
✅ Imported lead 358: John Doe to NUOVI tab
📧 Email sent to admin
```

---

## Troubleshooting

### "value too long for type character varying(20)"
- Zapier test dummy data is too long
- Use real lead data from Meta, not placeholder text

### Leads not appearing in CRM
- Check `leads` field is JSON array, not string
- Verify field names: `nome`, `telefono` (not `name`, `phone`)
- Check API key is correct

### Empty fields
- Map each field from Meta to CRM fields
- Use Zapier's "+" button to select Meta fields

---

## Related Files

- Italian tracking: `landing page - it/_docs/TRACKING_CONFIG.md`
- Multilingual tracking: `landing page - multilingual/_docs/TRACKING_CONFIG.md`
- CRM API: `CRM BACKFRONT/Backend/app.py` (line ~7172)
