/*
 * Scripts para el Documento Institucional de las Guías de Turismo
 * Municipalidad de Santa Rosa de Calamuchita
 * 
 * Características:
 * - Animaciones de fade-in al hacer scroll con IntersectionObserver
 * - Sin dependencias externas
 * - Compatible con navegadores modernos
 */

document.addEventListener('DOMContentLoaded', function() {
    
    /**
     * Función para animar elementos cuando entran en el viewport
     * Utiliza IntersectionObserver para detectar cuándo un elemento
     * se hace visible durante el scroll y aplica animaciones suaves
     */
    const animateOnScroll = () => {
        // Opciones para el IntersectionObserver
        const options = {
            root: null,           // Usa el viewport como contenedor
            rootMargin: '0px',    // Margen del root (0 = sin margen)
            threshold: 0.1        // 10% del elemento visible activa la animación
        };

        // Callback que se ejecuta cuando un elemento entra o sale del viewport
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    // Aplica la animación de fade-in
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                    
                    // Añade la clase de animación completada
                    element.classList.add('animated');
                    
                    // Deja de observar el elemento una vez animado
                    observer.unobserve(element);
                }
            });
        };

        // Crea el observador
        const observer = new IntersectionObserver(observerCallback, options);

        // Selecciona todos los elementos que deben animarse
        const elementsToAnimate = document.querySelectorAll([
            '.executive-summary',
            '.context-section',
            '.guides-description',
            '.development-history',
            '.technical-architecture',
            '.main-features',
            '.municipal-benefits',
            '.next-steps'
        ]);

        // Inicializa los elementos con opacity 0 y transform
        elementsToAnimate.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(element);
        });

        // Observa también los cards individuales
        const guideCards = document.querySelectorAll('.guide-card, .features-group, .number-card, .layer, .steps-list li, .benefits-list li');
        
        guideCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            
            // Delay escalonado para efecto visual secuencial
            setTimeout(() => {
                observer.observe(card);
            }, index * 100);
        });
    };

    /**
     * Función para manejar el scroll suave a secciones
     * Cuando se hace clic en enlaces internos, hace scroll suavemente
     */
    const smoothScroll = () => {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };

    /**
     * Función para insertar la fecha actual dinámicamente
     * Busca el elemento .date en el DOM y lo actualiza
     */
    const insertCurrentDate = () => {
        const dateElement = document.querySelector('.date');
        if (dateElement) {
            const months = [
                'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
                'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
            ];
            const now = new Date();
            const monthName = months[now.getMonth()];
            const year = now.getFullYear();
            dateElement.textContent = `${monthName.charAt(0).toUpperCase() + monthName.slice(1)} ${year}`;
        }
    };

    /**
     * Función para detectar el soporte de IntersectionObserver
     * Si el navegador no lo soporta, muestra todos los elementos sin animación
     */
    const checkIntersectionObserverSupport = () => {
        if (!('IntersectionObserver' in window)) {
            // Si no hay soporte, simplemente muestra todos los elementos
            const elements = document.querySelectorAll([
                '.executive-summary',
                '.context-section',
                '.guides-description',
                '.development-history',
                '.technical-architecture',
                '.main-features',
                '.municipal-benefits',
                '.next-steps',
                '.guide-card',
                '.features-group',
                '.number-card',
                '.layer',
                '.steps-list li',
                '.benefits-list li'
            ]);
            
            elements.forEach(element => {
                element.style.opacity = '1';
                element.style.transform = 'none';
            });
        }
    };

    /**
     * Función para manejar efectos hover en dispositivos touch
     * Evita problemas con eventos hover en móviles
     */
    const handleTouchDevices = () => {
        // Detecta si el dispositivo soporta touch
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        if (isTouchDevice) {
            // Agrega clase al body para estilizar elementos según el tipo de dispositivo
            document.body.classList.add('touch-device');
        } else {
            document.body.classList.add('mouse-device');
        }
    };

    /**
     * Función para prevenir el scroll horizontal accidental
     */
    const preventHorizontalScroll = () => {
        document.body.style.overflowX = 'hidden';
        document.documentElement.style.overflowX = 'hidden';
    };

    /**
     * Función de inicialización de todos los componentes
     */
    const init = () => {
        checkIntersectionObserverSupport();
        animateOnScroll();
        smoothScroll();
        handleTouchDevices();
        preventHorizontalScroll();
        insertCurrentDate();
    };

    // Inicializa las funcionalidades
    init();

    /**
     * Exporta funciones para uso manual si es necesario
     * (esto permite que otros scripts puedan reinicializar las animaciones)
     */
    window.docProyecto = {
        animateOnScroll,
        smoothScroll,
        init
    };
});