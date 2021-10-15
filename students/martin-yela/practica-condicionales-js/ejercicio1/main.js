let airQuality = prompt('Dime que nivel de contaminación hay: ');
let speedLimit = airQuality > 65 ? 70 : 120;

document.write(`La velocidad máxima permitida hoy es de ${speedLimit}`);

