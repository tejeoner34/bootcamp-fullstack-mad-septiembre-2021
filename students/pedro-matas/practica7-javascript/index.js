

function calcular(){

let operador1 = prompt('introduce el primer operador');
let operador2 = prompt('introduce el segundo operador');

console.log(typeof(operador1));
console.log(typeof(operador2));

let resultadoSuma;
let resultadoResta;
let resultadoDivision;
let resultadoMultiplicacion;

operador2= parseInt(operador2,10);

console.log(typeof(operador2));

operador1 = parseInt(operador1,10);

console.log(typeof(operador1));



resultadoSuma= operador1 + operador2;

document.write('<p>el resultado de la suma de '+operador1+' + '+ operador2 + ' es ' + resultadoSuma+'</p>');

resultadoResta= operador1 - operador2;

document.write('<p>el resultado de la resta de '+operador1+' - '+ operador2 + ' es ' + resultadoResta+'</p>');

resultadoMultiplicacion= operador1 * operador2;

document.write('<p>el resultado de la multiplicación de '+operador1+' * '+ operador2 + ' es ' + resultadoMultiplicacion+'</p>');

resultadoDivision= operador1 / operador2;

document.write('<p>el resultado de la division de '+operador1+' / '+ operador2 + ' es ' + resultadoDivision+'</p>');

}

function concatenar(){
    let texto1= prompt('introduce la primera cadena');
    let texto2= prompt('introduce la segunda cadena');

    let resultado= texto1 + texto2;

    document.write('<p>el resultado de unir las cadenas es '+ resultado+'</p>');
    document.write('<p> la longitud de la cadena es '+ resultado.length+'</p>');
}

function grados(){
    let grados= prompt('introduce la temperatura en grados');
    grados= parseInt(grados,10);

    let fahrenheit= (grados*1.8) + 32;

    

    document.write(grados + ' grados equivalen a '+ fahrenheit + ' fahrenheit </p>');

}

function longitud(){

    resultado.length;
}

function foto(){
    let numero=prompt('escribe un numero del 1 al 100');
    let prueba=(numero<101);
   
    document.write(prueba);
    document.write(' '+numero);

    let foto = prompt('pasame una url');
     document.write('<img src="'+ foto+'"></img>');
}