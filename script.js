window.onload = function() {
  if (!localStorage.getItem('cookiesAceptadas')) {
    document.getElementById('cookieBanner').style.display = 'block';
  }
  actualizarOpciones();
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

function actualizarOpciones() {
  const modo = document.querySelector('input[name="mode"]:checked').value;
  const container = document.getElementById('containerOpciones');
  
  if (modo === 'noroot') {
    container.innerHTML = `
      <div class="categoria-bloque">
        <h3>1. Animaciones y Fluidez Visual</h3>
        <div class="checkbox-group">
          <label><input type="checkbox" id="an1" checked> Quitar animación de ventanas (0.0x)</label>
          <label><input type="checkbox" id="an2" checked> Quitar animación de transición (0.0x)</label>
          <label><input type="checkbox" id="an3" checked> Quitar animador de duración (0.0x)</label>
          <label><input type="checkbox" id="an4"> Forzar escala de animaciones a 0.5x</label>
          <label><input type="checkbox" id="an5"> Desactivar efectos de desenfoque en UI</label>
          <label><input type="checkbox" id="an6"> Desactivar burbujas de notificaciones flotantes</label>
          <label><input type="checkbox" id="an7"> Desactivar vista previa de pantallas recientes</label>
          <label><input type="checkbox" id="an8"> Reducir retraso de renderizado gráfico general</label>
        </div>
      </div>

      <div class="categoria-bloque">
        <h3>2. Red, Ping y Estabilidad Wi-Fi</h3>
        <div class="checkbox-group">
          <label><input type="checkbox" id="nw1" checked> Política de suspensión Wi-Fi avanzada (Policy 2)</label>
          <label><input type="checkbox" id="nw2" checked> Forzar datos móviles siempre activos</label>
          <label><input type="checkbox" id="nw3"> Desactivar recomendaciones de redes públicas</label>
          <label><input type="checkbox" id="nw4" checked> Desactivar detección de portal cautivo en red</label>
          <label><input type="checkbox" id="nw5" checked> Desactivar escaneo continuo de Bluetooth en fondo</label>
          <label><input type="checkbox" id="nw6"> Desactivar pruebas automáticas de red pobre en Wi-Fi</label>
          <label><input type="checkbox" id="nw7" checked> Desactivar escaneo continuo de redes Wi-Fi</label>
          <label><input type="checkbox" id="nw8"> Optimizar sockets de red TCP para juegos online</label>
        </div>
      </div>

      <div class="categoria-bloque">
        <h3>3. Táctil, Pantalla y Sensibilidad</h3>
        <div class="checkbox-group">
          <label><input type="checkbox" id="tc1" checked> Reducir escala de presión táctil (Touch Pressure 0.001)</label>
          <label><input type="checkbox" id="tc2" checked> Forzar tasa de refresco mínima a 120Hz</label>
          <label><input type="checkbox" id="tc3" checked> Forzar tasa de refresco máxima a 120Hz (Peak)</label>
          <label><input type="checkbox" id="tc4"> Aumentar velocidad del puntero táctil del sistema</label>
          <label><input type="checkbox" id="tc5" checked> Desactivar brillo automático de pantalla</label>
          <label><input type="checkbox" id="tc6"> Reducir retraso de pulsación larga (Long Press Timeout)</label>
          <label><input type="checkbox" id="tc7"> Reducir tiempo de doble toque o multi-pulsación</label>
          <label><input type="checkbox" id="tc8"> Desactivar lupa de aumento táctil de accesibilidad</label>
        </div>
      </div>

      <div class="categoria-bloque">
        <h3>4. Procesos en Segundo Plano y Batería (Free Fire)</h3>
        <div class="checkbox-group">
          <label><input type="checkbox" id="bg1" checked> Desactivar modo Doze de suspensión profunda temporal</label>
          <label><input type="checkbox" id="bg2" checked> Permitir ejecución de Free Fire en segundo plano sin restricciones</label>
          <label><input type="checkbox" id="bg3" checked> Conceder Wake Lock permanente a Free Fire</label>
          <label><input type="checkbox" id="bg4" checked> Marcar estado de Free Fire como activo constante</label>
          <label><input type="checkbox" id="bg5" checked> Desactivar modo de ahorro de energía estricto global</label>
          <label><input type="checkbox" id="bg6" checked> Desactivar gestión de batería adaptable de Google</label>
          <label><input type="checkbox" id="bg7" checked> Desactivar restricción automática de aplicaciones inantecesoras</label>
          <label><input type="checkbox" id="bg8" checked> Permitir ejecución completa de apps en segundo plano</label>
        </div>
      </div>

      <div class="categoria-bloque">
        <h3>5. Sistema, Privacidad y Bloatware Seguro</h3>
        <div class="checkbox-group">
          <label><input type="checkbox" id="sy1" checked> Ocultar teclado físico en pantalla de inicio</label>
          <label><input type="checkbox" id="sy2" checked> Desactivar notificaciones emergentes flotantes (Heads-up)</label>
          <label><input type="checkbox" id="sy3"> Desactivar verificación de apps instaladas por ADB</label>
          <label><input type="checkbox" id="sy4"> Desactivar verificador global de paquetes de Google</label>
          <label><input type="checkbox" id="sy5"> Desactivar control de núcleos de Google Services en fondo</label>
          <label><input type="checkbox" id="sy6"> Confirmar automáticamente avisos de modo inmersivo</label>
          <label><input type="checkbox" id="sy7" checked> Desactivar actualizaciones automáticas del sistema OTA</label>
          <label><input type="checkbox" id="sy8"> Desactivar advertencia de volumen seguro en auriculares</label>
        </div>
      </div>

      <div class="categoria-bloque">
        <h3>6. Mantenimiento, Caché y Limpieza</h3>
        <div class="checkbox-group">
          <label><input type="checkbox" id="cl1" checked> Ejecutar limpieza profunda de caché del sistema (Trim)</label>
          <label><input type="checkbox" id="cl2" checked> Recortar directorios de almacenamiento caché de paquetes</label>
          <label><input type="checkbox" id="cl3" checked> Forzar cierre de procesos secundarios colgados (Kill All)</label>
          <label><input type="checkbox" id="cl4" checked> Restablecer reguladores de velocidad de accesos directos</label>
          <label><input type="checkbox" id="cl5" checked> Limpiar registros de errores temporales del sistema (Dropbox)</label>
          <label><input type="checkbox" id="cl6" checked> Reducir umbral de advertencia por espacio lleno</label>
          <label><input type="checkbox" id="cl7"> Limpiar memoria temporal de búfer gráficos libres</label>
          <label><input type="checkbox" id="cl8" checked> Optimizar asignación de memoria RAM virtual inactiva</label>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="categoria-bloque">
        <h3>⚡ Opciones Avanzadas Seguras (Modo Root)</h3>
        <div class="checkbox-group">
          <label><input type="checkbox" id="rt1" checked> Limpieza profunda de caché por particiones (pm trim-caches)</label>
          <label><input type="checkbox" id="rt2" checked> Asignar máxima prioridad al renderizador gráfico (SurfaceFlinger)</label>
          <label><input type="checkbox" id="rt3" checked> Liberar búfer de páginas y dent_caches de memoria RAM</label>
          <label><input type="checkbox" id="rt4"> Optimización de ZRAM y gestión de intercambio no destructiva</label>
          <label><input type="checkbox" id="rt5"> Ajuste de prioridades IO para lectura veloz de almacenamiento eUFS</label>
          <label><input type="checkbox" id="rt6"> Forzar limpieza de hilos huérfanos en background del kernel</label>
        </div>
      </div>
    `;
  }
}

function recopilarComandosScript() {
  const modo = document.querySelector('input[name="mode"]:checked').value;
  let script = "#!/system/bin/sh\n";
  script += "# ====================================================\n";
  script += "# Script Maestro de Optimización - RendimientoTech v5.0\n";
  script += "# Autor: Alexander Orozco (RendimientoTech)\n";
  script += "# ====================================================\n\n";
  script += "echo 'Iniciando optimización del sistema...'\n\n";

  if (modo === 'noroot') {
    // Animaciones
    if(document.getElementById('an1')?.checked) script += "settings put global window_animation_scale 0\n";
    if(document.getElementById('an2')?.checked) script += "settings put global transition_animation_scale 0\n";
    if(document.getElementById('an3')?.checked) script += "settings put global animator_duration_scale 0\n";
    if(document.getElementById('an4')?.checked) script += "settings put global window_animation_scale 0.5\nsettings put global transition_animation_scale 0.5\nsettings put global animator_duration_scale 0.5\n";
    if(document.getElementById('an5')?.checked) script += "settings put global window_blur_disabled 1\n";
    if(document.getElementById('an6')?.checked) script += "settings put global notification_bubbles 0\n";
    if(document.getElementById('an7')?.checked) script += "settings put secure recent_app_setting 0\n";
    if(document.getElementById('an8')?.checked) script += "settings put global render_shadows 0\n";

    // Red y Ping
    if(document.getElementById('nw1')?.checked) script += "settings put global wifi_sleep_policy 2\n";
    if(document.getElementById('nw2')?.checked) script += "settings put global mobile_data_always_on 1\n";
    if(document.getElementById('nw3')?.checked) script += "settings put global network_recommendations_enabled 0\n";
    if(document.getElementById('nw4')?.checked) script += "settings put global captive_portal_detection_enabled 0\n";
    if(document.getElementById('nw5')?.checked) script += "settings put global ble_scan_always_enabled 0\n";
    if(document.getElementById('nw6')?.checked) script += "settings put global wifi_watchdog_poor_network_test_enabled 0\n";
    if(document.getElementById('nw7')?.checked) script += "settings put global wifi_scan_always_enabled 0\n";
    if(document.getElementById('nw8')?.checked) script += "settings put global tcp_default_init_rwnd 60\n";

    // Táctil y Pantalla
    if(document.getElementById('tc1')?.checked) script += "settings put system touch_pressure_scale 0.001\n";
    if(document.getElementById('tc2')?.checked) script += "settings put system min_refresh_rate 120.0\n";
    if(document.getElementById('tc3')?.checked) script += "settings put system peak_refresh_rate 120.0\n";
    if(document.getElementById('tc4')?.checked) script += "settings put system pointer_speed 1\n";
    if(document.getElementById('tc5')?.checked) script += "settings put system screen_brightness_mode 0\n";
    if(document.getElementById('tc6')?.checked) script += "settings put secure long_press_timeout 200\n";
    if(document.getElementById('tc7')?.checked) script += "settings put secure multi_press_timeout 200\n";
    if(document.getElementById('tc8')?.checked) script += "settings put secure accessibility_display_magnification_enabled 0\n";

    // Background y Batería
    if(document.getElementById('bg1')?.checked) script += "dumpsys deviceidle disable\n";
    if(document.getElementById('bg2')?.checked) script += "cmd appops set com.dts.freefireth RUN_IN_BACKGROUND allow\n";
    if(document.getElementById('bg3')?.checked) script += "cmd appops set com.dts.freefireth WAKE_LOCK allow\n";
    if(document.getElementById('bg4')?.checked) script += "cmd package set-app-idle-state com.dts.freefireth active\n";
    if(document.getElementById('bg5')?.checked) script += "settings put global low_power 0\n";
    if(document.getElementById('bg6')?.checked) script += "settings put global adaptive_battery_management_enabled 0\n";
    if(document.getElementById('bg7')?.checked) script += "settings put global app_auto_restriction_enabled 0\n";
    if(document.getElementById('bg8')?.checked) script += "cmd appops set com.dts.freefireth RUN_ANY_IN_BACKGROUND allow\n";

    // Sistema y Privacidad
    if(document.getElementById('sy1')?.checked) script += "settings put secure show_ime_with_hard_keyboard 0\n";
    if(document.getElementById('sy2')?.checked) script += "settings put global head_up_notifications_enabled 0\n";
    if(document.getElementById('sy3')?.checked) script += "settings put global verifier_verify_adb_installs 0\n";
    if(document.getElementById('sy4')?.checked) script += "settings put global package_verifier_enable 0\n";
    if(document.getElementById('sy5')?.checked) script += "settings put global google_core_control_enabled 0\n";
    if(document.getElementById('sy6')?.checked) script += "settings put secure immersive_mode_confirmations confirmed\n";
    if(document.getElementById('sy7')?.checked) script += "settings put global ota_disable_automatic_update 1\n";
    if(document.getElementById('sy8')?.checked) script += "settings put global audio_safe_volume_state 2\n";

    // Mantenimiento y Caché
    if(document.getElementById('cl1')?.checked) script += "pm trim-caches 999G\n";
    if(document.getElementById('cl2')?.checked) script += "cmd package trim-caches 999G\n";
    if(document.getElementById('cl3')?.checked) script += "am kill-all\n";
    if(document.getElementById('cl4')?.checked) script += "cmd shortcut reset-all-throttling\n";
    if(document.getElementById('cl5')?.checked) script += "cmd dropbox clear\n";
    if(document.getElementById('cl6')?.checked) script += "settings put secure sys_storage_threshold_percentage 5\n";
    if(document.getElementById('cl7')?.checked) script += "sync\n";
    if(document.getElementById('cl8')?.checked) script += "echo 3 > /proc/sys/vm/drop_caches\n";

  } else {
    if(document.getElementById('rt1')?.checked) script += "pm trim-caches 999G\n";
    if(document.getElementById('rt2')?.checked) script += "renice -20 $(pidof surfaceflinger)\n";
    if(document.getElementById('rt3')?.checked) script += "echo 3 > /proc/sys/vm/drop_caches\n";
    if(document.getElementById('rt4')?.checked) script += "echo 100 > /proc/sys/vm/swappiness\n";
    if(document.getElementById('rt5')?.checked) script += "echo 50 > /proc/sys/vm/vfs_cache_pressure\n";
    if(document.getElementById('rt6')?.checked) script += "sync\n";
  }

  script += "\necho '¡Optimización completada con éxito!'\n";
  return script;
}

function generarYDescargarScript() {
  let script = recopilarComandosScript();
  let blob = new Blob([script], { type: 'text/plain;charset=utf-8' });
  let link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'optimizacion_masiva_rendimientotech.sh';
  link.click();
}

function copiarScriptTexto() {
  let script = recopilarComandosScript();
  navigator.clipboard.writeText(script).then(function() {
    alert("¡Script copiado al portapapeles con éxito!");
  });
}
