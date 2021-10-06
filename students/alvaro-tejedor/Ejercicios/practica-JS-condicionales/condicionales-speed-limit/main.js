let speedLimit = ''
let airQuality = parseInt(prompt('Escribir índice calidad del aire'))

if(airQuality > 65){
    speedLimit = '70km/h'
}else {
    speedLimit = '120km/h'
}

document.write(`<div class="background">
                    <p>Velocidad permitida hoy: ${speedLimit}</p>
                </div>`)
            

                