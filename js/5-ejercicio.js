/*
Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt

*/
let numero = parseInt(prompt('ingrese un numero'));
let numero1 = parseInt(prompt('ingrese un numero mas'));
document.write('<p>La suma de los numeros ingresados son ==>'+ (numero + numero1)+'</p>');

