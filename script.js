document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
        const header = block.querySelector('.code-header');
        const code = block.querySelector('pre code');
        if (header && code) {
            const btn = document.createElement('button');
            btn.className = 'copy-btn';
            btn.innerHTML = '📋 Copiar';
            btn.addEventListener('click', () => {
                navigator.clipboard.writeText(code.innerText.trim()).then(() => {
                    btn.innerHTML = '✓ ¡Copiado!';
                    btn.classList.add('copied');
                    setTimeout(() => {
                        btn.innerHTML = '📋 Copiar';
                        btn.classList.remove('copied');
                    }, 2000);
                });
            });
            header.appendChild(btn);
        }
    });
});
