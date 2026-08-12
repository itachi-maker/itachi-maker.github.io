window.onload = function() { actualizarMenus(); };

function abrirModal(id) { document.getElementById(id).style.display = "block"; }
function cerrarModal(id) { document.getElementById(id).style.display = "none"; }
window.onclick = function(event) { if (event.target.classList.contains('modal')) event.target.style.display = "none"; };

// Lógica de Sliders de Sensibilidad Pro
function actualizarSliderTexto(tipo) {
  let val = document.getElementById('range' + tipo).value;
  document.getElementById('val' + tipo).innerText = val;
}

function sugerirValoresBase() {
  calcularSensibilidadPro();
}

function calcularSensibilidadPro() {
  let dpi = parseInt(document.getElementById('inputDpi').value) || 600;
  let estilo = document.getElementById('selectEstilo').value;
  
  let gen, red, x2, x4, awm, cam;

  if (estilo === 'exagerado') {
    gen = Math.min(200, Math.max(150, Math.round(200 - (dpi * 0.03))));
    red = Math.min(198, Math.max(145, gen - 2));
    x2 = Math.min(195, Math.max(140, gen - 5));
    x4 = Math.min(190, Math.max(135, gen - 10));
    awm = 95;
    cam = 100;
  } else if (estilo === 'preciso') {
    gen = Math.min(190, Math.max(120, Math.round(185 - (dpi * 0.05))));
    red = Math.min(185, Math.max(115, gen - 5));
    x2 = Math.min(180, Math.max(110, gen - 10));
    x4 = Math.min(175, Math.max(105, gen - 15));
    awm = 75;
    cam = 80;
  } else {
    gen = Math.min(195, Math.max(130, Math.round(190 - (dpi * 0.04))));
    red = Math.min(190, Math.max(125, gen - 4));
    x2 = Math.min(185, Math.max(120, gen - 8));
    x4 = Math.min(180, Math.max(115, gen - 12));
    awm = 85;
    cam = 90;
  }

  // Asignar a sliders e interfaz
  document.getElementById('rangeGen').value = gen; document.getElementById('valGen').innerText = gen;
  document.getElementById('rangeRed').value = red; document.getElementById('valRed').innerText = red;
  document.getElementById('range2x').value = x2; document.getElementById('val2x').innerText = x2;
  document.getElementById('range4x').value = x4; document.getElementById('val4x').innerText = x4;
  document.getElementById('rangeAwm').value = awm; document.getElementById('valAwm').innerText = awm;
  document.getElementById('rangeCam').value = cam; document.getElementById('valCam').innerText = cam;

  alert("⚡ ¡Sensibilidad auto-optimizada para tu DPI " + dpi + "!");
}

function copiarSensibilidadPro() {
  let dpi = document.getElementById('inputDpi').value;
  let gen = document.getElementById('rangeGen').value;
  let red = document.getElementById('rangeRed').value;
  let x2 = document.getElementById('range2x').value;
  let x4 = document.getElementById('range4x').value;
  let awm = document.getElementById('rangeAwm').value;
  let cam = document.getElementById('rangeCam').value;

  let texto = `🎯 CONFIGURACIÓN FREE FIRE (RendimientoTech)\n`;
  texto += `📌 DPI Óptimo: ${dpi}\n`;
  texto += `• General: ${gen}\n`;
  texto += `• Mira Punto Rojo: ${red}\n`;
  texto += `• Mira 2X: ${x2}\n`;
  texto += `• Mira 4X: ${x4}\n`;
  texto += `• Mira AWM: ${awm}\n`;
  texto += `• Cámara: ${cam}\n`;

  navigator.clipboard.writeText(texto).then(() => {
    alert("📋 ¡Configuración Pro copiada al portapapeles!");
  });
}

// Menús de Comandos Brevent
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
        <summary>👆 3. Táctil y Sensibilidad Sistema (Free Fire)</summary>
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
