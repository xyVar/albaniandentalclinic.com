# ============================================
# ALBANIAN DENTAL CLINIC - TRACKING CONFIGURATION
# ============================================
# This file contains all tracking IDs and API keys
# for albaniandentalclinic.com (English/Multilingual)
#
# Last Updated: December 9, 2025
# ============================================

# ============================================
# GOOGLE ADS
# ============================================
GOOGLE_ADS_ID=
GOOGLE_ADS_CONVERSION_LABEL=
GOOGLE_ADS_CONVERSION_ID=
GOOGLE_ADS_PHONE_CONVERSION_LABEL=
GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL=

# ============================================
# GOOGLE ANALYTICS 4 (GA4)
# ============================================
GA4_MEASUREMENT_ID=
GA4_PROPERTY_ID=
GA4_STREAM_ID=
GA4_STREAM_NAME=Albanian Dental Clinic
GA4_STREAM_URL=https://albaniandentalclinic.com

# ============================================
# META (FACEBOOK/INSTAGRAM)
# ============================================
META_PIXEL_ID=
META_DOMAIN_VERIFICATION=
META_ACCESS_TOKEN=
META_TEST_EVENT_CODE=

# ============================================
# META CONVERSIONS API (CAPI)
# ============================================
META_CAPI_ENDPOINT=
META_CAPI_ACCESS_TOKEN=

# ============================================
# ZAPIER WEBHOOKS
# ============================================
ZAPIER_WEBHOOK_LEAD=
ZAPIER_WEBHOOK_PHONE_CLICK=
ZAPIER_WEBHOOK_WHATSAPP_CLICK=

# ============================================
# KOLOR CRM
# ============================================
KOLOR_API_KEY=
KOLOR_API_ENDPOINT_PROD=
KOLOR_CAMPAIGN_TYPE=
KOLOR_DEFAULT_PLATFORM=albaniandentalclinic.com
KOLOR_AFFILIATE=klda technologies ou
KOLOR_AFFILIATE_ID=

# ============================================
# WEBSITE CONFIGURATION
# ============================================
SITE_URL=https://albaniandentalclinic.com
SITE_NAME=Albanian Dental Clinic
WHATSAPP_NUMBER=37254450188
WHATSAPP_LINK=https://wa.me/37254450188
PHONE_NUMBER=+37254450188

# ============================================
# CONSENT MODE V2 DEFAULTS
# ============================================
CONSENT_AD_STORAGE=denied
CONSENT_ANALYTICS_STORAGE=denied
CONSENT_AD_USER_DATA=denied
CONSENT_AD_PERSONALIZATION=denied

# ============================================
# UTM PARAMETERS TO CAPTURE
# ============================================
UTM_SOURCE=utm_source
UTM_MEDIUM=utm_medium
UTM_CAMPAIGN=utm_campaign
UTM_TERM=utm_term
UTM_CONTENT=utm_content
GCLID=gclid
FBCLID=fbclid

# ============================================
# EVENT NAMES (standardized)
# ============================================
EVENT_LEAD_SUBMIT=lead_submit
EVENT_FORM_START=form_start
EVENT_PHONE_CLICK=click_phone
EVENT_WHATSAPP_CLICK=click_whatsapp
EVENT_POPUP_OPEN=popup_open
EVENT_POPUP_CLOSE=popup_close
EVENT_SCROLL_DEPTH=scroll_depth
EVENT_VIDEO_PLAY=video_play
EVENT_CTA_CLICK=cta_click
