// Manejador de eventos para el botón "Saludar"
document.getElementById('saludar-btn').addEventListener('click', function(event) {
    event.stopPropagation();  // Detiene la propagación del evento al div
    alert('Hola!');
});

// Manejador de eventos para el div
document.getElementById('container').addEventListener('click', function() {
    alert('Hola! Soy el div');
});
