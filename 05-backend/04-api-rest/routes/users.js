import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/users.js";

export const usersRouter = Router();

// Obtener todos los usuarios
usersRouter.get("/", getUsers);

// Obtner un usuario por su id
usersRouter.get("/:id", getUserById);

// Crear un usuario
usersRouter.post("/", createUser);

// Modificar un usuario
usersRouter.patch("/:id", updateUser);

// Borrar un usuario
usersRouter.delete("/:id", deleteUser);
