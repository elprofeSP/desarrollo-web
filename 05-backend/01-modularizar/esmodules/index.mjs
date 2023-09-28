import { estudiantes } from "./estudiantes.mjs";
import { saludar, despedirse } from "./saludos.mjs";

saludar(estudiantes[0]);
despedirse(estudiantes[2]);

// .js
// .mjs - modulos de ecma script -> import / export
// .cjs - common js -> require / module.exports
