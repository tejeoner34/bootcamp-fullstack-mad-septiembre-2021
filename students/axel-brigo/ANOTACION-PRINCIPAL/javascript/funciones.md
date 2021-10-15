# funciones

Las funciones son "plantillas" que nos ayudan a reutilizar codigo. En ellas escribimos el bloque de codigo que queremos reutilizar y podemos usarlas cuando y donde quiera simplemente `invocando a la funcion`.

La funciones tienen dos caracteristicas principales:

- **Parametros de entrada**: son variables que se definen en la cabecera de la funcion y se pueden utilizar dentro de la misma. Cuando el programador quiera utilizar esa funcion le debe pasar los valores a los parametros de entrada.

- **Valor de salida** : Todas las funciones tienen que devolver un valor de salida. este valor se devuelve con la palabra `return`. Si no hay return en una función, lo que devuelve una función es `undefined` .

## Sintaxis

Para declarar una función utilizao la palabra reservada `function` y le asigno un nombre (hay algun caso en el que no hay que asignar nombre).

```js
    //declaración
    function miFunction(){
        // va el codigo de la función
        return _value_; //devuelvo un valor
        // el codigo que hay despues de un return nunca se ejecutará
    }

// Ejecución

miFuncion (); // esto devolvera un valor que puedo guardar en una variable
```

```js
// definicion
    function miFuncionConParametros(miParametro_Uno, miParametroDos){
        console.log(miParametroUno);

        return _value_ ;
    }
    
    //ejecucion

    let a = 3 ;
    miFuncionConParametros ('hola', a); // miParametroUno = 'hola', miParametroDos=3

```

### Ejemplo 

Supongamos que queremos hacer una funcion que me diga si soy familia numerosa o no.

```js
    const numHijos = 2;
    let esFamiliaNumerosa = false;
    if(numHijos >=3){
        esFamiliaNumerosa = true;
    }

    function esFamiliaNumerosa(numHijos){
        let result = false;
        if(numHijos >=3) {
            result = true;
        }
        return result;
    }

    console.log(esFamiliaNumerosa);

```

## Tipos de funciones

### Anonimas

Son funciones que no tienen nombre. O los guardo en una variable  o no las podría ejecutar.

Se utilizan para lo que se conoce como `callbacks`

```js

    let myAnonymousFn = function(){

    }

    // ejecucion
    myAnynymousFn();

```

### Con nombre implícito

Las que hemos visto en el apartado de sintaxis

### callbacks

Son funciones (habitualmente anónimas) que se pasan como parametro de otra funcion y esta ultima puede invocarlo.

```js

    // version de funcion con nombre

    function callbackFn(){
        // el codigo de callback
    }

    function myFunction(cbFn){
    // El codigo de la función
    //en algun momento de la funcion necesito llamar a la callback
        cbFn();// llamo a la funcion que me hayan pasado por parametro
    }

    myFunction(callbackFn); // le paso un tipo de datos function que es lo que me pide `myFunction`

    myFunction(function(){

    }) // Le paso una función anónima como callback para que pueda llamarla 'myFunction'

```

### Arrow Function 

Son una evolución de las funciones que se incluyeron en JS a patir del 2016

Las funciones anteriores se siguen usando. pero la diferencia entre unas y otras es como gestionan el concepto del `this` (veremos en el tema de objetos)

Son siempre funciones anónimas, que podemos guardar en variables o utilizar como callback

#### Sintaxis

```js

        () => {/*AQUI IRIA EL CODIGO*/}  // arrow function

        (a,b) => {/*AQUI IRIA EL CODIGO*/} // arrow function con 2 parametros de entrada

        a => {/*AQUI IRIA EL CODIGO*/} // arrow function con solo un parametro de entrada, no hace falta poner los paréntesis

        numHijos => typeof numHijos === 'number' && numHijos >= 3; // Cuando solo tengo un return en mi función y nada mas de código , puedo quitar los paréntesis y el return. Esta es la función de familia numerosa anterior, transformada a arrow function

        const esFamiliaNumerosa = numHijos => typeof numHijos === 'number' && numHijos >= 3; // asi asigno una arrow function a una variable de tipo funcion

        esFamiliaNumerosa(3); //devuelve true
```