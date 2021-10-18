
// creación función para evitar repetir el crear los elementos en el DOM
contadordiv = 0;
function updateDom (tarea, comentario){
    const div = document.createElement('div');
    div.classList.add('div-check' + contadordiv);


    const h3Dom = document.createElement('li');
    h3Dom.classList.add('li-tarea');
    h3Dom.setAttribute('for', 'checkbox');
    h3Dom.classList.add('item');
    h3Dom.textContent = `${tarea}: ${comentario}`;

    // const check = document.createElement('input');
    // check.setAttribute('type', 'checkbox');
    // check.setAttribute('name', 'checkbox');

    


    // const pDom = document.createElement('li');
    // pDom.classList.add('li-comentario');
    // pDom.classList.add('item');
    // pDom.textContent = comentario;

    // const divImg = document.createElement('div');
    // divImg.classList.add('divImg');
    // divImg.classList.add('item');
    // document.querySelector('.check__list--img').appendChild(divImg);


    const checkContainerDom = document.querySelector('.check__container');
    // const divCheck = document.createElement('div');
    // divCheck.classList.add('check__container--subcontainer');
    // checkContainerDom.appendChild(divCheck);
    document.querySelector('.check__list--img').appendChild(div);
    // document.querySelector('.div-check' + contadordiv).appendChild(check);
    document.querySelector('.div-check' + contadordiv).appendChild(h3Dom);
    contadordiv ++;
    
    

}

let contador = 0;

if(sessionStorage.getItem(`tarea${contador}`) !== null){
    const storedTareaValue = sessionStorage.getItem(`tarea${contador}`);
    const storedComentarioValue = sessionStorage.getItem(`comentario${contador}`);

    updateDom(storedTareaValue,storedComentarioValue);
    
    

}


// añadir un signo check cuando cliclamos en el li

const ulDom = document.querySelector('.check__list--img');
ulDom.addEventListener('click', e => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
})

const liDom = document.getElementsByTagName('LI');


// guardamos e imprimimos lo que escribimos en el form

document.querySelector('.form__container').addEventListener('submit', e => {
    e.preventDefault();
    const formElement = e.target;
    const inputTarea = formElement.tarea;
    sessionStorage.setItem('tarea' + JSON.stringify(contador),inputTarea.value);

    const inputComentario = formElement.comentario;
    sessionStorage.setItem('comentario' + JSON.stringify(contador),inputComentario.value);


    updateDom(inputTarea.value,inputComentario.value);
    contador ++;
    console.log(e);
    
})

