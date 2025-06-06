// Making Component
function createMaking() {
    return `
        <section id="making" class="py-20 bg-white dark:bg-gray-800">
            <div class="container mx-auto px-4 md:px-6">
                <div class="text-center mb-12 fade-in">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">Cómo lo hice</h2>
                    <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Un vistazo técnico a la arquitectura, procesos y tecnologías detrás de mis proyectos principales
                    </p>
                </div>
                
                <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 mb-8 fade-in">
                    <div class="flex border-b border-gray-200 dark:border-gray-600 mb-6">
                        <button class="tab-button active px-6 py-3 font-medium border-b-2 border-primary text-primary" data-tab="dashboard">
                            Dashboard empresarial
                        </button>
                        <button class="tab-button px-6 py-3 font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" data-tab="portfolio">
                            Portfolio personal
                        </button>
                    </div>
                    
                    <!-- Dashboard Tab Content -->
                    <div id="dashboard-content" class="tab-content">
                        <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 mb-6">
                            <h3 class="text-2xl font-bold mb-4">Arquitectura del Dashboard</h3>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-4">
                                    <h4 class="text-xl font-semibold">Frontend</h4>
                                    <ul class="space-y-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                                        <li>Diseño moderno con Bootstrap 5 y CSS personalizado</li>
                                        <li>Interfaz SPA (Single Page Application) con animaciones fluidas</li>
                                        <li>Sistema de temas claro/oscuro con persistencia en localStorage</li>
                                        <li>Modulación de componentes con carga dinámica</li>
                                        <li>Manejo avanzado de eventos para interacciones con archivos</li>
                                    </ul>
                                    
                                    <div class="flex flex-wrap gap-2 mt-4">
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">HTML5</span>
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">CSS3</span>
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">JavaScript</span>
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">Bootstrap 5</span>
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">Font Awesome</span>
                                    </div>
                                </div>
                                
                                <div class="space-y-4">
                                    <h4 class="text-xl font-semibold">Backend / Scripts</h4>
                                    <ul class="space-y-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                                        <li>Procesamiento de archivos con algoritmos de comparación</li>
                                        <li>Integración con APIs de Excel para manipulación de datos</li>
                                        <li>Scripts Python para procesamiento avanzado de datos</li>
                                        <li>Algoritmos de similitud para comparación fuzzy de textos</li>
                                        <li>Sistema modular que permite añadir nuevas funcionalidades</li>
                                    </ul>
                                    
                                    <div class="flex flex-wrap gap-2 mt-4">
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">Python</span>
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">Pandas</span>
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">difflib</span>
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">File System API</span>
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">Excel API</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                                <h3 class="text-xl font-bold mb-4">Características Principales</h3>
                                <ul class="space-y-3 list-disc pl-6 text-gray-600 dark:text-gray-300">
                                    <li><span class="font-medium">Interfaz unificada:</span> Todos los módulos comparten una experiencia de usuario consistente</li>
                                    <li><span class="font-medium">Navegación intuitiva:</span> Menu lateral con iconos descriptivos para acceso rápido</li>
                                    <li><span class="font-medium">Feedback visual:</span> Animaciones y transiciones para mejorar la experiencia de usuario</li>
                                    <li><span class="font-medium">Responsive:</span> Adaptable a diferentes tamaños de pantalla</li>
                                    <li><span class="font-medium">Extensible:</span> Arquitectura que permite añadir nuevos módulos fácilmente</li>
                                </ul>
                            </div>
                            
                            <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                                <h3 class="text-xl font-bold mb-4">Desafíos Superados</h3>
                                <ul class="space-y-3 list-disc pl-6 text-gray-600 dark:text-gray-300">
                                    <li><span class="font-medium">Integración de módulos heterogéneos:</span> Unificación de diferentes herramientas de distintos lenguajes bajo una misma interfaz</li>
                                    <li><span class="font-medium">Procesamiento eficiente:</span> Manejo optimizado para grandes volúmenes de datos y archivos</li>
                                    <li><span class="font-medium">Algoritmos de similitud:</span> Implementación de comparación fuzzy para encontrar coincidencias aproximadas</li>
                                    <li><span class="font-medium">UI/UX consistente:</span> Diseño unificado para todos los módulos independientemente de su funcionalidad</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                            <h3 class="text-2xl font-bold mb-4">Funcionamiento del Módulo de Comparación</h3>
                            
                            <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6 overflow-x-auto">
                                <pre class="text-sm"><code>import difflib

# Función para comparar nombres con tolerancia a errores
def revisar_coincidencias(archivos, nombres_clientes, umbral_similitud=0.3):
    coincidencias = []
    
    for archivo in archivos:
        nombre_archivo, extension = os.path.splitext(archivo)
        coincidencia = difflib.get_close_matches(
            nombre_archivo, 
            nombres_clientes, 
            n=1, 
            cutoff=umbral_similitud
        )
        
        if coincidencia:
            coincidencias.append((archivo, coincidencia[0]))
    
    return coincidencias</code></pre>
                            </div>
                            
                            <p class="text-gray-600 dark:text-gray-300">
                                El algoritmo de comparación utiliza la biblioteca difflib de Python para encontrar coincidencias aproximadas entre los nombres de archivos y una lista de clientes. Esto permite identificar archivos incluso cuando los nombres tienen pequeñas variaciones o errores tipográficos.
                            </p>
                        </div>
                    </div>
                    
                    <!-- Portfolio Tab Content -->
                    <div id="portfolio-content" class="tab-content hidden">
                        <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 mb-6">
                            <h3 class="text-2xl font-bold mb-4">Tecnologías Utilizadas</h3>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-4">
                                    <h4 class="text-xl font-semibold">Frontend</h4>
                                    <ul class="space-y-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                                        <li>React con componentes funcionales y hooks</li>
                                        <li>TypeScript para tipado estático y mejor IDE support</li>
                                        <li>TailwindCSS para estilización rápida y consistente</li>
                                        <li>ShadCN UI para componentes elegantes y accesibles</li>
                                        <li>Animaciones con anime.js para interacciones fluidas</li>
                                    </ul>
                                    
                                    <div class="flex flex-wrap gap-2 mt-4">
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">React</span>
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">TypeScript</span>
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">TailwindCSS</span>
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">ShadCN UI</span>
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">anime.js</span>
                                    </div>
                                </div>
                                
                                <div class="space-y-4">
                                    <h4 class="text-xl font-semibold">Backend</h4>
                                    <ul class="space-y-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                                        <li>Express para crear una API RESTful</li>
                                        <li>PostgreSQL para almacenamiento persistente</li>
                                        <li>Drizzle ORM para interacción con la base de datos</li>
                                        <li>API modular con manejo adecuado de errores</li>
                                        <li>Arquitectura de servicios con separación de responsabilidades</li>
                                    </ul>
                                    
                                    <div class="flex flex-wrap gap-2 mt-4">
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">Express</span>
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">PostgreSQL</span>
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">Drizzle ORM</span>
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">Node.js</span>
                                        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">RESTful API</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                                <h3 class="text-xl font-bold mb-4">Características de Diseño</h3>
                                <ul class="space-y-3 list-disc pl-6 text-gray-600 dark:text-gray-300">
                                    <li><span class="font-medium">Responsivo:</span> Adaptado a móviles, tablets y escritorio</li>
                                    <li><span class="font-medium">Modo oscuro:</span> Tema claro/oscuro para mejor accesibilidad</li>
                                    <li><span class="font-medium">Animaciones:</span> Transiciones sutiles para mejorar la experiencia</li>
                                    <li><span class="font-medium">Componentes modulares:</span> Estructura escalable y mantenible</li>
                                    <li><span class="font-medium">Accesibilidad:</span> Siguiendo mejores prácticas para todos los usuarios</li>
                                </ul>
                            </div>
                            
                            <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                                <h3 class="text-xl font-bold mb-4">Implementación de Animaciones</h3>
                                <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
                                    <pre class="text-sm"><code>useEffect(() => {
  if (!sectionRef.current) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        window.anime({
          targets: componentRefs.current,
          opacity: [0, 1],
          translateY: [20, 0],
          delay: window.anime.stagger(200),
          easing: 'easeOutQuad',
          duration: 800
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(sectionRef.current);
}, []);</code></pre>
                                </div>
                                <p class="text-gray-600 dark:text-gray-300">
                                    Las animaciones se implementan usando el Intersection Observer API para detectar cuando los elementos entran en el viewport, y anime.js para crear animaciones fluidas y profesionales.
                                </p>
                            </div>
                        </div>
                        
                        <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                            <h3 class="text-2xl font-bold mb-4">Estructura de la Base de Datos</h3>
                            
                            <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6 overflow-x-auto">
                                <pre class="text-sm"><code>export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  tech: text("tech").notNull(),
  description: text("description").notNull(),
  image_path: text("image_path").notNull(),
  link: text("link").default(""),
  tags: text("tags", { mode: "json" }).default([]).notNull(),
  created_at: timestamp("created_at").defaultNow().notNull()
});

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;</code></pre>
                            </div>
                            
                            <p class="text-gray-600 dark:text-gray-300">
                                La estructura de la base de datos utiliza Drizzle ORM con PostgreSQL para definir tablas, relaciones y tipos de datos. Este enfoque permite una integración perfecta entre el backend y el frontend gracias a TypeScript.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Initialize Making with tab functionality
function initMaking() {
    const makingContainer = document.getElementById('making-container');
    if (makingContainer) {
        makingContainer.innerHTML = createMaking();
        
        // Initialize tab functionality
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                
                // Remove active class from all buttons and add to current
                tabButtons.forEach(btn => {
                    btn.classList.remove('active', 'border-primary', 'text-primary');
                    btn.classList.add('border-transparent', 'text-gray-500');
                });
                button.classList.add('active', 'border-primary', 'text-primary');
                button.classList.remove('border-transparent', 'text-gray-500');
                
                // Hide all tab contents and show target
                tabContents.forEach(content => {
                    content.classList.add('hidden');
                });
                document.getElementById(`${targetTab}-content`).classList.remove('hidden');
            });
        });
    }
}