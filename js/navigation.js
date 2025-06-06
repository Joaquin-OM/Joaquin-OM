// Navigation Manager
class NavigationManager {
    constructor() {
        this.navLinks = [];
        this.sections = [];
        this.mobileMenu = null;
        this.mobileMenuToggle = null;
        
        this.init();
    }
    
    init() {
        this.setupElements();
        this.setupSmoothScrolling();
        this.setupActiveNavigation();
        this.setupMobileMenu();
    }
    
    setupElements() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section[id]');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    }
    
    setupSmoothScrolling() {
        // Handle smooth scrolling for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu if open
                    if (this.mobileMenu && !this.mobileMenu.classList.contains('hidden')) {
                        this.mobileMenu.classList.add('hidden');
                    }
                }
            });
        });
    }
    
    setupActiveNavigation() {
        // Highlight active navigation link based on scroll position
        window.addEventListener('scroll', () => {
            this.updateActiveNavigation();
        });
        
        // Initial check
        this.updateActiveNavigation();
    }
    
    updateActiveNavigation() {
        let currentSection = '';
        
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Update navigation links
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    setupMobileMenu() {
        if (this.mobileMenuToggle && this.mobileMenu) {
            this.mobileMenuToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!this.mobileMenuToggle.contains(e.target) && 
                    !this.mobileMenu.contains(e.target) && 
                    !this.mobileMenu.classList.contains('hidden')) {
                    this.mobileMenu.classList.add('hidden');
                }
            });
        }
    }
    
    toggleMobileMenu() {
        if (this.mobileMenu) {
            this.mobileMenu.classList.toggle('hidden');
        }
    }
    
    // Utility method to scroll to specific section
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}