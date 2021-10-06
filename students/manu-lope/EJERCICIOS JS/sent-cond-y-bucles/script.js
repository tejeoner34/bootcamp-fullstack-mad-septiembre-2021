//EJERCICIO 1
//Para hacer que el valor pintado en pantalla sea el mayor podré utilizar condicionales
//en este caso vamos a pedir con dos prompt la info al usuario.
//Luego, si i1>i2 se mostrará i1, y lo mismo a la invers.
//la estructura HTML será un simple <h1></h1>.


// let numberOne = prompt('Introduce un número');
// let numberTwo = prompt('Introduce un segundo número');
// let i1 = parseInt(numberOne);
// let i2 = parseInt(numberTwo);

// if (i1 > i2){
//     document.write(`<h1>${i1}</h1>`);
// } else if (i1 < i2) {
//     document.write(`<h1>${i2}</h1>`);
// }

//EJERCICIO 2
//"Escribir un programa que dadas 2 frases muestre en el navegador la más larga (Easy)"
//Vamos a pedir al usuario dos entradas de info tipo string
//Tenemos que sacar una variable que sea la longitud de las mismas
//Comparamos con un if, if else, y que nos de el resultado según sus valores.

let userUno = prompt('Introduce una frase');
let userDos = prompt('Introduce otra frase');

if (userUno.length > userDos.length) {
    document.write(`<h1>${userUno}</h1>`);
} else if {
    document.write(`<h1>${userDos}</h1>`);
}

//EJERCICIO 3