let num = parseInt(prompt('enter a number'));
let array = [4,5,6,6,8,2,6,2,3,4]

function checkifExists(number, collection){
    return collection.findIndex(e=>e===number);
}

document.write(`<h1>${checkifExists(num, array)}</h1>`);