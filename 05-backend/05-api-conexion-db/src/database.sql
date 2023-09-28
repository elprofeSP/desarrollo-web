DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks(
  id_task SERIAL PRIMARY KEY,
  title VARCHAR(80) NOT NULL,
  completed BOOLEAN DEFAULT false
);

-- CRUD (CREATE, READ, UPDATE, DELETE)

-- CREATE: crear un nuevo registro en la base de datos
INSERT INTO tasks(title) VALUES
('Hacer ejercicio'),
('Estudiar backend'),
('Prepar el desayuno'),
('Conectar la base de datos con la api'),
('Sacar el perro al parque'),
('Hacer el proyecto final'),
('Ir a dormir');

-- UPDATE: actualizar un registro de la base de datos
UPDATE tasks
  SET completed = true
  WHERE id_task = 3;

-- DELETE: borrar un registro de la base de datos
DELETE FROM tasks
  WHERE id_task = 7;

-- READ: Leer información de la base de datos
SELECT * FROM tasks;