'use strict';

let user1 = {
    edad: 30,
    colorOjos: 'azul',
    casado: true,
    dni: null,
    idiomas: ['español', 'ingles'],
    
};

//delete

delete user1.edad;




console.log(user1);
console.log(user1.edad);

let altavoz = {
    volumen: 50,
    subirVolumen: function (a){
        return altavoz.volumen = a;
    },
    caracteristicas: {
        peso: 500,
        color: 'rojo',
    },

};

console.log(altavoz.subirVolumen(100));
console.log(altavoz.volumen);

