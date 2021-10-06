
let bgColorClass = '';
let userColor = prompt('Escribe el color');

switch(userColor){
    case ('ambar') : {
        bgColorClass = 'bg_ambar';
        document.write(`<div class="box ${bgColorClass}">
                        <p>Pare</p>
                        </div>`);
        break;
    }

    case ('ambar2') : {
        bgColorClass = 'bg_ambar2';
        document.write(`<div class="box ${bgColorClass}">
                        <p>Pare</p>
                        </div>`);
        break;
    }


    case ('red') : {
        bgColorClass = 'bg_red';
        document.write(`<div class="box ${bgColorClass}">
                        <p>Pare</p>
                        </div>`);
        break;
    }

    case ('green') : { 
        bgColorClass = 'bg_green';
        document.write(`<div class="box ${bgColorClass}">
                        <p>Puede pasar</p>
                        </div>`);
        break;
        
    }

    case ('broken') : {
        bgColorClass = 'broken';
        document.write(`<div class="box ${bgColorClass}">
                            <p class="texto-broken">Puede pasar</p>
                        </div>`);
                        
        break;
    }
 
}


