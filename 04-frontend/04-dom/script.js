// Cuales son los metodos para acceder a los elementos del DOM?

// 1. getElementById -> Obtener elemento html por su ID
//Ejemplo 1
// const lorena = document.getElementById("lorena");
// console.log(lorena);

//Ejemplo 2
// const dairon = document.getElementById("daironId");
// console.log(dairon);

// 2. getElementsByClassName -> Obtener lista de elementos html por su clase
//Ejemplo 1
// const fabian = document.getElementsByClassName("nombre");
// console.log(fabian);

//Ejemplo 2
// const estudiantes = document.getElementsByClassName("estudiante");
// console.log(estudiantes);

// 3. getElementsByTagName -> Obtener lista de elementos html por el nombre de la etiqueta
//Ejemplo 1
// const listaEstudiantes = document.getElementsByTagName("li");
// console.log(listaEstudiantes);

//Ejemplo 2
// const titulito = document.getElementsByTagName("h1");

// 4. querySelector -> Devuelve el primer elemento que coincida con la busqueda, puede ser por nombre de etiqueta, clase o por id
// const lorenaQuerySelector = document.querySelector("#lorena");
// console.log(lorenaQuerySelector);

// 5. querySelectorAll -> Devuelve todos los elementos que coincidan con la busqueda.
// const estudiantesLista = document.querySelectorAll(".estudiante");

// NodeList vs Array
// La diferencia entre un NodeList y Array es que NodeList es una coleccion de nodos, mientras que Array es un objeto que contiene una coleccion de elementos y metodos propios de los array

// 1. Array.from() -> Crea una nueva instancia de Array a partir de un objeto iterable
// Ejemplo 1
// const listaEstudiantes = document.querySelectorAll(".estudiante");
// const listaEstudiantesArray = Array.from(listaEstudiantes);

// Crear elementos
// 1. createElement -> Crea un elemento HTML (NO LO AGREGA AL HTML)
// const subtitulo = document.createElement("h3");

// 2. createTextNode -> Crea un nodo de text (NO LO AGREGA AL HTML)
// const texto = document.createTextNode("Esto es un subtitulo");

// Agregar elementos
// 1. parenElement.appendChild() -> Agrega un hijo al final del contenedor padre
// obtengo al elemento padre
const listaEstudiantes = document.querySelector("ul");
// creo un nuevo elemento (nodo)
const andres = document.createElement("li");
// creo el texto que va a tener el nodo
const texto = document.createTextNode("Andres");
// Agregar el texto al nodo (andres)
andres.appendChild(texto);
// Agregar el li a la ul
listaEstudiantes.appendChild(andres);
