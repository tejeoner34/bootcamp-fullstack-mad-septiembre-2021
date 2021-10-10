myArray = [20,35,1,2,5,6,12,3,56]

function isGreaterThanTen(array){
return array.filter(num=> num>10)
}

document.write(isGreaterThanTen(myArray))