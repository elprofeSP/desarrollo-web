// 1. Codigo sincrono

// Tradicionalmente, JavaScript es un lenguaje de programación de un solo hilo. Esto significa que solo puede ejecutar una tarea a la vez.
// En javascript sincrono, las tareas se ejecutan en secuencia una tras otra. Cuando una tarea se completa, la siguiente comienza inmediatamente.

// let numeroFinal = 0;
// for (let i = 0; i < 1000000000; i++) {
//   numeroFinal++;
// }
// console.log(numeroFinal);
// document.body.style.backgroundColor = "red";
// console.log("Fin");

// 2. Codigo asincrono

// JavaScript es un lenguaje de programación asíncrono, lo que significa que puede manejar múltiples tareas al mismo tiempo.

// a. Callbacks
// b. Promesas
// c. Async/await

// a. Callbacks

// Callbacks son funciones que se pasan como argumentos a otras funciones. Se utilizan para ejecutar código después de que se haya completado una tarea.

/* 
? Ejemplo 1
function calculadora(num1, num2, operacion) {
  return operacion(num1, num2);
}

function sumar(a, b) {
  console.log(a + b);
}

function restar(a, b) {
  console.log(a - b);
}

calculadora(3, 7, sumar);
calculadora(5, 2, restar);
*/

/* 
? Ejemplo 2 
*/

function llegar() {
  console.log("Llegar");
}

function esperar(callback) {
  setTimeout(() => {
    console.log("Esperar");
    callback();
  }, 2000);
}

function irse() {
  console.log("Irse");
}

llegar();
esperar(irse);
