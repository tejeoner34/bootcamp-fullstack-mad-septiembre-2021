

// creación de la clase dog

class Dog {
    constructor(name, legsNumber, color){
        this.name = name;
        this.age = 0;
        this.legsNumber = legsNumber;
        this.color = color;
    }

    makeNoice(){

        let audioDog = new Audio('./0000990.mp3');
        audioDog.play();

    }

    showAnimal(){
        const imgDivPerro = document.createElement('div');
        imgDivPerro.classList.add('imgDivPerro');
        document.querySelector('.div-button-perro').appendChild(imgDivPerro);
    }

}

//creacion de objeto perro

const golden = new Dog('Pancho', 4, 'brown');


// creacion clase gato

class Cat {
    constructor(name, legsNumber, color){
        this.name = name;
        this.noice = 'Miau';
        this.age = 0;
        this.legsNumber = legsNumber;
        this.color = color;
    }

    makeNoice(){
        
        let audioCat = new Audio('./Two Cats Meowing - QuickSounds.com.mp3');
        audioCat.play();
    }

    showAnimal(){
        const imgDivGato = document.createElement('div');
        imgDivGato.classList.add('imgDivGato');
        document.querySelector('.div-button-gato').appendChild(imgDivGato);
    }

}

// creación de objeto gato
const razaGato = new Cat('Garfield', 4, 'black');


// creacion clase gallina

class Chicken {
    constructor(name, legsNumber, color){
        this.name = name;
        this.noice = 'CuCu';
        this.age = 0;
        this.legsNumber = legsNumber;
        this.color = color;
    }

    makeNoice(){
        let audioChicken = new Audio('./Chicken-Clucking-Short-www.fesliyanstudios.com.mp3');
        audioChicken.play();
    }
        
    

    showAnimal(){
        const imgDivGallina = document.createElement('div');
        imgDivGallina.classList.add('imgDivGallina');
        document.querySelector('.div-button-gallina').appendChild(imgDivGallina);
    }

}

// creacion de objeto gallina

const gallinaPaca = new Chicken('Paca', 2, 'white');


// creacion de boton para que nos imprima lo de arriba

// boton para perro

const dogButton = document.querySelector('.button-perro')
dogButton.addEventListener('click', e => {
    golden.showAnimal();
    golden.makeNoice();
} )

// boton gato

const catButton = document.querySelector('.button-gato')
catButton.addEventListener('click', e => {
    razaGato.showAnimal();
    razaGato.makeNoice();
} )

// boton gallina

const chickenButton = document.querySelector('.button-gallina')
chickenButton.addEventListener('click', e => {
    gallinaPaca.showAnimal();
    gallinaPaca.makeNoice();
} )



