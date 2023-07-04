// ciclo while
/*
let contador = 0;

while (contador > 10) {
  console.log(contador);
  contador++;
  //contador = contador + 1; es igual a la linea de arriba
}
*/

// Ciclo do-while
/*
let contador = 0;

do {
  console.log(contador);
  contador++;
} while (contador > 10);
*/

// Ciclo for
// for (let contador = 0; contador <= 10; contador++) {
//   console.log(contador);
// }

// console.log("El ciclo ya termino");

// ? ACTIVIDAD BUCLES

// 1.Imprimir los números pares del 2 al 20 en la consola.

// 2.Imprimir los números impares del 1 al 15 en la consola.

// 3.Imprimir los numeros del 1 hasta el 20 y validar si es par o impar, mostrar en consola si ese numero es par o impar

// TODO: Calcular la suma de los números del 1 al 100 e imprimir el resultado en la consola. 😈💯 MODO TRYHARD

// let resultado = 0;

// for (let contador = 1; contador <= 100; contador++) {
//   resultado = resultado + contador;
// }

// console.log("Resultado es " + resultado);

// function sumar(numeros) {
//   let sumatoria = 0;

//   for (let i = 0; i < numeros.length; i++) {
//     sumatoria = sumatoria + numeros[i];
//   }

//   return sumatoria;
// }
// console.log(sumar([1, 2, 5, 6, 8]));
// console.log(sumar([4, 6, 7]));
// console.log(sumar([1, 2, 3]));

//for-in
// const carro = {
//   key: value
//   llantas: 4,
//   marca: "Renault",
//   modelo: 2004,
//   velocidad: 80,
// };

//acceder a los valores de un objeto
// carro.marca
// carro["marca"]

// for (const propiedad in carro) {
//   console.log(propiedad);
//   console.log(carro[propiedad]);
// }

//for-of
let lista = ["Dairon", "Jose", "Jonathan", "Angelo"];

for (const nombre of lista) {
  console.log(nombre);
}
