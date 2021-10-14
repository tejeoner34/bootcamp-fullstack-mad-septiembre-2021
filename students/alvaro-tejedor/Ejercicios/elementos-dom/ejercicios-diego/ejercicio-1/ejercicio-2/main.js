const divDom = document.createElement('div');
divDom.classList.add('divDom');
document.body.appendChild(divDom);

const pDom = document.createElement('p');
pDom.textContent = 'Esto es un parrafo';
document.querySelector('.divDom').appendChild(pDom);


const a = document.createElement('a');
a.classList.add('enlace');
a.href = "https://developer.mozilla.org/es/docs/Web/JavaScript";
a.textContent = 'link a mdn'
document.querySelector('.divDom').appendChild(a);


const ulDom = document.createElement('ul');
ulDom.classList.add('ul');
ulDom.textContent = 'Lista';
document.querySelector('.divDom').appendChild(ulDom);

const li1 = document.createElement('li');
li1.classList.add('item');
li1.textContent = 'elemento lista';
document.querySelector('.ul').appendChild(li1);

const li2 = document.createElement('li');
li2.classList.add('item');
li2.textContent = 'elemento lista';
document.querySelector('.ul').appendChild(li2);

const li3 = document.createElement('li');
li3.classList.add('item');
li3.textContent = 'elemento lista';
document.querySelector('.ul').appendChild(li3);