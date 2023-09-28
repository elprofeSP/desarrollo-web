import chalk from "chalk";
import process from "node:process";
// const process = require("node:process");
// console.log(chalk.blue("Hola mundo desde NodeJS"));
// console.log(chalk.bgRed.black.bold("Este es un mensaje personalizado"));

if (process.argv[2] === "angelo") {
  console.log(chalk.green("Hola Angelo"));
} else {
  console.log(chalk.red("No te conozco"));
}

// commonjs require/module.exports .cjs
// ESmodules import/export .mjs
