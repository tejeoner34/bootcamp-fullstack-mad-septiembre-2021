alert('Las opciones son 1.Verde 2.Ambar 3.Ambar intermitente 4.Rojo 5.Semaforo estropeado');
const POSICION = parseInt(prompt('Elige la opción: '));


switch (POSICION) {
    case 1: {
        document.write(`<div class="box container__green">
        <p class="container__green--texto">Puede continuar</p>        
        </div>`);
        break;
    }
    case 2: {
        document.write(`<div class="box container__yellow">
        <p class="container__green--texto">Puede continuar</p>        
        </div>`);
        break;
    }
    case 3: {
        document.write(`<marquee bgcolor="#000000" direction="right" loop="2"><div class="box container__yellow--intermitente">
        <p class="container__green--texto">Debe parar</p>        
        </div></marquee>`);
        break;
    }
    case 4: {
        document.write(`<div class="box container__red">
        <p class="container__green--texto">Debe parar</p>        
        </div>`);
        break;
    }
    case 5: {
        document.write(`<div>
                                <img src="https://cdn2.sekureco.eu/6347-medium_default/senal-vial-de-bolsa-stop-700-x-700-mm.jpg" alt="Señal stop">
                        </div>
                        <div>
                             <p class="roto">El semáforo está estropeado. Pase bajo su propia responsabilidad</p>
                        </div>`);
        break;
    }

    default: {
        alert('El número introducido no es correcto');
    }
}




