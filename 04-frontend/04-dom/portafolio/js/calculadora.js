const d = document;

export function calculadora() {
  const pantalla = d.querySelector(".pantalla");
  const botones = d.querySelectorAll(".btn-calculadora");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      // recupero el texto del boton apretado
      const botonApretado = boton.textContent;
      // borrar el contenido de la pantalla y que quede en 0
      if (boton.id === "c") {
        pantalla.textContent = "0";
        return;
      }
      // borrar el ultimo caracter de la pantalla
      if (boton.id === "borrar") {
        if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
          pantalla.textContent = "0";
        } else {
          pantalla.textContent = pantalla.textContent.slice(0, -1);
        }
        return;
      }
      // si el boton apretado es igual, evaluar la expresion
      if (boton.id === "igual") {
        try {
          pantalla.textContent = eval(pantalla.textContent);
        } catch (error) {
          pantalla.textContent = "Error!";
          console.error(error);
        }
        return;
      }
      // si el contenido de la pantalla es 0, lo reemplazo por el boton apretado, sino lo concateno
      if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
        pantalla.textContent = botonApretado;
      } else {
        pantalla.textContent += botonApretado;
      }
    });
  });
}
