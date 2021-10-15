# Arrays Multidimensional y funciones

En Javascript , los arrays tienen una serie una serie

Con estas funciones podemos ordenar, filtrar, buscar, añadir y eliminar elementos, partir la lista en dos y alguna más,

### Funciones de los arrays

##push, pop, shift y un shift

Sirven para añadir o eliminar elementos del principio o del final del array

-**push**: añade  uno o mas elementos al final del array, modificando el array original y devolviendo la nueva longitud del array.

```js

const myList = [4, 2, 1];


const newListLength = myList.push(5); // myList = [4, 2, 1, 5] --- newListLength =4 (nueva longitud del array)

const otherNewLength = myList.push(8,2,6,4); // myList = [4,2,1,5,8,2,6,4]--- otherNewLength = 8

```

-**pop**: Elimina el ultimo elemento del array, *modificando el array original* y devolviendo el elemento elminado


```js

const myList = [4, 2, 1];


const removedItem = myList.pop(); // myList = [4, 2] --- removedItem = 1 (ultimo elemento)

myList.pop(); // myList = [4]

```

- **shift**: Elimina el primer elemento del array, *modificando el array original* y  devolviendo el elemento eliminado

```js
const myList = [4, 2, 1];


const removedItemFirst = myList.shift(); // myList = [2, 1] 

myList.shift(); // myList = [1]

```

- **unshift**: Insertar al principio uno o varios elementos, *modificando el array original* y devolviendo la nueva longitutud

```js
const myList = [4, 2, 1];


const newListLength = myList.unshift(5); // myList = [5, 4, 2,1] --- newListLength= 4 (nueva longitud array)

myList.unshift(8,2,6,4); // myList = [8,2,6,4,4,2,1,5] --- nueva longitud del array = 8

```

### forEach vs map

Son funciones que sirven para recorrer uno a uno los elementos del array y realizar alguna operación con ellos.

Lo que aceptan como parámetro es una función **callback** .

Esta función callback tiene la siguiente estructura:

```js

    (value, index, arr) => {/** CODIGO A EJECUTAR **/}

```

- **value**: es el elemento de la iteración actual del bucle interno de la función.
-**index**: es el indice de la iteración actual del bucle interno
-**arr**: Es el array completo, sobre el que estamos ejecutando la función

La función la definimos nosotros como programadores y no necesariamente tenemos que definir todos los parámetros, solo definiremos los que vamos a usar.

Para que sepais lo que pasa por debajo de estas funciones de los arrays, un ejemplo con bucle for seria algo asi: 

```js
// esta sería la funcion callback que nosotros definiremos como desarrolladores
 const callbackFn = (v,i,arr) => {/**CODIGO NUESTRO**/}

 // esto es lo que hace JS por debajo (para el ejemplo del forEach, para el resto sera parecido)

```

#### forEach

Se utiliza para dos cosas principalmente:

-Actualizar o modificar variables externas que dependan de valores de un array
-Modificar los valores del **array original** o el propio array

**Esta funcion NO devuelve nada, es decir, devuelve undefined** 

```js

    const myList = ['Axel', 'Lisel','Pedro'];

    let listConcatenada = '';

    myList.forEach (name => listConcatenada += name) ; // sumo a la lista el nombre de la iteracion actual

    console.log(listaConcatenada); //"AxelLiselPedro"
```

Ejemplo del caso 2 

```js

    const myList = ['Axel','Lisel','Pedro'];

    myList.forEach((name, i, arr)=> arr[i] += 's'); //añadir una s al final de cada elemento del array

    console.log(myList); //['Axels','Lisels', 'Pedros']

```

#### map

Recorre el array, generando y devolviendo uno nuevo. La información de cada posicion del nuevo array es lo que devuelva la funcion callback


```js

const myList = [3, 5, 6];

// quiero un nuevo array con los cuadrados del array original
const myListSquare = myList.map (v => v**2); // [9, 25 ,36 ]

```


#### find

Nos devuelve el primer elemento del array que cumpla la condición que le indiquemos en el callback. Si no hay ningun elemento que lo cumple devolverá `undefined`

```js

const myList =  [56, 55, 54, 55];
// encontrar el primer numero que sea mayor o igual a 54
const foundItem = myList.find(v => v>=54); // devuelve 566

// encontrar el primer numero que sea mayor o igual a 54 y menos o igual a 55
const foundItem = myList.find(v => v>=54 && v<=55); // devuelve 55

const itemIndexFound = myList.findIndex((v) => v >=54 && v <= 55); // devuelve1
myList[itemIndexFound]; //55
```


#### filter

Devuelve un subarray, es decir, un array de longitud <= longitudOriginal. con los elementos que cumplan la condicion del callback. **NO modifica el array original**. si no hay ningun elemento que cumpla la condicion, entonces devuelve un array vacio.


```js

const myList =  [56, 55, 54, 55];

//array filtrado con los elementos que sean mayor o igual a 54
const filteredList = myList.filter((v) => v >= 54); // devuelve [56, 55, 54, 55]

// array filtrado con los elementos que sean mayor o igual a 54 y menos o igual a 55
const otherFilteredList = myList.filter((v) => v >= 54 && v <= 55); // devuelve [55, 54, 55]

// array filtrado con los elementos que esten en la posicion par
myList.filter ((v, i)=> i%2 === 0); [56,54]

// array filtrado con los elementos que esten en la posicion par y ademas sean mayor que 55
myList.filter((v, i) => 1%2 === 0 && v > 55); [56]
```

#### sort

Sirve para ordenar elementos en un array. Si no le pasamos nada, por defecto el `sort` realiza una ordenación por caracteres (por su posicion unicode)

```js
 [4,5,10,3].sort(); // [1,10,2,3] (El uno esta antes siempre que el 2 o el 3)
```

Para poder comparar los elementos de una lista, el sort acepta una `funcion de comparacion`. A esta funcion le entraran dos elementos de la lista (a,b) y debemos devolver si `a>b`, si `a<b` o si `a=b` ;

La función de comparación debe devolver un `number`

- `>0`: Significa que b se situara antes que a en el array original
- `<0`: Significa que a se situará antes que b en el array
- `=0`: Significa que a y b mantendran su orden entre ellos (NO SU POSICION) en el array

Ejemplos: 

```js

    // ordenación de numeros ascendente
    [5,2,6,2,3,1].sort((a,b) => a-b); //  [1,2,2,3,5,6] 

    // ordenación de numeros descendente
    [5,2,6,2,3,1].sort((a,b) => b - a); //[6,5,3,2,2,1]

    // ordenación, primero los pares y luego los impares
    [5,2,6,2,3,1].sort((a,b) =>{
        if(a%2===0 && b%2 === 1){
            //primero par y segundo es impar
            return -1;
        }

        if(a%2===1 && b%2 === 0){
            //primero impar y el segundo es par
            return 1;
        }

        return a-b;
    }); //[2,6,2,5,3,1]


    //optimizacion del anterior
    [5,2,6,2,3,1].sort((a,b)=> (a%2) - (b%2) ); // [2,6,2,5,3,1]

    // ordenar un array de strings por la longitud del string en order ascendente
    ["hola", "adios", "b", "a", "esternocleidomastoideo"].sort (
        (a,b) => a.length - b.length
    )
```

#### SPLICE
```js
// splice
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
```


