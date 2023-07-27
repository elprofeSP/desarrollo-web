const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");
const botonCalcular = document.querySelector("#calcular");

const calcularIMC = () => {
  // guardo el valor del input peso en una variable
  const peso = inputPeso.value;
  // guardo el valor del input altura en una variable
  const altura = inputAltura.value;
  // calculo el imc con la formula
  const imc = peso / (altura * altura);
  // guardo el resultado del imc con dos decimales
  let resultadoFinal = parseFloat(imc.toFixed(2));
  // Selecciono el lugar donde voy a mostrar el resultado
  const resultado = document.querySelector("#resultado");
  // muestro el resultado en el html segun el imc
  if (resultadoFinal < 18.5) {
    resultado.textContent += ` Tu imc es ${resultadoFinal}, tienes bajo peso.`;
  } else if (resultadoFinal >= 18.5 && resultadoFinal < 25) {
    resultado.textContent += ` Tu imc es ${resultadoFinal}, tienes peso normal.`;
  } else if (resultadoFinal >= 25 && resultadoFinal < 30) {
    resultado.textContent += ` Tu imc es ${resultadoFinal}, tienes sobrepeso.`;
  } else {
    resultado.textContent += ` Tu imc es ${resultadoFinal}, tienes obesidad.`;
  }
  // limpio los inputs
  inputPeso.value = "";
  inputAltura.value = "";
};

botonCalcular.addEventListener("click", calcularIMC);
