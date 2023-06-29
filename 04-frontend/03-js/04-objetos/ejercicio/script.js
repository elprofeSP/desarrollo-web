//Actividad
const desarrollador = {
  //key : value
  nombre: "Fabian",
  edad: 22,
  gafas: true,
  lenguajes: ["HTML", "CSS", "JAVASCRIPT"],
  programar: function () {
    console.log("Hola estoy programando en " + this.lenguajes[2]);
  },
  cumplir: function () {
    this.edad = this.edad + 1;
  },
};
