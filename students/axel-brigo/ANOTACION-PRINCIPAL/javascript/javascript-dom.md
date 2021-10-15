# Gestión del DOM

El arbol DOM es la representación de los nodos HTML en una página web.

Hasta ahora hermos utilizado `document.write` para enlazar JS en el DOM, pero este metodo no nos proporciona un control total sobre el DOM y las interacciónes del usuario.

## BOM

Browser Oject Model, es el modelo de objetos del navegador.

Principalmente existen 2 objetos:

- **window**: Que representa al objeto global del navegador y permite gestionar la ventana.

- **document**: Que representa al objeto del documento HTML que se está visualizando actualmente. Document es un objeto que ademas pertenece al Window.

## Manejo del DOM con JS

Dentro del document existen funciones que nos ayudan a gestionar el DOM y poder hacer un CreateReadUupdateDelete con ellos.

### Obtener elementos del DOM

Tenemos varias funciones dependiendo de como los queramos obtener (es parecido en concepto a los selectores CSS).

Estos Métodos nos van a devolver o un Objeto que representa al nodo del DOM o un array de estos objetos

Los 3 métodos principales que vamos a usar son:

- **GetElementById('')** : Devuelve UN elemento del DOM que coincida dentro de la página con ese id. Si no lo encuentra devuelve `null`.

- **querySelector('CSS_SELECTOR')**: Devuelve el primer elemento que cumpla el selector CSS que hemos introducido. Si no lo encuentra devuelve `null`.

-**querySelectorAll('CSS_SELECTOR')**: Devuelve un array de elementos HTML que coincidan con el selector CSS que hemos introducido. Si no hay elementos devuelve un array vacio `[]`.


### Que propiedades tiene un elemento HTML en JS?

Pues todas las que nos permitan gestionar el elemento:

- añadir o quitar atributos
- obtener un valor de un atributo
- añadir o quitar clases css
- añadir, consultar o eliminar nodos del DOM descendientes
- dar estilos en linea 
- modificar el texto
- clonarlo
- escuchar eventos


### Crear elementos en el DOM

Este proceso tiene 3 partes fundamentales:

1. Crear el elemento en JS (`createElement(tag`)
2. Asignar las propiedades que queramos a ese elemento
3. Insertarlo en el DOM (necesiamos saber donde) (`parent.appendChild(elementPaso1)`)