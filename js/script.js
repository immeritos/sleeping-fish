// Vence Website JavaScript
// Handles navigation, animations, and interactive elements

class VenceWebsite {
    constructor() {
        this.navbar = document.querySelector('nav') || document.getElementById('navbar');
        this.mobileMenuToggle = document.querySelector('.mobile-menu-toggle') || document.getElementById('mobile-menu-button');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        this.animateElements = document.querySelectorAll('.animate-on-scroll');
        
        this.init();
    }
    
    init() {
        this.setupNavigation();
        this.setupMobileMenu();
        this.setupScrollAnimations();
        this.setupSmoothScrolling();
        this.setupIntersectionObserver();
        this.handlePageLoad();
    }
    
    // Navigation functionality
    setupNavigation() {
        // Check if navbar exists before setting up scroll listeners
        if (!this.navbar) {
            console.warn('Navbar element not found');
            return;
        }
        
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Add backdrop blur when scrolled
            if (currentScrollY > 50) {
                this.navbar.classList.add('backdrop-blur-custom', 'bg-white/80', 'border-b', 'border-gray-200/50');
            } else {
                this.navbar.classList.remove('backdrop-blur-custom', 'bg-white/80', 'border-b', 'border-gray-200/50');
            }
            
            // Hide/show navbar on scroll
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                this.navbar.style.transform = 'translateY(-100%)';
            } else {
                this.navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });
        
        // Active link highlighting
        this.setupActiveLinks();
    }
    
    setupActiveLinks() {
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    this.navLinks.forEach(link => {
                        link.classList.remove('text-gray-900', 'font-semibold');
                        link.classList.add('text-gray-600');
                        
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.remove('text-gray-600');
                            link.classList.add('text-gray-900', 'font-semibold');
                        }
                    });
                }
            });
        });
    }
    
    // Mobile menu functionality
    setupMobileMenu() {
        if (!this.mobileMenuToggle || !this.mobileMenu) {
            console.warn('Mobile menu elements not found');
            return;
        }
        
        this.mobileMenuToggle.addEventListener('click', () => {
            this.toggleMobileMenu();
        });
        
        // Close mobile menu when clicking on links
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.mobileMenu.contains(e.target) && !this.mobileMenuToggle.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }
    
    toggleMobileMenu() {
        if (!this.mobileMenu) return;
        
        const isOpen = !this.mobileMenu.classList.contains('hidden');
        
        if (isOpen) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }
    
    openMobileMenu() {
        if (!this.mobileMenu || !this.mobileMenuToggle) return;
        
        this.mobileMenu.classList.remove('hidden');
        this.mobileMenuToggle.setAttribute('aria-expanded', 'true');
        
        // Toggle hamburger icon
        const openIcon = this.mobileMenuToggle.querySelector('svg:first-child');
        const closeIcon = this.mobileMenuToggle.querySelector('svg:last-child');
        
        if (openIcon) openIcon.classList.add('hidden');
        if (closeIcon) closeIcon.classList.remove('hidden');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
    
    closeMobileMenu() {
        if (!this.mobileMenu || !this.mobileMenuToggle) return;
        
        this.mobileMenu.classList.add('hidden');
        this.mobileMenuToggle.setAttribute('aria-expanded', 'false');
        
        // Toggle hamburger icon
        const openIcon = this.mobileMenuToggle.querySelector('svg:first-child');
        const closeIcon = this.mobileMenuToggle.querySelector('svg:last-child');
        
        if (openIcon) openIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
        
        // Restore body scroll
        document.body.style.overflow = '';
    }
    
    // Smooth scrolling for anchor links
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = anchor.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Scroll animations using Intersection Observer
    setupScrollAnimations() {
        if (!this.animateElements.length) return;
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    
                    // Add stagger delay for elements with stagger-animation class
                    if (entry.target.classList.contains('stagger-animation')) {
                        const delay = entry.target.style.getPropertyValue('--delay') || '0ms';
                        entry.target.style.animationDelay = delay;
                    }
                }
            });
        }, observerOptions);
        
        this.animateElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // Intersection Observer for section-based animations
    setupIntersectionObserver() {
        const sections = document.querySelectorAll('section');
        
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add any section-specific animations here
                    entry.target.classList.add('section-in-view');
                }
            });
        }, {
            threshold: 0.2
        });
        
        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }
    
    // Handle page load animations
    handlePageLoad() {
        window.addEventListener('load', () => {
            // Add loaded class to body for any load-specific animations
            document.body.classList.add('loaded');
            
            // Trigger hero animations
            const heroElements = document.querySelectorAll('.stagger-animation');
            heroElements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('in-view');
                }, index * 200);
            });
        });
    }
    
    // Utility methods
    debounce(func, wait) {
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
    
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Enhanced scroll effects
class ScrollEffects {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupParallax();
        this.setupScrollProgress();
    }
    
    setupParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        if (parallaxElements.length === 0) return;
        
        window.addEventListener('scroll', this.throttle(() => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const rate = scrolled * -0.5;
                element.style.transform = `translateY(${rate}px)`;
            });
        }, 16));
    }
    
    setupScrollProgress() {
        // Create scroll progress indicator
        const progressBar = document.createElement('div');
        progressBar.className = 'fixed top-0 left-0 h-1 bg-gray-900 z-50 transition-all duration-300';
        progressBar.style.width = '0%';
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            
            progressBar.style.width = `${scrollPercent}%`;
        });
    }
    
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Form handling (if needed)
class FormHandler {
    constructor() {
        this.forms = document.querySelectorAll('form');
        this.init();
    }
    
    init() {
        this.forms.forEach(form => {
            form.addEventListener('submit', this.handleSubmit.bind(this));
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        
        // Add your form submission logic here
        console.log('Form submitted:', Object.fromEntries(formData));
        
        // Show success message
        this.showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
    }
    
    showMessage(message, type = 'info') {
        const messageEl = document.createElement('div');
        messageEl.className = `fixed top-4 right-4 p-4 rounded-lg z-50 transition-all duration-300 ${
            type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' :
            type === 'error' ? 'bg-red-100 text-red-800 border border-red-200' :
            'bg-blue-100 text-blue-800 border border-blue-200'
        }`;
        messageEl.textContent = message;
        
        document.body.appendChild(messageEl);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            messageEl.style.opacity = '0';
            messageEl.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(messageEl);
            }, 300);
        }, 5000);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new VenceWebsite();
    new ScrollEffects();
    new FormHandler();
});

// Handle resize events
window.addEventListener('resize', () => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 768) {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }
});

// Performance optimization: Preload critical resources
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        // Preload any additional resources here
    });
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { VenceWebsite, ScrollEffects, FormHandler };
}