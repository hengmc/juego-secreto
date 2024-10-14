let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maximoIntentos = 3;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    // El Usuario acertó
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1?'vez':'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
         
        //El usuario no acertó.
    } else{
        // Cuando llega a los maximos intentos
        if(intentos === maximoIntentos){
            asignarTextoElemento('p',`Utilizo el maximo de intentos(${maximoIntentos})`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        else if( numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{ 
            asignarTextoElemento('p','El número secreto es mayor');
        }intentos++;
        limpiarCaja();

    }
    return;
}

 // Limpiar Caja de Texto
function limpiarCaja(){
   document.querySelector('#valorUsuario').value ='';
}

function generarNumeroSecreto() {
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p',`Ya se sortearon todos los numeros de la lista`);
    }else{

    //Si el numero generado esta incluido en la lista 
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }    
    }
}

function condicionesInicial(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego(){
    //Limpiar la Caja
    limpiarCaja();

    //Indicar mensaje de intervalo de numeros
    //Generar el Numero Aleatorio
    //Inicializar el numero intentos.
    //Deshabilitar el boton de nuevo juego
    condicionesInicial();
    document.querySelector('#reiniciar').setAttribute('disabled',true);

}

condicionesInicial();

let listaGenerica =[];
console.log(listaGenerica);

let lenguajesDeProgramacion =['JavaScript', 'C', 'C++', 'Kotlin','Python'];
lenguajesDeProgramacion.push('Java', 'Ruby','GoLang');
console.log(lenguajesDeProgramacion);

function mostrarElementosLista(){
    for(let i=lenguajesDeProgramacion.length; i>=0; i--){
        console.log(lenguajesDeProgramacion[i]);
    }
}
mostrarElementosLista();

let cantidadMaximaNumeros = 3;
let listaDeNumeros = [];
let listaDeNumerosDos = [];

function generarNumerosLista(){

    for( let i=0;i< cantidadMaximaNumeros;i++){
        listaDeNumeros.push(Math.floor(Math.random()*10+1));
        listaDeNumerosDos.push(Math.floor(Math.random()*10+1));
        console.log(listaDeNumeros);
        console.log(listaDeNumerosDos);
    }
}


function calcularPromedio(){
    let suma = 0;
    let promedio = 0.0;
    for( let i=0; i<listaDeNumeros.length; i++ ){
        suma = suma+listaDeNumeros[i];
    }
    promedio = suma /listaDeNumeros.length;
    console.log(`La suma de los numeros de la lista es: ${suma}`);
    console.log(`El promedio de los numeros de la lista es: ${promedio}`);
}

generarNumerosLista();
calcularPromedio();

function calcularNumeroMenorYMayor(){

    let numeroMenor = listaDeNumeros[0];
    let numeroMayor = listaDeNumeros[0];
    //Leer la lista de numeros
    //Comparar si el numero es menor o mayor
    for( let i=0; i<listaDeNumeros.length; i++){
        if(numeroMayor < listaDeNumeros[i]){
            numeroMayor = listaDeNumeros[i];
        }
        if(numeroMenor > listaDeNumeros[i]){
            numeroMenor = listaDeNumeros[i];
        }
    }  
    //Imprimir los numeros mayores
    console.log(`El numero mayor de la lista es el : ${numeroMayor}`);
    //Imprimir los numeros menores
    console.log(`El numero menor de la lista es el : ${numeroMenor}`);

}

calcularNumeroMenorYMayor();

function calcularSuma(){
    let suma = 0;
    for( let i=0; i<listaDeNumeros.length; i++ ){
        suma = suma+listaDeNumeros[i];
    }
    console.log(`La suma de los numeros de la lista es: ${suma}`);
    
}

calcularSuma();

function devuelvePosicion(a){
    console.log(`La posicion del elemento consultado en la lista es: ${listaDeNumeros.indexOf(a)}`);

}

devuelvePosicion(8)

function sumaDeListas(lista1, lista2){
    listaSumada =[];

    for (let i=0; i < lista1.length;i++){
        listaSumada[i]=lista1[i]+lista2[i];
    }console.log(`La Nueva Lista con la suma de las 2 Listas es: [${listaSumada}]`);
}

sumaDeListas(listaDeNumeros,listaDeNumerosDos)

function cuadradoDeListas(lista1){
    listaCuadrada =[];

    for (let i=0; i < lista1.length;i++){
        listaCuadrada[i]= Math.pow(lista1[i],2);
    }console.log(`La Nueva Lista con el cuadrado de la lista1 es: [${listaCuadrada}]`);
}

cuadradoDeListas(listaDeNumeros);
