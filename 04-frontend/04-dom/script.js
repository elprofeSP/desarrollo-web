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

// 2. Spread operator -> Permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o mas argumentos (para llamadas de funcion) o elementos (para Array literales) son esperados, o a un objeto ser expandido en lugares donde cero o mas pares de valores clave (para literales Tipo Objeto) son esperados.

// Ejemplo 1
// const listaEstudiantes = document.querySelectorAll(".estudiante");
// const listaEstudiantesArray = [...listaEstudiantes];

// Crear elementos
// 1. createElement -> Crea un elemento HTML (NO LO AGREGA AL HTML)
// const subtitulo = document.createElement("h3");

// 2. createTextNode -> Crea un nodo de text (NO LO AGREGA AL HTML)
// const texto = document.createTextNode("Esto es un subtitulo");

// Agregar elementos
// 1. parentElement.appendChild() -> Agrega un hijo al final del contenedor padre
// obtengo al elemento padre
// const listaEstudiantes = document.querySelector("ul");
// creo un nuevo elemento (nodo)
// const andres = document.createElement("li");
// creo el texto que va a tener el nodo
// const texto = document.createTextNode("Hola soy Andres");
// Agregar el texto al nodo (andres)
// andres.appendChild(texto);
// Agregar el li a la ul
// listaEstudiantes.appendChild(andres);

// 2. parentElement.append() -> Es la evolucion de appendChild, permite agregar varios hijos al final del contenedor padre
// obtengo el elemento padre
const animales = document.querySelector("#animales");
// crear un nuevo elemento (Mas no se agrega al html)
const perro = document.createElement("li");
// crear el texto que despues voy a agregar al perro
const textoPerro = document.createTextNode("Chandoso");
// agregar el texto "Chandoso" a mi elemento html
perro.append(textoPerro);
// crear un nuevo elemento (Mas no se agrega al html)
const gato = document.createElement("li");
// crear el texto que despues voy a agregar al gato
const textoGato = document.createTextNode("Michi");
// agregar el texto "Michi" a mi elemento html
gato.append(textoGato);
// agregar los elementos al padre
animales.append(perro, gato);

// before -> antes
// after -> despues
// 3. parentElement.insertBefore() -> Inserta nodos antes del elemento de referencia como hijo de un nodo padre dado
// Ejemplo 1
// Obtengo el elemento padre
const listaEstudiantes = document.querySelector("ul");
// Creo un nuevo elemento (nodo)
const jonathan = document.createElement("li");
// Cambiar el texto al nodo
jonathan.textContent = "Jonathan";
// Obtengo el elemento de referencia
const lorena = document.querySelector("#lorena");
// Agrego el nuevo elemento antes de lorena
listaEstudiantes.insertBefore(jonathan, lorena);

// 4. parentElement.insertAdjacentElement() -> Inserta un elemento en una posicion especifica
// opciones
// beforebegin -> antes de que empiece el elemento
// afterbegin -> despues de que empiece el elemento
// beforeend -> antes de que termine el elemento
// afterend -> despues de que termine el elemento
// Ejemplo 1
// Obtengo el elemento padre
const animales2 = document.querySelector("#animales");
// Creo un nuevo elemento (nodo)
const parrafo = document.createElement("p");
// Cambiar el texto al nodo
parrafo.textContent = "Estos son los animales que tengo en mi casa";
// Agrego el nuevo elemento antes de que empiece el elemento
animales2.insertAdjacentElement("beforebegin", parrafo);

// Ejemplo 2
// agregar un elemento despues del final del elemento (afterend)
// crear un nuevo elemento (Mas no se agrega al html)
const despedida = document.createElement("p");
// agregar el texto del elemento
despedida.textContent = "Esto fue todo por hoy ✌️";
// agregar el elemtento despedida a animales2
animales2.insertAdjacentElement("afterend", despedida);

// Otras formas de agregar
// 1. innerHTML -> Devuelve o establece la sintaxis HTML describiendo los descendientes del elemento, la principal desventaja es que si se usa de forma incorrecta puede causar ataques de tipo cross-site scripting (XSS)
// Ejemplo 1
// Obtengo el elemento padre
// const colores = document.querySelector(".colores");
// colores.innerHTML = `
// <div>
//     <ul>
//         <li>Rojo</li>
//         <li>Azul</li>
//     </ul>
// </div>`;

// Ejemplo 2
// const panda = document.querySelector("#panda");
// panda.innerHTML += " 🐼";

// 2. innerText -> Devuelve o establece el contenido textual de los nodos especificados, y todos sus descendientes
// Ejemplo 1
// const panda = document.querySelector("#panda");
// panda.innerText = "Hola soy un panda 🐼";
// panda.innerText += " 🐼";

// 3. textContent -> Devuelve o establece el contenido textual de los nodos especificados, y todos sus descendientes
// Ejemplo 1
// const panda = document.querySelector("#panda");
// panda.textContent = "Hola soy un panda 🐼";
// panda.textContent += " 🐼";

// Atributos y propiedades
// seleccionar el nodo HTML, javascript lo convierte en un objeto
const input = document.querySelector("input");

// Podes modificarlo como cualquier otro objeto de javascript accediendo a sus propiedades
input.type = "text";
input.value = "Hola soy un input";
input.placeholder = "Escribe algo";
input.className = "input";

// Cual es la diferencia entre atributos y propiedades?
// Los atributos son los que vienen en el HTML, mientras que las propiedades son las que vienen en el DOM

// Como acceder a los atributos?
// 1. getAttribute -> Devuelve el valor del atributo especificado en el elemento
// input.getAttribute("type");

// 2. setAttribute -> Establece el valor del atributo especificado en el elemento
input.setAttribute("id", "inputId");
input.setAttribute("type", "email");

// Resumen: Como puedo acceder a las propiedades?
// 1. Element.property -> Devuelve el valor de la propiedad especificada en el elemento

// Eliminar elementos del dom
// 1. parentElement.removeChild() -> Elimina un nodo hijo del DOM y devuelve el nodo eliminado
// Obtengo el elemento padre
// const body = document.querySelector("body");
// Obtengo el elemento a eliminar
// const h1 = document.querySelector("h1");
// Elimino el elemento
// body.removeChild(h1);

// 2. remove() -> Elimina el elemento del DOM
// Obtengo el elemento a eliminar
// const h1 = document.querySelector("h1");
// Se elimina asi mismo
// h1.remove();

// 3. element.replaceChild() -> Reemplaza un nodo hijo por otro
// Obtengo el elemento padre
// const body = document.querySelector("body");
// Obtengo el elemento a reemplazar
// const h1 = document.querySelector("h1");
// Creo el nuevo elemento
// const h5 = document.createElement("h5");
// Cambio el texto del nuevo elemento
// h5.textContent = "Hola soy un h5";
// Reemplazo el elemento
// body.replaceChild(h5, h1);
