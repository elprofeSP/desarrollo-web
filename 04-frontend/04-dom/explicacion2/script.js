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

// Agregar un nuevo estudiante a la lista
// Seleccionar el btn y el input
const btnEstudiante = document.querySelector("#btnEstudiante");
const inputEstudiante = document.querySelector("#estudiante");

function agregarEstudiante() {
  //obtener el padre
  const ul = document.querySelector("ul");
  //validar que el input no este vacio
  if (inputEstudiante.value.length === 0) {
    alert("Vea loco, escriba algo por lo menos 😒");
    return;
  }
  //validar si el usuario existe en la lista
  //convertir nodelist a un array
  const listaArray = Array.from(ul.children);
  //utilizar el metodo some de los array para validar si el estudiante existe
  const estudianteExiste = listaArray.some(
    (estudiante) => estudiante.textContent === inputEstudiante.value
  );
  // Si existe mostramos un mensaje de alerta, si no existe creamos el nuevo usuario
  if (estudianteExiste) {
    alert("El estudiante ya existe, prueba con otro nombre");
  } else {
    //crear el nuevo estudiante (li)
    const li = document.createElement("li");
    //cambiar el texto del li
    li.textContent = inputEstudiante.value;
    //agregar el nuevo estudiante a la lista
    ul.appendChild(li);
  }
  //limpiar el input
  inputEstudiante.value = "";
}

btnEstudiante.addEventListener("click", agregarEstudiante);

// Eventos en formularios
const form = document.querySelector("form");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  console.log(evento);
  console.log(evento.target.nombre.value);
  console.log(evento.target.apellido.value);
  console.log(evento.target.password.value);
});

// Evento input
const input = document.querySelector("#nombre");

input.addEventListener("input", (evento) => {
  console.log(evento);
});
