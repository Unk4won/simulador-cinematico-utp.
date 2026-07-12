/**
 * Simulador Cinemático Oscuro + Neumorfismo + Vector Logo
 * Complejidad O(1) con Animación Gráfica del Tránsito
 */

function ejecutarSimulacion() {
  const inputDistancia = document.getElementById("distancia").value;
  const selectClima = document.getElementById("clima").value;
  const errorMsg = document.getElementById("error-msg");
  const resultadoBox = document.getElementById("resultado-box");

  // Validación de entradas
  if (inputDistancia === "" || parseFloat(inputDistancia) <= 0) {
    errorMsg.style.display = "block";
    document.getElementById("distancia").style.borderColor = "var(--utp-red)";
    resultadoBox.classList.add("hidden");
    return;
  }

  errorMsg.style.display = "none";
  document.getElementById("distancia").style.borderColor =
    "rgba(255, 255, 255, 0.06)";

  // Variables de cálculo físico
  const d = parseFloat(inputDistancia);
  const mu_k = parseFloat(selectClima);
  const g = 9.81;

  // Ecuación rectora: vi = sqrt(2 * uk * g * d)
  const velocidad_ms = Math.sqrt(2 * mu_k * g * d);
  const velocidad_kmh = velocidad_ms * 3.6;

  // Inyectar datos en el DOM
  document.getElementById("vel_ms").innerText = velocidad_ms.toFixed(2);
  document.getElementById("vel_kmh").innerText = velocidad_kmh.toFixed(2);

  // Revelar caja de resultados
  resultadoBox.style.display = "grid";
  setTimeout(() => {
    resultadoBox.classList.remove("hidden");
  }, 50);

  // Activar Animación del Auto y Huella de Derrape
  animarVehiculo(d);
}

function animarVehiculo(distanciaMetros) {
  const auto = document.getElementById("vehiculo-animado");
  const huella = document.getElementById("huella-frenado");
  const infoTxt = document.getElementById("estado-pista-txt");

  // Normalizar la distancia máxima en pantalla (80m como límite de pista visual)
  const maxPistaPx = 650;
  let desplazamientoPx = (distanciaMetros / 80) * maxPistaPx;
  if (desplazamientoPx > maxPistaPx) desplazamientoPx = maxPistaPx;

  // Resetear posiciones instantáneamente
  auto.style.transform = `translateX(0px)`;
  huella.style.width = `0%`;
  infoTxt.innerText = "Calculando desaceleración y frenado...";

  setTimeout(() => {
    // Desplazamiento animado del vehículo y rastro de la marca
    auto.style.transform = `translateX(${desplazamientoPx}px)`;
    huella.style.width = `${(desplazamientoPx / maxPistaPx) * 85}%`;
    infoTxt.innerText = `Vehículo detenido en tramo de ${distanciaMetros}m.`;
  }, 100);
}
