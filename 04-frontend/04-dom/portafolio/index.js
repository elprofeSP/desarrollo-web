import { calculadora } from "./js/calculadora.js";
import { menu } from "./js/menu-hamburguesa.js";
import { reloj } from "./js/reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  menu();
  reloj();
  calculadora();
});
