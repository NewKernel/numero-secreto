function regresarAIndex() {
    // Obtener la URL actual del navegador
    var urlActual = window.location.href;
    
    // Verificar si la URL actual termina con 'index.html'
    if (urlActual.endsWith('/index.html')) {
        // Si estamos en 'index.html', simplemente regresamos una página en el historial
        window.history.back();
    } else {
        // Si no estamos en 'index.html', redireccionamos explícitamente a 'index.html'
        window.location.href = 'index.html';
    }
}
