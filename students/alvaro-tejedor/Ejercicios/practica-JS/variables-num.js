

let firstNumber = prompt('Por favor, escribe un número');
let secondNumber = prompt('Por favor, escribe otro número');

//parseo

firstNumberparse = parseInt(firstNumber);
secondNumberparse = parseInt(secondNumber);


// Operaciones

let resultSuma = firstNumberparse + secondNumberparse;
let resultResta = firstNumberparse - secondNumberparse;
let resultMultiplicacion = firstNumberparse * secondNumberparse;
let resultDivision = firstNumberparse / secondNumberparse


// En consola

console.log('La variable firstNumber antes de ser parseada tenía un tipo de dato ' + typeof(firstNumber))
console.log('La variable secondNumber antes de ser parseada tenía un tipo de dato ' + typeof(secondNumber))

console.log('La variable firstNumber después de ser parseada tenía un tipo de dato ' + typeof(firstNumberparse))
console.log('La variable secondNumber después de ser parseada tenía un tipo de dato ' + typeof(secondNumberparse))



// Pintado

document.write(
    '<div class="container"><p class="suma">La suma es ' + firstNumberparse + '+' + secondNumberparse + '=' + resultSuma + '</p></div>'
);

document.write(
    '<div class="container"><p class="resta">La resta es ' + firstNumberparse + '-' + secondNumberparse + '=' + resultResta + '</p></div>'

);

document.write(
    '<div class="container"><p class="multiplicacion">La multiplicación es ' + firstNumberparse + '*' + secondNumberparse + '=' + resultMultiplicacion + '</p></div>'

);

document.write(
    '<div class="container"><p class="division">La división es ' + firstNumberparse + '/' + secondNumberparse + '=' + resultDivision + '</p></div>'

);















