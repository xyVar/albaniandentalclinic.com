# ============================================
# ALBANIAN DENTAL CLINIC - TRACKING CONFIGURATION
# ============================================
# This file contains all tracking IDs and API keys
# for albaniandentalclinic.com (Multilingual: EN/IT/ES)
#
# Firebase Project: albaniandentalclinic
# Domain: albaniandentalclinic.com
# Last Updated: December 23, 2025
# ============================================

# ============================================
# GOOGLE ADS
# ============================================
GOOGLE_ADS_ID=AW-17359752359
GOOGLE_ADS_CONVERSION_LABEL=WVl5CNLrrfQaEKeZ49VA
GOOGLE_ADS_CONVERSION_ID=AW-17359752359/WVl5CNLrrfQaEKeZ49VA
GOOGLE_ADS_PHONE_CONVERSION_LABEL=PhoneCallConversion
GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL=WhatsAppClick

# ============================================
# GOOGLE ANALYTICS 4 (GA4)
# ============================================
GA4_MEASUREMENT_ID=G-74JG2X3NB8
GA4_PROPERTY_ID=110
GA4_STREAM_ID=13016775813
GA4_STREAM_NAME=Albanian Dental Clinic
GA4_STREAM_URL=https://albaniandentalclinic.com

# ============================================
# META (FACEBOOK/INSTAGRAM)
# ============================================
META_PIXEL_ID=1140066248291201
META_BUSINESS_ID=1110189537934269
META_BUSINESS_NAME=Clinica Dentale Albania
META_AD_ACCOUNT_ID=120231069701290488
META_AD_ACCOUNT_NAME=KLDA Tech - Standard Ads
META_DOMAIN_VERIFICATION=2j6cxb1dp9usan83wm7dlowzsp7w1j
META_ADVANCED_MATCHING=enabled
META_ACCESS_TOKEN=
META_TEST_EVENT_CODE=TEST57443

# ============================================
# META CONVERSIONS API (CAPI)
# ============================================
META_CAPI_ENDPOINT=https://graph.facebook.com/v18.0/1140066248291201/events
META_CAPI_ACCESS_TOKEN=

# ============================================
# ZAPIER WEBHOOKS
# ============================================
ZAPIER_WEBHOOK_LEAD=
ZAPIER_WEBHOOK_PHONE_CLICK=
ZAPIER_WEBHOOK_WHATSAPP_CLICK=

# ============================================
# WISE PAYMENTS
# ============================================
WISE_ACCOUNT_HOLDER=KLDA Technologies OÜ
WISE_IBAN=BE41 9055 2686 5510
WISE_BIC=TRWIBEB1XXX
WISE_BANK=Wise (Brussels, Belgium)
WISE_PAY_URL=https://wise.com/pay/business/kldatechnologiesou
WISE_CURRENCY=EUR

# ============================================
# KOLOR CRM
# ============================================
# KOLOR_API_KEY=<SET IN ENVIRONMENT - DO NOT COMMIT>
KOLOR_API_ENDPOINT_PROD=https://crm.clinicadentalealbania.it/api/v1/leads/import
KOLOR_API_ENDPOINT_LOCAL=http://127.0.0.1:5000/api/v1/leads/import
KOLOR_CAMPAIGN_TYPE=fissa
KOLOR_DEFAULT_PLATFORM=albaniandentalclinic.com
KOLOR_AFFILIATE=klda technologies ou
KOLOR_AFFILIATE_ID=

# ============================================
# WEBSITE CONFIGURATION
# ============================================
SITE_URL=https://albaniandentalclinic.com
SITE_NAME=Albanian Dental Clinic
DEFAULT_LANGUAGE=en
SUPPORTED_LANGUAGES=en,it,es
WHATSAPP_NUMBER=37254450188
WHATSAPP_LINK=https://wa.me/37254450188
PHONE_NUMBER=+37254450188
PHONE_DISPLAY=+372 5445 0188

# ============================================
# FIREBASE HOSTING
# ============================================
FIREBASE_PROJECT_ID=albaniandentalclinic
FIREBASE_HOSTING_SITE=albaniandentalclinic
FIREBASE_REGION=europe-west1

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

# Conversion Events
EVENT_LEAD_SUBMIT=lead_submit
EVENT_FORM_START=form_start
EVENT_PHONE_CLICK=click_phone
EVENT_WHATSAPP_CLICK=click_whatsapp

# Navigation Events
EVENT_NAV_CLICK=nav_click
EVENT_CTA_CLICK=cta_click

# Popup/Modal Events
EVENT_POPUP_OPEN=popup_open
EVENT_POPUP_CLOSE=popup_close

# Engagement Events
EVENT_SCROLL_DEPTH=scroll_depth
EVENT_SECTION_VIEW=section_view
EVENT_TIME_ON_PAGE=time_on_page
EVENT_ELEMENT_CLICK=element_click
EVENT_ENGAGEMENT_SUMMARY=engagement_summary

# User Info Events
EVENT_USER_INFO=user_info
EVENT_TAB_HIDDEN=tab_hidden
EVENT_TAB_VISIBLE=tab_visible

# Media Events
EVENT_VIDEO_PLAY=video_play
EVENT_VIDEO_COMPLETE=video_complete

# Social & Outbound Events
EVENT_SOCIAL_CLICK=social_click
EVENT_OUTBOUND_CLICK=outbound_click
EVENT_FOOTER_CLICK=footer_click
EVENT_GOOGLE_REVIEWS_CLICK=google_reviews_click

# Product Events
EVENT_PRODUCT_MODAL_OPEN=product_modal_open

# Meta Pixel Events
META_EVENT_PAGE_VIEW=PageView
META_EVENT_VIEW_CONTENT=ViewContent
META_EVENT_LEAD=Lead
META_EVENT_CONTACT=Contact

# ============================================
# URL PARAMETERS (Auto-open modals)
# ============================================
PARAM_OPEN_PREVENTIVO=preventivo
PARAM_OPEN_BOOKING=booking
PARAM_OPEN_CONTACT=contact
PARAM_OPEN_FLIGHT=flight
PARAM_OPEN_TIRANA=tirana
