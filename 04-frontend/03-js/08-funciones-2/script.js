// let numero1 = 3;
// let numero2 = 4;
// console.log(numero1 + numero2);

// let numero3 = 5;
// let numero4 = 6;
// console.log(numero3 + numero4);

function sumita(numero1, numero2) {
  return numero1 + numero2;
}

function saludar() {
  return "Hola gente :)";
}

function saludarNombre(nombre) {
  return "Hola " + nombre;
}

function agregarNombre(arraicito, nombre) {
  arraicito.push(nombre);
  return arraicito;
}

// const lista = ["Stevan", "Moreno"];
// const jugadores = ["elmaspro", "killer"];

// console.log(agregarNombre(lista, "Marlovy"));

// console.log(agregarNombre(jugadores, "Barnie"));

const despedirse = function () {
  return "Chao muchachos";
};

// console.log(despedirse());

// const despedirse = () => "Chao muchachos";

console.log(despedirse());

const sumar = (a, b) => a + b;
console.log(sumar(1, 6));

const restar = (numero1, numero2) => {
  return numero1 - numero2;
};

// console.log(restar(5, 2));
