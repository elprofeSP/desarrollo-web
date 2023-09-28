# Ejercicio final del módulo BACKEND

## Objetivo

Crear una API REST que permita gestionar una lista de productos. Tienen la libertad de elegir el tipo de producto que quieran gestionar en su API, cada producto debe tener al menos 5 propiedades.

## Requisitos

- La API REST debe permitir:
  - Crear un nuevo producto
  - Listar todos los producto
  - Obtener un producto por su ID
  - Actualizar un producto
  - Borrar un producto
- Trabajar con las siguiente librerias:
  - express
  - cors
  - dotenv

## Configuración del entorno

Crear un nuevo proyecto de NodeJS

```bash
    npm init -y
```

Instalar las librerias necesarias

```bash
    npm install express cors dotenv -E
```

Crear el fichero `.env` con la siguiente configuración:

```bash
    PORT=3000
```

Dentro del directorio crear una carpeta src y dentro un fichero app.js

```bash
    mkdir src
    cd src
    touch app.js
```

Trabajar con ESmodules, para ello en el package.json añadir:

```json
    "type": "module",
```

Crear un archivo `.gitignore` con el siguiente contenido:

```bash
    node_modules
    .env
```

## Ejecución

Vamos a desarrollar la aplicación con nodemon para que se reinicie automáticamente cada vez que guardemos un cambio.

```bash
    npm install nodemon -D -E
```

Añadimos el siguiente script en el fichero `package.json`

```json
    "scripts": {
        "start": "node src/app.js",
        "dev": "nodemon src/app.js"
    },
```

Ejecutamos la aplicación en modo desarrollo

```bash
    npm run dev
```

Crear las carpetas controllers, routes y models dentro de src

```bash
    mkdir src/controllers src/routes src/models
```

Dentro de la carpeta models iremos creando los modelos de datos que necesitemos, en este caso la base de datos será un array de objetos.

```bash
    touch src/models/productoModel.js
```

Dentro de la carpeta routes iremos creando los ficheros de rutas que necesitemos, en este caso solo tendremos un fichero de rutas.

```bash
    touch src/routes/productoRoutes.js
```

Dentro de la carpeta controllers iremos creando los ficheros de controladores que necesitemos, en este caso solo tendremos un fichero de controladores.

```bash
    touch src/controllers/productoController.js
```

## Creación del modelo de datos

En el fichero `productoModel.js` añadimos algunos registros a nuestra base de datos, toma como ejemplo el siguiente código:

```javascript
export const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 20,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    imagen: "https://picsum.photos/200/300",
    stock: 10,
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 30,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    imagen: "https://picsum.photos/200/300",
    stock: 20,
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 40,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    imagen: "https://picsum.photos/200/300",
    stock: 30,
  },
  {
    id: 4,
    nombre: "Producto 4",
    precio: 50,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    imagen: "https://picsum.photos/200/300",
    stock: 40,
  },
  {
    id: 5,
    nombre: "Producto 5",
    precio: 60,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    imagen: "https://picsum.photos/200/300",
    stock: 50,
  },
];
```

## Desarrollar la lógica de la aplicación en el archivo app.js, las rutas y controladores

En este punto deberás desarrollar la lógica de la aplicación, para ello deberás crear las rutas y controladores necesarios para que la aplicación funcione correctamente.

## Finalmente subir el proyecto a GitHub

```bash
    git init
    git add .
    git commit -m "first commit"
    git branch -M main
    git remote add origin turepositorio
    git push -u origin main
```

## Bonus

Realizar el despliegue de la aplicación en https://www.fl0.com/
