// main.js

document.addEventListener('DOMContentLoaded', () => {
  // ---- Helpers
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // ---- Counter animazione
  const counterEl = $('.patients-counter');
  if (counterEl) {
    const target = parseInt(counterEl.textContent, 10) || 0;
    let current = 0;
    const step = Math.ceil(target / 20);
    const tick = () => {
      current += step;
      counterEl.textContent = current <= target ? current : target;
      if (current < target) setTimeout(tick, 50);
    };
    tick();
  }

  // ---- Popup preventivo
  const popup = $('#preventivo-popup');
  const openBtn = $('#openPopup');
  const closeBtn = $('.close-popup');

  const openPopup = () => {
    if (!popup) return;
    popup.style.display = 'flex';
    popup.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'popup_open' });
  };

  const closePopup = () => {
    if (!popup) return;
    popup.style.display = 'none';
    popup.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'popup_close' });
  };

  openBtn && openBtn.addEventListener('click', openPopup);
  closeBtn && closeBtn.addEventListener('click', closePopup);
  window.addEventListener('click', (e) => { if (e.target === popup) closePopup(); });

  // Apertura automatica una sola volta dopo 6s
  setTimeout(() => {
    if (popup && !sessionStorage.getItem('popupShown')) {
      openPopup();
      sessionStorage.setItem('popupShown', 'true');
    }
  }, 6000);

  // ---- Smooth scroll
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ---- Aggiorna l’anno nel footer
  const yearEl = $('#year'); if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- UTM & GCLID capture per Ads attribution
  const params = new URLSearchParams(window.location.search);
  const set = (id, value) => { const el = $('#' + id); if (el) el.value = value || ''; };

  set('utm_source',  params.get('utm_source'));
  set('utm_medium',  params.get('utm_medium'));
  set('utm_campaign',params.get('utm_campaign'));
  set('utm_term',    params.get('utm_term'));
  set('utm_content', params.get('utm_content'));

  // GCLID da query o da cookie (se presente)
  const gclid = params.get('gclid') || (document.cookie.match(/(?:^|;\s*)_gcl_aw=GCL\.(?:[^.]+)\.([^;]+)/) || [])[1];
  set('gclid', gclid);

  // ---- Tracciamento click (pronto per GTM)
  $$('[data-gtm="click_whatsapp"]').forEach(el => {
    el.addEventListener('click', () => (window.dataLayer = window.dataLayer || []).push({ event: 'click_whatsapp' }));
  });
  $$('[data-gtm="click_phone"]').forEach(el => {
    el.addEventListener('click', () => (window.dataLayer = window.dataLayer || []).push({ event: 'click_phone' }));
  });

  // ---- Validazione form + evento submit
  const form = $('#leadForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      // Honeypot
      if ($('#website')?.value) {
        e.preventDefault();
        return false;
      }
      // HTML5 validity
      if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
        return false;
      }
      (window.dataLayer = window.dataLayer || []).push({ event: 'lead_submit' }); // per GA4/Ads via GTM
    });
  }
});
