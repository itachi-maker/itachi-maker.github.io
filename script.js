function actualizarOpciones() {
  const modo = document.querySelector('input[name="mode"]:checked').value;
  const container = document.getElementById('containerOpciones');
  
  if (modo === 'noroot') {
    container.innerHTML = `
      <label><input type="checkbox" id="optAnim"> Eliminar animaciones (0.0x)</label>
      <label><input type="checkbox" id="optDoze"> Desactivar Doze Mode (Mejor notificación)</label>
      <label><input type="checkbox" id="optWifi"> Optimizar Wi-Fi (Policy 2)</label>
      <label><input type="checkbox" id="optTouch"> Reducir latencia táctil (Touch Pressure)</label>
    `;
  } else {
    container.innerHTML = `
      <label><input type="checkbox" id="optCache"> Limpieza profunda de caché (Trimming)</label>
      <label><input type="checkbox" id="optPriority"> Prioridad máxima a proceso gráfico (SurfaceFlinger)</label>
      <label><input type="checkbox" id="optZram"> Optimización de Swap/ZRAM (No destructiva)</label>
    `;
  }
}

function generarYDescargarScript() {
  const modo = document.querySelector('input[name="mode"]:checked').value;
  let script = "#!/system/bin/sh\n# Generado por RendimientoTech\n\n";

  if (modo === 'noroot') {
    if(document.getElementById('optAnim').checked) script += "settings put global window_animation_scale 0\nsettings put global transition_animation_scale 0\n";
    if(document.getElementById('optDoze').checked) script += "dumpsys deviceidle disable\n";
    if(document.getElementById('optWifi').checked) script += "settings put global wifi_sleep_policy 2\n";
    if(document.getElementById('optTouch').checked) script += "settings put system touch_pressure_scale 0.001\n";
  } else {
    if(document.getElementById('optCache').checked) script += "pm trim-caches 999G\n";
    if(document.getElementById('optPriority').checked) script += "renice -20 $(pidof surfaceflinger)\n";
    if(document.getElementById('optZram').checked) script += "echo 1 > /proc/sys/vm/drop_caches\n";
  }

  script += "\necho 'Optimización terminada.'";
  
  let blob = new Blob([script], { type: 'text/plain' });
  let link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'optimizacion_segura.sh';
  link.click();
}

// Iniciar al cargar
actualizarOpciones();
