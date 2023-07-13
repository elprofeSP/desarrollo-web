//Actividad

// a) Acceso por etiqueta:
// Utiliza JavaScript para acceder a todos los elementos <p> en la página y muestra la colección de elementos en la consola del navegador.
const etiquetasP = document.querySelectorAll("p");
// Otra opcion con getElementsByTagName
// const etiquetasP = document.getElementsByTagName("p")
console.log(etiquetasP);

// b) Acceso por clase:
// Utiliza JavaScript para acceder a todos los elementos con la clase "clase1" y muestra la colección de elementos en la consola del navegador.
const elementosConClase = document.querySelectorAll(".clase1");
// const elementosConClase = document.getElementsByClassName("clase1");
console.log(elementosConClase);

// c) Acceso por id:
// Utiliza JavaScript para acceder al elemento con el id "id2" y muestra el elemento en la consola del navegador.
const parrafoConId = document.querySelector("#id2");
// const parrafoConId = document.getElementById("id2");
console.log(parrafoConId);

// d) Acceso por selector de CSS:
// Utiliza JavaScript para acceder a todos los elementos con la clase "clase1" y al elemento con el id "id2" utilizando un selector de CSS combinado. Muestra la colección de elementos en la consola del navegador.
const elementos = document.querySelectorAll(".clase1, #id2");
console.log(elementos);
// Recuerda utilizar la consola del navegador para ver los resultados de cada tarea. ¡Diviértete explorando el acceso al DOM!
