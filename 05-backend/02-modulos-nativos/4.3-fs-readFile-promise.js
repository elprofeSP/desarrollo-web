const fs = require("node:fs/promises");

console.log("Leyendo primer archivo...");

fs.readFile("./archivo.txt", "utf-8")
  .then((data) => {
    console.log("Contenido del primer archivo");
    console.log(data);
  })
  .catch((err) => console.log(err));

console.log("Haciendo cosas mientras se lee el archivo...");

fs.readFile("./nombres.txt", "utf-8")
  .then((data) => {
    console.log("Contenido del segundo archivo");
    console.log(data);
  })
  .catch((err) => console.log(err));
