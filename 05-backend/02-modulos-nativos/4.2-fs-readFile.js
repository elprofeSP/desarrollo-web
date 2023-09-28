const fs = require("node:fs");

console.log("Leyendo primer archivo...");

fs.readFile("./archivo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error leyendo archivo");
  }
  console.log("Contenido del primer archivo:", data);
});

console.log("Haciendo cosas mientras se lee el archivo...");

fs.readFile("./nombres.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log("Contenido del segundo archivo:", data);
});
