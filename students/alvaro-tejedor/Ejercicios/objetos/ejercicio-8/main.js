'use strict';

let array2D = [
    [2, 3], 
    [4, 6]
]

function diagonal (arr){
    let arrayDiagonal = [];
    let contador = 0;
    for(let i = 0; i < arr.length; i++){
        arrayDiagonal.push(array2D[i][contador]);
        contador++
    }
    return arrayDiagonal
}

console.log(diagonal(array2D));