# Escuchando al usuario

Javascript en el navegador se basa en eventos. Estos eventos suelen estar producidos por el usuario

Cuando el usuario interactua con la pagina, desde JS lo vamos a poder escuchar y reaccionar.

A esto se le conoce como `listeners`.

## Listener de eventos

Tanto el BOM como cualquier nodo del DOM tiene dos funciones que nos ayudan a crear listeners.

- `addEventListener(event,handler)` : Esta funcion nos permite crear un `listener` para un evento que indiquemos

- event => parámetro de tipo string con el nombre del evento que queremos escuchar.
Son nombres predefinidos por el lenguaje. Ej: 'click', 'resize', 'keypress', 'keydown','keyup', etc.

- handler => es una `función` que recibe un parámetro de entrada. Este parámetro es un objeto que contiene la información del evento. Esta ser ala funcion que se ejecutara cuando el usuario produzca el evento.
ej: `e => {/** TU CODIGO VA AQUI **/}`

```js

// quiero escuchar el click de un botón 

const btnDOM = document.getElementById('MY_BTN');

btnDOM.addEventListener('click', e => { // Escucho el evento y le asigno un handler
    console.log(e.target); // pintar el elemento del DOM que produjo el evento
})

```

- `removeEventListener(event, handler)` : Elimina el listener añadido con addEventListener.
- event: de tipo string con el nombre del evento
- handler: es una función que debe ser la misma función del addEvenListener.


```js

// quiero escuchar el click de un botón  y eliminarlo

const btnDOM = document.getElementById('MY_BTN');

const clickHandler = (e) => {
    // escucho el evento click y le asigno un handler
    console.log(e.target; //pintar el elemento del DOM que produjo el evento)
}

btnDOM.addEventlistener("click", clickHandler);
// tres doritos despues
// ejecuto el remove cuando quiera eliminar el listener, pasandole la misma funcion que le pase al addEventListener
btnDOM.removeEventlISTENER("click", clickHandler);
})

```