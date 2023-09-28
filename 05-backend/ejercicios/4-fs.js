/*
Módulo fs (Sistema de archivos):

1 Crear archivo:
Utiliza el método writeFile y mkdir para crear un archivo llamado data.txt con el contenido "Hola mundo" dentro de la carpeta archivos. Muestra en consola el mensaje "El archivo se ha creado correctamente".

2 Leer archivo:
Utiliza el método readFile para leer el archivo creado en el ejercicio anterior. Muestra en consola el contenido del archivo.

3 Renombrar archivo:
Utiliza el método rename para renombrar el archivo creado en el ejercicio anterior a data.json. Muestra en consola el mensaje "El archivo se ha renombrado correctamente".

4 Eliminar archivo:
Utiliza el método unlink para eliminar el archivo creado en el ejercicio anterior. Muestra en consola el mensaje "El archivo se ha eliminado correctamente".

5 Finalmente crea un script en el package.json que ejecute el código utilizando node (npm run fs), que tenga los siguientes comandos:
    npm run fs crearArchivo
    npm run fs crearCarpeta
    npm run fs leerArchivo
    npm run fs eliminarArchivo
    npm run fs eliminarCarpeta
*/

const fs = require("node:fs/promises");

// Crear la carpeta archivos
async function crearCarpeta() {
  try {
    await fs.mkdir("./archivos");
  } catch (error) {
    if (error.code === "EEXIST") {
      console.log("La carpeta ya existe");
    } else {
      console.log(error);
    }
  }
}

// Crear la carpeta archivos y el archivo data.txt
async function crearArchivo() {
  // como corroborar si una carpeta existe o no
  try {
    const stat = await fs.stat("./archivos");
    if (stat.isDirectory()) {
      await fs.writeFile("./archivos/data.txt", "Hola mundo", "utf-8");
      console.log("El archivo se ha creado correctamente");
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("La carpeta no existe, ejecuta npm run fs crearCarpeta");
    } else {
      console.log(error);
    }
  }
}

// Leer el archivo data.txt

async function leerArchivo() {
  try {
    const contenido = await fs.readFile("./archivos/data.txt", "utf-8");
    if (contenido === "") {
      console.log("El archivo está vacío");
    } else {
      console.log(contenido);
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("El archivo no existe, ejecuta npm run fs crearArchivo");
    }
  }
}

// Eliminar el archivo data.txt

async function eliminarArchivo() {
  try {
    await fs.unlink("./archivos/data.txt");
    console.log("El archivo se ha eliminado correctamente");
  } catch (error) {
    console.error(error);
  }
}

// Eliminar la carpeta archivos y el archivo data.txt

async function eliminarCarpeta() {
  try {
    await fs.rm("./archivos", { recursive: true });
    console.log("La carpeta se ha eliminado correctamente");
  } catch (error) {
    console.error(error);
  }
}

// Ejecutar las funciones

switch (process.argv[2]) {
  case "crearArchivo":
    crearArchivo();
    break;
  case "crearCarpeta":
    crearCarpeta();
    break;
  case "leer":
    leerArchivo();
    break;
  case "eliminarArchivo":
    eliminarArchivo();
    break;
  case "eliminarCarpeta":
    eliminarCarpeta();
    break;
  default:
    console.log(
      `Opciones disponibles:
      npm run fs crearArchivo
      npm run fs crearCarpeta
      npm run fs leer
      npm run fs eliminarArchivo
      npm run fs eliminarCarpeta`
    );
}
