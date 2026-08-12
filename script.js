window.onload = function() { actualizarOpciones(); };

function abrirModal(id) { document.getElementById(id).style.display = "block"; }
function cerrarModal(id) { document.getElementById(id).style.display = "none"; }
window.onclick = function(event) { if (event.target.classList.contains('modal')) event.target.style.display = "none"; };

function copiarComando(btn) {
  var codigo = btn.previousElementSibling.innerText;
  navigator.clipboard.writeText(codigo).then(function() {
    var orig = btn.innerText;
    btn.innerText = "✅ ¡Copiado!";
    setTimeout(function() { btn.innerText = orig; }, 1500);
  });
}

function actualizarOpciones() {
  const modo = document.querySelector('input[name="mode"]:checked').value;
  const container = document.getElementById('containerOpciones');
  
  if (modo === 'noroot') {
    container.innerHTML = `
      <div class="categoria-bloque">
        <h3>1. Fluidez & Animaciones</h3>
        <div class="checkbox-group">
          <label><input type="checkbox" id="an1" checked> Quitar animación de ventanas (0.0x)</label>
          <label><input type="checkbox" id="an2" checked> Quitar animación de transición (0.0x)</label>
          <label><input type="checkbox" id="an3" checked> Quitar animador de duración (0.0x)</label>
          <label><input type="checkbox" id="an5"> Desactivar efectos de desenfoque visual</label>
        </div>
      </div>
      <div class="categoria-bloque">
        <h3>2. Red, Ping y Wi-Fi Estable</h3>
        <div class="checkbox-group">
          <label><input type="checkbox" id="nw1" checked> Política avanzada de suspensión Wi-Fi (Policy 2)</label>
          <label><input type="checkbox" id="nw2" checked> Forzar datos móviles siempre activos</label>
          <label><input type="checkbox" id="nw5" checked> Desactivar escaneo continuo de Bluetooth en fondo</label>
          <label><input type="checkbox" id="nw7" checked> Desactivar escaneo continuo de redes Wi-Fi</label>
        </div>
      </div>
      <div class="categoria-bloque">
        <h3>3. Táctil y Pantalla (Free Fire)</h3>
        <div class="checkbox-group">
          <label><input type="checkbox" id="tc1" checked> Reducir escala de presión táctil (Touch 0.001)</label>
          <label><input type="checkbox" id="tc2" checked> Forzar tasa de refresco mínima a 120Hz</label>
          <label><input type="checkbox" id="tc3" checked> Forzar tasa de refresco máxima a 120Hz (Peak)</label>
          <label><input type="checkbox" id="tc6"> Reducir retraso de pulsación larga</label>
        </div>
      </div>
      <div class="categoria-bloque">
        <h3>4. Procesos en Segundo Plano (Free Fire)</h3>
        <div class="checkbox-group">
          <label><input type="checkbox" id="bg1" checked> Desactivar modo Doze de suspensión profunda</label>
          <label><input type="checkbox" id="bg2" checked> Permitir ejecución de Free Fire sin restricciones</label>
          <label><input type="checkbox" id="bg3" checked> Conceder Wake Lock permanente a Free Fire</label>
          <label><input type="checkbox" id="bg4" checked> Marcar estado de Free Fire como activo constante</label>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="categoria-bloque">
        <h3>⚡ Opciones Root Seguras</h3>
        <div class="checkbox-group">
          <label><input type="checkbox" id="rt1" checked> Limpieza profunda de caché (pm trim-caches)</label>
          <label><input type="checkbox" id="rt2" checked> Prioridad máxima al renderizador gráfico (SurfaceFlinger)</label>
          <label><input type="checkbox" id="rt3" checked> Liberar búfer de páginas de memoria RAM (Drop Caches)</label>
        </div>
      </div>
    `;
  }
}

function aplicarPreset(tipo) {
  // Primero desmarcar todo
  document.querySelectorAll('.script-builder-box input[type="checkbox"]').forEach(cb => cb.checked = false);
  
  if (tipo === 'freefire') {
    ['an1', 'an2', 'an3', 'tc1', 'tc2', 'tc3', 'bg1', 'bg2', 'bg3', 'bg4'].forEach(id => {
      let el = document.getElementById(id);
      if(el) el.checked = true;
    });
    alert("🔥 Preset 'Free Fire Torneo' aplicado con éxito.");
  } else if (tipo === 'ping') {
    ['nw1', 'nw2', 'nw5', 'nw7'].forEach(id => {
      let el = document.getElementById(id);
      if(el) el.checked = true;
    });
    alert("🌐 Preset 'Red / Ping Estable' aplicado con éxito.");
  } else if (tipo === 'todo') {
    document.querySelectorAll('.script-builder-box input[type="checkbox"]').forEach(cb => cb.checked = true);
    alert("✨ Preset 'Máximo Rendimiento' aplicado con éxito.");
  }
}

function recopilarComandosScript() {
  let script = "";
  // Recorrer los checkboxes marcados y extraer sus comandos directos
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
    alert("📋 ¡Comandos copiados con éxito!\n\nPégalos directamente en Brevent o tu consola Shizuku.");
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
