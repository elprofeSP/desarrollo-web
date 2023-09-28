const os = require("node:os");

console.log("Información del sistema operativo:");
console.log("----------------------------------");
console.log("Nombre del sistema operativo:", os.platform());
console.log("Versión del sistema operativo:", os.release());
console.log("Arquitectura del sistema operativo:", os.arch());
console.log("CPUs:", os.cpus().length);
console.log("Memoria total:", os.totalmem() / 1024 / 1024 / 1024, "GB");
console.log("Memoria libre:", os.freemem() / 1024 / 1024 / 1024, "GB");
console.log("uptime:", os.uptime() / 60 / 60, "horas");
