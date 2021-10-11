// IDENTIFICAR EL INDICE DE UN VALOR 

const myList =[1,2,3,4,5];

function identificador(a,b){
    
    return a.findIndex(v => v === b);
}

console.log(identificador(myList, 2));






//ORDENAR DE MAYOR A MENOR 

const myList =[1,2,3,4,5];

function ordenador (array){
    return array.sort((a,b) => b-a);

}

console.log(ordenador(myList));






// CONCATENAR DOS ARRAY 

const myList =[1,2,3,4,5];
const myList2 =[1,9,3,6,5];

function concatenador (a,b){
    return a.concat(b);
}

console.log(concatenador(myList, myList2));






// LENGTH OF AN ARRAY 


const myList10 =[12,23,33,3,35,63,73,34,39,130];

function mayorQueDiez (a){
   const esMayorQue = (name => name > 10);
   return a.every(esMayorQue);
    
}

console.log(mayorQueDiez(myList10));





// FILTRADOR DE ARRAY 

const myList = [56,5,54,55];

function filtrador(a){
    const listFiltrado = a.filter(v => v> 10);
    return listFiltrado;
}

console.log(filtrador(myList));





// CONVERTIDOR A MAYÚSCULAS 


const myList = ['hola', 'adios'];

function convertidorM (a) {
    return a.map(v => v.toUpperCase());
}

console.log(convertidorM(myList));





//SUBSTRACTOR 


let string = 'JavaScript';

function substractor (a){
    return a.substr(0,3);
}

console.log(substractor(string));




// CAPITALIZADOR

const myList = ['hola', 'adios'];

function capitalizador (a){
    return a.map(v => v.charAt(0).toUpperCase() + v.slice(1));
}

console.log(capitalizador(myList));




//ES ARRAY?


const myList = ['hola', 'adios'];

function esArray (a){
    return typeof a === 'object';
}
console.log(esArray(myList));





// ESTÁ INCLUIDO??

const myList = ['hola', 'adios'];
let myString = 'hola';

function estaIncluido (a, b){
    return b.includes(a);
}
console.log(estaIncluido(myString, myList));





// 11

const myList = ['c', 'c++', 'python', 'golang', 'solidity', 'typescript', 'javascript', 'java', 'go', 'yeah'];
let imprimir = '';
function display (a){
    for (let i = 0; i<= a.length -1 ; i++){
        let popped = a.pop();
        

    }
    return a
}

// solución con martin 

const myList = ['c', 'c++', 'python', 'golang', 'solidity', 'typescript', 'javascript', 'java', 'go', 'yeah'];
function delLast(arr){
    let contador = arr;
    for (let i=arr;i>0;i--){
        document.write(`<p>${arr}</p>`);
        arr.pop();
    }
    return 
}