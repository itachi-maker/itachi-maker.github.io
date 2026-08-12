// Comprobar si ya aceptó las cookies al cargar la página
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
