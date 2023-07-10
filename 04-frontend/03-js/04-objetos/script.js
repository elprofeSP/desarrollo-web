var nombre = "Fabian";

//Objectos literales
var persona = {
  //propiedad
  nombre: "Yoselin",
  edad: 19,
  hijos: false,
  //metodo
  saludar: function () {
    return "Hola soy " + this.nombre;
  },
  //otra sintaxis para metodos
  despedirse(persona) {
    return "Chao " + persona;
  },
};

//acceder a una propiedad
console.log(persona.nombre);

//modificar las propiedades
persona.hijos = true;
persona.edad = 20;
