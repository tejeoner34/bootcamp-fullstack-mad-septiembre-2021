

    let speedLimit;
    let airQuality = prompt('introduce la contaminacion');

    speedLimit = airQuality > 65 ? 70 : 120;

    document.write(`<p> la velocidad maxima hoy es de ${speedLimit}</p>`);





    let opciones = prompt('como esta el semaforo? (verde, ambar_intermitente, ambar_fijo, rojo)');
    // let color_semaforo='';

    switch (opciones) {

        case 'verde': {
            let color_semaforo = "contenedor__semaforo-verde";
            document.write(`<div class="contenedor__semaforo ${color_semaforo}"><p>puede pasar</p></div>`);
            break;
        }
        case 'ambar_intermitente': {
            let color_semaforo = "contenedor__semaforo-ambar_intermitente";
            document.write(`<div class="contenedor__semaforo ${color_semaforo} parpadea"><p class="parpadea">puede pasar</p></div>`);
            break;
        }
        case 'ambar_fijo': {
            let color_semaforo = "contenedor__semaforo-ambar_fijo";
            document.write(`<div class="contenedor__semaforo ${color_semaforo}"><p>debe parar</p></div>`);
            break;
        }
        case 'rojo': {
            let color_semaforo = "contenedor__semaforo-rojo";
            document.write(`<div class="contenedor__semaforo ${color_semaforo}"><p>debe parar</p></div>`);
            break;
        }
        default: {
            document.write(`<div class="contenedor__semaforo "><img src="./senal.jpg"><p>El semáforo está estropeado. Pase bajo su propia responsabilidad.</p></div>`);
            break;
        }
    }



    let nota = parseInt(prompt('intoduce la nota'));

    if (nota < 5) {
        document.write('suspenso');
    } else if ((nota >= 5) && (nota <= 7)) {
        document.write('aprobado');
    } else if ((nota > 7) && (nota < 9)) {
        document.write('notable');
    } else if ((nota >= 9) && (nota < 10)) {
        document.write('sobresaliente');
    } else if (nota === 10) {
        document.write('matricula de honor');
    } else {
        document.write('HA OCURRIDO UN ERROR, CONTACTA CON EL PROFESOR');
    }




    let semaforo_color = prompt('dime color otra vez(verde, ambar_intermitente, ambar_fijo, rojo)');
    switch (semaforo_color) {

        case 'verde': {
            let color = "circulo circulo1 contenedor__semaforo-verde";
            document.write(`<div class="semaforo"><div class="${color}"></div></div>`);
            break;
        }
        case 'ambar_intermitente': {
            let color = "circulo circulo2 contenedor__semaforo-ambar_intermitente";
            document.write(`<div class="semaforo"><div class="${color} parpadea"></div></div>`);
            break;
        }
        case 'ambar_fijo': {
            let color = "circulo circulo2 contenedor__semaforo-ambar_fijo";
            document.write(`<div class="semaforo"><div class="${color}"></div></div>`);
            break;
        }
        case 'rojo': {
            let color = "circulo circulo3 contenedor__semaforo-rojo";
            document.write(`<div class="semaforo"><div class="${color}"></div></div>`);
            break;
        }
        default: {
            document.write(`<div class="contenedor__semaforo "><img src="./senal.jpg"><p>El semáforo está estropeado. Pase bajo su propia responsabilidad.</p></div>`);
            break;
        }
    }

