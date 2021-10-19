

// creamos la clase Animal

class Animal {
    constructor(type, name, age, legsNumber, color, imagen, sonido){
        this.type = type;
        this.name = name;
        this.age = age;
        this.legsNumber = legsNumber;
        this.color = color;
        this.imagen = imagen;
        this.sonido = sonido;
    }

    showNoiceAndImage(){
        const divDom = document.createElement('div');
        divDom.classList.add(`div__${this.type}__${this.name}`);
        document.body.appendChild(divDom);
        const pDom = document.createElement('p');
        pDom.textContent = `haz click para ver una foto y qué ruido hace el ${this.type}`;
        divDom.appendChild(pDom);
        const button = document.createElement('button');
        button.textContent = 'Click';
        divDom.appendChild(button);
        button.addEventListener('click', e => {
            let audio = new Audio(this.sonido);
            audio.play();
            const divImg = document.createElement('div');
            divImg.classList.add(`img-container__${this.type}`);
            divDom.appendChild(divImg);
            const imgDom = document.createElement('img');
            imgDom.classList.add(`img__${this.type}__${this.name}`);
            imgDom.setAttribute('src', this.imagen);
            imgDom.style.width = '400px';
            imgDom.style.height = '400px';
            divImg.appendChild(imgDom); 
        })
    }
}


// creamos la subclase Dog
class Dog extends Animal {

}


// creamos un objeto dentro de la clase Dog
const pancho = new Dog('perro', 'Pancho', 3, 4, 'white', 'https://www.collinsdictionary.com/images/full/dog_230497594.jpg', '../ejercicio-1/0000990.mp3');
pancho.showNoiceAndImage();


// creamos la subclase Cat
class Cat extends Animal {

}

// creamos un objeto dentro de la clase Cat
const garfield = new Cat('gato', 'Garfield', 4, 4, 'orange', 'https://www.ngenespanol.com/wp-content/uploads/2018/08/%C2%BFQu%C3%A9-raza-es-Garfield.jpg', '../ejercicio-1/Two Cats Meowing - QuickSounds.com.mp3')
garfield.showNoiceAndImage();


// creamos la subclase Chicken

class Chicken extends Animal {

}

//creamos un objeto de la clase Chicken

const gallinaPaca = new Chicken('gallina', 'Paca', 2, 2, 'white', 'https://st.depositphotos.com/1526816/2124/v/600/depositphotos_21243767-stock-illustration-a-hen-and-her-seven.jpg', '../ejercicio-1/Chicken-Clucking-Short-www.fesliyanstudios.com.mp3')
gallinaPaca.showNoiceAndImage();

