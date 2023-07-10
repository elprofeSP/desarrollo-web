// objeto;
// const angelo = {
//   nombre: "Angelo",
//   edad: 17,
//   saludar: function () {
//     return "Hola gente soy " + this.nombre;
//   },
// };

//Funcion constructura de prototipos -> El molde para crear objetos
function Persona(nombre, edad) {
  //propiedades o atributos
  this.nombre = nombre;
  this.edad = edad;
  //metodos adentro de Persona
  this.cumplir = function () {
    this.edad++;
    return this.edad;
  };
}

//metodos fuera de persona, guardados en el prototype
Persona.prototype.saludar = function () {
  return "Hola soy " + this.nombre;
};

//instanciar el prototipo Persona
const lorena = new Persona("Lorena", 16);
const jose = new Persona("Jose", 20);

//Prototipos con sintaxis de clases -> Clase == Molde o plantilla
class Estudiante {
  constructor(nombre, edad, curso) {
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
    this.colegio = "Tecnocentro Somos Pacifico";
  }

  saludar() {
    return "Hola soy el estudiante " + this.nombre;
  }

  cambiarCurso(nuevoCurso) {
    this.curso = nuevoCurso;
    return "El nuevo curso que vas a ver es " + this.curso;
  }
}

const jonathan = new Estudiante("Jonathan", 15, "Programacion");

//clases con herencia
class Animal {
  constructor(nombre, especie, edad) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
  }
  saludar() {
    return "Hola soy " + this.nombre;
  }
}

//         herencia
class Perro extends Animal {
  constructor(nombre, especie, edad, raza, color) {
    super(nombre, especie, edad);
    this.raza = raza;
    this.color = color;
  }
  saludar() {
    return "guao guao soy " + this.nombre;
  }
  darLaPata() {
    return "🫱";
  }
}

const chandoso = new Perro("Chandoso", "Canino", 1, "chihuahua", "Cafe");
const jirafa = new Animal("Jirafales", "Jirafus", 8);
