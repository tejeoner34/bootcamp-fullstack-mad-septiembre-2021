let numeroUno = prompt("ingresa el primer numero");
let numeroDos = prompt("ingresa el segundo numero");

console.log(typeof numeroUno);
console.log(typeof numeroDos);

let elNumeroUno = parseInt(numeroUno);
let elNumeroDos = parseInt(numeroDos);

console.log(typeof elNumeroUno)
console.log(typeof elNumeroDos);

let suma = elNumeroUno + elNumeroDos;
let resta = elNumeroUno - elNumeroDos;
let multiplicacion = elNumeroUno * elNumeroDos;
let division = elNumeroUno / elNumeroDos;

document.write('<div><p class="container__div"> La suma de los dos numeros es </p></div><div><p class="variable">' + suma +'</p></div>');
document.write('<div><p class="container__div"> La resta de los dos numeros es </p></div><div><p class="variable"> ' + resta +'</p></div>');
document.write('<div><p class="container__div">La multiplicacion de los dos numeros es </p></div><div><p class="variable"> ' + multiplicacion +'</p></div>');
document.write('<div><p class="container__div">La division de los dos numeros es </p></div><div><p class="variable"> ' +  division +'</p></div>')

