//recuperar los Li de la página

const liDom = document.querySelectorAll('li');


//recuperar todos los elementos con clase item


const liItem = document.querySelectorAll('.item');


//recuperar elementos con id = CUARTO_ELEMENTO

const liId = document.getElementById('CUARTO_ELEMENTO');

// Elementos por atributo data-demo

const liAtri = document.querySelectorAll('[data-demo]');

// cambiar texto de varios elementos con clase special

const listSpecial = document.querySelectorAll('.special');
listSpecial.forEach( e => e.textContent = 'special cambiado');



const changeStyleLi = document.querySelector('[data-demo="Atributo Custom"]');
changeStyleLi.style='font-size: 100px;';

/*// cambiar el tamaño de la fuente

const dataDemoList = document.querySelectorAll('[data-demo="Atributo Custom"');
dataDemoList.forEach(e => e.style = 'font-size:48px');

//crear un li y meterlo en un ul

const itemLi = document.createElement('li');
itemLi.id = 'CREADO_CUSTOM';
const listContainerDOM =  document.querySelector('.container');
listContainerDOM.appendChild(itemLi);*/



