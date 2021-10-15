//3.- Implementar un gestor de corrección de exámenes que tenga el siguiente algoritmo:
	
//- Debe existir una variable nota que será evaluada.Si es menor de 5 se mostrará en el navegador "SUSPENSO",
 //   entre 5 y 7 "APROBADO", entre 7 y 9 "NOTABLE", entre 9 y 10 "SOBRESALIENTE" y si es 10 "MATRICULA DE HONOR".
	//- En caso de la nota no estar en ese rango de notas se mostrará
//"HA OCURRIDO UN ERROR, CONTACTA CON EL PROFESOR"

let nota = prompt("Cual es tu nota?")

if (nota < 5) {
    document.write(`<div><p>tu nota es ${nota} por ende obtienes un SUSPENSO"</p></div>`);
} if (nota >= 5 && nota < 10){
    document.write(`<div><p>tu nota es ${nota} por ende obtienes un SOBRESALIENTE"</p></div>`);
} if (nota == 10) {
    document.write(`<div><p>tu nota es ${nota} por ende obtienes LA MATRICULA DE HONOR</p></div>`);
} if (nota > 10) {
    document.write("HA OCURRIDO UN ERROR, CONTACTA CON EL PROFESOR");
} else {

}