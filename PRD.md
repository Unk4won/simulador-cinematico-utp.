# Product Requirements Document (PRD)
**Proyecto:** Simulador Cinemático Forense - UTP  
**Versión:** 1.0.0  
**Área:** Ingeniería de Sistemas e Informática / Mecánica Clásica  

## 1. Resumen Ejecutivo
El Simulador Cinemático es una Single Page Application (SPA) diseñada para resolver algorítmicamente el cálculo de la velocidad inicial de un vehículo involucrado en un frenado de emergencia. Basado en el Teorema del Trabajo y la Energía, la herramienta elimina la necesidad de cálculos manuales, ofreciendo a peritos y estudiantes un entorno determinista para el análisis de siniestros viales.

## 2. Objetivos del Producto
* **Técnico:** Desplegar un algoritmo de resolución matemática en tiempo constante $O(1)$ ejecutado puramente en el lado del cliente (Client-Side).
* **Académico:** Validar el impacto de la fricción cinética (estado de la pista) en la distancia de derrape vehicular.
* **UX/UI:** Proveer una experiencia de usuario inmersiva mediante una interfaz basada en *Dark Neumorphism* y *Glassmorphism*, incorporando retroalimentación visual en tiempo real.

## 3. Alcance y Limitaciones (Scope)
* **In-Scope:** 
  * Cálculo de velocidad en $m/s$ y $km/h$.
  * Parametrización de coeficientes de fricción ($\mu_k$ seco = 0.75, húmedo = 0.40).
  * Animación vectorial del desplazamiento escalar.
* **Out-of-Scope:** 
  * Análisis de inclinación o peralte de la vía ($\theta \neq 0$).
  * Resistencia aerodinámica o dinámica de fluidos.
  * Autenticación de usuarios o almacenamiento en bases de datos (arquitectura Serverless / No-Backend).

## 4. Requisitos No Funcionales
* **Rendimiento:** El renderizado de resultados y transiciones del DOM debe ocurrir en $< 100ms$.
* **Accesibilidad:** Uso de paleta de alto contraste y fuentes Sans-Serif escalables (Inter).
* **Responsividad:** Diseño fluido adaptable a resoluciones móviles (Mobile First) con ancho máximo de 900px.