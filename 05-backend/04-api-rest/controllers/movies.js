import { require } from "../utils.js";
import { randomUUID } from "node:crypto";

const movies = require("./movies.json");

export const getMovies = (req, res) => {
  if (req.query.year) {
    const peliculasFiltradas = movies.filter(
      (movie) => movie.year == req.query.year
    );
    if (peliculasFiltradas.length === 0) {
      return res.status(404).json({ error: "No hay peliculas" });
    }
    return res.json(peliculasFiltradas);
  }
  if (movies.length === 0) {
    return res.status(404).json({ error: "No hay peliculas" });
  }
  res.json(movies);
};

export const getMovieById = (req, res) => {
  const id = req.params.id;
  const movie = movies.find((movie) => movie.id === id);
  if (!movie) {
    return res.status(404).json({ error: "Pelicula no encontrada" });
  }
  return res.json(movie);
};

export const createMovie = (req, res) => {
  if (!req.body.title || !req.body.year) {
    return res.status(400).json({ error: "Error en la peticion" });
  }
  const movie = req.body;
  movie.id = randomUUID();
  movies.push(movie);
  return res.status(201).json(movie);
};

export const updateMovie = (req, res) => {
  const id = req.params.id;
  // Encontrar el indice de la pelicula en la db por su id
  const index = movies.findIndex((movie) => movie.id === id);
  // Si no existe ninguna pelicula con ese id
  if (index === -1) {
    return res.status(404).json({ error: "Pelicula no encontrada" });
  } else {
    const movieUpdated = { ...movies[index], ...req.body };
    movies[index] = movieUpdated;
    res.json(movieUpdated);
  }
};

export const deleteMovie = (req, res) => {
  const id = req.params.id;
  // Encontrar el indice de la pelicula en la db por su id
  const index = movies.findIndex((movie) => movie.id === id);
  // Si no existe ninguna pelicula con ese id
  if (index === -1) {
    return res.status(404).json({ error: "Pelicula no encontrada" });
  }
  // Eliminar la pelicula de la base de datos segun su id
  movies.splice(index, 1);
  // Responder con estado
  res.sendStatus(204);
};
