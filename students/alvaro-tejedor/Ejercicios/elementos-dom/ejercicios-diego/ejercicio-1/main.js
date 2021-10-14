const ciudad = {
    nombre: 'Tokyo',
    Description: 'Big city',
    Pais: 'Japón',
    UrlImagen: 'https://cms.finnair.com/resource/blob/720618/0511bb2bc91953d4ef3506d00933819b/tokyo-main-data.jpg',
    Coordenadas: {
        latitud: '35°41′23″N',
        longitud: '139°41′32″E',
    },
};

let ciudadInput = prompt('Ciudad');

function ciudadCard (a){        
if(a === ciudad.nombre){


//creacion contenedor
const divPrincipal = document.createElement('div');
divPrincipal.classList.add('divPrincipal');
document.body.appendChild(divPrincipal);


// creación div de la imagen

const img = document.createElement('div');
img.classList.add('img');
img.textContent = ciudad.Pais;
img.style = 'background-image: url("https://www.gotokyo.org/es/destinations/eastern-tokyo/images/area024_1000_78.jpg"';
document.querySelector('.divPrincipal').appendChild(img);

const imgOppacity = document.createElement('div');
imgOppacity.classList.add('imgOppacity');
document.querySelector('.divPrincipal').appendChild(imgOppacity);


// div de los datos

const nombre = document.createElement('div');
nombre.classList.add('datos');
document.querySelector('.divPrincipal').appendChild(nombre);

const pDom = document.createElement('p');
pDom.classList.add('p');
pDom.textContent = ciudad.nombre;
document.querySelector('.datos').appendChild(pDom);




// creacion lista

const ulDom = document.createElement('ul');
ulDom.classList.add('ul');
document.querySelector('.datos').appendChild(ulDom);

const li1 = document.createElement('li');
li1.classList.add('item');
li1.textContent = ciudad.Description;
document.querySelector('.ul').appendChild(li1);


const li2 = document.createElement('li');
li2.classList.add('item');
li2.textContent = ciudad.Coordenadas.latitud;
document.querySelector('.ul').appendChild(li2);


const li3 = document.createElement('li');
li3.classList.add('item');
li3.textContent = ciudad.Coordenadas.longitud;
document.querySelector('.ul').appendChild(li3);
}


}
document.write(ciudadCard(ciudadInput));




