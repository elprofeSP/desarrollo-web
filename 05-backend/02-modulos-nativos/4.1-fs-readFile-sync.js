const fs = require("node:fs");

console.log("Leyendo archivo...");
const archivo = fs.readFileSync("./archivo.txt", "utf-8");

console.log("Contenido del archivo:");
console.log(archivo);

console.log("Haciendo cosas mientras se lee el archivo...");

console.log("Leyendo segundo archivo...");
const archivo2 = fs.readFileSync("./nombres.txt", "utf-8");

console.log("Contenido del segundo archivo:");
console.log(archivo2);
