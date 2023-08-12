const url = "https://jsonplaceholder.typicode.com/comments/1000";
const comentarios = document.querySelector(".comentarios");

fetch(url)
  .then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error("No se ha podido conectar");
    } else {
      return respuesta.json();
    }
  })
  .then((data) => {
    mostrarComentario(data);
  })
  .catch((error) => {
    console.log(error);
  });

function mostrarComentario(data) {
  const comentario = document.createElement("div");
  comentario.className = "comentario";
  const h2 = document.createElement("h2");
  h2.textContent = data.name;
  const h3 = document.createElement("h3");
  h3.textContent = data.email;
  const p = document.createElement("p");
  p.textContent = data.body;
  comentario.append(h2, h3, p);
  comentarios.append(comentario);
}
