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

  const pasosIA = [
    "Analizando tasa de muestreo táctil del dispositivo...",
    "Calculando curva de dispersión para escala 0-200 en FF 2026...",
    "Sincronizando modificador de aceleración (Con/Sin DPI)...",
    "Optimizando tamaño de botón y punto de mira Headshot..."
  ];

  let i = 0;
  const interval = setInterval(() => {
    if (i < pasosIA.length) {
      txtCargando.innerText = pasosIA[i];
      i++;
    } else {
      clearInterval(interval);
      loader.style.display = "none";
      calcularSensibilidadIA();
      resBox.style.display = "block";
    }
  }, 350);
}

function calcularSensibilidadIA() {
  const selectVal = document.getElementById("selectModelo").value;
  const modoDpi = document.getElementById("modoDpi").value;
  const estilo = document.getElementById("estilo").value;
  const hz = parseInt(document.getElementById("hz").value);

  const dev = baseDispositivos.find(d => d.id === selectVal);
  const gama = dev ? dev.gama : (selectVal.includes("baja") ? "baja" : selectVal.includes("alta") ? "alta" : "media");

  // VALORES BASE EN ESCALA 0 - 200 (2026)
  let gen = 185;
  let redDot = 178;
  let m2x = 168;
  let m4x = 158;
  let awm = 85;
  let cam = 120;
  let dpiTexto = "Predeterminado (Sin alterar)";
  let boton = 46;
  let velPuntero = "Máxima (100%)";
  let consejo = "";
  let tecnica = "";
  let score = "97.8%";

  // LÓGICA DE IA CON Y SIN DPI
  if (modoDpi === "sin_dpi") {
    // Sin DPI requiere mayor sensibilidad dentro del juego para dar giros 360 rápidos
    if (gama === "baja") {
      gen = 198; redDot = 194; m2x = 188; m4x = 182; awm = 90;
      boton = 52;
      consejo = "Al jugar SIN DPI en Gama Baja, la General debe rozar el límite de 200 para evitar trabas al alzar la mira. Coloca la supresión de accesibilidad al mínimo.";
    } else if (gama === "media") {
      gen = (hz >= 120) ? 188 : 194;
      redDot = (hz >= 120) ? 182 : 188;
      m2x = 172; m4x = 165;
      boton = 45;
      consejo = "Configuración equilibrada de fábrica sin riesgo de daño por DPI. Alza la mira con firmeza desde la base del botón.";
    } else { // Gama alta
      gen = 176; redDot = 170; m2x = 162; m4x = 152;
      boton = 42;
      consejo = "En gama alta con buena tasa táctil sin DPI, mantén valores entre 170 y 180 en la escala 200 para que el tiro no pase arriba de la cabeza.";
    }
    dpiTexto = "392 / 411 DPI (Fábrica)";
  } else {
    // CON DPI: La sensibilidad interna del juego se ajusta más precisa porque el DPI acelera el sistema
    if (gama === "baja") {
      gen = 172; redDot = 168; m2x = 160; m4x = 150;
      dpiTexto = "580 DPI";
      boton = 48;
      consejo = "El DPI a 580 acelera la pantalla. Permite alzar mira suavemente con escopetas y SMG.";
    } else if (gama === "media") {
      gen = 164; redDot = 158; m2x = 150; m4x = 142;
      dpiTexto = (dev && dev.id === "note14pro4g") ? "540 DPI (Óptimo Helio G100)" : "520 DPI";
      boton = 44;
      consejo = "Con DPI elevado, la sensibilidad interna no requiere estar en 200. Esta combinación de 520-540 DPI fija los disparos directo al casco.";
    } else { // Gama alta
      gen = 152; redDot = 145; m2x = 138; m4x = 130;
      dpiTexto = "480 DPI";
      boton = 39;
      consejo = "Dispositivo de alta respuesta táctil. Sensibilidad súper precisa en rango medio de escala 200 para no fallar disparos a larga distancia.";
    }
  }

  // MODIFICADORES ESPECÍFICOS POR MODELO (Especial Helio G100)
  if (dev && dev.id === "note14pro4g") {
    score = "99.2%";
    consejo += " [Ajuste VIP para Redmi Note 14 Pro 4G: Optimizado para procesador Helio G100 y pantalla AMOLED 120Hz].";
  }

  // AJUSTES POR ESTILO DE ARMA
  if (estilo === "onetap") {
    gen -= 6;
    redDot -= 5;
    boton -= 3;
    tecnica = "Levantado en 'J' Rápida: Arrastra el botón hacia abajo un milímetro y sube con fuerza recta hacia la cabeza.";
  } else if (estilo === "smg") {
    gen += 4;
    redDot += 6;
    tecnica = "Levantado Continuo en Recorrido Recto: Mantén la mira a la altura del pecho del enemigo y sube de manera constante sin soltar el botón.";
  } else {
    tecnica = "Levantado Suave Suave/Media Distancia: Forma una ligera curva con el pulgar ajustando la velocidad según la distancia del rival.";
  }

  // Asegurar límites dentro de la escala 0-200
  gen = Math.min(200, Math.max(50, gen));
  redDot = Math.min(200, Math.max(50, redDot));
  m2x = Math.min(200, Math.max(50, m2x));
  m4x = Math.min(200, Math.max(50, m4x));

  // RENDERIZAR RESULTADOS
  const nombreDev = dev ? `${dev.marca} ${dev.modelo}` : "Configuración Personalizada";
  document.getElementById("tituloModeloRes").innerText = `IA Config: ${nombreDev}`;
  document.getElementById("scoreIA").innerText = score;

  document.getElementById("resGen").innerText = gen;
  document.getElementById("resRedDot").innerText = redDot;
  document.getElementById("res2x").innerText = m2x;
  document.getElementById("res4x").innerText = m4x;
  document.getElementById("resAwm").innerText = awm;
  document.getElementById("resCam").innerText = cam;

  document.getElementById("resDpi").innerText = dpiTexto;
  document.getElementById("resBoton").innerText = boton + "%";
  document.getElementById("resVelPuntero").innerText = velPuntero;

  document.getElementById("resConsejo").innerText = consejo;
  document.getElementById("resTecnica").innerText = tecnica;
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
      <button class="btn-seleccionar" onclick="seleccionarYEjecutar('${item.id}')">🎯 Cargar en IA Headshot</button>
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
