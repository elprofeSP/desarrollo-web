/*
Buenas noches muchachos, les dejo la actividad para entregar máximo hasta el día martes 4 de julio

Actividad: Cálculo del Índice de Masa Corporal (IMC)

Objetivo: Practicar el uso de condicionales en JavaScript al calcular el IMC.

Instrucciones:

- Solicita al usuario su peso en kilogramos.
- Solicita al usuario su altura en metros.
- Calcula el IMC utilizando la fórmula: IMC = peso / (altura * altura).
- Muestra el resultado del IMC con dos decimales.
- Comprueba en qué categoría se encuentra el IMC y muestra un mensaje adecuado:
Categorías de IMC:

- Bajo peso: IMC < 18.5
- Peso normal: 18.5 <= IMC < 25
- Sobrepeso: 25 <= IMC < 30
- Obesidad: IMC >= 30
Ejemplo de salida:
"Tu índice de masa corporal (IMC) es: 23.45. Tienes un peso normal."

El trabajo deben subirlo a *github*

Recursos útiles:
Uso de condicionales en JavaScript: if-else statements.

Recuerden que pueden preguntarme cualquier duda que tengan
¡Buena suerte chicos!

*/

let peso = prompt("Escribe tu peso en kilogramos, solo coloca el numero");
let altura = prompt("Escribe tu altura en metros, separado por punto");
let imc = peso / (altura * altura);

let resultadoFinal = parseFloat(imc.toFixed(2));

if (resultadoFinal < 18.5) {
  document.write("Tu imc es " + resultadoFinal + ", tienes bajo peso.");
} else if (resultadoFinal >= 18.5 && resultadoFinal < 25) {
  document.write("Tu imc es " + resultadoFinal + ", tienes peso normal.");
} else if (resultadoFinal >= 25 && resultadoFinal < 30) {
  document.write("Tu imc es " + resultadoFinal + ", tienes sobrepeso.");
} else {
  document.write("Tu imc es " + resultadoFinal + ", tienes obesidad.");
}
