// Hero Component
function createHero() {
    return `
        <section id="home" class="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            <!-- Elegant gradient background -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
            
            <div class="container mx-auto px-4 md:px-6 py-16 relative z-10">
                <div class="flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2 mb-10 md:mb-0">
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                            <span class="text-dark dark:text-light parallax-element">Hola, soy </span>
                            <span class="text-primary parallax-element">Joaquin</span>
                            <span class="text-dark dark:text-light parallax-element"> Oses Monti</span>
                        </h1>
                        <p class="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300 parallax-element">
                            Técnico Microinformático y Redes especializado en desarrollo web y multiplataforma. Creo soluciones técnicas a medida para empresas.
                        </p>
                        <div class="flex flex-wrap gap-4 mb-8 parallax-element">
                            <a href="#projects" class="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors transform hover:scale-105 hover:shadow-lg">
                                Ver proyectos
                            </a>
                            <a href="#contact" class="border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors transform hover:scale-105 hover:shadow-lg">
                                Contactar
                            </a>
                        </div>
                        <div class="flex flex-wrap gap-6 parallax-element">
                            <a href="https://github.com/Joaquin-OM" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors hover:scale-110 transform flex items-center gap-2">
                                <i data-lucide="github" class="w-5 h-5"></i>
                                <span class="text-sm">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/joaquin-oses-monti-374660280" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors hover:scale-110 transform flex items-center gap-2">
                                <i data-lucide="linkedin" class="w-5 h-5"></i>
                                <span class="text-sm">LinkedIn</span>
                            </a>
                            <a href="mailto:osesjoq@gmail.com" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors hover:scale-110 transform flex items-center gap-2">
                                <i data-lucide="mail" class="w-5 h-5"></i>
                                <span class="text-sm">Email</span>
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2 flex justify-center">
                        <div class="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-xl parallax-element floating-element">
                            <div class="absolute inset-2 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                                <div id="hero-graphic" class="text-center">
                                    <div class="text-5xl mb-2 flex justify-center">
                                        <i data-lucide="server" class="w-16 h-16 text-primary"></i>
                                    </div>
                                    <div class="text-sm md:text-base font-medium text-primary">
                                        Desarrollo a medida
                                    </div>
                                    <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">Palma de Mallorca, España</div>
                                </div>
                            </div>
                            
                            <!-- Orbital elements -->
                            <div class="absolute w-full h-full animate-spin-slow pointer-events-none">
                                <div class="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-primary/80 rounded-full"></div>
                            </div>
                            <div class="absolute w-full h-full animate-spin-slower pointer-events-none" style="animation-direction: reverse;">
                                <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary/80 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Initialize Hero
function initHero() {
    const heroContainer = document.getElementById('hero-container');
    if (heroContainer) {
        heroContainer.innerHTML = createHero();
    }
}