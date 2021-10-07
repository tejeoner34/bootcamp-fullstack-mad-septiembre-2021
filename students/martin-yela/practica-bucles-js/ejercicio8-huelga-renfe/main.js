// Los trabajadores de Renfe han decidido ir a la huelga, pero ofrecen un 75% de servicios mínimos a sus 
// viajeros en horas puntas. Debemos construir un programa que nos indique si se están cumpliendo los 
// servicios mínimos. Para ello solicitaremos al usuario 10 booleanos que almacenaremos en un array. 
// Estos booleanos representan si el tren ha salido o no de la estación. Escribir en el DOM un H1 
// "si se están cumpliendo los servicios mínimos" o un H1 en rojo "No se están cumpliendo".

let tren = [];
let contador = 0;
for (let i =0; i<10;i++){
    tren[tren.length] = prompt('Este tren paso? true or false');
    document.write(`<p>${tren[tren.length-1]}</p>`);
    if (tren[tren.length-1] !== 'true' && tren[tren.length-1] !== 'false'){
        document.write('<h1>La respuesta debe ser true or false. Vuelve a empezar</h1>');
        break;
    }
}
for (let i=0;i<10;i++){
    if (tren[i] === 'true'){
        contador += 1;
    }
}
if (contador >= 8){
    document.write('Si se están cumpliendo los servicios mínimos');
}else {
    document.write('No se están cumpliendo los servicios mínimos');
}
