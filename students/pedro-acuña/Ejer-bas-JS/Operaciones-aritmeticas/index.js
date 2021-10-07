
let dato1 = prompt('Introduce el primer numero: ');
let dato2 = prompt('Introduce el segundo numero: ');

let number1 = parseInt(dato1);
let number2 = parseInt (dato2);

 let resultadoSuma = number1 + number2;
 let resultadoResta = number1 - number2;
 let resultadoMultiplicacion = number1*number2;
 let resultadoDivision = number1 / number2;

 document.write('<p class = "container__operaciones">El resultado de la suma entre '+number1+' y ' +number2+' = '+resultadoSuma+'</p>' );
 document.write('<p class = "container__operaciones">El resultado de la resta entre '+number1+' y '+number2+' = '+resultadoResta+'</p>');
 document.write('<p class = "container__operaciones">El resultado de la multiplicacion entre '+number1+' y '+number2+' = '+resultadoMultiplicacion+'</p>');
 document.write('<p class = "container__operaciones">El resultado de la division entre '+number1+' y '+number2+' = '+resultadoDivision+'</p>');