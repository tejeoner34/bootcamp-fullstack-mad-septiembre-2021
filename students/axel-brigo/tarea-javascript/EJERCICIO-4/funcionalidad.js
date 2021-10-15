let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");

//let cadena = document.write('Tu nombre es ' + nombre + ' y tu apellido es ' + apellido );

let cadena1 = 'Tu nombre es  ' + nombre;
let cadena2 = ' y tu apellido es ' + apellido;

let cadenaFinal = cadena1 + cadena2;

document.write('La cadena siguiente : ' + cadenaFinal + ' tiene ' + cadenaFinal.length + ' caracteres');

