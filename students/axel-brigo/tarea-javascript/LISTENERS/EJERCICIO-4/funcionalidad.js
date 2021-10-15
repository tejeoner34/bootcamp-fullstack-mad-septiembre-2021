const nombramiento = document.getElementById('nombre');
const edadamiento = document.getElementById('edad');
const hobbymiento = document.getElementById('hobby');

const submitear = document.getElementById('enviar');

const resuName = localStorage.getItem('nombre');
const resuEdad = localStorage.getItem('edad');
const resuHobby = localStorage.getItem('hobby');



if (resuName !== null) {
    nombramiento.value === resuName;
}
if (resuEdad !== null) {
    edadamiento.value === resuEdad;
}

if (hobbymiento !== null) {
    hobbymiento.value === resuHobby;
}

submitear.addEventListener('click', e => { 
    localStorage.setItem('nombre', nombramiento.value); 
    localStorage.setItem('nombre', nombramiento.value); 
    localStorage.setItem('nombre', nombramiento.value); 
})



