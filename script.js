const baseDispositivos = [
  { id: "note14pro4g", marca: "Xiaomi", modelo: "Redmi Note 14 Pro 4G", proc: "MediaTek Helio G100 (6nm)", gpu: "Mali-G57 MC2", hz: 120, ram: "8GB/12GB", gama: "media" },
  { id: "note14pro5g", marca: "Xiaomi", modelo: "Redmi Note 14 Pro+ 5G", proc: "Snapdragon 7s Gen 3", gpu: "Adreno 710", hz: 120, ram: "12GB/16GB", gama: "alta" },
  { id: "note13pro5g", marca: "Xiaomi", modelo: "Redmi Note 13 Pro 5G", proc: "Snapdragon 7s Gen 2", gpu: "Adreno 710", hz: 120, ram: "8GB/12GB", gama: "media" },
  { id: "note134g", marca: "Xiaomi", modelo: "Redmi Note 13 4G", proc: "Snapdragon 685", gpu: "Adreno 610", hz: 120, ram: "6GB/8GB", gama: "media" },
  { id: "pocox6pro", marca: "POCO", modelo: "POCO X6 Pro 5G", proc: "MediaTek Dimensity 8300 Ultra", gpu: "Mali-G615 MC6", hz: 120, ram: "8GB/12GB", gama: "alta" },
  { id: "pocof6pro", marca: "POCO", modelo: "POCO F6 Pro", proc: "Snapdragon 8 Gen 2", gpu: "Adreno 740", hz: 120, ram: "12GB/16GB", gama: "alta" },
  { id: "pocom6pro", marca: "POCO", modelo: "POCO M6 Pro 4G", proc: "Helio G99 Ultra", gpu: "Mali-G57 MC2", hz: 120, ram: "8GB/12GB", gama: "media" },
  { id: "s24ultra", marca: "Samsung", modelo: "Galaxy S24 Ultra", proc: "Snapdragon 8 Gen 3", gpu: "Adreno 750", hz: 120, ram: "12GB", gama: "alta" },
  { id: "a55", marca: "Samsung", modelo: "Galaxy A55 5G", proc: "Exynos 1480", gpu: "Xclipse 530", hz: 120, ram: "8GB/12GB", gama: "media" },
  { id: "a15", marca: "Samsung", modelo: "Galaxy A15", proc: "Helio G99", gpu: "Mali-G57 MC2", hz: 90, ram: "4GB/6GB", gama: "baja" },
  { id: "infinixgt20", marca: "Infinix", modelo: "GT 20 Pro", proc: "Dimensity 8200 Ultimate", gpu: "Mali-G610", hz: 144, ram: "12GB", gama: "alta" },
  { id: "infinixnote40", marca: "Infinix", modelo: "Note 40 Pro", proc: "Helio G99 Ultimate", gpu: "Mali-G57", hz: 120, ram: "8GB", gama: "media" },
  { id: "tecnocamon30", marca: "Tecno", modelo: "Camon 30 Pro 5G", proc: "Dimensity 8200 Ultimate", gpu: "Mali-G610", hz: 144, ram: "12GB", gama: "alta" },
  { id: "realmegt6", marca: "Realme", modelo: "GT 6 5G", proc: "Snapdragon 8s Gen 3", gpu: "Adreno 735", hz: 120, ram: "12GB", gama: "alta" },
  { id: "iphone15pm", marca: "Apple", modelo: "iPhone 15 Pro Max", proc: "Apple A17 Pro", gpu: "Apple GPU", hz: 120, ram: "8GB", gama: "alta" }
];

function autocompletarPorModelo() {
  const selectVal = document.getElementById("selectModelo").value;
  const dev = baseDispositivos.find(d => d.id === selectVal);
  if (dev) {
    document.getElementById("hz").value = dev.hz.toString();
  }
}

function ejecutarIA() {
  const loader = document.getElementById("loaderIA");
  const resBox = document.getElementById("resultadoSens");
  const txtCargando = document.getElementById("textoCargandoIA");

  resBox.style.display = "none";
  loader.style.display = "flex";

  const pasos = [
    "Sincronizando algoritmo de pantalla...",
    "Ajustando escala 0-200 para Free Fire 2026...",
    "Calculando respuesta táctil por procesador..."
  ];

  let i = 0;
  const timer = setInterval(() => {
    if (i < pasos.length) {
      txtCargando.innerText = pasos[i];
      i++;
    } else {
      clearInterval(timer);
      loader.style.display = "none";
      calcularSensibilidadIA();
      resBox.style.display = "block";
    }
  }, 300);
}

function calcularSensibilidadIA() {
  const selectVal = document.getElementById("selectModelo").value;
  const modoDpi = document.getElementById("modoDpi").value;
  const estilo = document.getElementById("estilo").value;
  const hz = parseInt(document.getElementById("hz").value);

  const dev = baseDispositivos.find(d => d.id === selectVal);
  const gama = dev ? dev.gama : "media";

  let gen = 186, redDot = 180, m2x = 168, m4x = 158, awm = 85, cam = 120;
  let dpiTexto = "Fábrica";
  let boton = 45;
  let consejo = "";
  let tecnica = "";

  if (modoDpi === "sin_dpi") {
    gen = (gama === "baja") ? 198 : (gama === "media") ? 188 : 178;
    redDot = gen - 6;
    dpiTexto = "392 / 411 DPI";
    consejo = "Sensibilidad optimizada para jugar SIN DPI de forma totalmente segura.";
  } else {
    gen = (gama === "baja") ? 172 : (gama === "media") ? 164 : 152;
    redDot = gen - 5;
    dpiTexto = (dev && dev.id === "note14pro4g") ? "540 DPI (Helio G100)" : "520 DPI";
    consejo = "Modo Con DPI activo: Máxima velocidad de giro táctil sin sobrepasar el casco.";
  }

  if (estilo === "onetap") {
    gen -= 5;
    boton = 42;
    tecnica = "Levantado en 'J': Arrastra levemente hacia abajo y sube directo con fuerza.";
  } else if (estilo === "smg") {
    gen += 4;
    redDot += 5;
    tecnica = "Levantado Continuo: Sube el botón en línea recta manteniendo la presión constante.";
  } else {
    tecnica = "Levantado Suave: Ajusta la velocidad según la distancia de la diana.";
  }

  const nombre = dev ? `${dev.marca} ${dev.modelo}` : "Genérico";
  document.getElementById("tituloModeloRes").innerText = `IA Config: ${nombre}`;
  document.getElementById("resGen").innerText = gen;
  document.getElementById("resRedDot").innerText = redDot;
  document.getElementById("res2x").innerText = m2x;
  document.getElementById("res4x").innerText = m4x;
  document.getElementById("resAwm").innerText = awm;
  document.getElementById("resCam").innerText = cam;

  document.getElementById("resDpi").innerText = dpiTexto;
  document.getElementById("resBoton").innerText = boton + "%";
  document.getElementById("resVelPuntero").innerText = "100% (Máxima)";
  document.getElementById("resConsejo").innerText = consejo;
  document.getElementById("resTecnica").innerText = tecnica;
}

// COPIAR COMANDOS AL PORTAPAPELES
function copiarComando(btn) {
  const codeNode = btn.parentElement.querySelector("code");
  if (!codeNode) return;
  navigator.clipboard.writeText(codeNode.innerText).then(() => {
    const orig = btn.innerText;
    btn.innerText = "✅ Copiado!";
    btn.style.background = "#00e676";
    btn.style.color = "#000";
    setTimeout(() => {
      btn.innerText = orig;
      btn.style.background = "#2a3447";
      btn.style.color = "#fff";
    }, 1500);
  });
}

// MODALES LEGALES ADSENSE
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
}

function mostrarDispositivos(lista) {
  const contenedor = document.getElementById("listaDispositivos");
  if (!contenedor) return;
  contenedor.innerHTML = "";

  lista.forEach(item => {
    const card = document.createElement("div");
    card.className = "tarjeta-telefono";
    card.innerHTML = `
      <h3>${item.marca} ${item.modelo}</h3>
      <p><strong>Procesador:</strong> ${item.proc}</p>
      <p><strong>GPU:</strong> ${item.gpu}</p>
      <p><strong>Pantalla:</strong> ${item.hz}Hz</p>
      <p><strong>RAM:</strong> ${item.ram}</p>
      <button class="btn-seleccionar" onclick="seleccionarYEjecutar('${item.id}')">🎯 Cargar en IA</button>
    `;
    contenedor.appendChild(card);
  });
}

function seleccionarYEjecutar(id) {
  const select = document.getElementById("selectModelo");
  if (select) {
    select.value = id;
    autocompletarPorModelo();
    ejecutarIA();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function buscarTelefono() {
  const input = document.getElementById("inputBuscar");
  if (!input) return;
  const texto = input.value.toLowerCase();
  const filtrados = baseDispositivos.filter(d => 
    d.marca.toLowerCase().includes(texto) ||
    d.modelo.toLowerCase().includes(texto) ||
    d.proc.toLowerCase().includes(texto)
  );
  mostrarDispositivos(filtrados);
}

document.addEventListener("DOMContentLoaded", () => {
  autocompletarPorModelo();
  mostrarDispositivos(baseDispositivos);
});
