document.addEventListener('DOMContentLoaded', function() {
    
    const MOSTRAR_AVISO = true;
    
    if (MOSTRAR_AVISO) {
        const barraAviso = document.createElement('div');
       
        barraAviso.textContent = 'HyLauncher is temporarily unavailable. We are aware of the issue and are working on a solution.';
       
        barraAviso.style.position = 'fixed';
        barraAviso.style.top = '0';
        barraAviso.style.left = '0';
        barraAviso.style.width = '100%';
        barraAviso.style.backgroundColor = '#d32f2f';
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