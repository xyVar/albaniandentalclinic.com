// ============================================
// ABOUT US - Dynamic Content Management
// Albanian Dental Clinic
// ============================================

// ========== MOBILE MENU FUNCTIONS ==========
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const hamburger = document.querySelector('.navbar-toggle');

    if (mobileMenu) mobileMenu.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
    if (hamburger) hamburger.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const hamburger = document.querySelector('.navbar-toggle');

    if (mobileMenu) mobileMenu.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    if (hamburger) hamburger.classList.remove('active');
}

// ========== SECTION DATA ==========
const sections = {
    missione: {
        heroTitle: "Defending Your Rights",
        heroSubtitle: "We're not a clinic. We're your representative.",
        content: `
            <h2>Our Mission</h2>
            <p>Albanian Dental Clinic was founded with a clear objective: <strong>protecting the interests of international patients</strong> in the dental tourism market.</p>

            <p>We are not a clinic. We are your representative, your trusted intermediary working exclusively to ensure you get the best possible conditions.</p>

            <div class="highlight-box">
                <p>We operate as an independent network that selects, verifies, and constantly monitors partner clinics. This allows us to <strong>negotiate lower prices</strong> than you would get by contacting facilities directly, and to <strong>demand high quality standards</strong> at every stage of treatment.</p>
            </div>

            <h3>Our Commitment</h3>
            <p>Your satisfaction is our only measure of success.</p>
            <p>Thousands of patients have already chosen to trust us. Their testimonials, reviews, and positive word-of-mouth represent the most authentic confirmation of our work.</p>
        `,
        images: [
            { src: 'images/chi-siamo/missione-01-team.jpg', caption: 'The San Marco Dental Clinic team' },
            { src: '_assets/instagram-images/ig_image_6_1_20251125.jpg', caption: 'Our dentists at work' },
            { src: '_assets/instagram-images/ig_image_6_3_20251125.jpg', caption: 'Reception and consultation' },
            { src: '_assets/instagram-images/ig_image_6_7_20251125.jpg', caption: 'Our clinic' },
            { src: '_assets/instagram-images/ig_image_6_8_20251125.jpg', caption: 'Modern operating rooms' },
            { src: '_assets/instagram-images/ig_image_6_9_20251125.jpg', caption: 'Quality treatments' },
            { src: 'images/chi-siamo/missione-05-clinica-moderna.png', caption: 'Advanced technology' }
        ],
        keyPoints: [
            { icon: 'fa-network-wired', title: 'Independent Network', desc: 'Verified and selected clinics' },
            { icon: 'fa-handshake', title: 'Price Negotiation', desc: 'Better rates for you' },
            { icon: 'fa-users', title: 'Thousands of Patients', desc: 'Satisfied every year' },
            { icon: 'fa-headset', title: '24/7 Support', desc: 'Always in English' }
        ]
    },

    ruolo: {
        heroTitle: "On Your Side, Always",
        heroSubtitle: "Our only interest is your complete satisfaction.",
        content: `
            <h2>Our Role</h2>
            <p>Unlike clinics that have an interest in maximizing their revenue, we have only one interest: <strong>your complete satisfaction</strong>.</p>

            <h3>What Does This Mean in Practice?</h3>

            <h4>We Negotiate for You</h4>
            <p>Thanks to the volume of patients we bring, we obtain reserved rates that clinics would not offer to a single patient. These savings are entirely passed on to you.</p>

            <h4>We Monitor Quality</h4>
            <p>Every clinic in our network undergoes periodic reviews. If a facility does not meet our standards or receives negative feedback, <strong>it is removed from the network</strong>.</p>

            <h4>We Intervene When Problems Arise</h4>
            <p>If during your treatment journey there are misunderstandings, issues, or dissatisfaction, we intervene with the clinic to protect your rights. You will never be alone facing the facility.</p>

            <h4>We Guarantee Total Transparency</h4>
            <p>Detailed quotes, no hidden costs, no surprises. You will know exactly what you will pay before you travel.</p>
        `,
        images: [
            { src: '_assets/instagram-images/ig_image_6_1_20251125.jpg', caption: 'Our dentists at work' },
            { src: '_assets/instagram-images/ig_image_6_3_20251125.jpg', caption: 'Personalized consultation' },
            { src: 'images/chi-siamo/ruolo-02-negoziazione.jpg', caption: 'Negotiating with clinics' },
            { src: 'images/chi-siamo/ruolo-03-qualita.png', caption: 'Quality control' },
            { src: 'images/chi-siamo/ruolo-04-supporto.JPG', caption: 'Dedicated support' },
            { src: 'images/chi-siamo/ruolo-05-preventivo.jpg', caption: 'Transparent quote' }
        ],
        keyPoints: [
            { icon: 'fa-money-bill-wave', title: 'Negotiated Rates', desc: 'Exclusive prices for you' },
            { icon: 'fa-search', title: 'Periodic Reviews', desc: 'Constant clinic monitoring' },
            { icon: 'fa-shield-alt', title: 'Guaranteed Intervention', desc: 'Never alone with problems' },
            { icon: 'fa-file-invoice', title: 'Total Transparency', desc: 'No hidden costs' }
        ]
    },

    tutela: {
        heroTitle: "How We Protect Your Interests",
        heroSubtitle: "Our protection system for your peace of mind.",
        content: `
            <h2>Patient Protection</h2>
            <p>The dental tourism market presents risks: unqualified clinics, inflated prices, unfulfilled promises, lack of post-operative care.</p>

            <h3>Our Protection System</h3>

            <h4>1. Rigorous Clinic Selection</h4>
            <p>Only facilities with verified certifications, modern equipment, and qualified staff join our network.</p>

            <h4>2. Warranty Contracts</h4>
            <p>Every treatment is covered by a written warranty. In case of problems, the clinic is obligated to intervene at no additional cost.</p>

            <h4>3. Locked Prices</h4>
            <p>The quote you receive is binding. <strong>No price increases</strong> once you arrive at the clinic.</p>

            <h4>4. Continuous Support</h4>
            <p>An English-speaking team is available 24 hours a day, 7 days a week, before, during, and after treatment.</p>

            <h4>5. Right to Cancel</h4>
            <p>If you change your mind before departure, no penalty. Your peace of mind comes first.</p>

            <h4>6. Verified Feedback</h4>
            <p>We systematically collect patient reviews to ensure continuous quality improvement.</p>
        `,
        images: [
            { src: '_assets/instagram-images/ig_image_5_20251202.jpg', caption: 'The truth no one tells you' },
            { src: '_assets/instagram-images/ig_image_4_20251203.jpg', caption: 'Guaranteed 75% savings' },
            { src: '_assets/instagram-images/ig_image_6_10_20251125.jpg', caption: 'Real patient results' },
            { src: '_assets/instagram-images/ig_image_12_20251013.jpg', caption: 'Verified reviews' },
            { src: '_assets/instagram-images/ig_image_7_20251120.jpg', caption: 'Transfer service included' }
        ],
        keyPoints: [
            { icon: 'fa-certificate', title: 'Certified Clinics', desc: 'Only verified facilities' },
            { icon: 'fa-file-contract', title: 'Written Warranty', desc: 'On every treatment' },
            { icon: 'fa-lock', title: 'Locked Prices', desc: 'Binding quote' },
            { icon: 'fa-clock', title: '24/7 Support', desc: 'English team always available' }
        ]
    },

    prezzi: {
        heroTitle: "Why Prices Are Lower",
        heroSubtitle: "European quality at affordable prices.",
        content: `
            <h2>Lower Prices</h2>
            <p>The cost reduction <strong>does not come from lower quality</strong>. It comes from our strong market position.</p>

            <h3 class="text-primary">How We Get Better Prices</h3>

            <h4>Bargaining Power</h4>
            <p>By bringing hundreds of patients every year, we obtain conditions that a single patient could never negotiate.</p>

            <h4>Eliminating Intermediaries</h4>
            <p>The direct relationship with clinics eliminates unnecessary steps and costs.</p>

            <h4>Albanian Operating Costs</h4>
            <p>The cost of living and management in Albania is significantly lower than in Western Europe, and this advantage is passed on to you.</p>

            <h4>Controlled Competition</h4>
            <p>The presence of multiple clinics in our network creates healthy competition that keeps prices fair.</p>

            <div class="highlight-box">
                <p><strong>The Result:</strong> Save up to 75% compared to Western European prices, without sacrificing EU-certified materials and qualified professionals.</p>
            </div>
        `,
        images: [
            {
                type: 'pricing-card',
                id: 'implant-card',
                image: 'images/titanio.PNG',
                title: 'Dental Implant',
                subtitle: '7 brands available',
                priceRange: '€300 - €600',
                modalId: 'impianti'
            },
            {
                type: 'pricing-card',
                id: 'corone-card',
                image: 'images/corona.PNG',
                title: 'Dental Crown',
                subtitle: 'Zirconia and Ceramic',
                priceRange: '€100 - €170',
                modalId: 'corone'
            },
            {
                type: 'pricing-card',
                id: 'arcata-card',
                image: 'images/arcatacompleta.PNG',
                title: 'Full Arch',
                subtitle: 'All-on-4 / All-on-6',
                priceRange: '€2,400 - €4,800',
                modalId: 'arcata'
            }
        ],
        keyPoints: [
            { icon: 'fa-chart-line', title: 'Bargaining Power', desc: 'Hundreds of patients yearly' },
            { icon: 'fa-link', title: 'Direct Relationship', desc: 'No intermediaries' },
            { icon: 'fa-euro-sign', title: 'Reduced Costs', desc: 'Benefits passed to you' },
            { icon: 'fa-percentage', title: 'Up to 75%', desc: 'Guaranteed savings' }
        ]
    },

    esperienza: {
        heroTitle: "An Experience Designed for You",
        heroSubtitle: "Peace of mind and comfort at every moment.",
        content: `
            <h2>Your Experience</h2>
            <p>We know that facing dental treatment can generate anxiety. That's why we've designed every aspect of the service to guarantee you <strong>peace of mind and comfort</strong>.</p>

            <h3>Your Journey with Us</h3>

            <h4>Private Transfer</h4>
            <p>We welcome you at Tirana airport and take you directly to your hotel and the clinic. No logistical stress.</p>

            <h4>Selected Accommodation</h4>
            <p>We partner with quality hotels near the clinics to ensure your rest and comfort.</p>

            <h4>English Communication</h4>
            <p>All our staff speaks English. You will never have to worry about language barriers.</p>

            <h4>Flexible Scheduling</h4>
            <p>We organize appointments according to your needs, minimizing waiting times and optimizing your stay.</p>

            <h4>Emotional Support</h4>
            <p>We understand your concerns. We are always available to answer questions, clarify doubts, and reassure you.</p>

            <div class="highlight-box">
                <p>Albanian Dental Clinic is not simply a booking service. We are a <strong>partner that takes concrete responsibility</strong> for your wellbeing. Every patient receives the same level of attention and protection.</p>
            </div>
        `,
        images: [
            { src: 'images/tour/Tirana_28.jpg', caption: 'Tirana - Vibrant city' },
            { src: 'images/tour/Torre_del_Reloj,_Tirana,_Albania,_2014-04-17,_DD_08.jpeg', caption: 'Clock Tower' },
            { src: 'images/tour/kalaja-e-tiranes.jpg', caption: 'Tirana Castle' },
            { src: 'images/tour/la-splendida-cupola-ingresso.jpg', caption: 'Historic architecture' },
            { src: 'images/tour/Ethem_Bey_mosque,_Tirana_(by_Pudelek).jpg', caption: 'Et\'hem Bey Mosque' },
            { src: 'images/tour/piramide-tirana.jpg', caption: 'Pyramid of Tirana' },
            { src: 'images/tour/thumbs_b_c_bd1915f499f554f01c69867c149724b7.jpg', caption: 'Panoramic view' }
        ],
        keyPoints: [
            { icon: 'fa-plane-arrival', title: 'Private Transfer', desc: 'Airport - Hotel - Clinic' },
            { icon: 'fa-hotel', title: 'Selected Accommodation', desc: 'Guaranteed comfort' },
            { icon: 'fa-comments', title: 'English Staff', desc: 'No language barriers' },
            { icon: 'fa-heart', title: 'Emotional Support', desc: 'Always by your side' }
        ]
    }
};

// ========== CAROUSEL STATE ==========
let currentSlide = 0;
let currentImages = [];
let isInitialLoad = true;

// ========== FUNCTIONS ==========

function showSection(sectionId, scrollToTop = false) {
    const section = sections[sectionId];
    if (!section) return;

    // Update hero
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    if (heroTitle) heroTitle.textContent = section.heroTitle;
    if (heroSubtitle) heroSubtitle.textContent = section.heroSubtitle;

    // Update content
    const sectionContent = document.getElementById('section-content');
    if (sectionContent) {
        sectionContent.innerHTML = section.content;
    }

    // Update carousel
    updateCarousel(section.images);

    // Update key points
    updateKeyPoints(section.keyPoints);

    // Update active nav - check both data-section attribute and onclick
    document.querySelectorAll('.subsection-nav .nav-link').forEach(link => {
        link.classList.remove('active');
        const dataSection = link.getAttribute('data-section');
        const onclickAttr = link.getAttribute('onclick');

        if (dataSection === sectionId ||
            (onclickAttr && onclickAttr.includes(`'${sectionId}'`))) {
            link.classList.add('active');
        }
    });

    // Update URL without triggering scroll
    history.replaceState(null, '', `#${sectionId}`);

    // Scroll to TOP of page to show hero section (when user clicks tab)
    if (scrollToTop) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

function updateCarousel(images) {
    currentImages = images || [];
    currentSlide = 0;

    const carouselInner = document.getElementById('carousel-inner');
    const carouselContainer = document.querySelector('.carousel-container');
    const prevBtn = document.querySelector('.carousel-control-prev');
    const nextBtn = document.querySelector('.carousel-control-next');

    if (!carouselInner) return;

    // Check if this section uses pricing cards
    if (currentImages.length > 0 && currentImages[0].type === 'pricing-card') {
        // Add pricing mode class for CSS styling
        if (carouselContainer) carouselContainer.classList.add('pricing-mode');
        carouselInner.classList.add('pricing-mode');

        // Render pricing cards
        let html = '<div class="pricing-cards-carousel">';
        currentImages.forEach(card => {
            html += `
                <div class="pricing-card-item" onclick="openProductModal('${card.modalId}')">
                    <div class="card-image">
                        <img src="${card.image}" alt="${card.title}" onerror="this.src='images/dental-clinic.jpg'">
                    </div>
                    <div class="card-info">
                        <h4>${card.title}</h4>
                        <p class="subtitle">${card.subtitle}</p>
                        <div class="price-row">
                            <span class="price-label">STARTING FROM</span>
                            <span class="price-value">${card.priceRange}</span>
                        </div>
                        <button class="btn-vedi-opzioni">
                            <i class="fas fa-chevron-right"></i> See options
                        </button>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        carouselInner.innerHTML = html;

        // Hide carousel arrows for pricing cards
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';

    } else if (currentImages.length > 0) {
        // Remove pricing mode class
        if (carouselContainer) carouselContainer.classList.remove('pricing-mode');
        carouselInner.classList.remove('pricing-mode');
        // Render normal image carousel
        let html = '';
        currentImages.forEach((img, index) => {
            html += `
                <div class="carousel-item ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <img src="${img.src}" alt="${img.caption}" onerror="this.src='images/dental-clinic.jpg'">
                    <div class="carousel-caption">
                        <p>${img.caption}</p>
                    </div>
                </div>
            `;
        });
        carouselInner.innerHTML = html;

        // Show carousel arrows for normal images
        if (prevBtn) prevBtn.style.display = 'flex';
        if (nextBtn) nextBtn.style.display = 'flex';

    } else {
        // No images - show placeholder
        if (carouselContainer) carouselContainer.classList.remove('pricing-mode');
        carouselInner.classList.remove('pricing-mode');
        carouselInner.innerHTML = '<p class="text-muted text-center" style="padding: 40px;">No images available</p>';
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
    }
}

function updateKeyPoints(keyPoints) {
    const keyPointsRow = document.getElementById('key-points-row');
    if (!keyPointsRow || !keyPoints || keyPoints.length === 0) return;

    const colClass = keyPoints.length <= 4 ? 'col-md-6 col-lg-3' : 'col-md-6 col-lg-4';

    let html = keyPoints.map(point => `
        <div class="${colClass}">
            <div class="key-point-card">
                <div class="icon-wrapper">
                    <i class="fas ${point.icon}"></i>
                </div>
                <h4>${point.title}</h4>
                <p>${point.desc}</p>
            </div>
        </div>
    `).join('');

    keyPointsRow.innerHTML = html;
}

function nextSlide() {
    if (currentImages.length === 0) return;

    const items = document.querySelectorAll('.carousel-item');
    items.forEach(item => item.classList.remove('active'));

    currentSlide = (currentSlide + 1) % currentImages.length;
    items[currentSlide].classList.add('active');
}

function prevSlide() {
    if (currentImages.length === 0) return;

    const items = document.querySelectorAll('.carousel-item');
    items.forEach(item => item.classList.remove('active'));

    currentSlide = (currentSlide - 1 + currentImages.length) % currentImages.length;
    items[currentSlide].classList.add('active');
}

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', function() {

    // On initial load, scroll to top first to show hero
    window.scrollTo(0, 0);

    // Load initial section based on URL hash (without scrolling to content)
    const hash = window.location.hash.replace('#', '') || 'missione';
    showSection(hash, false); // false = don't scroll to content on initial load

    // Mark initial load complete
    isInitialLoad = false;

    // Handle browser back/forward
    window.addEventListener('popstate', function() {
        const hash = window.location.hash.replace('#', '') || 'missione';
        showSection(hash, false);
    });

    // Tab navigation click handlers
    document.querySelectorAll('.subsection-nav .nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Get section ID from data-section or onclick attribute
            let sectionId = this.getAttribute('data-section');
            if (!sectionId) {
                const onclick = this.getAttribute('onclick');
                if (onclick) {
                    const match = onclick.match(/showSection\(['"]([^'"]+)['"]\)/);
                    if (match) sectionId = match[1];
                }
            }

            if (sectionId && sections[sectionId]) {
                showSection(sectionId, true); // true = scroll to TOP to show hero
            }
        });
    });

    // Desktop dropdown click handling
    document.querySelectorAll('.navbar-dropdown > a').forEach(function(dropdownToggle) {
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.parentElement;

            // Close other open dropdowns
            document.querySelectorAll('.navbar-dropdown.open').forEach(function(openDropdown) {
                if (openDropdown !== parent) {
                    openDropdown.classList.remove('open');
                }
            });

            // Toggle current dropdown
            parent.classList.toggle('open');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar-dropdown')) {
            document.querySelectorAll('.navbar-dropdown.open').forEach(function(openDropdown) {
                openDropdown.classList.remove('open');
            });
        }
    });

    // Close dropdown when clicking on a menu item inside the dropdown
    document.querySelectorAll('.navbar-dropdown .dropdown-menu a').forEach(function(link) {
        link.addEventListener('click', function() {
            const dropdown = this.closest('.navbar-dropdown');
            if (dropdown) {
                dropdown.classList.remove('open');
            }
        });
    });

    console.log('About Us page initialized');
});

// ========================================
// PRODUCT DATA FOR MODALS - COPIED FROM INDEX.HTML
// ========================================
const productData = {
    impianti: {
        title: 'Dental Implants',
        icon: 'fas fa-tooth',
        products: [
            {
                brand: 'Premium Titanium',
                description: 'High quality titanium implant. 100% biocompatible, ideal for most cases.',
                price: 300,
                image: 'images/titanio.PNG'
            },
            {
                brand: 'Osstem-Toplan',
                description: 'World-renowned Korean implant system. Excellent osseointegration.',
                price: 350,
                image: 'images/toplan.PNG'
            },
            {
                brand: 'JD Evolution',
                description: 'Advanced technology for predictable results. Innovative design.',
                price: 350,
                image: 'images/jdevolution.PNG'
            },
            {
                brand: 'Tecom',
                description: 'Premium implant with treated surface. High primary stability.',
                price: 400,
                image: 'images/teecom.PNG'
            },
            {
                brand: 'Megagen',
                description: 'World leader in implants. AnyRidge technology for compromised bone.',
                price: 500,
                image: 'images/megagen.PNG'
            },
            {
                brand: 'Straumann',
                description: 'Premium Swiss implant. World leader with over 60 years of research. Lifetime warranty.',
                price: 350,
                image: 'images/strauman.JPG'
            },
            {
                brand: 'Straumann Variations',
                description: 'Complete range of Straumann implants. Various sizes and surfaces for every clinical need.',
                price: 350,
                priceMax: 500,
                image: 'images/strauman,variations.JPG'
            },
            {
                brand: 'Pterygoid',
                origin: 'Advanced Technique for Posterior Atrophy',
                description: 'Implant anchored in the tuberosity and pterygoid process. Ideal for patients with limited bone in the posterior maxillary area. Avoids complex bone grafts.',
                price: 350,
                priceMax: 600,
                image: 'images/impiant zigomatico.PNG'
            },
            {
                brand: 'Zygomatic',
                origin: 'Solution for Severe Maxillary Atrophy',
                description: 'Long implants (30-50mm) anchored in the zygomatic bone (cheekbone). Immediate rehabilitation without bone grafts for patients with severe maxillary bone loss.',
                price: 600,
                image: 'images/pterigoido.PNG'
            }
        ]
    },
    corone: {
        title: 'Dental Crowns',
        icon: 'fas fa-crown',
        products: [
            {
                brand: 'Composite Crown',
                origin: 'CE Certified Composite Resin',
                description: 'Reinforced composite resin crown. Economical solution ideal for long-term temporary crowns. Natural aesthetics with direct repair possibility. Average duration 3-5 years.',
                price: 100,
                image: 'images/corona zircon.PNG'
            },
            {
                brand: 'Ceramic Crown',
                origin: 'Metal-Ceramic - Cobalt-Chrome Alloy',
                description: 'Crown with internal cobalt-chrome alloy structure covered with layered ceramic. Excellent value with high mechanical resistance. Ideal for posterior teeth. Duration 10-15 years.',
                price: 130,
                image: 'images/corona ceramic.PNG'
            },
            {
                brand: 'Zirconia Crown',
                origin: 'Layered Zirconia-Ceramic',
                description: 'Crown with high-strength zirconium oxide (ZrO2) core (900-1200 MPa) covered with aesthetic ceramic. 100% biocompatible, metal-free. Natural translucency for superior aesthetics. Duration 15-20 years.',
                price: 180,
                image: 'images/corona zircon.PNG'
            },
            {
                brand: 'Full Zirconia Multilayer Crown',
                origin: 'Monolithic Multilayer Zirconia',
                description: 'Crown entirely made of zirconia with integrated multilayer chromatic gradient. Maximum fracture resistance without ceramic chipping risk. Precision CAD/CAM technology. Perfect for bruxism patients. Duration over 20 years.',
                price: 200,
                image: 'images/corona1.PNG'
            },
            {
                brand: 'E-Max Crown',
                origin: 'IPS e.max - Ivoclar Vivadent (Liechtenstein)',
                description: 'Crown made of lithium disilicate (Li2Si2O5) pressed or milled. The gold standard for dental aesthetics with 400 MPa resistance. Translucency identical to natural teeth. Ideal for veneers and anterior crowns.',
                price: 300,
                image: 'images/corona.PNG'
            }
        ]
    },
    arcata: {
        title: 'Full Arch',
        icon: 'fas fa-teeth',
        products: [
            {
                brand: 'All-on-4 Titanium Grade 4 EV',
                origin: 'European CE Production - ISO 13485',
                description: 'All-on-4 protocol with 4 commercially pure Grade 4 EV titanium implants of European production. SLA surface (Sand-blasted Large-grit Acid-etched) for optimal osseointegration in 8-12 weeks. Includes 12 zirconia-ceramic crowns with high-strength core. Immediate loading in 24-48h with provisional prosthesis. 10-year warranty on implant body.',
                price: 2400,
                formula: '4x Titanium EV Implant (€300) + 12x Zirconia-Ceramic Crown (€100)',
                image: 'images/arcatacomplettt.PNG'
            },
            {
                brand: 'All-on-4 Megagen AnyRidge',
                origin: 'Megagen - Daegu, South Korea (since 2002)',
                description: 'Premium Megagen AnyRidge implant system with exclusive Knife-Thread design for maximum primary stability even in D3-D4 bone. Xpeed surface with incorporated calcium nanotubes for 50% accelerated osseointegration. 11.5° conometric anti-rotation connection. Includes 12 E-Max IPS crowns in lithium disilicate (400 MPa). FDA, CE, KFDA certified. Megagen lifetime warranty.',
                price: 3800,
                formula: '4x Megagen AnyRidge (€500) + 12x E-Max IPS Crown (€150)',
                image: 'images/arcatacompleta.PNG'
            },
            {
                brand: 'All-on-5 Titanium Grade 4 EV',
                origin: 'European CE Production - ISO 13485',
                description: 'All-on-5 protocol with 5 Grade 4 EV titanium implants for optimal balance between stability and invasiveness. The fifth central implant reduces biomechanical stress by 25% compared to All-on-4. Ideal for arches with moderate resorption in the anterior zone. Includes 12 multilayer zirconia-ceramic crowns. Immediate loading protocol available.',
                price: 2700,
                formula: '5x Titanium EV Implant (€300) + 12x Zirconia-Ceramic Crown (€100)',
                image: 'images/arcata completa 2.PNG'
            },
            {
                brand: 'All-on-5 Megagen AnyOne',
                origin: 'Megagen - Daegu, South Korea (since 2002)',
                description: 'Hybrid configuration with 5 Megagen AnyOne implants with internal conometric connection. Third-generation S.L.A. (Sandblasted with Large grit and Acid etched) design. The AnyOne system offers integrated platform switching for crestal bone preservation. Includes 12 full-contour monolithic zirconia crowns for posteriors and E-Max for anteriors. Zero bacterial microleakage guaranteed.',
                price: 4300,
                formula: '5x Megagen AnyOne (€500) + 12x Zirconia/E-Max Crown (€160)',
                image: 'images/arcata completa3.PNG'
            },
            {
                brand: 'All-on-6 Titanium Grade 4 EV',
                origin: 'European CE Production - ISO 13485',
                description: 'All-on-6 protocol with 6 Grade 4 EV titanium implants for uniform distribution of masticatory load up to 150 kg. Indicated for patients with compromised bone density (D3-D4) or severe alveolar resorption. Configuration with 2 posterior implants angled 30-45° for bicortical anchorage. Includes 12 high-translucency zirconia-ceramic crowns. Maximum prosthetic longevity.',
                price: 3000,
                formula: '6x Titanium EV Implant (€300) + 12x Zirconia-Ceramic Crown (€100)',
                image: 'images/arcatacompleta100.PNG'
            },
            {
                brand: 'All-on-6 Megagen AnyRidge Premium',
                origin: 'Megagen - Daegu, South Korea (since 2002)',
                description: 'Ultimate premium solution with 6 Megagen AnyRidge implants with progressive variable threading. Latest generation Xpeed surface with calcium ions for accelerated bone mineralization. Insertion torque up to 70 Ncm for immediate stability. Includes 12 E-Max Press crowns in monolithic lithium disilicate (500 MPa) with individual characterization. FDA, CE, KFDA, TGA certified. The choice of implant surgeons.',
                price: 4800,
                formula: '6x Megagen AnyRidge (€500) + 12x E-Max Press Crown (€150)',
                image: 'images/arcatacompleta100.PNG'
            }
        ]
    }
};

// ========================================
// PRODUCT MODAL FUNCTIONALITY
// ========================================
const productModalOverlay = document.getElementById('product-modal-overlay');
const productCarousel = document.getElementById('product-carousel');
const carouselDots = document.getElementById('carousel-dots');
const productModalTitle = document.getElementById('product-modal-title');
let currentProductCategory = null;

function openProductModal(category) {
    const data = productData[category];
    if (!data) return;

    currentProductCategory = category;

    // Update modal title
    productModalTitle.innerHTML = `<i class="${data.icon}"></i><span>${data.title}</span>`;

    // Generate product cards
    let cardsHTML = '';
    data.products.forEach((product, index) => {
        const priceDisplay = product.priceMax
            ? `&euro;${product.price} - &euro;${product.priceMax}`
            : `&euro;${product.price.toLocaleString('it-IT')}`;

        const formulaHTML = product.formula
            ? `<div style="font-size: 0.7rem; color: var(--gray-500); margin-top: 4px;">${product.formula}</div>`
            : '';

        const originHTML = product.origin
            ? `<div class="product-card-origin"><i class="fas fa-globe-europe"></i> ${product.origin}</div>`
            : '';

        cardsHTML += `
            <div class="product-card" data-index="${index}">
                <img src="${product.image}" alt="${product.brand}" class="product-card-image" style="background: #ffffff; object-fit: contain; height: 180px;" onerror="this.src='images/instagram.images/ig_image_1_20251130.jpg'">
                <div class="product-card-content">
                    <div class="product-card-brand">${product.brand}</div>
                    ${originHTML}
                    <div class="product-card-desc">${product.description}</div>
                    <div class="product-card-price">${priceDisplay}${formulaHTML}</div>
                </div>
            </div>
        `;
    });
    productCarousel.innerHTML = cardsHTML;

    // Generate dots
    let dotsHTML = '';
    data.products.forEach((_, index) => {
        dotsHTML += `<div class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`;
    });
    carouselDots.innerHTML = dotsHTML;

    // Show modal
    productModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Reset scroll position
    productCarousel.scrollLeft = 0;

    // Setup scroll observer
    setupCarouselObserver();
}

function closeProductModal() {
    productModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
productModalOverlay.addEventListener('click', (e) => {
    if (e.target === productModalOverlay) {
        closeProductModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && productModalOverlay.classList.contains('active')) {
        closeProductModal();
    }
});

// Carousel navigation
let currentCarouselIndex = 0;

function setupCarouselObserver() {
    const cards = productCarousel.querySelectorAll('.product-card');
    const dots = carouselDots.querySelectorAll('.carousel-dot');

    // Update dots on scroll
    productCarousel.addEventListener('scroll', () => {
        const scrollLeft = productCarousel.scrollLeft;
        const cardWidth = cards[0]?.offsetWidth || 280;
        const newIndex = Math.round(scrollLeft / (cardWidth + 16));

        if (newIndex !== currentCarouselIndex) {
            currentCarouselIndex = newIndex;
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentCarouselIndex);
            });
        }
    });

    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            scrollToCard(index);
        });
    });
}

function scrollToCard(index) {
    const cards = productCarousel.querySelectorAll('.product-card');
    if (cards[index]) {
        const cardWidth = cards[0].offsetWidth + 16;
        productCarousel.scrollTo({
            left: index * cardWidth,
            behavior: 'smooth'
        });
    }
}

function carouselPrev() {
    const cards = productCarousel.querySelectorAll('.product-card');
    if (currentCarouselIndex > 0) {
        scrollToCard(currentCarouselIndex - 1);
    }
}

function carouselNext() {
    const cards = productCarousel.querySelectorAll('.product-card');
    if (currentCarouselIndex < cards.length - 1) {
        scrollToCard(currentCarouselIndex + 1);
    }
}

// ========================================
// TRACKING MODULE - About Us Page
// ========================================

// Tracking Configuration (from env.albaniandentalclinic.com)
const TRACKING_CONFIG = {
    GA4_MEASUREMENT_ID: 'G-74JG2X3NB8',
    GOOGLE_ADS_ID: 'AW-17825998174',
    GOOGLE_ADS_CONVERSION_LABEL: '', // To be set after conversion action created
    META_PIXEL_ID: '1608107910166053'
};

// ========== UTM PARAMETER CAPTURE ==========
function captureUTMParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const trackingData = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_term: urlParams.get('utm_term') || '',
        utm_content: urlParams.get('utm_content') || '',
        gclid: urlParams.get('gclid') || '',
        fbclid: urlParams.get('fbclid') || '',
        landing_page: window.location.pathname,
        referrer: document.referrer
    };

    // Store in sessionStorage
    const existing = JSON.parse(sessionStorage.getItem('trackingParams') || '{}');
    const merged = { ...existing, ...trackingData };
    sessionStorage.setItem('trackingParams', JSON.stringify(merged));

    if (trackingData.utm_source || trackingData.gclid || trackingData.fbclid) {
        console.log('✅ UTM params captured:', trackingData);
    }

    return trackingData;
}

// ========== TRACKING HELPER FUNCTIONS ==========
function trackGA4Event(eventName, params = {}) {
    if (typeof gtag === 'function') {
        gtag('event', eventName, params);
        console.log('📊 GA4 Event:', eventName, params);
    }
}

function trackMetaEvent(eventName, params = {}) {
    if (typeof fbq === 'function') {
        fbq('track', eventName, params);
        console.log('📘 Meta Event:', eventName, params);
    }
}

function trackDataLayer(eventName, params = {}) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: eventName,
        ...params
    });
}

// ========== SECTION VIEW TRACKING ==========
// Synced with index.html tracking format
function trackSectionView(sectionId) {
    const sectionNames = {
        'missione': 'Our Mission',
        'ruolo': 'Our Role',
        'tutela': 'Patient Protection',
        'prezzi': 'Lower Prices',
        'esperienza': 'Your Experience'
    };

    const sectionName = sectionNames[sectionId] || sectionId;

    // GA4 Event - same format as index.html
    if (typeof gtag === 'function') {
        gtag('event', 'section_view', {
            section_id: sectionId,
            section_name: sectionName,
            page_location: window.location.href,
            page_title: document.title
        });
    }

    // DataLayer - same format as index.html
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'section_view',
        section_id: sectionId,
        section_name: sectionName
    });

    // Meta Event - ViewContent
    if (typeof fbq === 'function') {
        fbq('track', 'ViewContent', {
            content_name: sectionName,
            content_category: 'About Us',
            content_ids: [sectionId]
        });
    }

    // Console log - same format as index.html
    console.log('✅ Section view tracked:', sectionName);
}

// ========== PRODUCT MODAL TRACKING ==========
// Synced with index.html tracking format
function trackProductModalOpen(category) {
    const data = productData[category];
    if (!data) return;

    // GA4 Event - same format as index.html
    if (typeof gtag === 'function') {
        gtag('event', 'product_modal_open', {
            'category': category,
            'title': data.title,
            'products_count': data.products.length
        });
    }

    // DataLayer - same format as index.html
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'product_modal_open',
        category: category,
        title: data.title
    });

    // Meta Event - ViewContent
    if (typeof fbq === 'function') {
        fbq('track', 'ViewContent', {
            content_name: data.title,
            content_category: 'Dental Products',
            content_ids: [category],
            content_type: 'product_group'
        });
    }

    // Console log - same format as index.html
    console.log('✅ Product modal tracked:', category, data.title);
}

// ========== PHONE CLICK TRACKING ==========
// GA4 event only - import to Google Ads from GA4
function trackPhoneClick() {
    if (typeof gtag === 'function') {
        gtag('event', 'click_phone', {
            'event_category': 'Contact',
            'event_label': 'Phone Click',
            'phone_number': '+37254450188',
            'value': 0.5,
            'currency': 'EUR'
        });
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'click_phone' });
    console.log('✅ GA4 click_phone tracked');
}

// ========== WHATSAPP CLICK TRACKING ==========
// GA4 event only - import to Google Ads from GA4
function trackWhatsAppClick() {
    if (typeof gtag === 'function') {
        gtag('event', 'click_whatsapp', {
            'event_category': 'Contact',
            'event_label': 'WhatsApp Click',
            'phone_number': '+37254450188',
            'value': 0.5,
            'currency': 'EUR'
        });
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'click_whatsapp' });
    console.log('✅ GA4 click_whatsapp tracked');
}

// ========== CTA CLICK TRACKING ==========
function trackCTAClick(ctaName, ctaLocation) {
    if (typeof gtag === 'function') {
        gtag('event', 'cta_click', {
            cta_name: ctaName,
            cta_location: ctaLocation,
            page_location: window.location.href
        });
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'cta_click',
        cta_name: ctaName,
        cta_location: ctaLocation
    });
    console.log('✅ CTA click tracked:', ctaName);
}

// ========== NAV CLICK TRACKING ==========
function trackNavClick(menuItem, destination) {
    if (typeof gtag === 'function') {
        gtag('event', 'nav_click', {
            menu_item: menuItem,
            destination: destination,
            page_location: window.location.href
        });
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'nav_click',
        menu_item: menuItem,
        destination: destination
    });
}

// ========== INITIALIZE TRACKING ==========
function initializeTracking() {
    // Capture UTM params on page load
    captureUTMParams();

    // Track phone link clicks
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', trackPhoneClick);
    });

    // Track WhatsApp link clicks
    document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach(link => {
        link.addEventListener('click', trackWhatsAppClick);
    });

    // Track CTA buttons
    document.querySelectorAll('.cta-button-primary, .cta-button-secondary, .navbar-cta, .btn-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            const ctaName = this.textContent.trim();
            const ctaLocation = this.closest('section')?.className || 'navbar';
            trackCTAClick(ctaName, ctaLocation);
        });
    });

    // Track navigation menu clicks
    document.querySelectorAll('.navbar-menu a, .mobile-menu-nav a').forEach(link => {
        link.addEventListener('click', function() {
            const menuItem = this.textContent.trim();
            const destination = this.getAttribute('href');
            trackNavClick(menuItem, destination);
        });
    });

    // Track footer link clicks
    document.querySelectorAll('.footer-menu a, .footer-social-icons a').forEach(link => {
        link.addEventListener('click', function() {
            trackGA4Event('footer_click', {
                link_text: this.textContent.trim() || 'Social Icon',
                link_url: this.getAttribute('href')
            });
        });
    });

    console.log('✅ About Us tracking initialized');
    console.log('✅ UX tracking initialized');
}

// Initialize tracking when DOM is ready
document.addEventListener('DOMContentLoaded', initializeTracking);

// ========== INJECT TRACKING INTO EXISTING FUNCTIONS ==========

// Store original showSection function
const originalShowSection = showSection;

// Override showSection to add tracking
showSection = function(sectionId, scrollToTop = false) {
    // Call original function
    originalShowSection(sectionId, scrollToTop);

    // Track section view
    trackSectionView(sectionId);
};

// Store original openProductModal function
const originalOpenProductModal = openProductModal;

// Override openProductModal to add tracking
openProductModal = function(category) {
    // Track modal open
    trackProductModalOpen(category);

    // Call original function
    originalOpenProductModal(category);
};

// ========================================
// FORM POPUP FUNCTIONALITY - COPIED FROM INDEX.HTML
// ========================================
const popupOverlay = document.getElementById('popup-overlay');
const openButtons = document.querySelectorAll('.open-popup-btn');

openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        popupOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Track popup open
        trackPopupOpen();
    });
});

function closePopup() {
    popupOverlay.classList.remove('active');
    document.body.style.overflow = '';
    // Track popup close
    if (typeof gtag === 'function') {
        gtag('event', 'popup_close', { popup_name: 'preventivo_form' });
        console.log('✅ Popup close tracked');
    }
}

function openPopup() {
    popupOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Track popup open
    trackPopupOpen();
}

function trackPopupOpen() {
    // GA4 Event
    if (typeof gtag === 'function') {
        gtag('event', 'popup_open', {
            popup_name: 'preventivo_form',
            page_location: window.location.href
        });
        console.log('✅ GA4 popup_open event fired');
    }

    // Meta Pixel ViewContent
    if (typeof fbq === 'function') {
        fbq('track', 'ViewContent', {
            content_name: 'Preventivo Form',
            content_category: 'Form Popup'
        });
        console.log('✅ Meta ViewContent event fired');
    }

    // DataLayer push
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'popup_open',
        popup_name: 'preventivo_form'
    });
    console.log('✅ Popup open tracked');
}

popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        closePopup();
    }
});

// Toggle extra fields functionality
document.getElementById('toggleExtra')?.addEventListener('click', function() {
    const extraFields = document.getElementById('extraFields');
    const chevronIcon = document.getElementById('chevronIcon');
    if (extraFields.style.display === 'none') {
        extraFields.style.display = 'block';
        chevronIcon.classList.remove('fa-chevron-down');
        chevronIcon.classList.add('fa-chevron-up');
    } else {
        extraFields.style.display = 'none';
        chevronIcon.classList.remove('fa-chevron-up');
        chevronIcon.classList.add('fa-chevron-down');
    }
});

// ========================================
// FORM SUBMISSION HANDLING
// ========================================
document.getElementById('lead-form')?.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {
        first_name: formData.get('fname_new'),
        last_name: formData.get('lname_new'),
        city: formData.get('city_new'),
        phone: formData.get('phone_new'),
        email: formData.get('email') || '',
        treatment: formData.get('treatment') || '',
        message: formData.get('message') || '',
        source: formData.get('source'),
        paese_provenienza: formData.get('paese_provenienza'),
        utm_source: formData.get('utm_source'),
        utm_medium: formData.get('utm_medium'),
        utm_campaign: formData.get('utm_campaign'),
        utm_term: formData.get('utm_term'),
        utm_content: formData.get('utm_content'),
        gclid: formData.get('gclid'),
        fbclid: formData.get('fbclid')
    };

    console.log('📧 Form submitted:', data);

    // Track lead submission - Google's standard event
    if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', {
            event_category: 'conversion',
            event_label: 'about-us-form',
            value: 1,
            currency: 'EUR'
        });
        // Google Ads receives conversion via GA4 import (generate_lead event)
        console.log('✅ GA4 generate_lead event fired');
    }

    if (typeof fbq === 'function') {
        fbq('track', 'Lead', {
            content_name: 'About Us Form',
            content_category: 'Lead Form'
        });
        console.log('✅ Meta Lead event fired');
    }

    // Send to Kolor CRM
    try {
        const response = await fetch('https://crm.clinicadentalealbania.it/api/v1/leads/import', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': '6fcfcf06-ba40-4d00-857e-2e684ebc09fc'
            },
            body: JSON.stringify({
                first_name: data.first_name,
                last_name: data.last_name,
                phone: data.phone,
                email: data.email,
                city: data.city,
                notes: data.message,
                treatment_interest: data.treatment,
                source: 'about-us-page',
                platform: 'albaniandentalclinic.com',
                utm_source: data.utm_source,
                utm_medium: data.utm_medium,
                utm_campaign: data.utm_campaign,
                utm_term: data.utm_term,
                utm_content: data.utm_content,
                gclid: data.gclid,
                fbclid: data.fbclid,
                affiliate_id: 7,
                campaign_type: 'fissa'
            })
        });

        if (response.ok) {
            console.log('✅ Lead sent to CRM successfully');
            // Close popup and show success
            closePopup();
            alert('Thank you! We will contact you soon.');
            this.reset();
        } else {
            console.error('❌ CRM error:', response.status);
            alert('Thank you! We will contact you soon.');
            closePopup();
            this.reset();
        }
    } catch (error) {
        console.error('❌ Network error:', error);
        alert('Thank you! We will contact you soon.');
        closePopup();
        this.reset();
    }
});
