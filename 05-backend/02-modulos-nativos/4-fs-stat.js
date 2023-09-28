// import fs from "node:fs";
const fs = require("node:fs");

const stat = fs.statSync("./archivo.txt");

console.log("Es un directorio?");
console.log(stat.isDirectory());

console.log("Es un archivo?");
console.log(stat.isFile());

console.log("Tamano del archivo en bytes:");
console.log(stat.size);
