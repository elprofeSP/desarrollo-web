const estudiantes = require("./estudiantes.js");
const { saludar, despedirse } = require("./saludos.js");

saludar(estudiantes[0]);
despedirse(estudiantes[2]);

// explicacion del destructuring

const persona = {
  nombre: "Juan",
  edad: 25,
  domicilio: "Calle Falsa 123",
};

// const nombre = persona.nombre;
// const edad = persona.edad;
// const domicilio = persona.domicilio;

const { nombre, edad, domicilio } = persona;
