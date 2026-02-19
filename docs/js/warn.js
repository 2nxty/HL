// HyLauncher is back online! Please update your version to continue enjoying it. 

document.addEventListener('DOMContentLoaded', function() {
    
    // ────────────────────────────────────────────────
    //          CONFIGURAÇÕES
    // ────────────────────────────────────────────────
    
    const MOSTRAR_BANNER = true;
    
    const TEXTO_BANNER   = "HyLauncher is back online! Please update your version to continue enjoying it.";
    
    const COR_BORDA_VERMELHA = '#ef4444';
    const COR_BORDA_AMARELA  = '#f59e0b';
    const COR_BORDA_VERDE    = '#10b981';
    
    const COR_BORDA      = COR_BORDA_VERDE;   // ← escolha aqui
    
    const LINK_URL       = '#download';   // "" = sem link   ou   "https://exemplo.com"
    
    // ────────────────────────────────────────────────

    const banner = document.querySelector('.update-banner');
    
    if (!banner) {
        console.warn('[UpdateBanner] Elemento .update-banner não encontrado');
        return;
    }

    if (!MOSTRAR_BANNER) {
        return; // mantém display: none do HTML/CSS
    }

    // 1. Preserva o ícone (se existir) e limpa o resto
    const icon = banner.querySelector('i.fa-solid.fa-circle-info');
    banner.innerHTML = ''; // limpa tudo
    
    if (icon) {
        banner.appendChild(icon);
        banner.appendChild(document.createTextNode(' ')); // espaço
    }

    // 2. Adiciona o texto
    const textoNode = document.createTextNode(TEXTO_BANNER);
    banner.appendChild(textoNode);

    // 3. Se tiver URL → transforma em link de verdade
    if (LINK_URL && LINK_URL.trim() !== '') {
        const a = document.createElement('a');
        a.href = LINK_URL;
        a.style.color = 'inherit';
        a.style.textDecoration = 'none';
        
        // Move todo conteúdo para dentro do <a>
        while (banner.firstChild) {
            a.appendChild(banner.firstChild);
        }
        banner.appendChild(a);
        
        banner.style.cursor = 'pointer';
    } else {
        banner.style.cursor = 'default';
    }

    // 4. Cor da borda
    if (icon) {
        icon.style.color = COR_BORDA;
    }
    banner.style.borderColor = COR_BORDA;

    // 5. Torna visível (substitui o display: none)
    banner.style.display = 'flex';

    console.log('[UpdateBanner] Banner ativado com texto:', TEXTO_BANNER);
});