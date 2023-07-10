// Declarar una funcion
function sumar(valor1, valor2) {
  var total = valor1 + valor2;
  return total;
}
// llamar una funcion
console.log(sumar(1, 2)); //se llama la funcion y se muestra en consola
// sumar(10, 20); //se llama la funcion pero no se muestra en consola

//guardar el resultado de una funcion en una variable
var totalCompra = sumar(2000, 3000);

//mostrar en consola lo que esta guardado en la variable totalCompra
console.log(totalCompra); //5000

// cual es el orden de los console.log?
function saludar(nombre) {
  console.log("chao"); // 2
  return "Hola " + nombre; //3
  console.log("holi"); //no se ve ya que esta despues del return
}

console.log(37); //1
console.log(saludar("Pepito"));
