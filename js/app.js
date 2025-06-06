// Main Application
class PortfolioApp {
    constructor() {
        this.components = {
            header: initHeader,
            hero: initHero,
            projects: initProjects,
            making: initMaking,
            about: initAbout,
            contact: initContact,
            footer: initFooter
        };
        
        this.init();
    }
    
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.render());
        } else {
            this.render();
        }
    }
    
    render() {
        // Initialize all components
        Object.values(this.components).forEach(component => {
            if (typeof component === 'function') {
                component();
            }
        });
        
        // Initialize icons after all components are rendered
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        // Initialize utilities
        this.initUtilities();
    }
    
    initUtilities() {
        // Initialize theme manager
        if (typeof ThemeManager !== 'undefined') {
            new ThemeManager();
        }
        
        // Initialize animations
        if (typeof AnimationManager !== 'undefined') {
            new AnimationManager();
        }
        
        // Initialize navigation
        if (typeof NavigationManager !== 'undefined') {
            new NavigationManager();
        }
    }
}

// Initialize the app
const app = new PortfolioApp();