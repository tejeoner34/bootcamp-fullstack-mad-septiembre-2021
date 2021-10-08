// FUNCIÓN MULTIPLICACIÓN 

function miMultiplicacion(a, b) {
    return a * b;

}
console.log(miMultiplicacion(3, 5));

//Con arrow function

const miMultiplicacion = (a, b) => { return a * b };





//FUNCIÓN CONCATENAR

function miConcatenacion(a, b) {
    return a + b
}

let userInput = 'hola';

console.log(miConcatenacion(userInput, 'adios'));


// con arrow function 
const miConcatenacion = (a, b) => { return a + b };

console.log(miConcatenacion(userInput, 'adios'));







// FUNCIÓN COMPARAR BOOLEANS


const userInput = prompt('escribe true o false');
const userInputParse = userInput.toLowerCase() === 'true';

const userInput2 = prompt('escribe true o false');
const userInput2Parse = userInput.toLowerCase() === 'true';

function comparador(userInputParse, userInput2Parse) {

    if (userInputParse === true && userInput2Parse === true) {
        result = true;
    } else {
        result = false;
    }

    return result;
}

comparador(userInput2Parse, userInputParse);


// con arrow function 

const userInput = prompt('escribe true o false');
const userInputParse = userInput.toLowerCase() === 'true';

const userInput2 = prompt('escribe true o false');
const userInput2Parse = userInput.toLowerCase() === 'true';

const comparador = (a, b) => {
    if (a === true && b === true) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

comparador(userInputParse, userInput2Parse);


// const userInput = prompt('escribe true o false');
// const userInputParse = userInput.toLowerCase() === 'true';

// const userInput2 = prompt('escribe true o false');
// const userInput2Parse = userInput.toLowerCase() === 'true';

// function comparador(userInputParse, userInput2Parse){
//     return userInputParse === true &&  userInput2Parse === true;

// }

// comparador(userInput2Parse,userInputParse);


// CREADOR DE ASTERISCOS

let number = '';
let symbol = '';
function asteriscos(number) {
    for (i = 0; i < number; i++) {
        symbol += '*';
    }
    return symbol
}

console.log(asteriscos(4));





// FUNCIÓN MULTIPLICADOR SIN USAR *

function multiplicador(c, d) {
    var r = 0;
    for (var i = 1; i <= d; i++)
        r = r + c;
    return r;
}

console.log(multiplicador(4, 5));






// FUNCIÓN INVERTIR 

const invertirCadena = cadena => cadena.split("").reverse().join("");

console.log(invertirCadena('adios'));


const invertir = input => {
    let nuevoInput = "";
    for (let i = input.length - 1; i >= 0; i--) {
        nuevoInput += input[i];
    }
    return nuevoInput;
}
console.log(invertir('hola'));






// FUNcION CAPICUA 

const capicua = input => {
    let nuevoInput = "";
    for (let i = input.length - 1; i >= 0; i--) {
        nuevoInput += input[i];
    }
    let result = false;
    if (nuevoInput === input) {
        result = true;
    }
    return result;
}
console.log(capicua('2222'));







// FUNCIÓN TIPO DE DATO

const input = ''; 

function datatype (input){
    let inputType = typeof input
    return inputType;
}

console.log(datatype(true));





// CALCULAR PERIMETRO Y AREA 

// RECTÁNGULO

function rectangulo (a, b) {
    let area = a*b;
    let perimetro = a*2 + b*2;
    let result= `área: ${area}, perímetro ${perimetro}`
    return result;
}

rectangulo(4,2);

//con arrow

const rectangulo = (a, b) => {
    let area = a*b;
    let perimetro = a*2 + b*2;
    let result= `área: ${area}, perímetro ${perimetro}`
    return result;
}

rectangulo(4,2);



// CUADRADO 

const cuadrado = (a) =>{
    let area = a*a;
    let perimetro = area
    let result= `área: ${area}, perímetro ${perimetro}`
    return result;
}

cuadrado(4)

//TRIÁNGULO 


const triangulo = (a, b, c, altura) => {
    let area = a*altura/2;
    let perimetro = a + b + c;
    let result= `área: ${area}, perímetro ${perimetro}`
    return result;
}

triangulo(12,16.16,16.16,15);


// CÍRCULO 

const circulo = (r) => {
    let area = 3.1416*Math.pow(r,2);
    let perimetro = 2*3.1416*r;
    let result= `área: ${area}, perímetro ${perimetro}`
    return result;
}

circulo(10);





// CALCULADORA

//suma

const suma = (a,b) => {
    return a + b;
}

suma(4,6);


// resta 

const resta = (a,b) => {
    return a - b;
}

resta(4,6);


//división

const división = (a,b) => {
    return a/b;
}

división(4,6);



//multiplicación 

const multiplicacion = (a,b) => {
    return a * b;
}

multiplicacion(4,6);




// CALCULADORA 

let opcion = prompt('elige: sumar, restar, multiplicar o dividir');
// if(opcion !== 'sumar' || opcion !== 'restar' || opcion !== 'dividir'  || opcion !== 'multiplicar'){
//     alert('carga otra vez la página y pon un valor correcto');  // tengo que termiinar este if. hay que decir que sea igual a los strings
// }else {

switch (opcion) {

    case 'sumar' : {
        let input1 = parseInt(prompt('primer número'));
        let input2 = parseInt(prompt('segundo número'));
        document.write(`<h1>La suma de ${input1} + ${input2} es igual a ${suma(input1,input2)}`);
        break;
    }
    case 'restar' : {
        let input1 = parseInt(prompt('primer número'));
        let input2 = parseInt(prompt('segundo número'));
        document.write(`<h1>La resta de ${input1} - ${input2} es igual a ${resta(input1,input2)}`);
        break;
    }
    case 'dividir' : {
        let input1 = parseInt(prompt('primer número'));
        let input2 = parseInt(prompt('segundo número'));
        document.write(`<h1>La división de ${input1} / ${input2} es igual a ${división(input1,input2)}`);
        break;
    }
    case 'multiplicar' : {
        let input1 = parseInt(prompt('primer número'));
        let input2 = parseInt(prompt('segundo número'));
        document.write(`<h1>La multiplicación de ${input1} * ${input2} es igual a ${multiplicacion(input1,input2)}`);
        break;
    }
}






//  FUNCION ES DOMINIO??

let url = '';
const esUrl = (url) => {
   return url.includes('github.com') === true;
}

console.log(esUrl(`https://github.com/`));




//


