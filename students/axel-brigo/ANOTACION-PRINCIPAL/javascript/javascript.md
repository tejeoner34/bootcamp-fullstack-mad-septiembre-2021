# Introducción JS

Es el `lenguaje de programacion` utilizado para que el usuario pueda interactuar con la web.-

Es junto a HTML y CSS , lo que utilizamos para construir una página o un sitio web.

## Como puedo enlazar Javascript en una pagina web ?

Tenemos principalmente dos formas de enlazar el JS dentro de una página HTML.

1. Utilizando un tag HTML llamado `script` 

```html
    <script>
        console.log('Hello world from script tag')
    </script>
```

2. Desde un archivo externo

Puedo escribir mi JS en un archivo externo con una extension `.js` y en el escribir mi código JavaScript.

Debo enlazarlo en la página HTML utilizando la etiqueta `<script>` , pero en vez de escribir el JS dentro, utilizo el atributo `src` co la URL del archivo (similar al href del css).

```js
<script src="./utl-archivo.js"></script>
```

## Cuatro instrucciones para empezar

### Escribir HTML en la web

`document.write('El HTML o el Texto que quiera pintar en la web')`

Esta instruccion me permite pintar en la web codigo HTML. De momento estara permitida, pero la semana que viene dejara de estarlo

```js
    // Esto escribe un parrafo en la web
    document.write('<p>Hola mundo Write</p>')
```


### Escribir texto en la consola de las devtools

`console.log('El texto que quiero pintar en las devtols')`

Esta instrucción permite pintar en las devtools el texto que vaya entre comillas.

```js

    //Esto escribe un texto en la consola de las devtools en la web
    console.log('Hola mundo devtools')

```

### Mostrar un popup (dialogo) al usuario

`alert('Texto que quiero poner en el popup')`

Esto muestra al usuario una ventana con la informacion que metamos entre las comillas simples.

```js
/// Esto muestra al usuario un texto como popup en la web
alert('Hola mundo popup');
```
### Solicitar información al usuario

`let userResult = prompt('Por favor introduce algo');

Esto solicita al usuario informacion y guarda lo que el usuario ha introducido en la variable (lo veremos en el siguiente capitulo)  `userResult` .

Esta variable se puede poner en cualquiera de los metodos anteriores para mostrar la informacion que el usuario ha introducido.

```js

// solicito la información al usuario y la guardo en una variable

let userResult = prompt ('Por favor introduce algo');

//Esto va a pintar un popup con lo que el usuario ha introducido
alert(userResult);

```

# Variables y tipos de datos


## Variables

Es un espacio del ordenador donde guardo información para despues poder utilizarla.

El ordenador es como si tuviese una cajonera gigante y mini-cajones donde yo puedo guardar la información. A estos mini-cajones se les llama variable.

Una variable tiene 4 situaciones:

1. **Declaración**: Es el momento en el que yo creo una variable y le asigno un alias (El nombre de la variable).

En JS las variables se declaran con la palabra `let` o la palabra `const`.

- **let** : se usa para declarar variables que cambian a los que se le asigna un valor despues de declararlas.

- **const** : Su nombre viene de constante y se usa para variables a las que solo se les da valor cuando se declaran, y ese valor nunca mas cambia.


A la palabra (let o const) le sigue el alias que yo quiera utilizar para esa variable, es decir, el nombre de esa variable.

```js
let miPrimeraVariable;
const MI_PRIMERA_VARIABLE_CONSTANTE;
```

2. Inicialización

Esta es la fase en la que le damos el primer valor a una variable. Se hace en el momento de la declaración poniendo un `=` y el valor que queremos guardar.

Para el `const` solo se le puede guardar información durante la inicializacion.

```js

//Declaración + inicializacion
let MiPrimeraVariable = 'Valor para el let';
const MI_PRIMERA_VARIABLE_CONSTANTE = 'valor para el const';
```
3. Asignación

Es la fase donde le damos o cambiamos el valor de una variable ya declarada previamente.

Se puede hacer en cualquier punto del codigo utilizando la siguiente estructura. `nombreVariable` = 'Nuevo valor'.

A partir de una asignacion las siguientes instrucciones tendran el nuevo valor de la variable.

Esto solo se puede aplicar a un `let`. el `const` haria fallar a JavaScript.


```js
    // asignación
    miPrimeraVariable= 'valor para el let'
    // esto produciria un error en la asignacion a una constante
    MI_PRIMERA_VARIABLE_CONSTANTE = 'valor para el const'
```

    4. Obtención del valor

    Cuando en mi algoritmo quiero usar el valor de la variable, simplemente escribo un nombre de la variable donde la quiera usar.

## Tipos de datos

Cuando creo una variable le tengo que indicar el tipo de variable que es.

JavaScript es `debilmente tipado`, es decir, las variables obtienen el tipo que son utilizando el valor que se le ha asignado.

*No debemos cambiarle el tipo de datos a una variable ya declarada e inicializada.*

Todos los lenguajes de programación vienen con unos tipos pre-definidos que se conocen como `tipos primitivos`.

En JavaScript hay 7 tipos de datos primitivos(veremos 6)

- **string** : representa una cadena de caracteres, nos ayuda a escribir letras, palabras o frases. en JS para poder dar valor a una variable como string, envolvemos el texto en comillas simples `'aqui va el texto'` .

```js
    let myFirstString = 'Hola esto es mi primer string'
```

- **number**: permite guardar informacion numerica, tanto enteros como reles. Esto nos puede ayudar a hacer operaciones matematicas a posteriori.

```js
    let myFirstNumber = 10;
    let MyFirstFloarNumber = 19.05;
    let myFirstNegative = -10;
```

- **bigInt** : permite guardar numeros enteros muy grandes (tambien guarda los pequeños).

- **boolean**: permite guardar una variable que solo tiene dos estados: 
verdadero(true) o falso (false)

Para darle valor se utilizan las palabras reservadas `true` para verdadero o `false` para falso

```js
    let myFirstBoolean = true;
    let MyFirs FalseBoolean = false;
```

- **undefined**: Es un tipo de datos que JS asigna a una variable cundo esta se declaró pero nunca tuvo ni inicializacion o asignacion.

```js
    let myFirstUndefined;
    let MyFirstInitializedUndefined = undefinded;
```

- **null** : Es un tipo de datos que damos a una variable para proporionarle ningun valor, es decir, la posicion 0 de la memoiria ram.

```js
    let MyFirstNull = 'null';
```

para saber el tipo de datos que tiene una variable en un momento concreto del algoritmo podemos usar `typeof <nombre_var>`

```js
let str = 'hola';
typeof str; // esto devolvera un string
```

Ma adelante veremos los `objects` y los `arrays` .


# Expresiones 

Se utilizan en los lenguajes d eprogramacion para operar con variables.

Todas las expresiones tienen valores de entrada, simbolos de operacion y SIEMPRE devuelve un resultado cuando terminan de operar.

## Expresiones aritmeticas

Son las operaciones que puedo hacer con los `number` o `bigInt`

Necesitare dos valores numéricos y puedo hacer las siguientes operaciones.

- **suma**: realiza la suma aritmetica de dos operandos. se escribe utilizando el simbolo `+`. ej: `2+2` .

- **resta**: símbolo `-`
- **multiplicacion** : simbolo `*`
- **division**: simbolo `/`
- **resto de la division**: símbolo `%` 
- **potencia**: simbolo `**` 

```js
    2+2; //devuelve 4
    3-2; //devuelve 1
    3*3 //devuelve 9
    4/1 //devuelve 4
    4%1 //devuelve 0
    4**2//devuelve 16
    // tambien se podrian usar variables

    let  operandoUno = 4;
    let operandoDos = 2;
    let resultado = operandoUno + operandoDos;
    //resultado a partir de aqui va a valer 6 y sera un tipo de datos number
```

## Operaciones con strings

### Concatenación

Se pueden juntar (concatenar) dos cadenas de caracteres. Para ello lo trataremos como una suma, pero entre strings.

```js
    `hola` + `adios`; // como resultado tendramos el string 'holaadios'
    let name = 'FS Bootcamp';
    let greeting = 'Hello ' + name; //greeting tendra el valor 'Hello FS Bootcamp'
```

Que resultado de aesto?

```js
    let name = 'Neoland' ;
    let students = 13;
    let result = name + students; // ?? ==> Neoland13
```


## Expresiones booleanass

Son las operaicones que podemos hacer con los tipos de datos booleanos.
El resultado de una expresion booleana solo puede tener dos posibles valores: `true` o `false`

Existen tres opeaciones mas utilizadas cuando trabajamos con booleanos:

### AND

El simbolo para hacer una operación AND es `&&` 

```js
const A =  true;
const B = false;
const result = A && b; //Result tiene el valor FALSE
```

### OR

El simbolo para hacer la operaicon or es `||`

### NOT

El simbolo para hacer un NOT es `!` delante de la variable o el valor al que queremos aplicarle la not 

```js
const A = true;
const result = !A; // Result tiene valor False
```

### Operadores de comparacion

Me ayudan a comparar dos valores o variables y me devuelven un booleano.

Principalmente se usa con `numbers`, aunque el comparador de igualdad tambien se usa mucho con `strings` y otros tipos de datos

- **>** : El simbolo entre dos valores o variables te da true o false si se cumple la comparación. EJ: `10 > 3` devuelve `true`

- **<** True si la primera es menos estricto que la segunda EJ:
10<3 da `false`

- **<**: True si la primera es menos estricto que la segunda. EJ: `10<3` da `false`

# Sentencias condicionales

Sirven para poder bifurcar el camino de mi codigo en función de una condición.

La condición no es mas que una expresión booleana.

## if-else

Nos permite ejecutar un bloque de codigo si se cumple una condicion y ejecutar otro bloque de codigo diferente si no se cumple.


### Sintaxis

```js
if (<condicion>) {
    // se escriben todas las instrucciones que queremos que se ejecuten cuando la condicion devuelve true
}
else{
    // Se escriben todas las instrucciones que queramos que se ejecuten cuando la condicion da false
}

```

## Switch

Sirve para ejecutar un bloque de codigo en funcion del valor que tenga una variable

### Sintacis Switch

```js
switch(_nombreVar_) {
    case _valorCasoUno_ : {
        // escribo las lineas de codigo que haya que ejecutar cuando la variable  _nombreVar_ valga _valorCasoUno_
        break; //esta debe ir al final de cada caso para que el switch no siga
    }
    case _valorCasoDos_: {
        // escribo las lineas de codigo que haya que ejecutar cuando la variable _nombreVar_ valga _valorCasoDos_
        break;
    }
    ... // podemos poner todos los casos que queramos
    default: {
        // Lo que queremos que se ejecute si la variable _nombreVar_ no cumple ninguno de los casos anteriores
        break;
    }
}

```

## Operador ternario

Se utilizan para asignar valor a una variable en función de una condición.

```js

const condicionFamiliar = numHijos > 3 ? 'Familia Numerosa' : 'Familia No Numerosa';