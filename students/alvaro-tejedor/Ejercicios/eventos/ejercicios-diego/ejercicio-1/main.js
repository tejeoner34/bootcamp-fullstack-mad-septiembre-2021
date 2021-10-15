// const storageNombre = document.querySelector('.storageNombre');
// const storageEdad = document.querySelector('.storageEdad');
// const storageHobby = document.querySelector('.storageHobby');
// const array = [storageNombre, storageEdad, storageHobby];
// const buttonDom = document.querySelector('.button');
// let lectura = localStorage.getItem('nombre');
// let lectura2 = localStorage.getItem('edad');
// let lectura3 = localStorage.getItem('hobby');

// if(lectura !== null){
//     storageNombre === lectura;
// }
// if(lectura2 !== null){
//     storageEdad === lectura2;
// }
// if(lectura3 !== null){
//     storageHobby === lectura3;
// }

// buttonDom.addEventListener('click', e => {
//     localStorage.setItem('nombre', storageNombre.value);
//     localStorage.setItem('edad', storageEdad.value);
//     localStorage.setItem('hobby', storageHobby.value);

// })


//llamamos al formulario y le damos un event listener de tipo submit

if(sessionStorage.getItem('age') !== null){
    const storageNameValue = JSON.parse(sessionStorage.getItem('name'));
    const storageAgeValue = JSON.parse(sessionStorage.getItem('age'));
    const storageHobbieValue = JSON.parse(sessionStorage.getItem('hobbie'));

    const pName = document.createElement('p');
    pName.textContent = `El último input introducido es ${storageNameValue}`;

    const pAge = document.createElement('p');
    pAge.textContent = `El último input introducido es ${storageAgeValue}`;

    const pHobbie = document.createElement('p');
    pHobbie.textContent = `El último input introducido es ${storageHobbieValue}`;

    const divContainer = querySelector('[data-info-container]');
    divContainer.innerHTML

}


document.querySelector('.form').addEventListener('submit', e => {
    
    e.preventDefault(); //elimino el comportamiento por defecto de los formularios. Esto evita que se produzca la redirección a donde diga el action del form
    const formElement = e.target;
    const inputName = formElement.name;
    sessionStorage.setItem('name', JSON.stringify(inputName.value));

    const inputAge = formElement.age;
    sessionStorage.setItem('age', JSON.stringify(inputAge.value));


    const inputHobbie = formElement.hobbie;
    sessionStorage.setItem('hobbie', JSON.stringify(inputHobbie.value));

    // tenemos que imprimir en el navegador los resultados anteriores
    // creamos tres 'p'

    const pName = document.createElement('p');
    pName.textContent = `El último input introducido es ${inputName.value}`;

    const pAge = document.createElement('p');
    pAge.textContent = `El último input introducido es ${inputAge.value}`;

    const pHobbie = document.createElement('p');
    pHobbie.textContent = `El último input introducido es ${inputHobbie.value}`;

    const divContainer = querySelector('[data-info-container]');
    divContainer.innerHTML



})
