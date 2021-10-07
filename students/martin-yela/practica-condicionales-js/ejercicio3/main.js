let nota = parseInt(prompt('Dime la nota que obtuviste'));

if (isNaN(nota)) {
    alert('No has introducido un número');
} else if (nota < 5) {
    document.write('Tu nota es SUSPENSO, estudia más');
} else if (nota >= 5 && nota < 7) {
    document.write('Estas aprobado');
} else if (nota >= 7 && nota < 9) {
    document.write('Tu nota es NOTABLE!');
} else if (nota >= 9 && nota < 10) {
    document.write('Tu nota es SOBRESALIENTE!');
} else if (nota === 10) {
    document.write('Tienes MATRICULA DE HONOR!!');
} else {
    document.write('HA OCURRIDO UN ERROR, CONTACTA CON EL PROFESOR');
}