let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El número es menor')
    } else if (numeroDeUsuario < numeroSecreto) {
        asignarTextoElemento('p', 'El número es mayor')
    }
    intentos++;
    limpiarCaja();
}

function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Ingrese un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

