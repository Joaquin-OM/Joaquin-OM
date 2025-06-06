// Theme Manager
class ThemeManager {
    constructor() {
        this.html = document.documentElement;
        this.themeToggle = null;
        this.currentTheme = this.getSavedTheme();
        
        this.init();
    }
    
    init() {
        // Apply saved theme
        this.applyTheme(this.currentTheme);
        
        // Set up theme toggle after a short delay to ensure DOM is ready
        setTimeout(() => {
            this.setupThemeToggle();
        }, 100);
    }
    
    getSavedTheme() {
        return localStorage.getItem('theme') || 'light';
    }
    
    applyTheme(theme) {
        this.html.classList.toggle('dark', theme === 'dark');
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
    }
    
    setupThemeToggle() {
        this.themeToggle = document.getElementById('theme-toggle');
        
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }
    
    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
        
        // Re-initialize icons to update theme-specific icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}