const myArray = ['pErrO', 'GaTO','aRAñA']

function firstCapital (str){
    str.map(array => array.charAt(0).toUpperCase() + array.slice(1,array.length))
    return str }
document.write(firstCapital(myArray))