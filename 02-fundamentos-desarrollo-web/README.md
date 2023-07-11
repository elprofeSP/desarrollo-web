# Fundametos desarrollo web

## Internet no es lo mismo que web

Internet es la infraestructura global que permite la comunicación y el intercambio de información, mientras que la web es uno de los servicios que se pueden encontrar en Internet, que permite acceder a información a través de páginas web.

![internet vs web](https://disenowebakus.net/imagenes/internet-vs-web.jpg)

## ¿Qué es el internet?

Internet es una abreviación de Internetworking, se creó en los años 70 para referirse a los cables físicos y las computadoras que se conectan entre sí.

## ¿De dónde viene el internet?

![cables submarinos de internet](https://www.adslzone.net/app/uploads-adslzone.net/2019/11/Cables-submarinos-Portada.jpg)

[Video sobre la historia del internet](https://www.youtube.com/watch?v=u1xxZ8r2rRc)

Internet es una abreviación de Internetworking, se creó en los años 70 para referirse a los cables físicos y las computadoras que se conectan entre sí.

Mapa de la Fibra Óptica actual:
https://www.submarinecablemap.com/

## Historia del internet

La historia del Internet se remonta a los años 60, cuando el Departamento de Defensa de los Estados Unidos desarrolló una red de comunicación llamada ARPANET (advanced research projects agency network) para conectar sus centros de investigación y desarrollo. El objetivo principal de esta red era crear una forma de comunicación segura y resistente en caso de un ataque nuclear.

### Primera conexión:

En 1969, la primera conexión de ARPANET se estableció entre la Universidad de California en Los Ángeles (UCLA) y el Instituto de Investigación de Stanford.

![Imagen de la primera conexión](https://i0.wp.com/hipertextual.com/wp-content/uploads/2014/11/ARPANET-800x570.jpg?resize=780%2C556&quality=50&strip=all&ssl=1)

Durante la década de 1970, se unieron a la red más instituciones académicas y de investigación, así como empresas privadas.

El primer mensaje enviado de una computadora a otra a través de ARPANET fue "LOGIN", enviado desde la Universidad de California en Los Ángeles (UCLA) a la Universidad de Stanford el 29 de octubre de 1969. Sin embargo, la transmisión se interrumpió después de que se enviaron solo las letras "L" y "O" debido a un fallo en el sistema. La segunda vez que se intentó enviar el mensaje completo, se transmitió con éxito y se estableció la primera conexión entre dos nodos de ARPANET. Este evento histórico es considerado como el nacimiento de internet tal como lo conocemos hoy en día.

### Surgen los primeros protocolos

En la década de 1980, ARPANET se dividió en dos redes distintas: MILNET, para fines militares, y una red civil llamada Internet. La Internet creció rápidamente durante esta década, y se desarrollaron herramientas como el correo electrónico y los protocolos de transferencia de archivos (FTP) para facilitar el intercambio de información.

## Historia de la web

A medida que la Internet crecía, se hizo evidente la necesidad de una forma más fácil de acceder a la información. En 1990, el científico de la computación británico Tim Berners-Lee inventó la World Wide Web (WWW) mientras trabajaba en el Centro Europeo de Investigación Nuclear (CERN) en Suiza, un sistema de hipertexto basado en internet que permitía a los usuarios acceder a documentos a través de enlaces o "hipervínculos".

![Tim berners lee](https://i.blogs.es/78e59f/450_1000/450_1000.jpeg)

### HTML, URL, HTTP, primer navegador y servidor web

Para hacer esto posible, Berners-Lee también creó el lenguaje HTML (HyperText Markup Language), las URL (Uniform Resource Locator), el primer servidor web, el primer navegador (WorldWideWeb Browser) y el protocolo HTTP (HyperText Transfer Protocol).

En 1991, la primera página web fue creada por Berners-Lee, que contenía información sobre el proyecto de la Web. A partir de ahí, la Web se expandió rápidamente, y en 1993 se lanzó el primer navegador web, llamado Mosaic.

### Primera página web

![Primara página web](https://i.blogs.es/e57f9f/captura-de-pantalla-142-/1366_2000.jpg)

### Estructura de la web

La estructura de la Web se basa en un sistema de enlaces entre páginas, que se conectan a través de hipervínculos. Cada página web está escrita en lenguaje HTML y se puede acceder a ella a través de una URL (Uniform Resource Locator).

La Web está organizada en páginas web individuales, que a su vez están alojadas en servidores web en todo el mundo. Los motores de búsqueda como Google y Bing utilizan algoritmos complejos para indexar y clasificar estas páginas, lo que permite a los usuarios encontrar la información que buscan de manera eficiente.

### DNS (Domain Name System)

Es un sistema que permite traducir los nombres de dominio de los sitios web en direcciones IP (Protocolo de Internet) numéricas que los ordenadores pueden entender.
Cuando un usuario teclea una dirección web en su navegador, por ejemplo, www.ejemplo.com, el navegador envía una solicitud al servidor DNS para obtener la dirección IP asociada con ese nombre de dominio. El servidor DNS busca en una base de datos distribuida y devuelve la dirección IP correspondiente al navegador, que a su vez establece una conexión con el servidor web del sitio en cuestión.

![dns](https://www.seobility.net/es/wiki/images/1/19/Servidor-DNS.png)

### ¿Cómo saber tu IP address?

En la consola de comandos de tu computadora escribe el siguiente comando:

```bash
ipconfig
```

### World Wide Web Consortium

El World Wide Web Consortium (W3C) es una comunidad internacional que desarrolla estándares abiertos para la Web. El W3C fue fundado en 1994 por Tim Berners-Lee, el inventor de la Web. El W3C también se encarga de la promoción de la Web y de la educación de los usuarios sobre su uso.

### Web browser

[La Guerra de los Navegadores Web 1993 - 2022](https://www.youtube.com/watch?v=sNV0322dIa0)

### HTTP (HyperText Transfer Protocol)

Es el protocolo de comunicación que permite las transferencias de información en la World Wide Web.
Para este protocolo existen HTTP Request y HTTP Response, los cuales se encargan del procesamiento de las solicitudes.
Existen métodos dentro de HTTP:

- GET: Solicita datos
- POST: Envía datos.
- PUT: Crea o reemplaza datos.
- DELETE: Borra datos específicos.

![http](https://www.seobility.net/es/wiki/images/thumb/f/f5/Cabecera-http.png/450px-Cabecera-http.png)

### HTTPS (HyperText Transfer Protocol Secure)

HTTPS (Hypertext Transfer Protocol Secure). Es la parte de seguridad en la conexión, las peticiones van encriptadas.

### Estándares web

Los estándares web se introdujeron para proteger el ecosistema web, para mantenerlo abierto, gratuito y accesible para todos.
Cuando se hizo esto, se alentó a los creadores de navegadores a adherirse a una forma estandarizada de hacer las cosas, lo que resultó en una compatibilidad cruzada cada vez más fácil para los creadores de contenido y ya no hubo necesidad de crear múltiples versiones del mismo sitio web.

---

## Línea de comandos

### ¿Qué es la línea de comandos?

La terminal es un programa que ejecuta líneas de comandos, que a su vez estas líneas de comando ejecutan acciones y aquí tienes que aprender dos conceptos: terminal y shell.

### Concepto de terminal

Estamos muy acostumbrados a que en nuestra computadora inicie un sistema operativo que tenga un sistema de ventanas en el que podemos abrir carpetas y programas y podamos mover archivos a través de una interfaz gráfica.

La terminal es otra ventana más, es un programa, una interfaz que recibe un comando para luego pasárselo a la shell y que esta última la ejecute. Con este programa podemos hacer todo lo que el sistema de carpetas e interfaz gráfica del sistema operativo puede hacer, pero utilizando comandos.

### Concepto de shell

Ahora la terminal no ejecuta líneas de código, solo la recibe, es la shell quien hace todo el proceso de tomar el comando, ir con el procesador y la memoria RAM y decirles "tomen, ejecuten esto".

Si lo pensamos de otra forma, la shell nos proporciona una forma de comunicarnos con el procesador y la RAM sin tener que pasar por la interfaz gráfica.

### ¿Por qué usar la shell y no la interfaz gráfica?

La interfaz gráfica es muy útil y fácil de usar, pero tiene sus limitaciones, por ejemplo, si queremos hacer una acción con muchos archivos, tendríamos que seleccionarlos todos y arrastrarlos a una carpeta, pero si son muchos archivos, esto se vuelve tedioso.

Al final del día, la interfaz gráfica, como lo es el sistema de ventanas, es un programa más y como programa ocupa espacio en la memoria. De hecho, si estás en Windows y abres el administrador de tareas en la pestaña Procesos, en el grupo Procesos de Windows, encontrarás uno llamado Explorador de Windows.

Este programa no es todo el sistema de ventanas, pero si es todo el sistema de ficheros y como podemos ver ocupa espacio en CPU y en memoria RAM.
La terminal es mucho menos pesada que el sistema de ventanas y el sistema de ficheros porque te comunicas directamente con los recursos del sistema operativo sin pasar por la interfaz gráfica.

## Principales comandos de la terminal

### Comandos básicos

- `pwd`: Imprime la ruta actual en la que nos encontramos en la terminal.
- `clear`: Limpia la pantalla de la terminal (shortcut: Ctrl + L).
- `cd`: Se utiliza para cambiar el directorio actual.
- `ls`: Lista el contenido de un directorio.
- `mkdir`: Crea un nuevo directorio.
- `rmdir`: Borrar un directorio vacio.
- `rm`: Elimina un archivo.
- `help`: Brinda información sobre los diferentes comandos.
- `mv`: Mueve o renombra un archivo.
- `cat`: Muestra el contenido de un archivo.
- `cp`: Copia un archivo de un lugar a otro.
- `ipconfig`: Muestra la información de la configuración de la red.
- `date`: Fecha actual.
- `echo`: Muestra mensajes en la pantalla o redirige la salida a un archivo.
- `touch`: Crea un archivo.
- `whoami`: Muestra el nombre de usuario.
- `start`: Iniciar una aplicación o un archivo.
- `nano`: Es un editor de texto de la línea de comandos.
- `code`: Abrir visual studio code.
- `ps`: Listar los procesos en ejecución en el sistema.
- `kill`: Matar un proceso.
- `alias`: Crear un atajo de comando.
- `unalias`: Eliminar un alias.

[Material de apoyo sobre comandos de la terminal](https://www.youtube.com/watch?v=Pi0KVD4xTbc)

---

## Git

![git logo](https://git-scm.com/images/logo@2x.png)

### ¿Qué es Git?

Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente.

- [docuemntación oficial de git](https://git-scm.com/doc)
- [Guía de git recomendada](https://jonmircha.com/git)

### Git no es lo mismo que GitHub

![git vs github](https://1.bp.blogspot.com/-WY2YpNr3W6g/UY6tZAc-H3I/AAAAAAAABLY/xJ9x3wIY8V8/s1600/Github2.png)

Git es un software de control de versiones, mientras que GitHub es una plataforma en la nube que nos permite alojar nuestros repositorios de código utilizando el sistema de control de versiones Git.

### ¿Qué es un repositorio?

Un repositorio es un espacio donde se almacena el código de un proyecto, en este espacio se almacena el historial de cambios que se le han hecho al código, por lo que se puede volver a cualquier versión anterior del proyecto.

### ¿Qué es un commit?

Un commit es un cambio que se le hace al código, este cambio puede ser la creación de un archivo, la modificación de un archivo o la eliminación de un archivo.

### ¿Qué es un branch?

Un branch es una rama, es una copia del código que se encuentra en el repositorio, esta copia se hace para poder hacer cambios en el código sin afectar el código que se encuentra en la rama principal.

### ¿Qué es un merge?

Un merge es la unión de dos ramas, es decir, cuando se hace un merge se unen los cambios que se hicieron en una rama con los cambios que se hicieron en otra rama.

### ¿Qué es un pull request?

Un pull request es una solicitud de cambios, es decir, cuando se hace un pull request se le solicita al administrador del repositorio que revise los cambios que se hicieron en una rama y que los una con la rama principal.

### ¿Qué es un fork?

Un fork es una copia de un repositorio, esta copia se hace para poder hacer cambios en el código sin afectar el código que se encuentra en el repositorio original.

### ¿Qué es un clone?

Un clone es una copia de un repositorio, esta copia se hace para poder hacer cambios en el código sin afectar el código que se encuentra en el repositorio original.

### ¿Qué es un push?

Un push es el envío de los cambios que se hicieron en una rama a un repositorio remoto.

### ¿Qué es un pull?

Un pull es la descarga de los cambios que se hicieron en un repositorio remoto a una rama.

## Configuración de git por primera vez

### Configuración de git

```bash
# Configurar nombre de usuario
git config --global user.name "Nombre de usuario"

# Configurar correo electrónico
git config --global user.email correo@gmail.com

# Configurar rama por defecto a main (opcional)

git config --global init.defaultBranch main

# Configurar editor de texto
git config --global core.editor "code --wait"

# Ver configuración
git config --list

# Ver configuración en editor de codigo
git config --global -e

# Estandarizar los saltos de linea en windows
git config --global core.autocrlf true

# Estandarizar los saltos de linea en mac y linux
git config --global core.autocrlf input

# Ver ayuda
git help

# Ver ayuda de un comando
git help config
```

### Inicializar un repositorio con git

```bash
mkdir carpeta
cd carpeta
touch README.md
touch .gitignore
git init
code .
```

### Flujo básico de trabajo con git

El flujo de Git, consta de tres estados locales, es decir en la computadora donde se esta trabajando y uno más de forma remota cuando accedemos al codigo centralizado en plataformas como GitHub, Gitlab, Bitbucket, etc.

Dichos estados son modified, staged, committed y remote. A cada uno de ellos le corresponde un área de trabajo:

- Working Directory: Es el área correspondiente al estado modified y es la carpeta local de tu computadora donde almacenas los archivos de tu proyecto.
- Staging Area: Es el área correspondiente al estado staged también se le llama index por que es el área donde git indexa y agrega los cambios realizados en los archivos previos a comprometerlos en su registro.
- Local Repository: Es el área correspondiente al estado committed, donde los cambios ya se han registrado en el repositorio de git también se le llama HEAD por que indica en qué cambio se encuentra el puntero del repositorio.
- Remote Repository: Es el área correspondiente al estado remote y es el directorio remoto donde almacenamos los archivos del proyecto en alguna plataforma web como GitHub, GitLab, BitBucket. Git denomina origin al repositorio remoto.

![flujo de trabajo con git](https://jonmircha.com/img/blog/git-flow.png)

```bash
# Ver estado de los archivos
git status

# Agregar archivos al stage
git add .

# Agregar archivos al stage por nombre
git add nombre-archivo

# Confirmar cambios
git commit -m "Mensaje del commit"

# Subir cambios al repositorio remoto
git push origin main

# Bajar cambios del repositorio remoto
git pull origin main
```

### Para repositorios nuevos

```bash
# Crear repositorio en github

# Crear repositorio en local
git init

# Agregar archivos al stage
git add .

# Confirmar cambios
git commit -m "Mensaje del commit - primer commit"

# Agregar repositorio remoto
git remote add origin https://github.com/usuario/repositorio.git

# Subir cambios al repositorio remoto
git push origin master
```

### Para clonar repositorios

```bash
# Clonar repositorio
git clone https://github.com/usuario/repositorio.git
```

---

## Curso recomendado sobre git y github

👉[Curso de Git y GitHub - Jonmircha](https://www.youtube.com/watch?v=suzMNqDQiyU)👈

👉[Curso de Git y GitHub - Hola Mundo](https://www.youtube.com/watch?v=VdGzPZ31ts8)👈

