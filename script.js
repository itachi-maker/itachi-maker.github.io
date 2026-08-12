window.onload = function() { 
  // Verificar si ya aceptó cookies
  if(localStorage.getItem('cookiesAceptadas') === 'true') {
    document.getElementById('cookieBanner').style.display = 'none';
  }
  actualizarMenus(); 
};

function aceptarCookies() {
  localStorage.setItem('cookiesAceptadas', 'true');
  document.getElementById('cookieBanner').style.display = 'none';
}

// Sincronizar Sliders Estilo System Wood
function sincronizarSlider(tipo) {
  let val = document.getElementById('range' + tipo).value;
  document.getElementById('val' + tipo).innerText = val;
}

function actualizarSensiWood() {
  let dpi = parseInt(document.getElementById('inputDpiReal').value) || 580;
  let ajuste = Math.round((dpi - 580) * 0.05);
  
  let g = Math.min(200, Math.max(120, 185 + ajuste));
  let r = Math.min(200, Math.max(110, 180 + ajuste));
  let x2 = Math.min(195, Math.max(100, 175 + ajuste));
  let x4 = Math.min(190, Math.max(90, 170 + ajuste));
  let awm = Math.min(130, Math.max(40, 75 + Math.round(ajuste/2)));

  document.getElementById('rangeGen').value = g; document.getElementById('valGen').innerText = g;
  document.getElementById('rangeRed').value = r; document.getElementById('valRed').innerText = r;
  document.getElementById('range2x').value = x2; document.getElementById('val2x').innerText = x2;
  document.getElementById('range4x').value = x4; document.getElementById('val4x').innerText = x4;
  document.getElementById('rangeAwm').value = awm; document.getElementById('valAwm').innerText = awm;
}

function copiarConfiguracionWood() {
  let modelo = document.getElementById('inputModelo').value.trim() || "Dispositivo Android";
  let dpi = document.getElementById('inputDpiReal').value;
  let gen = document.getElementById('valGen').innerText;
  let red = document.getElementById('valRed').innerText;
  let x2 = document.getElementById('val2x').innerText;
  let x4 = document.getElementById('val4x').innerText;
  let awm = document.getElementById('valAwm').innerText;

  let texto = `🎯 CONFIGURACIÓN SYSTEM WOOD TACTICAL\n`;
  texto += `📱 Dispositivo: ${modelo} | DPI: ${dpi}\n`;
  texto += `------------------------------------\n`;
  texto += `• General: ${gen}\n`;
  texto += `• Punto Rojo: ${red}\n`;
  texto += `• Mira 2X: ${x2}\n`;
  texto += `• Mira 4X: ${x4}\n`;
  texto += `• Mira AWM: ${awm}\n`;

  navigator.clipboard.writeText(texto).then(() => {
    alert("📋 ¡Configuración System Wood copiada!");
  });
}

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
        </div>
      </details>
      <details class="menu-categoria">
        <summary>🌐 2. Red, Ping y Estabilidad Wi-Fi</summary>
        <div class="menu-contenido">
          <label><input type="checkbox" id="nw1" checked> Política avanzada de suspensión Wi-Fi (Policy 2)</label>
          <label><input type="checkbox" id="nw2" checked> Forzar datos móviles siempre activos</label>
        </div>
      </details>
      <details class="menu-categoria">
        <summary>👆 3. Táctil y Sensibilidad Sistema (Free Fire)</summary>
        <div class="menu-contenido">
          <label><input type="checkbox" id="tc1" checked> Reducir escala de presión táctil (Touch 0.001)</label>
          <label><input type="checkbox" id="tc2" checked> Forzar tasa de refresco máxima (Peak Refresh Rate)</label>
        </div>
      </details>
      <details class="menu-categoria">
        <summary>🚀 4. Procesos en Segundo Plano (Free Fire)</summary>
        <div class="menu-contenido">
          <label><input type="checkbox" id="bg1" checked> Desactivar modo Doze de suspensión profunda</label>
          <label><input type="checkbox" id="bg2" checked> Permitir ejecución de Free Fire sin restricciones</label>
        </div>
      </details>
    `;
  } else {
    container.innerHTML = `
      <details class="menu-categoria" open>
        <summary>⚡ Opciones Root / Shizuku Seguras</summary>
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
  document.querySelectorAll('.builder-scroll-box input[type="checkbox"]').forEach(cb => cb.checked = false);
  if (tipo === 'freefire') {
    ['an1', 'an2', 'an3', 'tc1', 'tc2', 'bg1', 'bg2'].forEach(id => {
      let el = document.getElementById(id); if(el) el.checked = true;
    });
  } else if (tipo === 'ping') {
    ['nw1', 'nw2'].forEach(id => {
      let el = document.getElementById(id); if(el) el.checked = true;
    });
  }
}

function limpiarSeleccion() {
  document.querySelectorAll('.builder-scroll-box input[type="checkbox"]').forEach(cb => cb.checked = false);
}

function recopilarComandosScript() {
  let script = "";
  if(document.getElementById('an1')?.checked) script += "settings put global window_animation_scale 0\n";
  if(document.getElementById('an2')?.checked) script += "settings put global transition_animation_scale 0\n";
  if(document.getElementById('an3')?.checked) script += "settings put global animator_duration_scale 0\n";
  if(document.getElementById('nw1')?.checked) script += "settings put global wifi_sleep_policy 2\n";
  if(document.getElementById('nw2')?.checked) script += "settings put global mobile_data_always_on 1\n";
  if(document.getElementById('tc1')?.checked) script += "settings put system touch_pressure_scale 0.001\n";
  if(document.getElementById('tc2')?.checked) script += "settings put system peak_refresh_rate 120.0\n";
  if(document.getElementById('bg1')?.checked) script += "dumpsys deviceidle disable\n";
  if(document.getElementById('bg2')?.checked) script += "cmd appops set com.dts.freefireth RUN_IN_BACKGROUND allow\n";
  if(document.getElementById('rt1')?.checked) script += "pm trim-caches 999G\n";
  if(document.getElementById('rt2')?.checked) script += "renice -20 $(pidof surfaceflinger)\n";
  if(document.getElementById('rt3')?.checked) script += "echo 3 > /proc/sys/vm/drop_caches\n";
  return script;
}

function copiarScriptTexto() {
  let script = recopilarComandosScript();
  if(!script.trim()) { alert("Selecciona algo."); return; }
  navigator.clipboard.writeText(script).then(() => { alert("¡Comandos copiados!"); });
}

function generarYDescargarScript() {
  let script = "#!/system/bin/sh\n" + recopilarComandosScript();
  let blob = new Blob([script], { type: 'text/plain;charset=utf-8' });
  let link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'optimizacion_brevent.sh';
  link.click();
}







function openAppTab(tabId) {
    document.querySelectorAll('.app-section').forEach(sec => sec.classList.remove('active-tab'));
    const selected = document.getElementById(tabId);
    if(selected) {
        selected.classList.add('active-tab');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function openAppTab(tabId) {
    document.querySelectorAll('.app-section').forEach(sec => sec.classList.remove('active-tab'));
    const selected = document.getElementById(tabId);
    if(selected) {
        selected.classList.add('active-tab');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}




function generarSensiWoodPro() {
    const modelInput = document.getElementById('woodModel');
    const hzInput = document.getElementById('woodHz');
    const styleInput = document.getElementById('woodStyle');
    const dpiInput = document.getElementById('woodDpi');

    if(!modelInput || !dpiInput) {
        alert("Error de carga en los elementos.");
        return;
    }

    const model = modelInput.value.trim();
    const hz = parseInt(hzInput.value);
    const style = styleInput.value;
    const dpi = parseInt(dpiInput.value);

    if(!model) { alert("Por favor, ingresa el modelo de tu dispositivo."); return; }
    if(isNaN(dpi) || dpi < 300 || dpi > 1200) { alert("Ingresa un DPI válido entre 300 y 1200."); return; }

    let baseGen = 90;
    let baseRed = 88;
    let base2x = 85;
    let base4x = 82;
    let btnDisparo = "46% - 49% (Ultra Equilibrio)";

    const hzFactor = hz === 120 ? 0.95 : (hz === 90 ? 1.0 : 1.08);

    if(style === 'rush') {
        baseGen += 8;
        baseRed += 5;
        btnDisparo = "42% - 45% (Tiro rápido corta distancia)";
    } else if(style === 'long') {
        baseGen -= 5;
        base2x += 5;
        base4x += 8;
        btnDisparo = "50% - 55% (Estabilidad lejana)";
    }

    const dpiMultiplier = 500 / dpi;
    
    const general = Math.min(100, Math.max(70, Math.floor((baseGen * dpiMultiplier) * hzFactor * (dpi > 600 ? 0.92 : 1.0))));
    const puntoRojo = Math.min(100, Math.max(65, Math.floor((baseRed * dpiMultiplier) * hzFactor * (dpi > 600 ? 0.92 : 1.0))));
    const mira2x = Math.min(100, Math.max(60, Math.floor((base2x * dpiMultiplier) * hzFactor)));
    const mira4x = Math.min(100, Math.max(60, Math.floor((base4x * dpiMultiplier) * hzFactor)));
    const freeLook = Math.min(100, Math.floor(80 * hzFactor));

    const data = {
        "📱 Dispositivo": model,
        "⚡ Tasa de Hz": hz + " Hz",
        "🎯 Enfoque": style === 'balanced' ? 'Ultra Equilibrio' : (style === 'rush' ? 'Rush (Corta)' : 'Precisión (Larga)'),
        "🎛️ DPI Aplicado": dpi,
        "💎 General": general,
        "🔴 Punto Rojo": puntoRojo,
        "🔭 Mira 2X": mira2x,
        "🔭 Mira 4X": mira4x,
        "👀 Cámara (Libre)": freeLook,
        "🔘 Botón de Disparo": btnDisparo
    };

    const list = document.getElementById('woodResultList');
    list.innerHTML = "";
    for(let key in data) {
        list.innerHTML += `<li style="display: flex; justify-content: space-between; border-bottom: 1px solid #222; padding: 6px 0;"><span style="color: #aaa;">${key}:</span> <strong style="color: #00d4ff;">${data[key]}</strong></li>`;
    }
    document.getElementById('woodResultBox').style.display = "block";
}

function copiarSensiWoodPro() {
    const listItems = document.querySelectorAll('#woodResultList li');
    let text = "💎 SENSI WOOD PREMIUM - CONFIGURACIÓN DE ÉLITE 💎\n";
    listItems.forEach(li => {
        text += li.innerText + "\n";
    });
    navigator.clipboard.writeText(text).then(() => {
        alert("¡Configuración copiada con éxito!");
    }).catch(err => {
        alert("Error al copiar automáticamente.");
    });
}
