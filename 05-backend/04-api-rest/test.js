// indices(index)    0         1         2         3         4
const nombres = [
  {
    id: 123,
    name: "Angelo",
  },
  {
    id: 4324,
    name: "Jose",
  },
  {
    id: 213,
    name: "Dairon",
  },
  {
    id: 6879,
    name: "Brayan",
  },
];
console.log(nombres[1])

// const indiceEstudiante = nombres.findIndex((nombre) => nombre.id === 124877324899);
// console.log(indiceEstudiante);

// // console.log(nombres[-1])
// const elementosEliminados = nombres.splice(-1, 1);

// console.log(elementosEliminados);
// console.log(nombres);

const numeros = [1, 2, 3]

const numerosHastaDiez = [ ...numeros, 4, 5, 6, 7]

console.log(numerosHastaDiez)

const nuevoUsuario = { name: "jose@mail.com", ...nombres[1]}
console.log(nuevoUsuario)