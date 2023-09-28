import { require } from "../utils.js";
const users = require("./users.json");

let idCount = users.length;

export const getUsers = (req, res) => {
  if (req.query.name) {
    // Buscar el usuario con el mismo nombre que llega por parametro con el metodo find
    const user = users.filter((user) => user.name === req.query.name);
    // Si no existe
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    // Si existe
    return res.json(user);
  }
  // Si no hay usuarios
  if (users.length === 0) {
    return res.status(404).json({ error: "No hay usuarios" });
  }
  // Si hay usuarios
  return res.json(users);
};

export const getUserById = (req, res) => {
  // Obtener el id
  const id = parseInt(req.params.id);
  // Buscar el usuario con el mismo id que llaga por parametro con el metodo find
  const user = users.find((user) => user.id === id);
  // Si no hay usuario
  if (!user) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }
  // Si hay usuario
  return res.json(user);
};

export const createUser = (req, res) => {
  if (!req.body.name || !req.body.email) {
    return res.status(400).json({ error: "Error en la peticion" });
  }
  const user = req.body;
  const id = ++idCount;
  users.push({ id, ...user });
  return res.status(201).json(user);
};

export const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  // Encontrar el indice del usuario en la db por su id
  const index = users.findIndex((user) => user.id === id);
  // Si no existe ningun usuario con ese id
  if (index === -1) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  } else {
    const userUpdated = { ...users[index], ...req.body };
    users[index] = userUpdated;
    res.json(userUpdated);
  }
};

export const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  // Encontrar el indice del usuario en la db por su id
  const index = users.findIndex((user) => user.id === id);
  // Si no existe ningun usuario con ese id
  if (index === -1) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  } else {
    // Eliminar el usuario de la base de datos segun su id
    users.splice(index, 1);
    // Responder con un mensaje
    res.json({ message: "Usuario eliminado correctamente" });
  }
};
