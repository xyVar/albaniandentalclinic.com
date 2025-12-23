/**
 * Language Switcher for Multilingual Landing Page
 * Handles dynamic language switching without page reload
 *
 * Features:
 * - Detects browser language on first visit
 * - Remembers user's language choice (localStorage)
 * - Supports URL parameter (?lang=en)
 * - Updates all text content dynamically
 * - Sends selected language with form submissions
 *
 * Supported Languages: it, en, es
 */

(function() {
    'use strict';

    // Configuration
    const DEFAULT_LANGUAGE = 'it'; // Italian as default
    const SUPPORTED_LANGUAGES = ['it', 'en', 'es'];

    // Language names for display
    const LANGUAGE_NAMES = {
        it: 'Italiano',
        en: 'English',
        es: 'Español'
    };

    // Current selected language
    let currentLanguage = DEFAULT_LANGUAGE;

    /**
     * Initialize language on page load
     * Priority: URL parameter > localStorage > Browser language > Default
     */
    function initLanguage() {
        console.log('🌍 Initializing language switcher...');

        // 1. Check URL parameter first: ?lang=es
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');

        if (urlLang && SUPPORTED_LANGUAGES.includes(urlLang)) {
            console.log(`✅ Language from URL: ${urlLang}`);
            currentLanguage = urlLang;
        } else {
            // 2. Check localStorage
            const savedLang = localStorage.getItem('selectedLanguage');
            if (savedLang && SUPPORTED_LANGUAGES.includes(savedLang)) {
                console.log(`✅ Language from localStorage: ${savedLang}`);
                currentLanguage = savedLang;
            } else {
                // 3. Check browser language
                const browserLang = navigator.language.split('-')[0]; // 'en-US' -> 'en'
                if (SUPPORTED_LANGUAGES.includes(browserLang)) {
                    console.log(`✅ Language from browser: ${browserLang}`);
                    currentLanguage = browserLang;
                } else {
                    console.log(`✅ Using default language: ${DEFAULT_LANGUAGE}`);
                }
            }
        }

        // Apply the detected/selected language
        setLanguage(currentLanguage);
    }

    /**
     * Set language and update all UI elements
     * @param {string} langCode - Language code (it, en, es)
     */
    function setLanguage(langCode) {
        // Validate language code
        if (!SUPPORTED_LANGUAGES.includes(langCode)) {
            console.error(`❌ Language ${langCode} not supported`);
            return;
        }

        if (!translations || !translations[langCode]) {
            console.error(`❌ Translations for ${langCode} not found`);
            return;
        }

        console.log(`🔄 Switching to language: ${langCode}`);
        currentLanguage = langCode;

        // Save to localStorage
        localStorage.setItem('selectedLanguage', langCode);

        // Update HTML lang attribute (important for SEO and screen readers)
        document.documentElement.setAttribute('lang', langCode);

        // Update all translatable elements
        updateTextContent(langCode);
        updatePlaceholders(langCode);
        updateMetaTags(langCode);
        updateLanguageTrigger(langCode);
        updateFormHiddenField(langCode);
        updateActiveLanguageOption(langCode);

        console.log(`✅ Language switched to: ${langCode}`);
    }

    /**
     * Update all text content with data-i18n attributes
     * @param {string} langCode - Language code
     */
    function updateTextContent(langCode) {
        const elements = document.querySelectorAll('[data-i18n]');
        let updateCount = 0;

        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = getTranslation(translations[langCode], key);

            if (translation) {
                element.textContent = translation;
                updateCount++;
            } else {
                console.warn(`⚠️ Translation not found for key: ${key} in language: ${langCode}`);
            }
        });

        console.log(`📝 Updated ${updateCount} text elements`);
    }

    /**
     * Update all input placeholders with data-i18n-placeholder attributes
     * @param {string} langCode - Language code
     */
    function updatePlaceholders(langCode) {
        const elements = document.querySelectorAll('[data-i18n-placeholder]');
        let updateCount = 0;

        elements.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = getTranslation(translations[langCode], key);

            if (translation) {
                element.setAttribute('placeholder', translation);
                updateCount++;
            }
        });

        console.log(`📝 Updated ${updateCount} placeholders`);
    }

    /**
     * Update meta tags (title, description) with data-i18n-meta attributes
     * @param {string} langCode - Language code
     */
    function updateMetaTags(langCode) {
        const elements = document.querySelectorAll('[data-i18n-meta]');

        elements.forEach(element => {
            const key = element.getAttribute('data-i18n-meta');
            const translation = getTranslation(translations[langCode], key);

            if (translation) {
                if (element.tagName === 'TITLE') {
                    element.textContent = translation;
                } else {
                    element.setAttribute('content', translation);
                }
            }
        });

        console.log(`📝 Updated meta tags`);
    }

    /**
     * Update language trigger button (flag and language name)
     * @param {string} langCode - Language code
     */
    function updateLanguageTrigger(langCode) {
        const currentFlag = document.getElementById('currentFlag');
        const currentLanguageName = document.getElementById('currentLanguage');

        if (currentFlag) {
            currentFlag.src = `images/flags/${langCode}.svg`;
            currentFlag.alt = LANGUAGE_NAMES[langCode];
        }

        if (currentLanguageName) {
            currentLanguageName.textContent = LANGUAGE_NAMES[langCode];
        }
    }

    /**
     * Update form hidden field with selected language
     * @param {string} langCode - Language code
     */
    function updateFormHiddenField(langCode) {
        const langInput = document.getElementById('selectedLanguage');
        if (langInput) {
            langInput.value = langCode;
        }
    }

    /**
     * Update active state in language dropdown
     * @param {string} langCode - Language code
     */
    function updateActiveLanguageOption(langCode) {
        document.querySelectorAll('.language-option').forEach(option => {
            const optionLang = option.getAttribute('data-lang');
            if (optionLang === langCode) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }

    /**
     * Get nested translation from object using dot notation
     * Example: getTranslation(obj, "hero.title")
     * @param {object} obj - Translation object
     * @param {string} path - Dot-notation path
     * @returns {string|null} - Translation or null
     */
    function getTranslation(obj, path) {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    }

    /**
     * Setup language switcher UI interactions
     */
    function setupLanguageSwitcher() {
        const trigger = document.getElementById('languageTrigger');
        const dropdown = document.getElementById('languageDropdown');

        if (!trigger || !dropdown) {
            console.warn('⚠️ Language switcher UI elements not found');
            return;
        }

        // Toggle dropdown on click
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = dropdown.classList.contains('active');

            if (isActive) {
                dropdown.classList.remove('active');
            } else {
                dropdown.classList.add('active');
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target) && e.target !== trigger) {
                dropdown.classList.remove('active');
            }
        });

        // Language option click handlers
        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const langCode = option.getAttribute('data-lang');

                if (langCode && SUPPORTED_LANGUAGES.includes(langCode)) {
                    setLanguage(langCode);
                    dropdown.classList.remove('active');

                    // Smooth scroll to top when changing language
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });

                    // Optional: Send analytics event
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'language_change', {
                            'event_category': 'engagement',
                            'event_label': langCode
                        });
                    }
                }
            });
        });

        console.log('✅ Language switcher UI initialized');
    }

    /**
     * Initialize on DOM ready
     */
    function init() {
        // Wait for translations to be loaded
        if (typeof translations === 'undefined') {
            console.error('❌ Translations not loaded. Make sure translations.js is included before language-switcher.js');
            return;
        }

        initLanguage();
        setupLanguageSwitcher();

        console.log('✅ Language switcher fully initialized');
        console.log(`🌍 Current language: ${currentLanguage} (${LANGUAGE_NAMES[currentLanguage]})`);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose setLanguage function globally for debugging and external use
    window.setLanguage = setLanguage;
    window.getCurrentLanguage = () => currentLanguage;

})();
