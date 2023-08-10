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

function llegar() {
  console.log("Llegar");
}

function esperar(callback) {
  setTimeout(() => {
    console.log("Esperar ⌛");
    callback();
  }, 2000);
}

function irse() {
  console.log("Irse");
}

llegar();
esperar(irse);

*/

/*
? Ejemplo 3
*/

/* function hola(nombre, callback) {
  setTimeout(() => {
    console.log("Hola");
    callback(nombre);
  }, 2000);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("Bla bla bla bla...");
    callbackHablar();
  }, 1000);
}

function adios(nombre) {
  console.log("Adios " + nombre);
}

hola("Juan", (nombre) => {
  hablar(() => {
    hablar(() => {
      hablar(() => {
        adios(nombre);
      });
    });
  });
}); */

/*
? Ejemplo 4
*/
/* const mostrarDoble = (numero) => {
  console.log(numero * 2);
}
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(mostrarDoble); */

/*
? Ejemplo 5
*/

// function soyAsincrona(miCallback) {
//   setTimeout(() => {
//     console.log("Hola soy asincrona");
//     miCallback();
//   }, 2000);
// }

// console.log("Iniciando proceso...");
// soyAsincrona(() => {
//   console.log("Terminando proceso...");
// });

// Callback hell o piramide de la muerte

/*
? Ejemplo 6
*/

// function hola(nombre, callback) {
//   setTimeout(() => {
//     console.log("Hola " + nombre);
//     callback(nombre);
//   }, 2000);
// }

// function hablar(callbackHablar) {
//   setTimeout(() => {
//     console.log("Bla bla bla bla...");
//     callbackHablar();
//   }, 1000);
// }

// function chao(nombre, otroCallback) {
//   setTimeout(() => {
//     console.log("Chao " + nombre);
//     otroCallback();
//   }, 1000);
// }

// console.log("Iniciando proceso...");
// hola("Angelo", (nombre) => {
//   hablar(() => {
//     hablar(() => {
//       hablar(() => {
//         chao(nombre, () => {
//           console.log("Terminando proceso...");
//         });
//       });
//     });
//   });
// });

// b. Promesas

// Una promesa es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona.

// El promise tiene tres estados:
// 1. Pending: estado inicial, no cumplida o rechazada.
// 2. Resolved: significa que la operación se completó.
// 3. Rejected: significa que la operación falló.

/*
? Ejemplo 1
*/

/* let teHasPortadoBien = true;

const siMePortoBien = new Promise((resolve, reject) => {
  if (teHasPortadoBien) {
    const telefono = {
      marca: "Iphone",
      modelo: "14 Pro Max",
      espacio: "512 GB",
      color: "Gris espacial",
    };
    resolve(telefono);
  } else {
    reject("Te has portado mal 😢");
  }
});

siMePortoBien
  .then((telefono) => {
    console.log("Te portaste bien, recibiste un " + telefono.marca);
  })
  .then(() => {
    console.log("Grabar un video con el iPhone");
  })
  .catch((error) => {
    console.log(error);
  }); */

/*
? Ejemplo 2
*/

// function hola(nombre) {
//   return new Promise((resolve, reject) => {
//     if (typeof nombre !== "string") {
//       reject("El nombre no es un string");
//     } else {
//       setTimeout(() => {
//         console.log("Hola " + nombre);
//         resolve(nombre);
//       }, 2000);
//     }
//   });
// }

// function hablar(nombre) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Bla bla bla bla...");
//       resolve(nombre);
//     }, 1000);
//   });
// }

// function chao(nombre) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Chao " + nombre);
//       resolve();
//     }, 1000);
//   });
// }

// console.log("Iniciando proceso...");
// hola("Angelo")
//   .then(hablar)
//   .then(hablar)
//   .then(hablar)
//   .then(chao)
//   .then(() => {
//     console.log("Terminando proceso...");
//   })
//   .catch((error) => {
//     console.log("Mire el error es el siguiente: " + error);
//   });

// c. Async/await

// Async/await es una forma de escribir código asíncrono que parece síncrono, por detras utiliza promesas.

// function hola(nombre) {
//   return new Promise((resolve, reject) => {
//     if (typeof nombre !== "string") {
//       reject("El nombre no es un string");
//     } else {
//       setTimeout(() => {
//         console.log("Hola " + nombre);
//         resolve(nombre);
//       }, 2000);
//     }
//   });
// }

// function hablar(nombre) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Bla bla bla bla...");
//       resolve(nombre);
//     }, 1000);
//   });
// }

// function chao(nombre) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Chao " + nombre);
//       resolve();
//     }, 1000);
//   });
// }

// async function conversacion() {
//   try {
//     const nombre = await hola(2);
//     await hablar();
//     await hablar();
//     await hablar();
//     await chao(nombre);
//     console.log("Terminando proceso...");
//   } catch (error) {
//     console.log("Mire el error es el siguiente: " + error);
//   }
// }

// console.log("Iniciando proceso...");
// conversacion();

// d. Para que sirve Fetch?

// Fetch es una API de JavaScript que nos permite hacer peticiones HTTP desde el navegador.
// fetch("https://jsonplaceholder.typicode.com/comments/1")

// const url = "https://jsonplaceholder.typicode.com/comments/1";
// fetch(url)
//   .then((respuesta) => respuesta.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// ? Actividad investigar:

// Responder y explicar las siguientes preguntas
// Los grupos deben buscar ejemplos de código, casos de uso reales y ejemplos históricos para respaldar su investigación.

// a. Que son los Callbacks?
// b. Que son las Promesas y para que sirven?
// c. Que es Async/await y para que sirve?
// d. Para que sirve Fetch?

// Cada grupo debe preparar una presentación breve (10 minutos)
// Las presentaciones deben incluir ejemplos de código, diagramas o ilustraciones que ayuden a visualizar conceptos clave.
