// Otra opcion
const titulo = document.querySelector("h1");

function saludar() {
  console.log("Has hecho click en el titulo");
}

// titulo.onclick = saludar;

// Finalmente la mejor opcion para escuchar eventos
const logo = document.querySelector("#logo");

const salu2 = function (evento) {
  console.log(evento);
  console.log("Has hecho click en el logo");
};

// logo.addEventListener("click", salu2);

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

// btnEstudiante.addEventListener("click", agregarEstudiante);

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

// remover un evento
const btnRemover = document.querySelector("#btnRemover");

btnRemover.addEventListener("dblclick", () => {
  btnEstudiante.removeEventListener("click", agregarEstudiante);
  alert("Se ha removido el evento click del boton agregar estudiante");
  btnEstudiante.textContent = "Evento removido";
});

// Propagacion: bubbling y capturing
const div1 = document.querySelector("#div-1");
const div2 = document.querySelector("#div-2");
const div3 = document.querySelector("#div-3");

// div1.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("click div 1 y se disparo en " + e.target.id);
// });

// div2.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("click div 2 y se disparo en " + e.target.id);
// });

// div3.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("click div 3 y se disparo en " + e.target.id);
// });

// Delegacion de eventos
document.addEventListener("click", (e) => {
  if (e.target.matches("#div-1")) {
    console.log("Holi en el div 1");
  }
  if (e.target.matches("#div-2")) {
    console.log("Holi en el div 2");
  }
  if (e.target.matches("#div-3")) {
    console.log("Holi en el div 3");
  }
  if (e.target.matches("#btnEstudiante")) {
    agregarEstudiante();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("El DOM ha sido cargado");
});

// Template en el dom
const codigos = document.querySelector("#codigos");
const template = document.querySelector("#template").content;
const fragment = document.createDocumentFragment();

const otrosCodigos = [
  {
    codigo: "300 - Multiple Choices",
    img: "https://http.cat/images/300.jpg",
  },
  {
    codigo: "301 - Moved Permanently",
    img: "https://http.cat/images/301.jpg",
  },
  {
    codigo: "302 - Found",
    img: "https://http.cat/images/302.jpg",
  },
  {
    codigo: "303 - See Other",
    img: "https://http.cat/images/303.jpg",
  },
  {
    codigo: "304 - Not Modified",
    img: "https://http.cat/images/304.jpg",
  },
  {
    codigo: "305 - Use Proxy",
    img: "https://http.cat/images/305.jpg",
  },
  {
    codigo: "306 - Switch Proxy",
    img: "https://http.cat/images/306.jpg",
  },
];

otrosCodigos.forEach((codigo) => {
  template.querySelector("img").setAttribute("src", codigo.img);
  template.querySelector("div#mensaje").textContent = codigo.codigo;

  let clone = document.importNode(template, true);
  fragment.appendChild(clone);
});

codigos.appendChild(fragment);
