let airQuality = prompt("Nivel de contaminación");
let speedLimit = parseInt(airQuality);

if (airQuality > 65){
    document.write ('<h2>El límite de velocidad hoy es de 70</h2>');
}else if (airQuality <= 65){
    document.write (`<h2>El límite de velocidad hoy es de 120</h2>`);
}
