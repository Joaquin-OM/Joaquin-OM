// Animation Manager
class AnimationManager {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
        this.setupSkillBarObserver();
        this.setupProjectCardAnimations();
        this.initHeroAnimation();
    }
    
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, this.observerOptions);
        
        // Observe all elements with animation classes
        document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in, .slide-up, .slide-in-bottom').forEach(el => {
            observer.observe(el);
        });
    }
    
    setupSkillBarObserver() {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBars = entry.target.querySelectorAll('.skill-bar');
                    skillBars.forEach((bar, index) => {
                        const width = bar.getAttribute('data-width');
                        setTimeout(() => {
                            bar.style.width = width;
                            bar.style.transition = 'width 1.5s ease-out';
                        }, 300 + (index * 100));
                    });
                    skillObserver.unobserve(entry.target);
                }
            });
        }, this.observerOptions);
        
        // Observe the about section for skill animations
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            skillObserver.observe(aboutSection);
        }
    }
    
    setupProjectCardAnimations() {
        // Use anime.js for project card hover effects if available
        if (typeof anime !== 'undefined') {
            document.querySelectorAll('.project-card').forEach(card => {
                card.addEventListener('mouseenter', () => {
                    anime({
                        targets: card,
                        translateY: -8,
                        scale: 1.02,
                        duration: 300,
                        easing: 'easeOutQuad'
                    });
                });
                
                card.addEventListener('mouseleave', () => {
                    anime({
                        targets: card,
                        translateY: 0,
                        scale: 1,
                        duration: 300,
                        easing: 'easeOutQuad'
                    });
                });
            });
        }
    }
    
    initHeroAnimation() {
        // Animate hero section when page loads
        if (typeof anime !== 'undefined') {
            window.addEventListener('load', () => {
                const heroFadeIn = document.querySelector('.hero-gradient .fade-in');
                if (heroFadeIn) {
                    anime({
                        targets: heroFadeIn,
                        opacity: [0, 1],
                        translateY: [50, 0],
                        scale: [0.9, 1],
                        duration: 1000,
                        easing: 'easeOutQuad'
                    });
                }
            });
        }
    }
    
    // Utility method to animate elements on demand
    animateElement(element, animation = {}) {
        if (typeof anime !== 'undefined') {
            const defaultAnimation = {
                targets: element,
                duration: 600,
                easing: 'easeOutQuad'
            };
            
            anime({
                ...defaultAnimation,
                ...animation
            });
        }
    }
}