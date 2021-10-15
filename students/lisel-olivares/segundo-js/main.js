let n1 = prompt('introduce un número');
let n2 = prompt('introduce otro número');

let primerNumero = parseInt(n1);
let segundoNumero = parseInt(n2);

let resultSuma = primerNumero + segundoNumero;
let resultResta = primerNumero - segundoNumero;
let resultMultiplicacion = primerNumero * segundoNumero;
let resultDivision = primerNumero / segundoNumero;

document.write('<div><p class="suma">Suma de ' + primerNumero + ' + ' + segundoNumero + ' = ' + resultSuma + '</p></div>');
document.write('<div><p class="resta">Resta de ' + primerNumero + ' - ' + segundoNumero + ' = ' + resultResta + '</p></div>');
document.write('<div><p class="multiplicacion">Multiplicación de ' + primerNumero + ' * ' + segundoNumero + ' = ' + resultMultiplicacion + '</p></div/>');
document.write('<div><p class="division">División de ' + primerNumero + ' / ' + segundoNumero + ' = ' + resultDivision + '</p></div>');

let word1 = prompt('introduce una palabra')
let word2 = prompt('introduce otra palabra')

let joined = word1 + word2;
joined;
document.write('<div><p class="word">'+ word1 + '' + word2 + '</p></div>');
