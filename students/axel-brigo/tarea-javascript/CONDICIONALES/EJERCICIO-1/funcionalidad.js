const speedLimit = 70;
let airQuality = prompt("Ingrese la contaminacion del dia");

if (airQuality >= 65) {
    document.write('<div class="div-1"><p class= "texto-70" > "La velocidad maxima de hoy es 70km por hora"</p></div > ');
} else {
    document.write('<div class="div-2"><p class="texto-120"> "La velocidad maxima permitida de hoy es 120km por hora"</p></div>');
}