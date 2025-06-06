// Contact Component
function createContact() {
    return `
        <section id="contact" class="py-20 bg-white dark:bg-gray-800">
            <div class="container mx-auto px-4 md:px-6">
                <div class="text-center mb-12 fade-in">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
                    <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ayudarte a hacerlo realidad
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <!-- Contact Form -->
                    <div class="fade-in">
                        <form id="contact-form" class="space-y-6">
                            <div>
                                <label for="name" class="block text-sm font-medium mb-2">Nombre</label>
                                <input type="text" id="name" name="name" placeholder="Tu nombre completo" 
                                       class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700">
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium mb-2">Email</label>
                                <input type="email" id="email" name="email" placeholder="tu@email.com" 
                                       class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700">
                            </div>
                            <div>
                                <label for="message" class="block text-sm font-medium mb-2">Mensaje</label>
                                <textarea id="message" name="message" rows="5" placeholder="Cuéntame sobre tu proyecto..." 
                                          class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                                Enviar mensaje
                            </button>
                        </form>
                    </div>

                    <!-- Contact Info -->
                    <div class="space-y-8 fade-in">
                        <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 card-hover">
                            <h3 class="text-xl font-bold mb-4 flex items-center">
                                <i data-lucide="map-pin" class="w-5 h-5 text-primary mr-2"></i>
                                Ubicación
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300">
                                Palma de Mallorca, España
                            </p>
                        </div>

                        <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 card-hover">
                            <h3 class="text-xl font-bold mb-4 flex items-center">
                                <i data-lucide="mail" class="w-5 h-5 text-primary mr-2"></i>
                                Contacto directo
                            </h3>
                            <div class="space-y-3">
                                <div class="flex items-center">
                                    <i data-lucide="mail" class="w-4 h-4 text-primary mr-3"></i>
                                    <a href="mailto:joaquin@email.com" class="text-primary hover:text-primary/80">
                                        joaquin@email.com
                                    </a>
                                </div>
                                <div class="flex items-center">
                                    <i data-lucide="github" class="w-4 h-4 text-primary mr-3"></i>
                                    <a href="https://github.com/Joaquin-OM" target="_blank" class="text-primary hover:text-primary/80">
                                        github.com/Joaquin-OM
                                    </a>
                                </div>
                                <div class="flex items-center">
                                    <i data-lucide="linkedin" class="w-4 h-4 text-primary mr-3"></i>
                                    <a href="https://linkedin.com/in/joaquin-om" target="_blank" class="text-primary hover:text-primary/80">
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 card-hover">
                            <h3 class="text-xl font-bold mb-4 flex items-center">
                                <i data-lucide="clock" class="w-5 h-5 text-primary mr-2"></i>
                                Disponibilidad
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300 mb-2">
                                Disponible para proyectos y colaboraciones
                            </p>
                            <p class="text-sm text-gray-500 dark:text-gray-400">
                                Tiempo de respuesta: 24-48 horas
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Initialize Contact
function initContact() {
    const contactContainer = document.getElementById('contact-container');
    if (contactContainer) {
        contactContainer.innerHTML = createContact();
        
        // Initialize form handling
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', handleFormSubmit);
        }
    }
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
        alert('Por favor, completa todos los campos.');
        return;
    }
    
    // Simulate form submission
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
    e.target.reset();
}