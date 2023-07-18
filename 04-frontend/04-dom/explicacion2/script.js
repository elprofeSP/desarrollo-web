// Otra opcion
const titulo = document.querySelector("h1");

function saludar() {
  console.log("Has hecho click en el titulo");
}

titulo.onclick = saludar;

// Finalmente la mejor opcion para escuchar eventos
const logo = document.querySelector("#logo");

const salu2 = function (evento) {
  console.log(evento);
  console.log("Has hecho click en el logo");
};

logo.addEventListener("click", salu2);

//Obtener elemento
const btn = document.querySelector("#btn");

function agregarMarlovy() {
  // Selecciono el padre (ul)
  const lista = document.querySelector("ul");
  // Crear el li marlovy
  const marlovy = document.createElement("li");
  // Modificar el li marlovy
  marlovy.textContent = "Marlovy";
  // Agrego el hijo (marlovy) al padre (ul)
  lista.appendChild(marlovy);
}

btn.addEventListener("click", agregarMarlovy);

// Eventos en formularios
const form = document.querySelector("form");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  console.log(evento);
});

// Evento input
const input = document.querySelector("#nombre");

input.addEventListener("input", (evento) => {
  console.log(evento.target.value);
});
