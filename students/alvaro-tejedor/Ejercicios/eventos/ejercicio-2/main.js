const btnPlus = document.getElementById('BUTTON_PLUS');
const btnMinus = document.getElementById('BUTTON_MINUS');
const pDOM = document.querySelector('.text');

const lectura = localStorage.getItem('key');



if (lectura !== null) {
    pDOM.textContent = lectura;
}

btnPlus.addEventListener('click', e => {
    pDOM.textContent = parseInt(pDOM.textContent) + 1; // hay que parsear porque el + es una operación de string e intenta concatenar
    localStorage.setItem('key', parseInt(pDOM.textContent));
    /*localStorage.setItem('key', JSON.stringify(pDOM.textContent));*/ //también podriamos hacerlo usando JSON



})

btnMinus.addEventListener('click', e => {
    pDOM.textContent -= 1; // cuando restamos no hace falta parsear porque el menos no es una operación de string.
    localStorage.setItem('key', parseInt(pDOM.textContent));
    /*localStorage.setItem('key', JSON.stringify(pDOM.textContent));*/ //también podriamos hacerlo usando JSON


})

