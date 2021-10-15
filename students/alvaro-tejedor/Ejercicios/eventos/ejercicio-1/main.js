const btnDOM = document.getElementById('BUTTON');

btnDOM.addEventListener('click', e => {
    const pDOM = document.createElement('p');
    pDOM.textContent = 'añadido desde JS';
    pDOM.classList.add('p-JS')
    document.querySelector('.divVacio').appendChild(pDOM);
})