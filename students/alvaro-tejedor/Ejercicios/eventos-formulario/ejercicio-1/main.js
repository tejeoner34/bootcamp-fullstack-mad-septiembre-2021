const formulario = document.querySelector('.form__container');

formulario.addEventListener('submit', e => {
    e.preventDefault();
    const formElement = e.target;
    const inputName = formElement.name;
    console.log(e);
    const li = document.createElement('li');
    li.textContent = inputName.value;
    document.querySelector('.lista').appendChild(li);
    inputName.value = ''; // con esto conseguimos que cuando se da a submito, lo que tenemos dentro de la caja de texto se quede en blanco

})

