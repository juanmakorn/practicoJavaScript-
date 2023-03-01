/*
Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
*/

let numero = parseInt(prompt("ingrese un numero"));
let numero1 = parseInt(prompt("ingrese un numero mas"));
if (numero > numero1) {
  document.write("<p>Este numero es mayor==>" + numero + "</p>");
} else {
  document.write("<p>Este numero es mayor==>" + numero1 + "</p>");
}
