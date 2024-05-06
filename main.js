document.addEventListener("DOMContentLoaded", function() {
    var elemento = document.documentElement; // Selecciona el elemento raíz de la página (puede ser el body o el html)
    
    if (elemento.requestFullscreen) {
        elemento.requestFullscreen(); // Solicitar pantalla completa
    } else if (elemento.mozRequestFullScreen) { // Firefox
        elemento.mozRequestFullScreen();
    } else if (elemento.webkitRequestFullscreen) { // Chrome, Safari e IE11
        elemento.webkitRequestFullscreen();
    } else if (elemento.msRequestFullscreen) { // IE/Edge
        elemento.msRequestFullscreen();
    }
});
