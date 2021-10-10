const myArrayOne = ['Diego','Axel','Luci'];
const myArrayTwo = ['Alvaro','Lisel','Martin'];

function concatArray (arrayOne, arrayTwo){
    return arrayOne.concat(arrayTwo);
}
let myConcatArray = concatArray(myArrayOne, myArrayTwo);

document.write(myConcatArray)
