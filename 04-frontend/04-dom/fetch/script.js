const url = "https://jsonplaceholder.typicode.com/comments/1";
fetch(url)
  .then((respuesta) => respuesta.json())
  .then((data) => {
    //codigo aqui
  })
  .catch((error) => console.log(error));
