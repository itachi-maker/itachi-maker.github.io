const dispositivos = [
  { id: "note14pro4g", marca: "Xiaomi", modelo: "Redmi Note 14 Pro 4G (Helio G100)", procesador: "MediaTek Helio G100 (6nm)", gpu: "Mali-G57 MC2", ram: "8GB / 12GB", pantalla: "AMOLED 120Hz", nivel: "Gama Media Alto", gama: "media", hz: 120 },
  { id: "note14pro5g", marca: "Xiaomi", modelo: "Redmi Note 14 Pro+ 5G", procesador: "Snapdragon 7s Gen 3", gpu: "Adreno 710", ram: "12GB / 16GB", pantalla: "AMOLED 120Hz 1.5K", nivel: "Gama Media Alta", gama: "alta", hz: 120 },
  { id: "note13pro5g", marca: "Xiaomi", modelo: "Redmi Note 13 Pro 5G", procesador: "Snapdragon 7s Gen 2", gpu: "Adreno 710", ram: "8GB / 12GB", pantalla: "AMOLED 120Hz", nivel: "Gama Media", gama: "media", hz: 120 },
  { id: "note134g", marca: "Xiaomi", modelo: "Redmi Note 13 4G", procesador: "Snapdragon 685", gpu: "Adreno 610", ram: "6GB / 8GB", pantalla: "AMOLED 120Hz", nivel: "Gama Media Base", gama: "media", hz: 120 },
  { id: "note124g", marca: "Xiaomi", modelo: "Redmi Note 12 4G", procesador: "Snapdragon 685", gpu: "Adreno 610", ram: "4GB / 6GB / 8GB", pantalla: "AMOLED 120Hz", nivel: "Gama Entrada / Media", gama: "baja", hz: 120 },
  { id: "pocox6pro", marca: "POCO", modelo: "POCO X6 Pro 5G", procesador: "MediaTek Dimensity 8300 Ultra", gpu: "Mali-G615 MC6", ram: "8GB / 12GB", pantalla: "AMOLED 120Hz 1.5K", nivel: "Gama Gamer / Alta", gama: "alta", hz: 120 },
  { id: "pocof6pro", marca: "POCO", modelo: "POCO F6 Pro", procesador: "Snapdragon 8 Gen 2", gpu: "Adreno 740", ram: "12GB / 16GB", pantalla: "AMOLED 120Hz 2K", nivel: "Gama Alta VIP", gama: "alta", hz: 120 },
  { id: "pocom6pro", marca: "POCO", modelo: "POCO M6 Pro 4G", procesador: "MediaTek Helio G99 Ultra", gpu: "Mali-G57 MC2", ram: "8GB / 12GB", pantalla: "AMOLED 120Hz", nivel: "Gama Media", gama: "media", hz: 120 },
  { id: "s24ultra", marca: "Samsung", modelo: "Galaxy S24 Ultra", procesador: "Snapdragon 8 Gen 3", gpu: "Adreno 750", ram: "12GB", pantalla: "Dynamic AMOLED 2X 120Hz", nivel: "Gama Top Premium", gama: "alta", hz: 120 },
  { id: "a55", marca: "Samsung", modelo: "Galaxy A55 5G", procesador: "Exynos 1480", gpu: "Xclipse 530", ram: "8GB / 12GB", pantalla: "Super AMOLED 120Hz", nivel: "Gama Media Alta", gama: "media", hz: 120 },
  { id: "a15", marca: "Samsung", modelo: "Galaxy A15 4G / 5G", procesador: "Helio G99 / Dimensity 6100+", gpu: "Mali-G57 MC2", ram: "4GB / 6GB / 8GB", pantalla: "Super AMOLED 90Hz", nivel: "Gama Entrada", gama: "baja", hz: 90 },
  { id: "infinixgt20", marca: "Infinix", modelo: "GT 20 Pro", procesador: "MediaTek Dimensity 8200 Ultimate", gpu: "Mali-G610 MC6", ram: "8GB / 12GB", pantalla: "AMOLED 144Hz Gamer", nivel: "Gama Gamer Media", gama: "alta", hz: 144 },
  { id: "infinixnote40", marca: "Infinix", modelo: "Note 40 Pro 4G", procesador: "MediaTek Helio G99 Ultimate", gpu: "Mali-G57 MC2", ram: "8GB / 12GB", pantalla: "AMOLED 120Hz", nivel: "Gama Media", gama: "media", hz: 120 },
  { id: "tecnocamon30", marca: "Tecno", modelo: "Camon 30 Pro 5G", procesador: "MediaTek Dimensity 8200 Ultimate", gpu: "Mali-G610 MC6", ram: "12GB", pantalla: "AMOLED 144Hz", nivel: "Gama Media Alta", gama: "media", hz: 144 },
  { id: "realmegt6", marca: "Realme", modelo: "GT 6 5G", procesador: "Snapdragon 8s Gen 3", gpu: "Adreno 735", ram: "12GB / 16GB", pantalla: "AMOLED 120Hz", nivel: "Gama Alta / Gamer", gama: "alta", hz: 120 },
  { id: "iphone15pm", marca: "Apple", modelo: "iPhone 15 Pro Max", procesador: "Apple A17 Pro (3nm)", gpu: "Apple GPU", ram: "8GB", pantalla: "OLED 120Hz", nivel: "Gama Top Premium", gama: "alta", hz: 120 }
];

function cargarDesplegableModelos() {
  const select = document.getElementById("selectModelo");
  if (!select) return;
  select.innerHTML = "";

  dispositivos.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d.id;
    opt.textContent = `${d.marca} - ${d.modelo}`;
    select.appendChild(opt);
  });

  autocompletarPorModelo();
}

function autocompletarPorModelo() {
  const selectVal = document.getElementById("selectModelo").value;
  const dev = dispositivos.find(d => d.id === selectVal);
  if (!dev) return;

  document.getElementById("gama").value = dev.gama;
  document.getElementById("hz").value = dev.hz.toString();
}

function seleccionarModeloYCalcular(idModelo) {
  const select = document.getElementById("selectModelo");
  if (select) {
    select.value = idModelo;
    autocompletarPorModelo();
    calcularSensibilidad();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function mostrarDispositivos(lista) {
  const contenedor = document.getElementById("listaDispositivos");
  if (!contenedor) return;
  contenedor.innerHTML = "";

  if (lista.length === 0) {
    contenedor.innerHTML = "<p style='color:#aaa; text-align:center; grid-column: 1/-1;'>No se encontraron modelos.</p>";
    return;
  }

  lista.forEach(item => {
    const card = document.createElement("div");
    card.className = "tarjeta-telefono";
    card.innerHTML = `
      <h3>${item.marca} ${item.modelo}</h3>
      <p><strong>Procesador:</strong> ${item.procesador}</p>
      <p><strong>Gráficos (GPU):</strong> ${item.gpu}</p>
      <p><strong>RAM:</strong> ${item.ram}</p>
      <p><strong>Pantalla:</strong> ${item.pantalla}</p>
      <span class="badge-nivel">${item.nivel}</span>
      <button class="btn-seleccionar" onclick="seleccionarModeloYCalcular('${item.id}')">🎯 Usar este celular</button>
    `;
    contenedor.appendChild(card);
  });
}

function buscarTelefono() {
  const input = document.getElementById("inputBuscar");
  if (!input) return;
  const texto = input.value.toLowerCase();
  const filtrados = dispositivos.filter(d => 
    d.marca.toLowerCase().includes(texto) ||
    d.modelo.toLowerCase().includes(texto) ||
    d.procesador.toLowerCase().includes(texto)
  );
  mostrarDispositivos(filtrados);
}

function calcularSensibilidad() {
  const selectVal = document.getElementById("selectModelo").value;
  const dev = dispositivos.find(d => d.id === selectVal);
  const gama = document.getElementById("gama").value;
  const hz = parseInt(document.getElementById("hz").value);
  const estilo = document.getElementById("estilo").value;

  let gen = 94, redDot = 91, m2x = 86, m4x = 82, awm = 45, cam = 60;
  let dpi = 500, boton = 45;
  let consejo = "";

  if (dev && dev.id === "note14pro4g") {
    gen = 96; redDot = 93; m2x = 88; m4x = 84;
    dpi = 520; boton = 46;
    consejo = "Xiaomi Redmi Note 14 Pro 4G (Helio G100): Calibrado para la tasa táctil de 120Hz. El procesador Helio G100 mantiene fluidez con botón al 46% levantando en forma de 'J'.";
  } else if (gama === "baja") {
    gen = 99; redDot = 98; m2x = 95; m4x = 92;
    dpi = 580; boton = 52;
    consejo = "Sensibilidad alta para compensar respuesta táctil en gama baja.";
  } else if (gama === "media") {
    gen = (hz >= 120) ? 94 : 97;
    redDot = (hz >= 120) ? 91 : 95;
    dpi = 530; boton = 45;
    consejo = "Ajuste equilibrado para procesador gama media de alto rendimiento.";
  } else {
    gen = 89; redDot = 86; m2x = 82; m4x = 78;
    dpi = 480; boton = 40;
    consejo = "Respuesta rápida sin sobrepasar el casco en dispositivos gama alta.";
  }

  if (estilo === "onetap") {
    gen -= 2;
    boton -= 3;
    consejo += " [Modo Un Tiro: Arrastre limpio hacia arriba].";
  } else if (estilo === "smg") {
    gen += 2;
    redDot += 3;
    consejo += " [Modo SMG: Ráfaga continua y control de dispersión].";
  }

  document.getElementById("tituloModeloRes").innerText = dev ? `Configuración para ${dev.modelo}` : "Configuración Recomendada";
  document.getElementById("resGen").innerText = gen;
  document.getElementById("resRedDot").innerText = redDot;
  document.getElementById("res2x").innerText = m2x;
  document.getElementById("res4x").innerText = m4x;
  document.getElementById("resAwm").innerText = awm;
  document.getElementById("resCam").innerText = cam;
  document.getElementById("resDpi").innerText = dpi + " DPI";
  document.getElementById("resBoton").innerText = boton + "%";
  document.getElementById("resConsejo").innerText = consejo;

  document.getElementById("resultadoSens").style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  cargarDesplegableModelos();
  mostrarDispositivos(dispositivos);
});
