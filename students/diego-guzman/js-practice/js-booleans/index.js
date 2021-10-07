let myArray = [];
let count = 0;
for(let i = 0; i<10; i++){
    let userInput = parseInt(prompt('Enter 0 or 1'));
    let isTrue = userInput === 1;
    let isFalse = userInput === 0;
    if(userInput === 1){
    myArray[i] = isTrue; 
    count+=1;
    }
    else{
    myArray[i] = isFalse; 
    }
}

if(count>=8){
    document.write(`<h1>Se están cumpliendo los servicios mínimos</h1>`)
}
else{
    document.write(`<h1>No se están cumpliendo los servicios mínimos</h1>`)
}

// Explicación Alex

const TRAIN_COUNT = 10;
const trainDeparture = [];

for(let i = 0; i<TRAIN_COUNT; i++){
    const userInput = prompt ('Ha salido el siguiente tren? (true/false)');
    const userInputParsed = userInput.toLowerCase()=== 'true';
    trainDeparture[i] = userInputParsed;
}
//aqui ya tendría un array de booleanos

let trainCountDeparture = 0; // variable para saber cuantos trenes han salido
for(let i=0; i<trainDeparture.length; i++){
    if(trainDeparture[i]){
        trainCountDeparture++;
    }
}
//Aqui ya tengo la cantidad de trenes que hayan salido

const PERCENT_COUNT_NEEDED = Math.ceil(75*TRAIN_COUNT/100); //Regla de tres redondeada siempre hacia arriba

const OUTPUT_MINIMUN_SERVICES = trainCountDeparture >= PERCENT_COUNT_NEEDED ? '<h1>Se han cumplido los servicios mínimos</h1>' : '<h1 style="color:red">No se han cumplido los servicios mínimos</h1>';
document.write(OUTPUT_MINIMUN_SERVICES);

//VERSION SIN ARRAYS SOLO CON BUCLES

const TRAIN_COUNT = 10; // guardo una variable con los trenes existentes

let trainCountDeparture = 0; // variable para saber cuantos trenes han salido
for(let i=0; i<TRAIN_COUNT; i++){ // solicito al usuario que por cada tren me indique si ha salido o no, actualizando el contador de los que han salido
    const USER_INPUT = prompt('Ha salido el siguiente tren? (true/false)');
    const USER_INPUT_PARSED = USER_INPUT.toLowerCase() === 'true';
    if(USER_INPUT_PARSED[i]){
        trainCountDeparture++;
    }
}

// aqui ya tengo la cantidad de trenes que hayan salido

const PERCENT_COUNT_NEEDED = Math.ceil(75*TRAIN_COUNT/100); // regla de tres redondeada siempre hacia arriba

const OUTPUT_MINIMUN_SERVICES = trainCountDeparture >= PERCENT_COUNT_NEEDED ? '<h1>Se han cumplido los servicios minimos</h1>' : '<h1 style="color:red">No se han cumplido los servicios minimos</h1>';

document.write(OUTPUT_MINIMUN_SERVICES);
