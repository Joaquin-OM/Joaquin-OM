// About Component
function createAbout() {
    const skills = [
        { name: "Desarrollo web básico", percentage: 85 },
        { name: "Windows", percentage: 75 },
        { name: "Soporte técnico nivel 1", percentage: 70 },
        { name: "Atención al usuario", percentage: 65 },
        { name: "Ofimática", percentage: 60 },
        { name: "Redes básicas", percentage: 55 }
    ];

    const tools = [
        "HTML básico", "CSS básico", "JavaScript básico", "Windows 10/11",
        "Atención al usuario", "Redes Wi-Fi", "MS Office", "Ofimática", 
        "Correo electrónico", "Impresoras", "Copias de seguridad"
    ];

    return `
        <section id="about" class="py-20 bg-gray-50 dark:bg-gray-900">
            <div class="container mx-auto px-4 md:px-6">
                <div class="text-center mb-12 fade-in">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">Sobre mí</h2>
                    <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Conoce más sobre mi experiencia, habilidades y formación en el sector tecnológico
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <!-- Left Column -->
                    <div class="space-y-6">
                        <!-- Bio Card -->
                        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 fade-in-left">
                            <h3 class="text-xl font-bold mb-4 flex items-center">
                                <i data-lucide="user" class="w-5 h-5 text-primary mr-2"></i>
                                Perfil profesional
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300 mb-4">
                                Técnico Microinformático y de Redes iniciando mi carrera profesional en soporte técnico. 
                                Capacitado para realizar tareas básicas de mantenimiento de equipos y resolución de incidencias de nivel 1. 
                                Conocimientos en sistemas Windows, aplicaciones ofimáticas, configuración de impresoras y periféricos. 
                                Formación en conceptos básicos de redes locales (LAN/Wi-Fi) y entornos de oficina. 
                                También cuento con conocimientos iniciales en desarrollo web (HTML, CSS y JavaScript básico).
                            </p>
                            <p class="text-gray-600 dark:text-gray-300">
                                Buena actitud para el aprendizaje continuo, disposición para trabajar en equipo y 
                                facilidad para la comunicación con usuarios. Gran capacidad de adaptación y ganas 
                                de crecer profesionalmente en el sector tecnológico.
                            </p>
                        </div>

                        <!-- Education Card -->
                        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 fade-in-left">
                            <h3 class="text-xl font-bold mb-4 flex items-center">
                                <i data-lucide="graduation-cap" class="w-5 h-5 text-primary mr-2"></i>
                                Formación
                            </h3>
                            <div class="space-y-4">
                                <div class="flex">
                                    <div class="mr-4 flex-shrink-0">
                                        <div class="w-3 h-3 rounded-full bg-primary mt-2"></div>
                                    </div>
                                    <div>
                                        <h4 class="font-medium">Técnico en Sistemas Microinformáticos y Redes</h4>
                                        <p class="text-sm text-gray-500 dark:text-gray-400">Son José, Palma de Mallorca - 2023</p>
                                    </div>
                                </div>
                            </div>
                            
                            <h3 class="text-xl font-bold my-4 flex items-center">
                                <i data-lucide="file-text" class="w-5 h-5 text-primary mr-2"></i>
                                Idiomas
                            </h3>
                            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                                <li class="flex items-center">
                                    <div class="mr-2 flex-shrink-0">
                                        <div class="w-2 h-2 rounded-full bg-primary"></div>
                                    </div>
                                    <span class="font-medium">Español - Nativo</span>
                                </li>
                                <li class="flex items-center">
                                    <div class="mr-2 flex-shrink-0">
                                        <div class="w-2 h-2 rounded-full bg-primary"></div>
                                    </div>
                                    <span class="font-medium">Inglés - Nivel técnico básico/intermedio</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Experience Card -->
                        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 fade-in-left">
                            <h3 class="text-xl font-bold mb-4 flex items-center">
                                <i data-lucide="briefcase" class="w-5 h-5 text-primary mr-2"></i>
                                Experiencia
                            </h3>
                            <div>
                                <h4 class="font-bold">Técnico Microinformático y de Redes</h4>
                                <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                    Gabinete García Garriga Gestión, Consultoría y Asesoría de empresas - Marzo 2024 - Actualidad
                                </p>
                                <ul class="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                                    <li>Desarrollo y actualización de páginas web básicas para la empresa</li>
                                    <li>Mantenimiento de contenido web con tecnologías HTML, CSS y nociones de JavaScript</li>
                                    <li>Asistencia a usuarios con problemas básicos de software y hardware</li>
                                    <li>Configuración de correo electrónico y cuentas de usuarios</li>
                                    <li>Instalación de aplicaciones ofimáticas y configuración de impresoras</li>
                                    <li>Resolución de problemas comunes con equipos informáticos</li>
                                    <li>Soporte presencial y atención a usuarios con actitud amable y respetuosa</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column -->
                    <div class="space-y-6">
                        <!-- Skills Card -->
                        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 fade-in-right">
                            <h3 class="text-xl font-bold mb-6 flex items-center">
                                <i data-lucide="code" class="w-5 h-5 text-primary mr-2"></i>
                                Habilidades técnicas
                            </h3>
                            <div class="space-y-6">
                                ${skills.map(skill => `
                                    <div class="skill-item">
                                        <div class="flex justify-between mb-1">
                                            <span class="font-medium">${skill.name}</span>
                                            <span>${skill.percentage}%</span>
                                        </div>
                                        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                            <div class="skill-bar bg-primary h-2.5 rounded-full" data-width="${skill.percentage}%" style="width: 0%;"></div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Tools Card -->
                        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 fade-in-right">
                            <h3 class="text-xl font-bold mb-4 flex items-center">
                                <i data-lucide="laptop" class="w-5 h-5 text-primary mr-2"></i>
                                Competencias y herramientas
                            </h3>
                            <div class="flex flex-wrap gap-3 mb-6">
                                ${tools.map(tool => `
                                    <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">${tool}</span>
                                `).join('')}
                            </div>
                            
                            <div>
                                <h4 class="font-semibold mb-3 flex items-center">
                                    <i data-lucide="hard-drive" class="w-4 h-4 text-primary mr-2"></i>
                                    Sistemas y hardware
                                </h4>
                                <ul class="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm space-y-1 mb-4">
                                    <li>Creación de páginas web básicas con HTML y CSS</li>
                                    <li>Instalación y configuración de sistemas Windows</li>
                                    <li>Montaje, mantenimiento y reparación de equipos</li>
                                    <li>Ofimática, instalación de software y periféricos</li>
                                </ul>

                                <h4 class="font-semibold mb-3 flex items-center">
                                    <i data-lucide="network" class="w-4 h-4 text-primary mr-2"></i>
                                    Redes y conectividad
                                </h4>
                                <ul class="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                                    <li>Configuración básica de routers y puntos de acceso</li>
                                    <li>Diagnóstico de fallos en red (ping, ipconfig, tracert, etc.)</li>
                                    <li>Gestión de usuarios local y básica en red</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Initialize About
function initAbout() {
    const aboutContainer = document.getElementById('about-container');
    if (aboutContainer) {
        aboutContainer.innerHTML = createAbout();
    }
}