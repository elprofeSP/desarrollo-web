/*
?ACTIVIDAD EJERCICIOS
1. Contar elementos pares e impares: Muestra en consola la cantidad de numeros pares e impares que tiene el siguiente array, utiliza un ciclo for para resolverlo

const numeros = [2, 1, 5, 4, 7]

Ejemplo output:
Cantidad de numeros pares: 2
Cantidad de numeros impares: 3
*/
//Solucion
//               i
const numeros = [2, 1, 5, 4, 7, 1, 2, 3, 4, 8];

let cantidadPares = 0;
let cantidadImpares = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    cantidadPares++;
  } else {
    cantidadImpares++;
  }
}

console.log("Cantidad de numeros pares: " + cantidadPares);
console.log("Cantidad de numeros impares: " + cantidadImpares);

//funcion

function parImpar(arrayDeNumeros) {
  let cantidadPares = 0;
  let cantidadImpares = 0;

  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] % 2 == 0) {
      cantidadPares++;
    } else {
      cantidadImpares++;
    }
  }

  console.log("Cantidad de numeros pares: " + cantidadPares);
  console.log("Cantidad de numeros impares: " + cantidadImpares);
}
