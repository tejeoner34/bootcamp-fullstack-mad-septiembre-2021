const colorSemaforo = prompt ('¿color del semaforo?');


switch (colorSemaforo){
    case 'verde' :{
    document.write ('<div class="verde"><p>Puede continuar</p></div>');
    }break;

    case 'ambar_intermitente' :{
    document.write ('<div><p>Puede continuar</p></div>');
    }break;

    case 'ambar_fijo' :{
        document.write ('<div><p>Debe parar</p></div>');
    }break;

    case 'rojo' :{
        document.write ('<div><p>Debe parar</p></div>');
    }break;

    default :{
        document.write ('<div><p>STOP, el semáforo está estropeado, pase bajo su propia responsabilidad</p></div>');
    }break;
}