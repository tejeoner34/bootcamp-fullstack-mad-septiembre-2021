# Objetos

Son un tipo de datos en JavaScript y ademas son la base de lo que se conoce como programación orientada a objetos (POO = Lo veremos mas adelante).

Un objeto representa a un individuo, dentro de su "especie" (clase).

Ese individuo tiene caracteristicas (propiedades) y acciones (metodos)
Las acciónes son funciones.

Las propiedades pueden ser de cualquier tipo de datos, incluido otro objeto

## Como creo un objeto en JS ?

Tenemos que abrir y cerrar llaves `{}` y dentro escribir un par `<nombre_propiedad>:<valor_propiedad>,`

```js

let personaAlex = { // guardamos un objeto en una variable
    nombre : 'Alex',
    edad : 31,
    calvo : true,
    madre : { // puedo encadenar mas objetos
        nombre: 'mariana'
        edad: 60
    },
    alumnos : ['axel', 'pri','guille']
    andar : function(){/** COSAS DE ANDAR**/}
    correr : ()=> {/** COSAS PARA QUE ALEX CORRA**/}
};

// ejemplo de un array de objetos

let arrObj = [
    {
        ... // pongo las propiedades de este objeto
    },
    {
        ... // pongo las propiedades de este otro objeto
    }

]

```

## como accedo al valor de una propiedad de un objeto?

Tenemos que pensar en las propiedades y metodos de un objeto como subvariables. Funcionan igual que las variables que conocemos, lo unico que hay que llegar a ellas 'navegando' por la profundidad del objeto.

Para acceder al siguiente nivel del objeto se utiliza el `<nombre_var_obj>.<nombre_propiedad>`


```js

let personaAlex = { 
    nombre : 'Alex',
    edad : 31,
    calvo : true,
    madre : { 
        nombre: 'mariana'
        edad: 60
    },
    alumnos : ['axel', 'pri','guille','Luci']
    andar : function(){}
    correr : ()=> {}
};

// quiero saber si la persona es calva

if(personsAlex.calvo) {
    // accedo al valor de la propiedad calvo del objeto personaAlex y nos da un boolean
    //cosas que hacer si la persona es calva
}

if(personaAlex.calvo && personaAlex.edad > 31 && personaAlex.madre.edad > 60){

}

// los Alumnos que empiezan por L 
let filtered = personaAlex.alumnos.filter(a => a.toLowerCase().startWith('l'));

// ejecutar la funcion andar

personaAlex .andar(parametro); //ejecuto las funciones

```

### Alternativa flexible para acceder a las propiedades de un objeto

Tambien existe una forma de acceder a las propiedades de un objeto utilizando  `[]` y poniendo un string con el nombre de la propiedad a la que quiero acceder


```js

    personaAlex['calvo']; // esto es un boolean

    personaAlex['edad']; //esto es un number

     personaAlex['madre'].edad; //esto es un number

      personaAlex['madre']['edad']; //esto es un number

      personaAlex ['alumnos'].filter(...);
```
Esta forma de acceder nos es util si tenemos que obtener una propiedad cuyo nombre lo generamos de manera variable en nuestro algoritmo.

## Como cambio el valor de una propiedad existente ?

Al igual que las variables, tengo que llegar a la propiedad que quiero cambiar del objetoy con una asignación le cambio el valor


```js
let personaAlex = { 
    nombre : 'Alex',
    edad : 31,
    calvo : true,
    madre : { 
        nombre: 'mariana'
        edad: 60
    },
    alumnos : ['axel', 'pri','guille','Luci']
    andar : function(){}
    correr : ()=> {}
};

// cambiarme el nombre

personaAlex.nombre = 'Otro Nombre'; // a partir de aqui personaAlex.nombre ya no tiene el valor 'Alex'

// sumar uno a la edad

personaAlex.edad++;

//o
personaAlex.edad +=1;

// añadir un nuevo alumno

personaAlex.alumnos.push('Nuevo Alumno');

```

## como creo nuevos atributos en el objeto? 

Primero debería acceder al atributo, dandole un nombre. A continuación deberia asignarle un valor con el `=`

```js
let personaAlex = { 
    nombre : 'Alex',
    edad : 31,
    calvo : true,
    madre : { 
        nombre: 'mariana'
        edad: 60
    },
    alumnos : ['axel', 'pri','guille','Luci']
    andar : function(){}
    correr : ()=> {} 
    }

    // añado el primer apellido como propiedad del objeto
    personaAlex.apellido = 'Gonzalez';
    // o en funcion del caso
    personaAlex= ['a´pellido']= 'Gonzalez';

    //añadir un metodo a madre
    personaAlex.madre.castigar = () => {};
    // o
    personaAlex.madre.castigar = funcion() {}
    //o
    personaAlex.madre[`castigar`] = function(){}
```

## como elimino una propiedad de un objeto?

Utilizaria la palabra reservada ` delete` delante del acceso a la propiedad del objeto.

``` js
let personaAlex = { 
    nombre : 'Alex',
    edad : 31,
    calvo : true,
    madre : { 
        nombre: 'mariana'
        edad: 60
    },
    alumnos : ['axel', 'pri','guille','Luci']
    andar : function(){}
    correr : ()=> {} 
    };

    // eliminar la edad
    delete personaAlex.edad; // a partir de aqui ya no existira edad dentro de personaAlex y por tanto cualquier acceso daría `undefined`

    // eliminar la edad de madre
    delete personaAlex.madre.edad ;

```


### Arrays bidimensionales 

Nos permiten representar una matriz de filas y columnas. Por ejemplo una pantalla(pixeles de alto x pixeles de ancho), tablero de ajedrez.

Para poder representarlo en JS necesitariamos tener un array cuyos elementos tambien sean arrays

```js

    // ejemplo de array 2x2 de números
    let array2D =  [
        [2, 4], //fila 0
        [3, 5], //fila 1
    ];

    array2D[0][1]; // esto me va a devolver un 4, accediendo a la fila 0 y a la columna 1

    // como se recorre un array bidimensional
    // ersion for/while
    for(let i = 0 ; i<array2D.lenght; i++) { //for recorrer las filas

        for(let j=0; j<array2D[i].lenght; j++) { // recorro las columnas
            console.log(array2D[i][j]) //obtengo la fila i, la columna j
        }
    }

    //version funciones arrays

    array2D.forEach ((r,i) => { //recorro las filas (rows)})
    r.forEach((c,j)=> {
        // c ya tiene el valor, tengo de manera opcional los indices por si los necesitase.
        Si no los usase no harian falta definirlos
    })
    })

    //si no los defino

    array2D.forEach(r => r.forEach(c => console.log(c)));

```