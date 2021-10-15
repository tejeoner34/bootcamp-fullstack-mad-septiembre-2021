# Bucles (Loops)

Un bucle es una porción de codigo que repito un número finito de veces.

Existen varios tipos de bucles. Nosotros veremos 2

## Bucle for


```js
for(let i=0; i<100; i=+1){
    // este es el codigo que voy a repetir
}
```

1. Cuando llego al for ejecuto la **fase de inicializacion** (`let i = 200`). Esta frase solo se ejecuta la primera vez que empiezo el bucle.
 2. Consulto la condicion de salida (`i>100`). Si la condicion de false, entonces salimos del bucle. Si no ejecutamos la primera vuelta del bucle, es decir **el cuerpo del bucle**
 3. Cuando terminemos de ejecutar el cuerpo del bucle, se ejecuta la **fase de actualizacion** (`i=i-1`)
 4. Ejecutamos la condicion de salida (`i>100`). Si da false, salimos del bucle. Si da true ejecutamos el cuerpo y volvemos al punto 3.

 ## Bucle while

 ```js
    while(){
        // cuerpo del bucle, es decir, lo que vamos a ejecutar
    }
 ```

 1. valido la `_condicion_` del bucle. si da false, salimos. Si da true ejecutamos una vuelta más.
 2. Ejecutar el cuerpo del bucle. cuando terminemos vuelve al paso 1.


# Arrays tradicionales
 
 Un array es una lista de elementos (preferiblemente iguales). Sería como el `ul` o el `ol` de HTML pero en el mundo de la programación.

 Cada elemento está en un orden dentro del array, es decir, en una posición.

 ## Que puedo hacer con un elemento de un array ?

 - Crear un elemento (C)
 - Leer el valor de un elemento (R)
 - Actualizar el valor de un elemento (U)
 - Eliminar un elemento (D)

 A estas 4 operaciones en informatica se las conoce como `CRUD`

 ## Como creo un array ? 

 El array podemos considerarlo un tipo de dato "nuevo"  y por tanto puedo guardarlas en una variable.

 Cuando un array no tiene elementos se le conoce como array vacío.

 ### Como creo un array vacio ?

Basicamente abriendo y cerrando corchetes `[]`

 ```js
    let myList = [];
 ```


 ### Crear un elemento en el array

 Para crear un elemento debo primero saber la posición de la lista que quiero que ocupe ese elemento. 

 Los arrays empiezan por la posición 0. es decir, el primer elemento es el que esta en la posición 0 del array

 El ultimo elemento es el que esta en la posición  `longitud-1` del array 

1. Conocer la posición donde quiero crear el elemento.
2. Conocer el valor que quiero darle a ese elemento.
3. Asignarle el valor a la variable del array en esa posición.

```js

let myList = []; // tengo creado un array
myList[0] = 'Primer Elemento'; // añado en la posición 0 el siguiente string
myList[99] = 'Elemento numero 100'; // añado en la posición 99 el siguiente string

```

Si la posición estuviese ya ocupada, reemplaza su valor. Esta sería la forma de actualizar (U de CRUD)


### Como leo el valor de un elemento ?

```js
    let myList = [2.3.4] //creo un array con 3 elementos iniciales
    console.log(myList[0]+myList[1]+myList[2]); //pintaría 9 en la consola

    console.log(myList.lenght) //pinta la longitud de un array.
```













































