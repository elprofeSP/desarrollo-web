# Bases de datos

## ¿Qué es una base de datos?

Una base de datos es un conjunto de datos pertenecientes a un mismo contexto y almacenados sistemáticamente para su posterior uso. En este sentido; una biblioteca puede considerarse una base de datos compuesta en su mayoría por documentos y textos impresos en papel e indexados para su consulta. Actualmente, y debido al desarrollo tecnológico de campos como la informática y la electrónica, la mayoría de las bases de datos están en formato digital (electrónico), que ofrece un amplio rango de soluciones al problema de almacenar datos.

## Tipos de bases de datos

### Bases de datos relacionales

Una base de datos relacional es una base de datos que cumple con el modelo relacional, el cual es el modelo más utilizado en la actualidad para implementar bases de datos ya que permite establecer una relación entre la información contenida en las tablas. Este modelo fue propuesto por Edgar Frank Codd en 1970.

### Bases de datos no relacionales

Las bases de datos NoSQL son un tipo de bases de datos que se apartan del modelo relacional y que permiten un almacenamiento y un acceso a los datos de forma más rápida y eficiente. Estas bases de datos se han hecho muy populares en los últimos años debido a que son capaces de manejar grandes volúmenes de datos de forma muy eficiente y escalable.

## ¿Qué es DBMS?

Un sistema de gestión de bases de datos (Database Management System) es un conjunto de programas que permiten el almacenamiento, modificación y extracción de la información en una base de datos, además de proporcionar herramientas para añadir, borrar, modificar y analizar los datos. El término fue acuñado por primera vez en 1970 por los investigadores de IBM, E. F. Codd y Donald D. Chamberlin.

## ¿Qué es SQL?

SQL (Structured Query Language) es un lenguaje de consultas diseñado para administrar y recuperar información de sistemas de gestión de bases de datos relacionales. El SQL fue originalmente desarrollado en los años 70 en los laboratorios de IBM en San José (California), donde se llamó SEQUEL (Structured English Query Language). Posteriormente, en 1979, Oracle Corporation lanzó la primera versión comercial de SQL, conocida como Oracle V2.

## ¿Qué es RDBMS?

Cuando un DBMS cumple con el modelo relacional, se le conoce como RDBMS (Relational Database Management System). Los RDBMS son los sistemas de gestión de bases de datos más utilizados en la actualidad, ya que permiten establecer una relación entre la información contenida en las tablas, para ello utilizan un lenguaje de consultas llamado SQL.

## RDBMS populares

- Oracle
- MySQL
- Microsoft SQL Server
- PostgreSQL
- IBM Db2
- SQLite
- Microsoft Access
- MariaDB

## PostgreSQL

Durante el curso vamos a utilizar postgres como RDBMS, ya que es un sistema de gestión de bases de datos relacional orientado a objetos y de código abierto. Es uno de los sistemas de gestión de bases de datos más populares, con una gran comunidad de desarrolladores y empresas que lo utilizan.

Página oficial: [https://www.postgresql.org/](https://www.postgresql.org/)

Existen dos formas de trabajar con postgres:

- SQL Shell: Es una interfaz de línea de comandos para PostgreSQL. Permite ejecutar comandos SQL y administrar bases de datos PostgreSQL directamente desde la terminal.

- PgAdmin: Es una herramienta de administración y desarrollo de código abierto para PostgreSQL. Permite crear y administrar bases de datos PostgreSQL de forma gráfica.

## Comandos básicos de SQL

### Crear una base de datos

```sql
CREATE DATABASE nombre_de_la_base_de_datos;
```

### Eliminar una base de datos

```sql
DROP DATABASE nombre_de_la_base_de_datos;
```

### Seleccionar una base de datos

```sql
\c nombre_de_la_base_de_datos
```

### Mostrar las bases de datos

```sql
\l
```

### Mostrar las tablas de una base de datos

```sql
\dt
```

### Crear una tabla

```sql
CREATE TABLE nombre_de_la_tabla (
  columna1 tipo_de_dato,
  columna2 tipo_de_dato,
  columna3 tipo_de_dato
);
```

### Eliminar una tabla

```sql
DROP TABLE nombre_de_la_tabla;
```

### Mostrar los datos de una tabla

```sql
SELECT * FROM nombre_de_la_tabla;
```

### Insertar datos en una tabla

```sql
INSERT INTO nombre_de_la_tabla (columna1, columna2, columna3)
VALUES (valor1, valor2, valor3);
```

### Actualizar datos de una tabla

```sql
UPDATE nombre_de_la_tabla
SET columna1 = valor1, columna2 = valor2, columna3 = valor3
WHERE condicion;
```

### Eliminar datos de una tabla

```sql
DELETE FROM nombre_de_la_tabla WHERE condicion;
```

### Crear un usuario

```sql
CREATE USER nombre_de_usuario WITH PASSWORD 'contraseña';
```

### Eliminar un usuario

```sql
DROP USER nombre_de_usuario;
```

### Conceder privilegios a un usuario

```sql
GRANT privilegio ON nombre_de_la_tabla TO nombre_de_usuario;
```

### Revocar privilegios a un usuario

```sql
REVOKE privilegio ON nombre_de_la_tabla FROM nombre_de_usuario;
```

### Tipos de datos en postgres

http://codigoelectronica.com/blog/postgresql-tipo-de-datos

### Ejemplo de base de datos

```sql
CREATE DATABASE tienda;

\c tienda

CREATE TABLE productos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  descripcion TEXT
);

INSERT INTO productos (nombre, precio, descripcion)
VALUES ('Producto 1', 10.50, 'Descripción del producto 1');

INSERT INTO productos (nombre, precio, descripcion)
VALUES ('Producto 2', 20.50, 'Descripción del producto 2');

INSERT INTO productos (nombre, precio, descripcion)
VALUES ('Producto 3', 30.50, 'Descripción del producto 3');

SELECT * FROM productos;

UPDATE productos
SET nombre = 'Producto 4', precio = 40.50, descripcion = 'Descripción del producto 4'
WHERE id = 1;

DELETE FROM productos WHERE id = 1;
```

## Más información

https://bluuweb.github.io/desarrollo-web-bluuweb/19-01-sql/#postgresql
