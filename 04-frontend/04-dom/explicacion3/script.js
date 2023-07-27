// window -> el navegador -> BOM
// document -> el documento html -> DOM -> pagina web

// BOM -> Browser Object Model

// window.addEventListener("resize", (e) => {
//   console.clear();
//   console.log("*************Evento resize*************");
//   console.log(window.innerHeight);
//   console.log(window.innerWidth);
//   console.log(window.outerHeight);
//   console.log(window.outerWidth);
//   console.log(e);
// });

// window.addEventListener("scroll", (e) => {
//   console.clear();
//   console.log("*************Evento scroll*************");
//   console.log(window.scrollX);
//   console.log(window.scrollY);
//   console.log(e);
// });

const btnAbrir = document.getElementById("abrir-ventana");
const btnCerrar = document.querySelector("#cerrar-ventana");
const btnImprimir = document.querySelector("#imprimir-ventana");

let ventana;

btnAbrir.addEventListener("click", (e) => {
  // window.open("https://fabian-gomez.vercel.app")
  ventana = open("https://fabian-gomez.vercel.app");
});

btnCerrar.addEventListener("click", (e) => {
  // window.close();
  ventana.close();
});

btnImprimir.addEventListener("click", (e) => {
  // window.print();
  print();
});

// navigator -> informacion del navegador
console.log(navigator);

// location -> informacion de la url
console.log(location);
