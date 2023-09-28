const http = require("node:http");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log("Petición recibida", req.url);
  res.end("Esta es mi primera página web");
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

// server.listen(0, () => {
//   console.log("Servidor escuchando", server.address().port);
// });
