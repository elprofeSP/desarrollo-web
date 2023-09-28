const http = require("node:http");
const rick = require("./rick.json");

const server = http.createServer((req, res) => {
  const { url, method } = req;
  //GET, PUT, DELETE, POST, PATCH
  switch (method) {
    case "GET":
      switch (url) {
        case "/":
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end("<h1>Hola desde el servidor</h1>");
          break;
        case "/personajes/rick":
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(rick));
        default:
          res.statusCode = 404;
          res.end("<h1>404</h1>");
      }
      break;
    case "POST":
      switch (url) {
        case "/personajes":
          let body = "";
          // Escuche el evento data
          req.on("data", (chunk) => {
            body += chunk;
          });
          // Escuche el evento end
          req.on("end", () => {
            const data = JSON.parse(body);
            // Logica para guardar en una base de datos
            data.apellido = "Potes";
            res.statusCode = 201; // Se creo un recurso
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data));
          });
          break;
        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end("<h1>404</h1>");
      }
      break;
    default:
      res.statusCode = 404;
      res.end("Not Found");
  }
});

const PORT = process.env.PORT ?? 3000;

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
