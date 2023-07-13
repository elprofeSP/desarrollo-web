// Cuales son los metodos para acceder a los elementos del DOM?

// 1. getElementById -> Obtener elemento html por su ID
//Ejemplo 1
const lorena = document.getElementById("lorena");
// console.log(lorena);

//Ejemplo 2
const dairon = document.getElementById("daironId");
// console.log(dairon);

// 2. getElementsByClassName -> Obtener lista de elementos html por su clase
//Ejemplo 1
const fabian = document.getElementsByClassName("nombre");
// console.log(fabian);

//Ejemplo 2
const estudiantes = document.getElementsByClassName("estudiante");
// console.log(estudiantes);

// 3. getElementsByTagName -> Obtener lista de elementos html por el nombre de la etiqueta
//Ejemplo 1
const listaEstudiantes = document.getElementsByTagName("li");
// console.log(listaEstudiantes);

//Ejemplo 2
const titulito = document.getElementsByTagName("h1");

// 4. querySelector -> Devuelve el primer elemento que coincida con la busqueda, puede ser por nombre de etiqueta, clase o por id
const lorenaQuerySelector = document.querySelector("#lorena");
// console.log(lorenaQuerySelector);

// 5. querySelectorAll -> Devuelve todos los elementos que coincidan con la busqueda.
const estudiantesLista = document.querySelectorAll(".estudiante");
