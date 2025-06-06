// Footer Component
function createFooter() {
    return `
        <footer class="bg-gray-900 text-white py-8">
            <div class="container mx-auto px-4 md:px-6">
                <div class="text-center">
                    <p class="mb-2">&copy; 2024 Joaquin Oses Monti. Todos los derechos reservados.</p>
                    <p class="text-gray-400 text-sm">
                        Desarrollado con React, TailwindCSS y mucho café ☕
                    </p>
                </div>
            </div>
        </footer>
    `;
}

// Initialize Footer
function initFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = createFooter();
    }
}