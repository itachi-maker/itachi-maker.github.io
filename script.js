// Lógica para copiar bloques de código
function copyCode(button) {
    const codeBlock = button.parentElement.nextElementSibling.querySelector('code');
    if (codeBlock) {
        navigator.clipboard.writeText(codeBlock.innerText).then(() => {
            button.innerText = '¡Copiado!';
            button.classList.add('copied');
            setTimeout(() => {
                button.innerText = 'Copiar';
                button.classList.remove('copied');
            }, 2000);
        });
    }
}

// Banner de Consentimiento de Cookies (Requisito Google AdSense / GDPR)
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('cookie_consent')) {
        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.id = 'cookieBanner';
        banner.innerHTML = `
            <p>Utilizamos cookies propias y de terceros (incluyendo Google AdSense) para analizar el tráfico y personalizar contenido y anuncios. Consulta nuestra <a href="privacidad.html">Política de Privacidad</a>.</p>
            <div class="cookie-btns">
                <button class="btn-cookie-accept" onclick="acceptCookies()">Aceptar Cookies</button>
                <button class="btn-cookie-decline" onclick="declineCookies()">Rechazar</button>
            </div>
        `;
        document.body.appendChild(banner);
    }
});

function acceptCookies() {
    localStorage.setItem('cookie_consent', 'accepted');
    const banner = document.getElementById('cookieBanner');
    if (banner) banner.remove();
}

function declineCookies() {
    localStorage.setItem('cookie_consent', 'declined');
    const banner = document.getElementById('cookieBanner');
    if (banner) banner.remove();
}
