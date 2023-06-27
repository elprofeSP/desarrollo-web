// + sumar
// - restar
// / dividir
// * multiplicar

//Ejercicio sumar dos numeros con funciones

// function sumar(a, b) {
//   return a + b;
// }

// function mostrarEnPantalla() {
//   var numero1 = parseFloat(prompt("Cual es el primer numero?"));
//   var numero2 = parseFloat(prompt("Cual es el segundo numero?"));

//   var resultado = sumar(numero1, numero2);

//   document.write("La suma es: " + resultado);
//   document.write("<br>Finalizo la aplicacion");
// }

// mostrarEnPantalla();

// Calcular el area de un triangulo
/*
Area = (base * altura) / 2
*/
var nombre = prompt("Cual es tu nombre?");

var base = prompt("Cual es la base del triangulo?");
var altura = prompt("Cual es la altura del triangulo?");

var area = (base * altura) / 2;

// template string
document.write(`Hola ${nombre} el area del triangulo es: ${area} cm2`);

//String normal
// document.write(
//     "Hola " + nombre + " el area del triangulo es: " + area + " cm2"
// );

/*
    = -> operador de asignacion, guardar un valor en una variable
    == -> operador de comparacion, compara el valor de algo
    === -> operador de comparacion de el valor y tipo de dato
    <
    >
    <=
    >=
*/
