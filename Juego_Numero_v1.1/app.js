/* Reducir variables para cambiar texto a la funcion elementoTexto
let titulo = document.querySelector('#titulo');
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector('p')
parrafo.innerHTML = 'Indica un numero del 1-10'; */
let numeroSecreto = 0;
let intentos = 0;
let maxIntento = 0;
let listaNumerosSorteados = [];

// cambiar texto de elemento 
function elementoTexto(elemento,texto) {
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = (texto);
        return;
}


// verificar intento de usuario
function verificarIntento() {
        let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

        if (numeroUsuario === numeroSecreto) {
            elementoTexto('#titulo', 'Eres el Ganador!');
            elementoTexto('#parrafo_principal', `Encontraste el numero secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
            elementoTexto('#intentoUsuario', 'GAME OVER!');
            botonEnableDisable('#reiniciar' ,'#intentoUsuario')
            } else { 
            //el usuario no acerto.    
            if (numeroUsuario > numeroSecreto) {
                elementoTexto('#parrafo_principal', `el numero secreto es menor a ${numeroUsuario}`);
            } 
            else { elementoTexto('#parrafo_principal', `el numero secreto es mayor a ${numeroUsuario}`);
        } intentos++;
        limpiarCaja();
        intentosMaximos();
        }
        return;
}


// funcion que habilita el boton 1 y desabilita boton 2
function botonEnableDisable (habilitar, desabilitar){
    document.querySelector(habilitar).removeAttribute('disabled');
    document.querySelector(desabilitar).setAttribute('disabled', 'true');
}


// intentos maximos, muestra intentos restantes
function intentosMaximos () {
        maxIntento--;
        if (maxIntento === 0) {
            elementoTexto('#intentoUsuario', 'GAME OVER!');
            elementoTexto('#titulo', 'Perdiste');
            elementoTexto('#parrafo_principal', `El numero secreto era ${numeroSecreto}`);
            elementoTexto('#parrafo_bot', 'No te quedan mas intentos. :(')
            botonEnableDisable('#reiniciar' ,'#intentoUsuario')
            
            
        
        } else {
            elementoTexto('#parrafo_bot', `${maxIntento} ${(maxIntento === 1) ? 'intento restante.' : 'intentos restantes.'} `);
            //log consola
            console.log(`limite intento: ${maxIntento}`)
        }
}


//limpiar numero de caja
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

//generar un numero random de 1-10
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    // verifica si el numero generado esta incluido en la lista.
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    
}

//Inicializar parametros para Nuevo Juego
function inicializarJuego() {
    elementoTexto('#titulo', 'Juego del numero secreto');
    elementoTexto('#parrafo_principal','Indica un numero del 1-10' );
    elementoTexto('#intentoUsuario', 'Intentar');
    numeroSecreto = generarNumeroSecreto();
    // log consola
    console.log(`Nro Secreto: ${numeroSecreto}`);
    console.log(`lista: ${listaNumerosSorteados}`);
    intentos = 1;
    maxIntento = 6;
    botonEnableDisable('#intentoUsuario', '#reiniciar');
    elementoTexto('#parrafo_bot', `${maxIntento} intentos restantes.`);
}

function reiniciarJuego() {
    limpiarCaja();
    inicializarJuego();
    return;
}

inicializarJuego();
/*
Desafíos: curso 2, clase 2

    Crear una función que muestre "¡Hola, mundo!" en la consola.
    Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
    Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
    Crear una función que reciba tres números como parámetros y devuelva su promedio.
    Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
    Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo. */

    /**
     * Desafíos: curso 2, clase 3

    Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
    Crea una función que calcule el valor del factorial de un número pasado como parámetro.
    Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
    Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
    Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
    Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro. 
     **/

    /** 
     * Desafíos: curso 2, clase 4

    Crea una lista vacía llamada "listaGenerica".
    Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
    Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
    Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
    Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
    Crea una función que calcule el promedio de los elementos en una lista de números.
    Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
    Crea una función que devuelva la suma de todos los elementos en una lista.
    Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
    Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
    Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.**/