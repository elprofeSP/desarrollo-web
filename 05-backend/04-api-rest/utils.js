import { createRequire } from "node:module";
// Crear nuestro propio require
export const require = createRequire(import.meta.url);
