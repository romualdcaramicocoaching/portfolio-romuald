/* ============================================
   ROMUALD COACH - JAVASCRIPT
   ============================================
   Fichier: script.js
   Description: Interactions, animations et effets
   
   Structure:
   1. FAQ Accordion
   2. Smooth Scroll
   3. Scroll Animations (Intersection Observer)
   4. Navbar Scroll Effect
   5. Counter Animation
   6. Testimonial Carousel (optionnel)
   7. Form Validation
   8. Utilities
   
   ============================================ */

// ============================================
// 1. FAQ ACCORDION
// ============================================
/* Cette fonction gère l'ouverture/fermeture des questions FAQ.
   Quand on clique sur une question, ça ouvre ou ferme la réponse. */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Ferme tous les autres items (accordéon simple)
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle l'item actuel
            item.classList.toggle('active');
        });
    });
}

// ============================================
// 2. SMOOTH SCROLL
// ============================================
/* Cette fonction permet de scroller doucement quand on clique 
   sur les liens du menu (导航). */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Ignore les liens vides ou "#"
            if (href === '#' || href === '' || href.length <= 1) return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerOffset = 80; // Hauteur du header sticky si tu en as un
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// 3. SCROLL ANIMATIONS (Intersection Observer)
// ============================================
/* Cette fonction anime les éléments quand ils apparaissent à l'écran.
   Utilise l'API Intersection Observer pour performance. */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.problem-card, .transformation-card, .method-step, ' +
        '.pricing-card, .testimonial-card, .section-header, ' +
        '.about-grid, .contact-grid, .fade-in, .fade-in-left, .fade-in-right'
    );
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajoute la classe 'visible' pour lancer l'animation CSS
                entry.target.classList.add('visible');
                
                // Une fois visible, on n'a plus besoin de l'observer
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observer chaque élément
    animatedElements.forEach((el, index) => {
        // Ajouter un délai progressif pour un effet cascade
        el.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(el);
    });
}

// ============================================
// 4. NAVBAR SCROLL EFFECT
// ============================================
/* Cette fonction ajoute une classe au navbar quand on scroll.
   Utile pour changer le fond du menu sticky. */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;
    
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Ajoute la classe 'scrolled' quand on scroll vers le bas
        if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    }, { passive: true });
}

// ============================================
// 5. COUNTER ANIMATION
// ============================================
/* Cette fonction anime les compteurs de chiffres 
   (ex: +100 clients, 90% de réussite) */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.proof-number, .stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const targetText = counter.textContent;
                
                // Extrait le nombre et le suffixe (%, +, etc.)
                const match = targetText.match(/([\d.]+)(.*)/);
                
                if (match) {
                    const targetNumber = parseFloat(match[1]);
                    const suffix = match[2] || '';
                    const duration = 2000; // 2 secondes
                    const startTime = performance.now();
                    
                    function updateCounter(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        
                        // Easing function (ease-out)
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        const currentNumber = targetNumber * easeOut;
                        
                        // Formate le nombre
                        if (targetNumber % 1 !== 0) {
                            counter.textContent = currentNumber.toFixed(1) + suffix;
                        } else {
                            counter.textContent = Math.floor(currentNumber) + suffix;
                        }
                        
                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = targetText; // Valeur finale exacte
                        }
                    }
                    
                    requestAnimationFrame(updateCounter);
                }
                
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

// ============================================
// 6. TESTIMONIAL CAROUSEL (Optionnel)
// ============================================
/* Cette fonction crée un carousel pour les témoignages.
   Décommente si tu veux un carousel au lieu d'une grille. */
/*
function initTestimonialCarousel() {
    const carousel = document.querySelector('.testimonials-carousel');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (!carousel || slides.length === 0) return;
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    // Auto-play toutes les 5 secondes
    setInterval(nextSlide, 5000);
}
*/

// ============================================
// 7. PARALLAX EFFECT (Optionnel)
// ============================================
/* Effet de parallaxe léger sur le hero.
   Décommente si tu veux cet effet. */
/*
function initParallax() {
    const heroBg = document.querySelector('.hero-bg-img');
    
    if (!heroBg) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.3; // Vitesse du parallax
        
        heroBg.style.transform = `translateY(${rate}px)`;
    }, { passive: true });
}
*/

// ============================================
// 8. ACTIVE NAVIGATION LINK
// ============================================
/* Cette fonction highlight le lien de navigation actif
   selon la section visible. */
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-50% 0px -50% 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    
                    if (link.getAttribute('href') === '#' + activeId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

// ============================================
// 9. IMAGE LAZY LOADING
// ============================================
/* Cette fonction charge les images uniquement quand elles 
   apparaissent à l'écran (performance). */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// 10. CURSOR TRAIL EFFECT (Optionnel)
// ============================================
/* Effet de traînée sur le curseur (fun pour desktop).
   Décommente si tu veux cet effet. */
/*
function initCursorTrail() {
    const trail = document.createElement('div');
    trail.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: var(--primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s;
    `;
    document.body.appendChild(trail);
    
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        trail.style.opacity = '0.8';
    });
    
    function animateTrail() {
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        
        trail.style.left = trailX + 'px';
        trail.style.top = trailY + 'px';
        
        requestAnimationFrame(animateTrail);
    }
    
    animateTrail();
    
    document.addEventListener('mouseleave', () => {
        trail.style.opacity = '0';
    });
}
*/

// ============================================
// INITIALISATION - LANCE TOUT AU CHARGEMENT
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Romuald Coach - Site chargé avec succès!');
    
    // Lance toutes les fonctions d'initialisation
    initFAQ();
    initSmoothScroll();
    initScrollAnimations();
    initNavbarScroll();
    initCounterAnimation();
    initActiveNavigation();
    initLazyLoading();
    
    // Optionnel: décommente ces lignes si tu utilises ces fonctions
    // initTestimonialCarousel();
    // initParallax();
    // initCursorTrail();
    
    // Affiche un message dans la console pour vérifier que le JS est bien chargé
    console.log('✅ FAQ初始化');
    console.log('✅ Smooth scroll初始化');
    console.log('✅ Animations au scroll初始化');
    console.log('✅ Compteurs initialisés');
});

// ============================================
// UTILITAIRES SUPPLÉMENTAIRES
// ============================================

// Fonction utilitaire pour debounce (limite la fréquence d'appel)
// Utilisée pour les événements scroll/resize
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Fonction utilitaire pour throttle (limite la fréquence d'exécution)
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Ajoute une classe 'loaded' au body quand tout est prêt
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Cache le loader si tu en as un
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
    }
});

// ============================================
// EXPORTS (si besoin pour d'autres scripts)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initFAQ,
        initSmoothScroll,
        initScrollAnimations,
        initCounterAnimation,
        debounce,
        throttle
    };
}