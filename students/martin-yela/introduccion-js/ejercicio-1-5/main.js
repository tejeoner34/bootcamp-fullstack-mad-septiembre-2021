let firstNumber = prompt('Introduce un número');
let secondNumber = prompt('Introduce otro número');
console.log('firstNumber es de tipo: ' + typeof(firstNumber));
console.log('secondNumber es de tipo: ' + typeof(secondNumber));
firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);
console.log('Después de parsear, firstnumber es de tipo ' + typeof(firstNumber));
console.log('Después de parsear, secondnumber es de tipo ' + typeof(secondNumber));

let suma = firstNumber + secondNumber;
let resta = firstNumber - secondNumber;
let multiplicacion = firstNumber * secondNumber;
let division = firstNumber / secondNumber;

document.write('<div class="container__operacion"> <div class="container__let">' + firstNumber + '</div><div class="container__let">+</div><div class="container__let">' + secondNumber + '</div> <div class="container__let"> = </div><div class="container__let">' + suma +'</div></div>');
document.write('<div class="container__operacion"> <div class="container__let">' + firstNumber + '</div><div class="container__let">-</div><div class="container__let">' + secondNumber + '</div> <div class="container__let"> = </div><div class="container__let">' + resta +'</div></div>');
document.write('<div class="container__operacion"> <div class="container__let">' + firstNumber + '</div><div class="container__let">*</div><div class="container__let">' + secondNumber + '</div> <div class="container__let"> = </div><div class="container__let">' + multiplicacion +'</div></div>');
document.write('<div class="container__operacion"> <div class="container__let">' + firstNumber + '</div><div class="container__let">/</div><div class="container__let">' + secondNumber + '</div> <div class="container__let"> = </div><div class="container__let">' + division +'</div></div>');

