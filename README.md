# Documento Institucional - Guías de Turismo SRC

Documento institucional en línea presentando el proyecto de Guías de Turismo de Santa Rosa de Calamuchita: Alojamientos y Gastronomía.

## Estructura del proyecto

```
doc-guia/
├── index.html          # Contenido completo del documento
├── style.css           # Estilos CSS (mobile-first, responsive)
├── script.js           # JavaScript vanilla (animaciones, scroll)
├── README.md           # Este archivo
└── assets/
    ├── images/
    │   ├── logo-gris.svg       # Logo para uso en banners claros
    │   └── logo-blanco.svg     # Logo para uso en banner oscuro
    └── capturas/               # Capturas de pantalla de las guías
        ├── alojamientos-hero-desktop.png
        ├── alojamientos-hero-mobile.png
        ├── alojamientos-categorias-desktop.png
        ├── alojamientos-categorias-mobile.png
        ├── alojamientos-listado-desktop.png
        ├── alojamientos-tarjetas-mobile.png
        ├── gastronomia-hero-desktop.png
        ├── gastronomia-hero-mobile.png
        ├── gastronomia-categorias-mobile.png
        ├── gastronomia-listado-desktop.png
        ├── gastronomia-tarjeta-cafe-bohemia.png
        ├── admin-login-desktop.png
        ├── admin-listado-desktop.png
        ├── admin-formulario-editar.png
        └── admin-selector-rubro.png
```

## Cómo editar el contenido

### Editar texto

Todo el contenido está en `index.html`. Para modificar textos:

1. Abre `index.html` en tu editor de código preferido
2. Busca la sección que deseas editar (identificada con comentarios como `<!-- Resumen Ejecutivo -->`)
3. Modifica el texto dentro de las etiquetas HTML
4. Guarda y recarga la página en tu navegador

### Agregar o cambiar capturas de pantalla

1. Guardá las imágenes en la carpeta `assets/capturas/`
2. Actualizá las referencias en `index.html`:
   ```html
   <img src="assets/capturas/nombre-imagen.png" alt="Descripción de la imagen" loading="lazy" />
   ```
3. Asegurá de incluir un atributo `alt` descriptivo y `loading="lazy"` para optimizar performance

### Cambiar el logo

1. Guardá el logo en `assets/images/`
2. Actualizá la ruta en el header de `index.html`

### Modificar colores

Los colores del municipio están definidos como variables CSS en `style.css`:

```css
--color-primary: #00adb7;      /* Turquesa */
--color-secondary: #ff7300;    /* Naranja */
--color-tertiary: #7cc100;    /* Verde */
--color-accent: #b4d006;      /* Lima */
```

## Cómo probar localmente

### Opción 1: Servidor local con Python

```bash
cd doc-guia
python -m http.server 8000
```

Luego abrí `http://localhost:8000` en tu navegador.

### Opción 2: Abrir directamente

Hacé doble clic en `index.html` y se abrirá en tu navegador predeterminado.  
*Nota: algunas funcionalidades pueden requerir un servidor local debido a restricciones CORS.*

### Opción 3: Servidor local con Node.js

```bash
cd doc-guia
npx serve .
```

## Deploy en Netlify

### Opción 1: Drag & Drop (más rápido)

1. Abrí [Netlify Drop](https://app.netlify.com/drop)
2. Arrastrá la carpeta `doc-guia` al área de drop
3. ¡Listo! Netlify asignará una URL automáticamente

### Opción 2: Git (recomendado para actualizaciones futuras)

1. Creá un repositorio en GitHub con los archivos del proyecto
2. Hacé login en [Netlify](https://app.netlify.com)
3. Click en "New site from Git"
4. Conectá tu repositorio de GitHub
5. Deploy! Netlify detectará automáticamente que es un sitio estático

### Opción 3: CLI de Netlify

```bash
npm install -g netlify-cli
cd doc-guia
netlify deploy
```

## Tecnologías utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos mobile-first, variables CSS, flexbox, grid
- **JavaScript vanilla**: Animaciones con IntersectionObserver
- **Fonts**: Inter (Google Fonts)
- **Sin frameworks**: Puro HTML, CSS y JS

## Performance

- `loading="lazy"` en todas las imágenes
- CSS y JS sin dependencias externas
- Sin build step (¡abre y lista!)

## Accesibilidad

- Atributos `alt` descriptivos en todas las imágenes
- Contraste suficiente en textos (WCAG AA)
- Navegación con teclado soportada
- Semántica HTML5

## Compatibilidad

- Chrome, Firefox, Safari, Edge (últimas 2 versiones)
- Responsive desde 320px hasta desktop
- Animaciones suaves (reduce motion detectado)
- Estilos de impresión incluidos

## SEO y Redes Sociales

Meta tags incluidos para optimización en buscadores y compartición en WhatsApp:
- Title, description, keywords
- Open Graph tags (og:title, og:description, og:image)
- Viewport responsive

## Notas técnicas

- La fecha de publicación se muestra dinámicamente en JavaScript
- Las animaciones se disparan al hacer scroll (Intersection Observer)
- El documento está diseñado para lectura lineal (sin índice navegable)
- Compartido por WhatsApp se ve principalmente en mobile
