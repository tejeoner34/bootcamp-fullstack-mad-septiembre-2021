//2.- Desarrollar un semáforo que tendrá tres posibles valores introducidos por vosotros (verde, amarillo_intermitente, amarillo_fijo, rojo)

//- Si el estado del semáforo es 'verde' o 'ambar_intermitente'; se mostrará en el navegador un div con el color de fondo que corresponda (verde o ámbar) y centrado dentro de él un texto que indique "Puede continuar"
//- Si el estado del semáforo es 'ambar_fijo' o 'rojo'; se mostrará en el navegador un div con el color de fondo que corresponda (rojo o ámbar) y centrado dentro de él un texto que indique "Debe parar".
//- En cualquier otro caso (simulación de semáforo estropeado) se mostrará una señal de stop y a su lado un párrafo "El semáforo está estropeado. Pase bajo su propia responsabilidad."

//OPCIONAL: Hacer una animación que haga que el div en caso de ser ambar_intermitente se comporte de ese modo

let colorSemaforo = prompt("que color esta el semaforo?");
let colorVerde = "verde";
let colorAmarilloIntermitente = "amarillo intermitente";
let colorAmarilloFijo = "amarillo fijo";
let rojo = "rojo";


switch (colorSemaforo) {
    case colorVerde:
        document.write(`<div class="div_verde"><p class="parrafo">El semaforo esta en ${colorVerde}</p></div>`);
        break;
    case colorAmarilloIntermitente:
        document.write(`<div class="div_amarillo_intermitente"><p class="parrafo">El semaforo esta en ${colorAmarilloIntermitente}</p></div>`);
        break;
    case colorAmarilloFijo:
        document.write(`<div class="div_amarillo_fijo"><p class="parrafo">El semaforo esta en ${colorAmarilloFijo}</p></div>`);
        break;
    case rojo:
        document.write(`<div class="div_rojo"><p class="parrafo">El semaforo esta en ${rojo}</p></div>`);
        break;

    default:
        document.write('<div class="div_random"><p class="parrafo0">El semáforo está estropeado. Pase bajo su propia responsabilidad."</p></div>')
        break;
}