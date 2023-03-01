/*
Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
|| 
*/
let numero = parseInt(prompt("ingrese un numero"));
let numero1 = parseInt(prompt("ingrese un numero mas"));
let numero2 = parseInt(prompt("ingrese otro numero mas"));
if (numero > numero1 && numero > numero2) {
  document.write("<p>Este numero es mayor==>" + numero + "</p>");
} else if (numero1 > numero && numero1 > numero2) {
  document.write("<p>Este numero es mayor==>" + numero1 + "</p>");
} else if (numero2 > numero && numero2 > numero1) {
  document.write("<p>Este numero es mayor==>" + numero2 + "</p>");
}
