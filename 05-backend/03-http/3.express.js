const express = require("express");
const rick = require("./rick.json");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hola desde el servidor</h1>");
});

app.get("/personajes/rick", (req, res) => {
  res.json(rick);
});

app.post("/personajes", (req, res) => {
  res.status(201).json(req.body);
});

app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
