const prompt = require("prompt-sync")();

// Objeto con las propiedades y el método
let producto = {
    precio: Number(prompt("Ingresa el precio del producto: ")),
    descuento: Number(prompt("Ingresa el porcentaje de descuento:")),
    calcularNeto: function() {

        return this.precio - (this.precio * this.descuento / 100);
    }
};

// Calcular el precio neto y mostrarlo
let precioNeto = producto.calcularNeto();


console.log(`El precio neto del producto es: $${precioNeto.toFixed(2)}`);