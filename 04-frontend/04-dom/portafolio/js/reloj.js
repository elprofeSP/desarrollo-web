const d = document;

export function reloj() {
  let relojTiempo;

  d.addEventListener("click", (e) => {
    // Si el elemento que se hace click coincide con el id del boton activar-reloj
    if (e.target.matches("#btn-activar-reloj")) {
      relojTiempo = setInterval(() => {
        let relojHora = new Date().toLocaleString();
        d.querySelector("#reloj").innerHTML = "<h3>" + relojHora + "</h3>";
      }, 1000);
      e.target.disabled = true;
    }
    // Si el elemento que se hace click coincide con el id del boton desactivar-reloj
    if (e.target.matches("#btn-desactivar-reloj")) {
      clearInterval(relojTiempo);
      d.querySelector("#btn-activar-reloj").disabled = false;
      d.querySelector("#reloj").innerHTML = null;
    }
  });
}
