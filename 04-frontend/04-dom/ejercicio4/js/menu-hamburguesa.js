export function menu() {
  document.addEventListener("click", (e) => {
    if (
      e.target.matches(".btn-contenedor") ||
      e.target.matches(".btn-contenedor *")
    ) {
      document.querySelector(".menu-lateral").classList.toggle("abierto");
      document.querySelector(".btn-contenedor").classList.toggle("is-active");
    }
  });
}
