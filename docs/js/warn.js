document.addEventListener('DOMContentLoaded', function() {
    
    // VARIÁVEIS DE CONTROLE
    const MOSTRAR_AVISO = true;           // true = mostra a barra, false = esconde
    const COR_VERMELHA = false;            // true = fundo vermelho, false = fundo verde
    
    if (MOSTRAR_AVISO) {
        const barraAviso = document.createElement('div');
       
        barraAviso.textContent = 'HyLauncher is back online! Please update your version to continue enjoying it.';
       
        // Define a cor com base na variável
        barraAviso.style.backgroundColor = COR_VERMELHA ? '#d32f2f' : '#388e3c';
        
        barraAviso.style.position = 'fixed';
        barraAviso.style.top = '0';
        barraAviso.style.left = '0';
        barraAviso.style.width = '100%';
        barraAviso.style.color = 'white';
        barraAviso.style.textAlign = 'center';
        barraAviso.style.padding = '12px 20px';
        barraAviso.style.fontSize = '14px';
        barraAviso.style.fontWeight = 'bold';
        barraAviso.style.zIndex = '9999';
        barraAviso.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        barraAviso.style.fontFamily = 'Inter, sans-serif';
       
        document.body.prepend(barraAviso);
    }
});