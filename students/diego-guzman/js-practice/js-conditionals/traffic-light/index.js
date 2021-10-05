let trafficLight = Math.floor(Math.random() * 5).toString();

switch(trafficLight) {
    case '1':
        document.write('<div class="traffic-light interAmb"><p class="traffic-light--text">You may continue carefully</p></div>');
        break;
    case '2':
        document.write('<div class="traffic-light amb"><p class="traffic-light--text">Please stop</p></div>');
        break;
    case '3':
        document.write('<div class="traffic-light red"><p class="traffic-light--text">Do not continue</p></div>');
        break;
    case '4':
        document.write('<div class="traffic-light broken"><p class="traffic-light--text">The trafficlight is broken. You may continue at your own risk</p><div class="traffic-light--broken"></div></div>');
        break;

    default: 
        document.write('<div class="traffic-light green"><p class="traffic-light--text">You may continue</p></div>');
        break;
}

/* <div class="traffic-light--broken"></div> */
// </div><img class="stop" src="/stop.png"></img>