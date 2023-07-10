// let edad = 20;

// if (edad >= 18) {
//   console.log("Crack eres un adulto");
// } else {
//   console.log("Eres menor de edad");
// }

// let semaforo = "rojo";

// if (semaforo == "rojo") {
//   console.log("Debe detenerse");
// } else if (semaforo == "amarillo") {
//   console.log("Prepararse para arrancar");
// } else if (semaforo == "verde") {
//   console.log("Arrancar");
// } else {
//   console.log("Solo se pueden los valores rojo, amarillo y verde");
// }

//switch-case
let colorSemaforo = "rojo";

switch (colorSemaforo) {
  case "rojo":
    console.log("Debe detenerse");
    break;
  case "amarillo":
    console.log("Prepararse para arrancar");
    break;
  case "verde":
    console.log("Arrancar");
    break;
  default:
    console.log("El caso no es valido");
}

/*
?EJERCICIO NORMAL
?Realiza un codigo para saber si un numero es par o impar, muestra en consola "Es par" o "Es impar"

!EJERCICIO TRYHARD
!Para los múltiplos de 3, en lugar del número, muestra "Fizz", y para los múltiplos de 5 muestra "Buzz". Para los números que son múltiplos de ambos (es decir, múltiplos de 3 y 5), muestra "FizzBuzz".

TODO: Ambos ejercicios te permiten practicar el uso de condicionales y operadores de módulo (%). Te animo a intentar resolverlo por ti mismo. Si tienes alguna pregunta o necesitas orientación adicional, estaré encantado de ayudarte.
*/

// ?Ejercicio Normal solucion: Saber si un numero es par o impar
// let numero = 4;

// if (numero % 2 === 0) {
//   console.log("El numero " + numero + " es par");
// } else {
//   console.log("El numero " + numero + " es impar");
// }

//! Ejercicio FizzBuzz

// let numero = 8;

// if (numero % 5 == 0 && numero % 3 == 0) {
//   console.log("FizzBuzz");
// } else if (numero % 5 == 0) {
//   console.log("Buzz");
// } else if (numero % 3 == 0) {
//   console.log("Fizz");
// } else {
//   console.log("Este numero no es divisible por 3 y por 5");
// }
