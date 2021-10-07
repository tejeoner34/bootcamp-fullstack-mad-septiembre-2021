
// ejercicio 1

let userInput1 = parseInt(prompt('Escribe un número'));
let userInput2 = parseInt(prompt('Escribe un número'));

if(isNaN(userInput2 || userInput1)) {
    alert('Por favor introduce un número');
}else if(userInput1 > userInput2) {
    document.write(userInput1);
}else if(userInput1 < userInput2) {
    document.write(userInput2);
}else if (userInput1 === userInput2) {
    document.write('Los dos son iguales');
}


// ejercicio 2

let frase1 = prompt('escribe algo');
let frase2 = prompt('escribe algo');

if(frase1.length > frase2.length){
    document.write(frase1);
}else if (frase1.length < frase2.length){
    document.write(frase2);
}else {
    document.write('las frases miden lo mismo');
}


// ejercicio 3


let inputNumber = parseInt(prompt('pon un número entero'));

for(let i = 0; i<inputNumber; i++){
    if(i % 2 === 0){
        console.log(`${i} es par`)
    }else {
        console.log(`${i} es impar`)
    }
}


// ejercicio 4


for(let i = 0; i<100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i} es FizzBuzz`);
    }else if(i % 3 === 0){
        console.log(`${i} es Fizz`);

    }else if(i % 5 === 0){
        console.log(`${i} es Buzz`);

    }else {
        console.log(i);

    }
}


// ejercicio 4 por pantalla 


for(let i = 0; i<100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        document.write(`<p>${i} es FizzBuzz</p>`);
    }else if(i % 3 === 0){
        document.write(`<p>${i} es Fizz</p>`);

    }else if(i % 5 === 0){
        document.write(`<p>${i} es Buzz</p>`);

    }else {
        document.write(`<p>${i}</p>`);

    }
}


//ejercicio 5 con array

let symbol = ['*','**','***','****','*****','****','***','**','*'];
for(let i = 0; i < 9; i++){
    console.log(symbol[i]);
}

//ejercicio 5 con nest loop y sin document write interno.

let patron = '';
for(let i = 0; i <= 5; i++){
    for(let j = 0; j < i ; j++ ){
        patron += '*';
    }
    patron += '\n';
}
for(let i = 4; i > 0; i--){
    for(let j = i; j > 0; j--){
        patron += '*';
    }
    patron += '\n';
}

console.log(patron);


//ejercicio 5 con nest loop y con document write interno.

for (let i=0; i<5;i++){
    document.write('<p>');
    for (let a = 0;a<=i;a++){
        document.write('*');
    }
    document.write('</p>');
}
for(let i = 4; i > 0; i--){
    document.write('<p>');
    for(let j = i; j > 0; j--){
        document.write('*');
    }
    document.write('</p>');
}



// ejercicio 6 

var fib = []; //definimos un array 

fib[0] = 0;// añadimos los dos primeros valores del array 
fib[1] = 1;
for (i = 2; i <= 10; i++) { //le damos el límite de 10 
  fib[i] = fib[i - 2] + fib[i - 1]; // le tenemos que sumar la posición -1 y posición -2
  console.log(fib[i]);
}


// ejericio 7

// necesitamos dos variables para solcitar columnas y filas

let column = parseInt(prompt('número de columnas'));
let row = parseInt(prompt('número de filas'));

document.write('<table border>')//tenemos que abrir la etiqueta de la tabla y la cerramos al final

for(let i = 0; i < column; i++){ //definimos el bucle 
    document.write ('<tr>'); //se tienen que abrir y cerrar la etiqueta tr dentro del loop principal
    for(let j = 0; j< row; j ++ ){
        document.write('<td>hola</td>'); // dentro del loop interno debemos poner los td y contenido
    }
    document.write('</tr>');
}

document.write('</table>');


