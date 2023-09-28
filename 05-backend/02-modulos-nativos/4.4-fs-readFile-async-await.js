const fs = require("node:fs/promises");

async function main() {
  try {
    console.log("Leyendo primer archivo...");
    const primerArchivo = await fs.readFile("./archivo.txt", "utf-8");
    console.log("Primer archivo: ", primerArchivo);
    const segundoArchivo = await fs.readFile("./nombres.txt", "utf-8");
    console.log("Segundo archivo: ", segundoArchivo);
  } catch (error) {
    console.log(error);
  }
}

main();
