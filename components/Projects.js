// Projects Component
function createProjects() {
    // Datos exactos de los proyectos como en la versión dinámica
    const projects = [
        {
            id: 1,
            title: "Dashboard empresarial",
            tech: "React, Node.js, Express, PostgreSQL",
            description: "Panel de control centralizado con 4 aplicaciones modulares integradas para la gestión eficiente de documentos y procesos.",
            tags: ["React", "Node.js", "PostgreSQL", "Express"],
            image_path: "assets/dashboard-main.png",
            link: "https://github.com/Joaquin-OM",
            demo_type: "image",
            demo_content: "assets/dashboard-main.png",
            created_at: "2024-01-15"
        },
        {
            id: 2,
            title: "Módulo de renombrado",
            tech: "React, JavaScript, File System API",
            description: "Aplicación que permite el procesamiento por lotes de archivos con renombrado automático basado en reglas personalizables.",
            tags: ["React", "JavaScript", "File System"],
            image_path: "assets/renombrador-app.png",
            link: "https://github.com/Joaquin-OM",
            demo_type: "image",
            demo_content: "assets/renombrador-app.png",
            created_at: "2024-02-10"
        },
        {
            id: 3,
            title: "Módulo de comparación",
            tech: "React, Node.js, Excel API",
            description: "Sistema de comparación de nombres entre archivos Excel y directorios con algoritmos de similitud avanzados.",
            tags: ["React", "Excel API", "Algoritmos"],
            image_path: "assets/comparacion-app.png",
            link: "https://github.com/Joaquin-OM",
            demo_type: "image",
            demo_content: "assets/comparacion-app.png",
            created_at: "2024-03-05"
        },
        {
            id: 4,
            title: "Registro de documentos",
            tech: "React, Redux, Firebase",
            description: "Sistema para el registro y seguimiento de documentos con notificaciones en tiempo real y generación de informes.",
            tags: ["React", "Redux", "Firebase"],
            image_path: "assets/registro-docs-app.png",
            link: "https://github.com/Joaquin-OM",
            demo_type: "image",
            demo_content: "assets/registro-docs-app.png",
            created_at: "2024-03-20"
        },
        {
            id: 5,
            title: "Envío de listados",
            tech: "React, Node.js, PostgreSQL",
            description: "Aplicación para la gestión y distribución de listados empresariales con filtrado avanzado y exportación a múltiples formatos.",
            tags: ["React", "Node.js", "PostgreSQL"],
            image_path: "assets/envio-listados-app.png",
            link: "https://github.com/Joaquin-OM",
            demo_type: "image",
            demo_content: "assets/envio-listados-app.png",
            created_at: "2024-04-15"
        },
        {
            id: 6,
            title: "Portfolio personal",
            tech: "React, TypeScript, TailwindCSS",
            description: "Sitio web personal responsive con múltiples secciones, animaciones y soporte multilenguaje.",
            tags: ["React", "TypeScript", "TailwindCSS"],
            image_path: "assets/portfolio-hero.png",
            link: "https://github.com/Joaquin-OM",
            demo_type: "image",
            demo_content: "assets/portfolio-hero.png",
            created_at: "2024-04-25"
        }
    ];

    return `
        <section id="projects" class="py-20 bg-white dark:bg-gray-800">
            <div class="container mx-auto px-4 md:px-6">
                <div class="text-center mb-12 fade-in">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">Proyectos</h2>
                    <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Explora algunos de los proyectos en los que he trabajado, desde aplicaciones web hasta soluciones empresariales
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${projects.map((project, index) => `
                        <div class="project-card bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 fade-in" style="animation-delay: ${index * 100}ms;">
                            <div class="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                                <div class="text-center">
                                    <i data-lucide="code-2" class="w-12 h-12 text-primary mb-2 mx-auto"></i>
                                    <p class="text-sm text-gray-600 dark:text-gray-300">${project.tech}</p>
                                </div>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">${project.title}</h3>
                                <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                                    ${project.description}
                                </p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    ${project.tags.map(tag => `
                                        <span class="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">${tag}</span>
                                    `).join('')}
                                </div>
                                <div class="flex justify-between items-center">
                                    <a href="${project.link}" target="_blank" class="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1">
                                        <i data-lucide="external-link" class="w-4 h-4"></i>
                                        Ver proyecto
                                    </a>
                                    <span class="text-xs text-gray-500 dark:text-gray-400">
                                        ${new Date(project.created_at).toLocaleDateString('es-ES', { year: 'numeric', month: 'short' })}
                                    </span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="text-center mt-12">
                    <p class="text-gray-600 dark:text-gray-400 mb-4">
                        ¿Interesado en trabajar juntos?
                    </p>
                    <a href="#contact" class="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                        Más proyectos próximamente
                    </a>
                </div>
            </div>
        </section>
    `;
}

// Initialize Projects
function initProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projectsContainer.innerHTML = createProjects();
    }
}