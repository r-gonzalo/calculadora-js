const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonNumero = document.querySelectorAll('.numero');
const botonOperador = document.querySelectorAll('.operador');

const display = new Display(displayValorActual,  displayValorAnterior);

botonNumero.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});
