import express from "express";
import { usersRouter } from "./routes/users.js";
import { moviesRouter } from "./routes/movies.js";

const app = express();

// Middleware para parsear el body a json
app.use(express.json());

// Rutas
app.use("/users", usersRouter);
app.use("/movies", moviesRouter);

// Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
