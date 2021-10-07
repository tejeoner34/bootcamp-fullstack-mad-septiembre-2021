let dato1 = prompt("Introduce los grados centígrados: ")
let centigrado = parseFloat (dato1);

let farenheit = (centigrado* (9/5)) + 32;  
document.write('<p>'+dato1+'ºC son '+farenheit+'ºF');
