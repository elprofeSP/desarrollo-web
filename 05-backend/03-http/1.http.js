const http = require("node:http");
const fs = require("node:fs");

const processRequest = (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  if (req.url === "/") {
    res.end("<h1>Hola esta es mi primera página!</h1>");
  } else if (req.url === "/contacto") {
    res.end("<h2>Mi telefono es 12345678</h2>");
  } else if (req.url === "/usuario") {
    res.end("<h2>Hola soy Fabian</h2>");
  } else if (req.url === "/imagen") {
    fs.readFile("./imagen.png", (err, data) => {
      if (err) {
        res.statusCode = 500; // error interno del server
        res.end("<h1>Error interno del servidor</h1>");
      } else {
        res.setHeader("Content-Type", "image/png");
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404; // not found
    res.end("<p>Recurso no encontrado - 404</p>");
  }
}

const server = http.createServer(processRequest);

server.listen(3000, () => {
  console.log("Servidor escuchando en el puerto: http://localhost:3000");
});
