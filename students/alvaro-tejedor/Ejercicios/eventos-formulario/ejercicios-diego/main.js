const liDom = document.getElementsByTagName('LI');


// creación función para evitar repetir el crear los elementos en el DOM
contadordiv = 0;
function updateDom (tarea, comentario){



    const h3Dom = document.createElement('li');
    h3Dom.classList.add('li-tarea');
    h3Dom.setAttribute('for', 'checkbox');
    h3Dom.classList.add('item');
    h3Dom.textContent = `${tarea}: ${comentario}`;




    const checkContainerDom = document.querySelector('.check__container');
    document.querySelector('.check__list--img').appendChild(h3Dom);
    const spanDom = document.createElement('SPAN');
    spanDom.classList.add('close');
    const spanText = document.createTextNode('\u00D7');
    spanDom.appendChild(spanText);
    h3Dom.appendChild(spanDom);



    
    // aquí estoy
    const close = document.getElementsByClassName('close');
    let i;
    for(i =0; i< close.length; i++){
        close[i].onclick = function (){
            let contenedor = this.parentElement;
            contenedor.style.display = 'none';
        }
    }
    contadordiv ++;

}

let contador = 0;

// quermos que nos devuelva el valor en el session storage

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
    inputComentario.value = '';
    inputTarea.value = '';
})



    
    
    


