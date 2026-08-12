const dispositivos = [
  // XIAOMI / REDMI / POCO
  { marca: "Xiaomi", modelo: "Redmi Note 14 Pro 4G", procesador: "MediaTek Helio G100 (6nm)", gpu: "Mali-G57 MC2", ram: "8GB / 12GB", pantalla: "AMOLED 120Hz", nivel: "Gama Media Alto" },
  { marca: "Xiaomi", modelo: "Redmi Note 14 Pro+ 5G", procesador: "Snapdragon 7s Gen 3", gpu: "Adreno 710", ram: "12GB / 16GB", pantalla: "AMOLED 120Hz 1.5K", nivel: "Gama Media Alta" },
  { marca: "Xiaomi", modelo: "Redmi Note 13 Pro 5G", procesador: "Snapdragon 7s Gen 2", gpu: "Adreno 710", ram: "8GB / 12GB", pantalla: "AMOLED 120Hz", nivel: "Gama Media" },
  { marca: "Xiaomi", modelo: "Redmi Note 13 4G", procesador: "Snapdragon 685", gpu: "Adreno 610", ram: "6GB / 8GB", pantalla: "AMOLED 120Hz", nivel: "Gama Media Base" },
  { marca: "Xiaomi", modelo: "Redmi Note 12 4G", procesador: "Snapdragon 685", gpu: "Adreno 610", ram: "4GB / 6GB / 8GB", pantalla: "AMOLED 120Hz", nivel: "Gama Entrada / Media" },
  { marca: "Xiaomi", modelo: "Redmi 13C / 12 4G", procesador: "MediaTek Helio G85", gpu: "Mali-G52 MC2", ram: "4GB / 6GB / 8GB", pantalla: "IPS LCD 90Hz", nivel: "Gama Entrada" },
  { marca: "POCO", modelo: "POCO X6 Pro 5G", procesador: "MediaTek Dimensity 8300 Ultra", gpu: "Mali-G615 MC6", ram: "8GB / 12GB", pantalla: "AMOLED 120Hz 1.5K", nivel: "Gama Gamer / Alta" },
  { marca: "POCO", modelo: "POCO F6 Pro", procesador: "Snapdragon 8 Gen 2", gpu: "Adreno 740", ram: "12GB / 16GB", pantalla: "AMOLED 120Hz 2K", nivel: "Gama Alta VIP" },
  { marca: "POCO", modelo: "POCO M6 Pro 4G", procesador: "MediaTek Helio G99 Ultra", gpu: "Mali-G57 MC2", ram: "8GB / 12GB", pantalla: "AMOLED 120Hz", nivel: "Gama Media" },

  // SAMSUNG
  { marca: "Samsung", modelo: "Galaxy S24 Ultra", procesador: "Snapdragon 8 Gen 3 for Galaxy", gpu: "Adreno 750", ram: "12GB", pantalla: "Dynamic AMOLED 2X 120Hz", nivel: "Gama Top Premium" },
  { marca: "Samsung", modelo: "Galaxy S23 FE", procesador: "Exynos 2200 / Snapdragon 8 Gen 1", gpu: "Xclipse 920", ram: "8GB", pantalla: "Dynamic AMOLED 2X 120Hz", nivel: "Gama Alta Base" },
  { marca: "Samsung", modelo: "Galaxy A55 5G", procesador: "Exynos 1480", gpu: "Xclipse 530", ram: "8GB / 12GB", pantalla: "Super AMOLED 120Hz", nivel: "Gama Media Alta" },
  { marca: "Samsung", modelo: "Galaxy A35 5G", procesador: "Exynos 1380", gpu: "Mali-G68 MP5", ram: "6GB / 8GB", pantalla: "Super AMOLED 120Hz", nivel: "Gama Media" },
  { marca: "Samsung", modelo: "Galaxy A15 4G / 5G", procesador: "Helio G99 / Dimensity 6100+", gpu: "Mali-G57 MC2", ram: "4GB / 6GB / 8GB", pantalla: "Super AMOLED 90Hz", nivel: "Gama Entrada" },
  { marca: "Samsung", modelo: "Galaxy A05 / A05s", procesador: "MediaTek Helio G85 / Snapdragon 680", gpu: "Mali-G52 / Adreno 610", ram: "4GB / 6GB", pantalla: "PLS LCD 90Hz", nivel: "Gama Entrada Base" },

  // INFINIX / TECNO / REALME
  { marca: "Infinix", modelo: "GT 20 Pro", procesador: "MediaTek Dimensity 8200 Ultimate", gpu: "Mali-G610 MC6", ram: "8GB / 12GB", pantalla: "AMOLED 144Hz Gamer", nivel: "Gama Gamer Media" },
  { marca: "Infinix", modelo: "Note 40 Pro 4G", procesador: "MediaTek Helio G99 Ultimate", gpu: "Mali-G57 MC2", ram: "8GB / 12GB", pantalla: "AMOLED 120Hz", nivel: "Gama Media" },
  { marca: "Infinix", modelo: "Hot 40 Pro", procesador: "MediaTek Helio G99", gpu: "Mali-G57 MC2", ram: "8GB", pantalla: "IPS LCD 120Hz", nivel: "Gama Media Base" },
  { marca: "Tecno", modelo: "Camon 30 Pro 5G", procesador: "MediaTek Dimensity 8200 Ultimate", gpu: "Mali-G610 MC6", ram: "12GB", pantalla: "AMOLED 144Hz", nivel: "Gama Media Alta" },
  { marca: "Tecno", modelo: "Pova 6 Pro 5G", procesador: "MediaTek Dimensity 6080", gpu: "Mali-G57 MC2", ram: "8GB / 12GB", pantalla: "AMOLED 120Hz", nivel: "Gama Media Gamer" },
  { marca: "Realme", modelo: "GT 6 5G", procesador: "Snapdragon 8s Gen 3", gpu: "Adreno 735", ram: "12GB / 16GB", pantalla: "AMOLED 120Hz", nivel: "Gama Alta / Gamer" },
  { marca: "Realme", modelo: "12 Pro+ 5G", procesador: "Snapdragon 7s Gen 2", gpu: "Adreno 710", ram: "8GB / 12GB", pantalla: "AMOLED 120Hz Curva", nivel: "Gama Media Alta" },
  { marca: "Realme", modelo: "C67 4G", procesador: "Snapdragon 685", gpu: "Adreno 610", ram: "6GB / 8GB", pantalla: "IPS LCD 90Hz", nivel: "Gama Entrada" },

  // HONOR / MOTOROLA / APPLE
  { marca: "Honor", modelo: "Magic 6 Pro", procesador: "Snapdragon 8 Gen 3", gpu: "Adreno 750", ram: "12GB / 16GB", pantalla: "OLED 120Hz LTPO", nivel: "Gama Top Premium" },
  { marca: "Honor", modelo: "Honor 200 Lite", procesador: "MediaTek Dimensity 6080", gpu: "Mali-G57 MC2", ram: "8GB", pantalla: "AMOLED 90Hz", nivel: "Gama Media" },
  { marca: "Motorola", modelo: "Edge 50 Pro", procesador: "Snapdragon 7 Gen 3", gpu: "Adreno 720", ram: "8GB / 12GB", pantalla: "P-OLED 144Hz", nivel: "Gama Media Alta" },
  { marca: "Motorola", modelo: "Moto G84 5G", procesador: "Snapdragon 695 5G", gpu: "Adreno 619", ram: "8GB / 12GB", pantalla: "P-OLED 120Hz", nivel: "Gama Media" },
  { marca: "Apple", modelo: "iPhone 15 Pro Max", procesador: "Apple A17 Pro (3nm)", gpu: "Apple GPU (6 núcleos)", ram: "8GB", pantalla: "Super Retina XDR OLED 120Hz", nivel: "Gama Top Premium" },
  { marca: "Apple", modelo: "iPhone 15 / 15 Plus", procesador: "Apple A16 Bionic", gpu: "Apple GPU (5 núcleos)", ram: "6GB", pantalla: "Super Retina XDR OLED", nivel: "Gama Alta" },
  { marca: "Apple", modelo: "iPhone 13 / 14", procesador: "Apple A15 Bionic", gpu: "Apple GPU (4/5 núcleos)", ram: "4GB / 6GB", pantalla: "Super Retina XDR OLED", nivel: "Gama Alta Base" }
];

function mostrarDispositivos(lista) {
  const contenedor = document.getElementById("listaDispositivos");
  if (!contenedor) return;
  contenedor.innerHTML = "";

  if (lista.length === 0) {
    contenedor.innerHTML = "<p style='color:#aaa; text-align:center;'>No se encontraron modelos coincidentes.</p>";
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

document.addEventListener("DOMContentLoaded", () => {
  mostrarDispositivos(dispositivos);
});
