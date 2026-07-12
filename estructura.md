# Arquitectura y Estructura del Proyecto

El proyecto está diseñado utilizando el principio de **Separation of Concerns (SoC)** sobre una estructura de directorios plana para maximizar la portabilidad y simplicidad de ejecución.

## Árbol de Archivos
/
├── index.html       # (Capa de Presentación / View)
├── style.css        # (Capa de Estilos / UI Design)
└── simulador.js     # (Capa Lógica / Controller & Model)

## Descripción de Componentes
1. **`index.html` (DOM Tree):** 
   Define la semántica del aplicativo. Construido utilizando etiquetas HTML5 (`<main>`, `<header>`, `<section>`). Contiene embebido el código SVG del logo institucional para reducir peticiones HTTP (Network Requests) y mejorar el tiempo de carga.
   
2. **`style.css` (Design System):** 
   Hoja de estilos que gestiona el aspecto visual. Utiliza variables nativas (`:root`) para mantener la paleta de colores. Implementa efectos complejos de UI como `backdrop-filter` para el *Glassmorphism* y múltiples sombras compuestas (`box-shadow`) para lograr el relieve del *Dark Neumorphism*.

3. **`simulador.js` (Core Engine):** 
   Script estructurado en Vanilla JS que actúa como controlador. Escucha los eventos del DOM, extrae la data, ejecuta el motor matemático y orquesta las micro-interacciones (animaciones mediante manipulaciones del objeto `style`).