/*
Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
*/

let numero = parseInt(prompt("ingrese un numero"));
if (numero % 2 == 0) {
  document.write("<p>Este numero es divisible en dos</p>");
} else {
  document.write("<p>Este numero no es divisible en dos</p>");
}
if (numero % 3 == 0) {
  document.write("<p>Este numero es divisible en tres</p>");
} else {
  document.write("<p>Este numero no es divisible en tres</p>");
}
if (numero % 5 == 0) {
  document.write("<p>Este numero es divisible en cinco</p>");
} else {
  document.write("<p>Este numero no es divisible en cinco</p>");
}
if (numero % 7 == 0) {
  document.write("<p>Este numero es divisible en siete</p>");
} else {
  document.write("<p>Este numero no es divisible en siete</p>");
}
