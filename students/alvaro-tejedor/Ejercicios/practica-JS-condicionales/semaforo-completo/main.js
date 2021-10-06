let color = prompt('elegir color')

switch (color) {
    case ('red') : {
        document.write(`<main class="main">
        <div class="container">
            <div class="red"></div>
            <div class="circulo"></div>
            <div class="circulo"></div>
        </div>
        </main> `)
        break;
    }
    case ('ambar') : {
        document.write(`<main class="main">
        <div class="container">
            <div class="circulo"></div>
            <div class="ambar"></div>
            <div class="circulo"></div>
        </div>
        </main> `)
        break;
    }
    case ('green') : {
        document.write(`<main class="main">
        <div class="container">
            <div class="circulo"></div>
            <div class="circulo"></div>
            <div class="green"></div>
        </div>
        </main> `)
        break;
    }
}