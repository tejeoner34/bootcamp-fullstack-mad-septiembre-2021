let colorSemaforo = prompt("Ingresa el color para encender la luz");
let colorVerde = "verde";
let colorAmarilloIntermitente = "amarillo intermitente";
let colorAmarilloFijo = "amarillo";
let rojo = "rojo";

switch (colorSemaforo) {
    case rojo:
        document.write(`<div class="div_rojo"></div>`);
        break;
    case colorAmarilloIntermitente:
        document.write(`<div class="div_amarillo_intermitente"></div>`);
        break;
    case colorAmarilloFijo:
        document.write(`<div class="div_amarillo_fijo"></div>`);
        break;
    case colorVerde:
        document.write(`<div class="div_verde"></div>`);
        break;

    default:
      
}