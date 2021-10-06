let nota = parseInt(prompt('introduce una nota'))


if (isNaN(nota)){
    alert('Por favor escribe una nota válida')
}else if (nota >= 0 && nota < 5) {
    document.write('SUSPENSO')
}else if (nota >= 5 && nota < 7) {
    document.write('APROBADO')
}else if(nota >= 7 && nota < 10) {
    document.write('SOBRESALIENTE')
}else if(nota === 10) {
    document.write('MATRÍCULA DE HONOR')
}else {
    document.write('HA OCURRIDO UN ERROR, CONTACTA CON EL PROFESOR')
}



