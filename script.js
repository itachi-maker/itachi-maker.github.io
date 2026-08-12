window.onload = function() { actualizarMenus(); };

function abrirModal(id) { document.getElementById(id).style.display = "block"; }
function cerrarModal(id) { document.getElementById(id).style.display = "none"; }
window.onclick = function(event) { if (event.target.classList.contains('modal')) event.target.style.display = "none"; };

// Generador de Sensibilidad
function generarSensibilidad() {
  let dpi = parseInt(document.getElementById('inputDpi').value) || 600;
  let estilo = document.getElementById('selectEstilo').value;
  
  let general, m2x, m4x, miraAWM, camara;

  if (estilo === 'camara') {
    general = Math.min(200, Math.max(140, Math.round(195 - (dpi * 0.05))));
    m2x = Math.min(195, Math.max(130, general - 10));
    m4x = Math.min(190, Math.max(125, general - 15));
    miraAWM = Math.round(general * 0.5);
    camara = 100;
  } else if (estilo === 'precicion') {
    general = Math.min(185, Math.max(120, Math.round(175 - (dpi * 0.04))));
    m2x = Math.min(180, Math.max(115, general - 5));
    m4x = Math.min(175, Math.max(110, general - 10));
    miraAWM = Math.round(general * 0.45);
    camara = 85;
  } else {
    general = Math.min(195, Math.max(130, Math.round(185 - (dpi * 0.045))));
    m2x = Math.min(190, Math.max(120, general - 8));
    m4x = Math.min(185, Math.max(115, general - 12));
    miraAWM = Math.round(general * 0.48);
    camara = 90;
  }

  let htmlResult = `
    <li><strong>DPI Recomendado:</strong> ${dpi} (Personalizado)</li>
    <li><strong>General:</strong> ${general}</li>
    <li><strong>Mira Red Dot:</strong> ${Math.round(general * 0.95)}</li>
    <li><strong>Mira 2X:</strong> ${m2x}</li>
    <li><strong>Mira 4X:</strong> ${m4x}</li>
    <li><strong>Mira AWM / Francotirador:</strong> ${miraAWM}</li>
    <li><strong>Cámara 360°:</strong> ${camara}</li>
  `;

  document.getElementById('listaSensiResultados').innerHTML = htmlResult;
  document.getElementById('resultadoSensi').style.display = 'block';
}

function copiarSensibilidad() {
  let items = document.querySelectorAll('#listaSensiResultados li');
  let texto = "🎯 Configuración de Sensibilidad Free Fire (RendimientoTech):\n";
  items.forEach(i => texto += "- " + i.innerText + "\n");
  
  navigator.clipboard.writeText(texto).then(() => {
    alert("📋 ¡Sensibilidad copiada al portapapeles!");
  });
}

// Menús de Comandos Desplegables
function actualizarMenus() {
  const modo = document.querySelector('input[name="mode"]:checked').value;
  const container = document.getElementById('containerMenus');
  
  if (modo === 'noroot') {
    container.innerHTML = `
      <details class="menu-categoria" open>
        <summary>📱 1. Animaciones y Fluidez Visual</summary>
        <div class="menu-contenido">
          <label><input type="checkbox" id="an1" checked> Quitar animación de ventanas (0.0x)</label>
          <label><input type="checkbox" id="an2" checked> Quitar animación de transición (0.0x)</label>
          <label><input type="checkbox" id="an3" checked> Quitar animador de duración (0.0x)</label>
          <label><input type="checkbox" id="an5"> Desactivar efectos de desenfoque visual</label>
        </div>
      </details>

      <details class="menu-categoria">
        <summary>🌐 2. Red, Ping y Estabilidad Wi-Fi</summary>
        <div class="menu-contenido">
          <label><input type="checkbox" id="nw1" checked> Política avanzada de suspensión Wi-Fi (Policy 2)</label>
          <label><input type="checkbox" id="nw2" checked> Forzar datos móviles siempre activos</label>
          <label><input type="checkbox" id="nw5" checked> Desactivar escaneo continuo de Bluetooth</label>
          <label><input type="checkbox" id="nw7" checked> Desactivar escaneo continuo de redes Wi-Fi</label>
        </div>
      </details>

      <details class="menu-categoria">
        <summary>👆 3. Táctil y Sensibilidad (Free Fire)</summary>
        <div class="menu-contenido">
          <label><input type="checkbox" id="tc1" checked> Reducir escala de presión táctil (Touch 0.001)</label>
          <label><input type="checkbox" id="tc2" checked> Forzar tasa de refresco mínima a 120Hz</label>
          <label><input type="checkbox" id="tc3" checked> Forzar tasa de refresco máxima a 120Hz (Peak)</label>
          <label><input type="checkbox" id="tc6"> Reducir retraso de pulsación larga</label>
        </div>
      </details>

      <details class="menu-categoria">
        <summary>🚀 4. Procesos en Segundo Plano (Free Fire)</summary>
        <div class="menu-contenido">
          <label><input type="checkbox" id="bg1" checked> Desactivar modo Doze de suspensión profunda</label>
          <label><input type="checkbox" id="bg2" checked> Permitir ejecución de Free Fire sin restricciones</label>
          <label><input type="checkbox" id="bg3" checked> Conceder Wake Lock permanente a Free Fire</label>
          <label><input type="checkbox" id="bg4" checked> Marcar estado de Free Fire como activo constante</label>
        </div>
      </details>
    `;
  } else {
    container.innerHTML = `
      <details class="menu-categoria" open>
        <summary>⚡ Opciones Root Seguras</summary>
        <div class="menu-contenido">
          <label><input type="checkbox" id="rt1" checked> Limpieza profunda de caché (pm trim-caches)</label>
          <label><input type="checkbox" id="rt2" checked> Prioridad máxima al renderizador gráfico (SurfaceFlinger)</label>
          <label><input type="checkbox" id="rt3" checked> Liberar búfer de páginas de memoria RAM (Drop Caches)</label>
        </div>
      </details>
    `;
  }
}

function aplicarPreset(tipo) {
  document.querySelectorAll('.script-builder-box input[type="checkbox"]').forEach(cb => cb.checked = false);
  
  if (tipo === 'freefire') {
    ['an1', 'an2', 'an3', 'tc1', 'tc2', 'tc3', 'bg1', 'bg2', 'bg3', 'bg4'].forEach(id => {
      let el = document.getElementById(id);
      if(el) el.checked = true;
    });
    alert("🔥 Preset 'Free Fire Torneo' aplicado.");
  } else if (tipo === 'ping') {
    ['nw1', 'nw2', 'nw5', 'nw7'].forEach(id => {
      let el = document.getElementById(id);
      if(el) el.checked = true;
    });
    alert("🌐 Preset 'Red / Ping' aplicado.");
  }
}

function limpiarSeleccion() {
  document.querySelectorAll('.script-builder-box input[type="checkbox"]').forEach(cb => cb.checked = false);
  alert("🗑️ Selección limpiada.");
}

function recopilarComandosScript() {
  let script = "";
  if(document.getElementById('an1')?.checked) script += "settings put global window_animation_scale 0\n";
  if(document.getElementById('an2')?.checked) script += "settings put global transition_animation_scale 0\n";
  if(document.getElementById('an3')?.checked) script += "settings put global animator_duration_scale 0\n";
  if(document.getElementById('an5')?.checked) script += "settings put global window_blur_disabled 1\n";
  
  if(document.getElementById('nw1')?.checked) script += "settings put global wifi_sleep_policy 2\n";
  if(document.getElementById('nw2')?.checked) script += "settings put global mobile_data_always_on 1\n";
  if(document.getElementById('nw5')?.checked) script += "settings put global ble_scan_always_enabled 0\n";
  if(document.getElementById('nw7')?.checked) script += "settings put global wifi_scan_always_enabled 0\n";
  
  if(document.getElementById('tc1')?.checked) script += "settings put system touch_pressure_scale 0.001\n";
  if(document.getElementById('tc2')?.checked) script += "settings put system min_refresh_rate 120.0\n";
  if(document.getElementById('tc3')?.checked) script += "settings put system peak_refresh_rate 120.0\n";
  if(document.getElementById('tc6')?.checked) script += "settings put secure long_press_timeout 200\n";
  
  if(document.getElementById('bg1')?.checked) script += "dumpsys deviceidle disable\n";
  if(document.getElementById('bg2')?.checked) script += "cmd appops set com.dts.freefireth RUN_IN_BACKGROUND allow\n";
  if(document.getElementById('bg3')?.checked) script += "cmd appops set com.dts.freefireth WAKE_LOCK allow\n";
  if(document.getElementById('bg4')?.checked) script += "cmd package set-app-idle-state com.dts.freefireth active\n";

  if(document.getElementById('rt1')?.checked) script += "pm trim-caches 999G\n";
  if(document.getElementById('rt2')?.checked) script += "renice -20 $(pidof surfaceflinger)\n";
  if(document.getElementById('rt3')?.checked) script += "echo 3 > /proc/sys/vm/drop_caches\n";

  return script;
}

function copiarScriptTexto() {
  let script = recopilarComandosScript();
  if(!script.trim()) {
    alert("Por favor selecciona al menos una opción.");
    return;
  }
  navigator.clipboard.writeText(script).then(function() {
    alert("📋 ¡Comandos copiados con éxito para Brevent!");
  });
}

function generarYDescargarScript() {
  let script = "#!/system/bin/sh\n" + recopilarComandosScript();
  let blob = new Blob([script], { type: 'text/plain;charset=utf-8' });
  let link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'optimizacion_brevent.sh';
  link.click();
}
