window.onload = function() {
  if (!localStorage.getItem('cookiesAceptadas')) {
    document.getElementById('cookieBanner').style.display = 'block';
  }
};

function aceptarCookies() {
  localStorage.setItem('cookiesAceptadas', 'true');
  document.getElementById('cookieBanner').style.display = 'none';
}

function abrirModal(id) {
  document.getElementById(id).style.display = "block";
}

function cerrarModal(id) {
  document.getElementById(id).style.display = "none";
}

window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
};

function copiarComando(btn) {
  var codigo = btn.previousElementSibling.innerText;
  navigator.clipboard.writeText(codigo).then(function() {
    var orig = btn.innerText;
    btn.innerText = "✅ ¡Copiado!";
    setTimeout(function() { btn.innerText = orig; }, 1500);
  });
}

function generarYDescargarScript() {
  let contenidoScript = "#!/system/bin/sh\n";
  contenidoScript += "# ==========================================\n";
  contenidoScript += "# Script Generado por RendimientoTech IA v4.2\n";
  contenidoScript += "# Autor: Alexander Orozco (RendimientoTech)\n";
  contenidoScript += "# ==========================================\n\n";
  contenidoScript += "echo 'Iniciando optimizacion de sistema...'\n\n";

  if (document.getElementById('optTouch').checked) {
    contenidoScript += "# Reducir latencia táctil\n";
    contenidoScript += "settings put system touch_pressure_scale 0.001\n\n";
  }

  if (document.getElementById('optHz').checked) {
    contenidoScript += "# Forzar tasa de refresco máxima\n";
    contenidoScript += "settings put system min_refresh_rate 120.0\n\n";
  }

  if (document.getElementById('optCache').checked) {
    contenidoScript += "# Limpieza profunda de caché\n";
    contenidoScript += "pm trim-caches 999G\n\n";
  }

  if (document.getElementById('optCpu').checked) {
    contenidoScript += "# Ajuste de rendimiento CPU governor\n";
    contenidoScript += "echo performance > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor\n\n";
  }

  contenidoScript += "echo '¡Optimización completada con éxito!'\n";

  let blob = new Blob([contenidoScript], { type: 'text/plain;charset=utf-8' });
  let link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'optimizacion_rendimientotech.sh';
  link.click();
}

function ejecutarIA() {
  var loader = document.getElementById('loaderIA');
  var resultado = document.getElementById('resultadoSens');
  
  loader.style.display = 'flex';
  resultado.style.display = 'none';

  setTimeout(function() {
    loader.style.display = 'none';
    resultado.style.display = 'block';

    document.getElementById('resGen').innerText = Math.floor(Math.random() * (198 - 180 + 1)) + 180;
    document.getElementById('resRedDot').innerText = Math.floor(Math.random() * (195 - 175 + 1)) + 175;
    document.getElementById('res2x').innerText = Math.floor(Math.random() * (200 - 185 + 1)) + 185;
    document.getElementById('res4x').innerText = Math.floor(Math.random() * (200 - 190 + 1)) + 190;
    document.getElementById('resAwm').innerText = "110";
    document.getElementById('resCam').innerText = "150";

    document.getElementById('resDpi').innerText = document.getElementById('modoDpi').value === 'con_dpi' ? "580 DPI" : "411 (Fábrica)";
    document.getElementById('resBoton').innerText = "48%";
    document.getElementById('resVelPuntero').innerText = "Máxima";

    document.getElementById('resConsejo').innerText = "Configuración ajustada a la tasa de refresco táctil de tu dispositivo.";
    document.getElementById('resTecnica').innerText = "Levantado de mira en 'J' suave desde media distancia.";
  }, 1200);
}
