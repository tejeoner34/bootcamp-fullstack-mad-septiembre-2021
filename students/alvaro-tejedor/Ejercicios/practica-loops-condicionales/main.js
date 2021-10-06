
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

//ejercicio 5 con nest loop

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
