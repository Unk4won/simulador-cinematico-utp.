# Especificación de Casos de Uso (CU)

## CU-01: Simulación de Frenado en Condiciones Óptimas (Pista Seca)
* **Actor Principal:** Usuario (Estudiante / Analista Forense).
* **Precondición:** El DOM del aplicativo ha cargado exitosamente.
* **Flujo Principal:**
  1. El usuario ingresa una magnitud válida en el campo "Distancia de derrape" (Ej: `40`).
  2. El usuario selecciona "Pista Seca" en el menú desplegable.
  3. El usuario acciona el botón "Simular Frenado".
  4. El sistema valida que el input sea $> 0$.
  5. El sistema procesa la ecuación matemática.
  6. El sistema inyecta en el DOM los resultados ($87.34 km/h$) y ejecuta la animación del vehículo.
* **Postcondición:** Se visualiza la tarjeta de resultados y el vehículo vectorizado se desplaza la longitud equivalente.

## CU-02: Manejo de Excepciones y Entradas Inválidas (Poka-Yoke)
* **Actor Principal:** Usuario.
* **Precondición:** Aplicativo en estado de espera.
* **Flujo Principal:**
  1. El usuario deja el campo de distancia vacío o ingresa un número negativo (Ej: `-15`).
  2. El usuario acciona el botón "Simular Frenado".
  3. El sistema intercepta el evento antes del cálculo físico.
  4. El sistema altera el borde del input a rojo (Estado de Error) y despliega el tooltip "Ingrese un valor válido (> 0)".
* **Postcondición:** El algoritmo de cálculo no se ejecuta, protegiendo al sistema de arrojar resultados indefinidos (`NaN`).