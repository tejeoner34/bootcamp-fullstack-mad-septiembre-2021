class Circle {

    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }

    areaCalculator(){
        return Math.pow(this.radius, 2)*Math.PI; 
    }

    perimeterCalculator(){
        return 2 * this.radius * Math.PI;
    }

}

const circle1 = new Circle(3, 'red');
const circle2 = new Circle(15, 'blue');

const pDomCircle1 = document.createElement('p');
pDomCircle1.textContent = `Area es ${circle1.areaCalculator().toFixed(2)} y el perímerto es ${circle1.perimeterCalculator().toFixed(2)}`;
document.body.appendChild(pDomCircle1);
const pDomCircle2 = document.createElement('p');
pDomCircle2.textContent = `Area es ${circle2.areaCalculator().toFixed(2)} y el perímerto es ${circle2.perimeterCalculator().toFixed(2)}`;
document.body.appendChild(pDomCircle2);