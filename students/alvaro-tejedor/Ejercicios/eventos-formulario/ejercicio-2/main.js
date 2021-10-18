const input = document.querySelector('.input-name');
const p = document.querySelector('.p');

input.addEventListener('keyup', e => {
    console.log(e);
    const formElement = e.target;
    inputName = formElement.name.value;
    p.textContent += inputName;
})