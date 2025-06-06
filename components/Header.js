// Header Component
function createHeader() {
    return `
        <header class="fixed w-full bg-white/90 dark:bg-gray-900/95 backdrop-blur-sm z-50 py-4 shadow-md border-b border-gray-200 dark:border-gray-800">
            <div class="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <div class="logo-container" id="logo">
                    <h1 class="text-xl font-bold">
                        <span class="text-primary">&lt;</span>
                        <span class="dark:text-white">Joaquín Oses Monti</span>
                        <span class="text-primary">/&gt;</span>
                    </h1>
                </div>
                <div class="flex items-center">
                    <nav class="mr-4">
                        <ul class="hidden md:flex space-x-8">
                            <li><a href="#home" class="nav-link text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors font-medium">Inicio</a></li>
                            <li><a href="#projects" class="nav-link text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors font-medium">Proyectos</a></li>
                            <li><a href="#making" class="nav-link text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors font-medium">Cómo lo hice</a></li>
                            <li><a href="#about" class="nav-link text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors font-medium">Sobre mí</a></li>
                            <li><a href="#contact" class="nav-link text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors font-medium">Contacto</a></li>
                        </ul>
                        <button 
                            id="mobile-menu-toggle"
                            class="md:hidden p-2 text-gray-800 dark:text-gray-200 hover:text-primary transition-colors"
                            aria-label="Menu"
                        >
                            <i data-lucide="menu" class="w-5 h-5"></i>
                        </button>
                    </nav>
                    <button
                        id="theme-toggle"
                        class="p-2 text-gray-800 dark:text-gray-200 hover:text-primary transition-colors"
                        aria-label="Cambiar tema"
                    >
                        <i data-lucide="moon" class="w-4 h-4 dark:hidden"></i>
                        <i data-lucide="sun" class="w-4 h-4 hidden dark:block"></i>
                    </button>
                </div>
            </div>
            
            <!-- Mobile menu -->
            <div id="mobile-menu" class="md:hidden bg-white dark:bg-gray-900 shadow-md absolute top-full left-0 right-0 p-4 border-b border-gray-200 dark:border-gray-800 hidden">
                <ul class="flex flex-col space-y-4">
                    <li><a href="#home" class="nav-link block text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors font-medium">Inicio</a></li>
                    <li><a href="#projects" class="nav-link block text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors font-medium">Proyectos</a></li>
                    <li><a href="#making" class="nav-link block text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors font-medium">Cómo lo hice</a></li>
                    <li><a href="#about" class="nav-link block text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors font-medium">Sobre mí</a></li>
                    <li><a href="#contact" class="nav-link block text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors font-medium">Contacto</a></li>
                </ul>
            </div>
        </header>
    `;
}

// Initialize Header
function initHeader() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = createHeader();
    }
}