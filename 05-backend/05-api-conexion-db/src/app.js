import express from "express";
import cors from "cors";
import { pool } from "./db.js";

const app = express();

// Middleware para parsear el body de la peticion
app.use(express.json());
// Middleware para permitir peticiones desde cualquier origen
app.use(cors());

// Obtener todas las tareas de la base de datos
app.get("/tasks", async (req, res) => {
  // Hacer un try catch para manejar los errores
  try {
    // Hacer la consulta a la base de datos
    const result = await pool.query("SELECT * FROM tasks");
    // Verificar si la consulta no devolvio ningun resultado
    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "No se encontro el recurso",
      });
    }
    // Si la consulta devolvio un resultado, devolverlo
    res.json(result.rows);
  } catch (error) {
    // Si hubo un error, devolver el error
    res.status(500).json({
      message: error.message,
    });
  }
});

//Obtener una tarea por su id
app.get("/tasks/:id", async (req, res) => {
  // Recuperar el id de la tarea por params
  const id = req.params.id;
  // Hacer un try catch para manejar los errores
  try {
    // Hacer la consulta a la base de datos
    const result = await pool.query("SELECT * FROM tasks WHERE id_task = $1", [
      id,
    ]);
    // Verificar si la consulta no devolvio ningun resultado
    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "No se encontro el recurso",
      });
    }
    // Si la consulta devolvio un resultado, devolverlo
    res.json(result.rows[0]);
  } catch (error) {
    // Si hubo un error, devolver el error
    res.status(500).json({
      message: error.message,
    });
  }
});

// Crear una nueva tarea
app.post("/tasks", async (req, res) => {
  // Extraer el titulo del body de la peticion
  const { title } = req.body;
  // Validar que el title sea un string
  if (typeof title !== "string") {
    return res.status(400).json({
      message: "Peticion invalida",
    });
  }
  // Manejar el error con un try catch
  try {
    const result = await pool.query("INSERT INTO tasks(title) VALUES($1)", [
      title,
    ]);
    // Devolver una respuesta exitosa
    res.status(201).json({
      message: "Tarea creada exitosamente",
    });
  } catch (error) {
    // Si hubo un error, devolver el error
    res.status(500).json({
      message: error.message,
    });
  }
});

// Actualizar una tarea
app.put("/tasks/:id", async (req, res) => {
  // Recuperar el id de la tarea por params
  const id = req.params.id;
  // Recuperar el estado de la tarea por body
  const { completed } = req.body;
  // Validar que el completed sea un booleano
  if (typeof completed !== "boolean") {
    return res.status(400).json({
      message: "Peticion invalida",
    });
  }
  // Manejar errores con un try catch
  try {
    const result = await pool.query(
      "UPDATE tasks SET completed = $1 WHERE id_task = $2 RETURNING *",
      [completed, id]
    );
    res.json({
      message: "Tarea actualizada exitosamente",
      body: result.rows[0],
    });
  } catch (error) {
    // Si hubo un error, devolver el error
    res.status(500).json({
      message: error.message,
    });
  }
});

// Eliminar una tarea
app.delete("/tasks/:id", async (req, res) => {
  // Recuperar el id de la tarea por params
  const id = req.params.id;
  // Manejar errores con un try catch
  try {
    const result = await pool.query("DELETE FROM tasks WHERE id_task = $1", [
      id,
    ]);
    // Verificar si la consulta no devolvio ningun resultado
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "No se encontro el recurso",
      });
    }
    res.sendStatus(204);
  } catch (error) {
    // Si hubo un error, devolver el error
    res.status(500).json({
      message: error.message,
    });
  }
});

// Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({
    message: "Recurso no encontrado",
  });
});

const port = process.env.PORT ?? 5000;

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
