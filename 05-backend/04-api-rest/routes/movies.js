import { Router } from "express";
import {
  createMovie,
  deleteMovie,
  getMovieById,
  getMovies,
  updateMovie,
} from "../controllers/movies";

export const moviesRouter = Router();

// Obtener todas la peliculas
moviesRouter.get("/", getMovies);

// Obtener pelicula por su id
moviesRouter.get("/:id", getMovieById);

// Crear una pelicula
moviesRouter.post("/", createMovie);

// Modificar una pelicula
moviesRouter.patch("/:id", updateMovie);

// Borrar una pelicula
moviesRouter.delete("/:id", deleteMovie);
