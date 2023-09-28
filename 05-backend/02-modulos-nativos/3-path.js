const path = require("node:path");

// console.log(__dirname); // Ruta absoluta del directorio actual
// console.log(__filename); // Ruta absoluta del archivo actual

// path.basename() retorna el nombre del archivo
const nombreArchivo = path.basename("home/usuario/fabian/index.html");
console.log(nombreArchivo);
// path.dirname() retorna el directorio del archivo
const directorio = path.dirname("home/usuario/fabian/index.html");
console.log(directorio);
// path.extname() retorna la extensión del archivo
const extension = path.extname("home/usuario/fabian/imagen.jpg");
console.log(extension);
// path.join() une los parámetros en una ruta
const join = path.join("home", "usuario", "fabian", "imagen.jpg");
console.log(join);
