/*1.-Solicitar al usuario dos variables numéricas (usando prompt) y realizar su suma, resta multiplicación y division. Mostrar los resultados en pantalla, maquetando con flexbox debemos ver la operación ( los numeros y el operador ) y seguidos de un símbolo '=' el resultado.*/
// String
// let operandOne = prompt('Introduce un numero');
// let operandTwo=prompt('Introduce otro numero');
// // Conversión
// let convertOne= parseFloat(operandOne);
// let convertTwo =parseFloat(operandTwo);
// // operaciones
// let sumResult = convertOne+convertTwo;
// let restResult= convertOne-convertTwo;
// let multResult= convertOne*convertTwo;
// let divResult= convertOne/convertTwo;
// // Impresión en pantalla
// document.write(`<div class="operation__container">  <div class="operands__container">La suma de ${convertOne} y ${convertTwo} es: </div> <div class="result__container">${sumResult}</div></div>`);
// document.write(`<div class="operation__container">  <div class="operands__container">La resta de ${convertOne} y ${convertTwo} es: </div> <div class="result__container">${restResult}</div></div>`);
// document.write(`<div class="operation__container">  <div class="operands__container">La multiplicación de ${convertOne} y ${convertTwo} es: </div> <div class="result__container">${multResult}</div></div>`);
// document.write(`<div class="operation__container">  <div class="operands__container">La división de ${convertOne} y ${convertTwo} es: </div> <div class="result__container">${divResult}</div></div>`);

// -------------

// 2.-Solicitar al usuario dos variables de tipo string y mostrarlas concatenadas por pantalla.
// // Operandos
// let strOne = prompt('Introduce una palabra');
// let strTwo=prompt('Introduce otra palabra');
// // Concat
// let concatResult = strOne+strTwo;
// // Impresión en pantalla
// document.write(`<div class="concat__container">  <div class="str__container">Tu primera palabra ${strOne} y  tu segunda palabra${strTwo} forman: </div> <div class="result__container">${concatResult}</div></div>`);


// -------------

// 3.-Ejercicio que pida al usuario los grados Celsius (X) e imprima por pantalla sus correspondientes grados Farenheit del siguiente modo "X ºC son YºF"
// let celsius = prompt('Introduce un numero en la escala Celsius para convertir a Farenheit');
// let farenheit = (celsius*1.8000) + 32;
// document.write(`<div class="celsius__container"> ${celsius}ºC son ${farenheit}ºF`);
// -------------

// 4.-Imprimir la longitud del string resultante del ejercicio 2. (Este requiere investigación).
// let contactLength =concatResult.length;
// document.write(`<div class="concat__container--length"> Tu cantidad de caracteres en ${concatResult} es :${contactLength}`);

// 5.- Volver al ejercicio 1 y mostrar por consola el tipo de datos de la variable numerica solicitada por prompt antes de ser parseada y después del parseo.
// console.log('Antes del pareseo los valores ingresados son' + ' ' + typeof(operandOne)+ ' ' + typeof(operandTwo) + ' ' + 'y luego del pareseo'+ ' ' + typeof(convertOne) + ' ' + typeof(convertTwo));

// 6.-Debemos pedir un número al usuario (por prompt). En pantalla  
// debemos mostrar (sin usar estructras condicionales) un resultado  si el
// número es mayor de 100 y otro diferente si es menor de 100

let numb = prompt('Introduce un numero');
let convertNumb= parseFloat(numb);
let numbGreaterThan= convertNumb>=100;
let numbLessThan= convertNumb<=100;
document.write(`<div class="comparation__container"><div class="result__container">Is ${convertNumb} greater than 100?: <div class="result">${numbGreaterThan}.</div></div><div class="result__container">Is ${convertNumb} lower than 100?:<div class="result"> ${numbLessThan}.</div></div></div>`)
