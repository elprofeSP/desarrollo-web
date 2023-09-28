/*
Módulo path (Manipulación de rutas):

1 Unión de rutas:
Utiliza el método join para crear una ruta absoluta a un archivo llamado archivo.txt dentro de la carpeta archivos. Muestra en consola la ruta absoluta.

2 Obtener nombre de archivo:
Utiliza el método basename para obtener el nombre del archivo de la ruta creada en el ejercicio anterior. Muestra en consola el nombre del archivo.

3 Obtener extensión de archivo:
Utiliza el método extname para obtener la extensión del archivo de la ruta creada en el ejercicio anterior. Muestra en consola la extensión del archivo.

4 Obtener directorio de archivo:
Utiliza el método dirname para obtener el directorio del archivo de la ruta creada en el ejercicio anterior. Muestra en consola el directorio del archivo.

5 Utiliza Commonjs

6 Finalmente crea un script en el package.json que ejecute el código utilizando node (npm run path)

7. Utiliza chalk para darle color a la salida de consola. (opcional)

Ejemplo de ejecución:
$ npm run path
Ruta absoluta:
/home/fabian37/projects/node-curso/ejercicios/archivos/archivo.txt
Nombre del archivo:
archivo.txt
Extensión del archivo:
.txt
Directorio del archivo:
archivos

*/

import path from "node:path";
import { fileURLToPath } from "node:url";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);

const ruta = path.join(path.dirname(__filename), "archivos", "archivo.txt");

const nombre = path.basename(ruta);

const extension = path.extname(ruta);

const directorio = path.basename(path.dirname(ruta));

console.log(
  `Ruta absoluta:
${chalk.blue(ruta)}
Nombre del archivo:
${chalk.blue(nombre)}
Extensión del archivo:
${chalk.blue(extension)}
Directorio del archivo:
${chalk.blue(directorio)}`
);
