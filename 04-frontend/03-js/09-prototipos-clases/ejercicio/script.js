/*  ACTIVIDAD PROTOTIPOS CON SINTAXIS DE CLASES Y HERENCIA
1. Crea una clase base llamada "Vehiculo" que tenga las siguientes propiedades:

    - Marca (string)
    - Modelo (string)
    - Año (number)

2. Agrega un método llamado "obtenerDetalles" a la clase "Vehiculo" que imprima por consola las propiedades del vehículo.

3. Crea una clase llamada "Automovil" que herede de la clase "Vehiculo" y agregue una propiedad adicional:

    - Puertas (number) 

4. Sobrescribe el método "obtenerDetalles" en la clase "Automovil" para que también imprima por consola la cantidad de puertas.

5. Crea otra clase llamada "Motocicleta" que herede de la clase "Vehiculo" y agregue una propiedad adicional:

    - Cilindrada (number)

6. Sobrescribe el método "obtenerDetalles" en la clase "Motocicleta" para que también imprima por consola la cilindrada.

7. Crea instancias de las clases "Automovil" y "Motocicleta" y llama al método "obtenerDetalles" en cada una de ellas para comprobar que funcionan correctamente.
*/

class Vehiculo {
  constructor(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }

  obtenerDetalles() {
    return `marca: ${this.marca}, modelo: ${this.modelo}, anio: ${this.anio}`;
  }
}

class Automovil extends Vehiculo {
  constructor(marca, modelo, anio, puertas) {
    super(marca, modelo, anio);
    this.puertas = puertas;
  }

  obtenerDetalles() {
    return `marca: ${this.marca}, modelo: ${this.modelo}, anio: ${this.anio}, puertas: ${this.puertas}`;
  }
}

class Motocicleta extends Vehiculo {
  constructor(marca, modelo, anio, cilindrada) {
    super(marca, modelo, anio);
    this.cilindrada = cilindrada;
  }

  obtenerDetalles() {
    return `marca: ${this.marca}, modelo: ${this.modelo}, anio: ${this.anio}, cilindraje: ${this.cilindrada}`;
  }
}

const cicla = new Vehiculo("GW", "Lancer", 2010);
console.log(cicla.obtenerDetalles());

const renault = new Automovil("Renault", "Sandero", 2018, 5);
console.log(renault.obtenerDetalles());

const moto = new Motocicleta("Honda", "XR150", 2020, 148);
console.log(moto.obtenerDetalles());
