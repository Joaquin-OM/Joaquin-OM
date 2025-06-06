# Portfolio Estático Modular - Joaquin Oses Monti

Versión estática del portfolio con arquitectura modular similar a React, utilizando componentes JavaScript separados y organización profesional de archivos.

## Estructura del Proyecto

```
portfolio-estatico/
├── index.html              # Página principal
├── css/                    # Estilos CSS organizados
│   ├── themes.css          # Variables de tema y colores
│   ├── styles.css          # Estilos base y utilities
│   └── animations.css      # Animaciones y transiciones
├── js/                     # Lógica JavaScript modular
│   ├── app.js              # Aplicación principal
│   ├── theme.js            # Gestor de temas
│   ├── animations.js       # Gestor de animaciones
│   └── navigation.js       # Gestor de navegación
├── components/             # Componentes modulares
│   ├── Header.js           # Navegación y header
│   ├── Hero.js             # Sección principal
│   ├── Projects.js         # Showcase de proyectos
│   ├── Making.js           # Proyectos en desarrollo
│   ├── About.js            # Información personal
│   ├── Contact.js          # Formulario de contacto
│   └── Footer.js           # Pie de página
├── assets/                 # Recursos multimedia (imágenes, etc.)
└── README.md               # Este archivo
```

## Características Técnicas

### Arquitectura Modular
- **Componentes separados**: Cada sección como módulo independiente
- **Gestores especializados**: Theme, Animation, Navigation managers
- **Organización CSS**: Separación por responsabilidades
- **Carga dinámica**: Renderizado dinámico de componentes

### Funcionalidades
- **Responsive Design**: Optimizado para todos los dispositivos
- **Modo Oscuro/Claro**: Persistencia en localStorage
- **Animaciones Fluidas**: Intersección Observer + Anime.js
- **Navegación Suave**: Scroll automático entre secciones
- **Formulario Funcional**: Validación y manejo de eventos

### Tecnologías Utilizadas
- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Grid, Flexbox
- **JavaScript ES6+**: Clases, módulos, async/await
- **TailwindCSS**: Framework de utilidades CSS
- **Anime.js**: Librería de animaciones
- **Lucide Icons**: Iconografía moderna

## Instalación y Uso

### Opción 1: Uso Directo
1. Descarga la carpeta completa
2. Abre `index.html` en un navegador moderno
3. No requiere servidor web para funcionar localmente

### Opción 2: Servidor Local
```bash
# Con Python
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

### Hosting en Producción
- **GitHub Pages**: Sube la carpeta completa al repositorio
- **Netlify**: Arrastra la carpeta al dashboard
- **Vercel**: Conecta desde GitHub o sube directamente
- **Firebase Hosting**: `firebase deploy`

## Personalización

### Contenido
Edita los archivos en `components/` para modificar:
- Información personal en `About.js`
- Proyectos en `Projects.js`
- Datos de contacto en `Contact.js`

### Estilos
Modifica las variables CSS en `css/themes.css`:
```css
:root {
    --primary: 220 38% 62%;        /* Color principal */
    --background: 0 0% 100%;       /* Fondo claro */
    --foreground: 240 10% 3.9%;    /* Texto claro */
}
```

### Animaciones
Ajusta configuraciones en `js/animations.js`:
```javascript
this.observerOptions = {
    threshold: 0.1,                 /* Sensibilidad */
    rootMargin: '0px 0px -100px 0px' /* Márgen */
};
```

## Gestores Incluidos

### ThemeManager
- Alternancia automática de temas
- Persistencia en localStorage
- Iconos adaptativos

### AnimationManager
- Animaciones por scroll (Intersection Observer)
- Efectos hover con Anime.js
- Barras de progreso animadas

### NavigationManager
- Scroll suave entre secciones
- Navegación activa automática
- Menu móvil responsive

## Compatibilidad

- **Navegadores**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **Móviles**: iOS Safari, Chrome Mobile, Samsung Internet
- **Sin dependencias**: Funciona completamente offline

## Optimizaciones

### Performance
- Carga diferida de animaciones
- Observadores eficientes para scroll
- CSS optimizado con variables nativas

### SEO
- Meta tags configurados
- Estructura semántica HTML5
- URLs amigables con anchors

### Accesibilidad
- Navegación por teclado
- Contraste adecuado en ambos temas
- Textos alternativos en iconos

## Características Avanzadas

### Sistema de Componentes
Cada componente sigue el patrón:
```javascript
// Función de creación
function createComponent() {
    return `<div>...</div>`;
}

// Función de inicialización
function initComponent() {
    const container = document.getElementById('container');
    container.innerHTML = createComponent();
}
```

### Gestión de Estado
- Estado del tema en localStorage
- Estado de navegación en tiempo real
- Estado de animaciones por componente

### Eventos Centralizados
- Manejo unificado de eventos
- Prevención de memory leaks
- Limpieza automática de listeners

## Licencia y Créditos

**Desarrollado por**: Joaquin Oses Monti  
**Uso**: Portfolio personal y referencia técnica  
**Tecnologías**: HTML5, CSS3, JavaScript ES6+, TailwindCSS, Anime.js