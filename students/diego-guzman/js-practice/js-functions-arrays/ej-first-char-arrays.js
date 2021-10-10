let userString = prompt('enter a string');

function firstCharacters(str){
    return str.slice(0,3)
}

document.write(firstCharacters(userString))