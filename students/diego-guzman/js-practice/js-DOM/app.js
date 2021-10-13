const textDOM = document.createElement('p');
textDOM.textContent = 'Axel Presidente';
textDOM.classList.add('text--active'); 

document.body.appendChild(textDOM);

console.log(document.querySelectorAll('li'));

console.log(document.querySelectorAll('.item'));
console.log(document.getElementById('CUARTO_ELEMENTO'));

console.log(document.querySelectorAll('[data-demo´]'));

const specialListDOM = document.querySelectorAll('.special');
specialListDOM.forEach(e=> e.textContent = 'Special Cambiado');

const dataDemoListDOM = document.querySelectorAll('[data-demo="Atributo Custom"]');
dataDemoListDOM.forEach(e => e.style='font-size:48px;');

const itemLi = document.createElement('li');
itemLi.id = 'CREADO_CUSTOM';
const listContainerDOM =  document.querySelector('.container');
listContainerDOM.appendChild(itemLi);
