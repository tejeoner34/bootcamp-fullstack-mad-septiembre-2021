'use strict';

//array


   let coche1 = {
        marca: 'toyota',
        modelo: 'auris',
        matricula: '0000aaa',
        velocidadActual: 50,
        encendido: false,
    };
    let coche2 ={
        marca: 'seat',
        modelo: 'ibiza',
        matricula: '0000aaa',
        velocidadActual: 50,
        encendido: false,
    };
   let coche3 = {
        marca: 'audi',
        modelo: 'a5',
        matricula: '0000aaa',
        velocidadActual: 50,
        encendido: false,
    };
   let coche4 = {
        marca: 'bmw',
        modelo: 'm1',
        matricula: '0000aaa',
        velocidadActual: 57,
        encendido: true,
    };
    
let listaCoches = [coche1, coche2, coche3, coche4];


//imprimir velocidad cuarto coche
console.log(listaCoches[3].velocidadActual);




// función generar array 


function whichcar (a){
    let arrayVacio = [];
    for(let i=0; i< listaCoches.length; i++){
        if(listaCoches[i].marca === a){
           arrayVacio.push(listaCoches[i]);
        }

    }
    return arrayVacio
}

console.log(whichcar('bmw'));





//funcion encendido?

function engineOn () {
     for(let i = 0; i< listaCoches.length; i++){
         if(listaCoches[i].encendido === true){
             return true
         }
         }
     
     return false
        }
    

console.log(engineOn());




function modelOn (){
    let modeloEncendido = [];

    for(let i = 0; i< listaCoches.length; i++){
        if(listaCoches[i].encendido === true){
            modeloEncendido.push(listaCoches[i].marca);
        }
    }
    return modeloEncendido
}

console.log(modelOn());




// velocidad media 


function velocidadMedia (){
    let Speed = [];
    let sum = 0;
    let meanSpeed = 0;
    for(let i =0; i< listaCoches.length; i++){
        Speed.push(listaCoches[i].velocidadActual);
    }

    for(let j = 0; j< Speed.length; j++){
        sum += Speed[j];
    }


    return meanSpeed = sum / Speed.length

}

console.log(velocidadMedia());




