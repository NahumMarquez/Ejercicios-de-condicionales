// U20240745 Gustavo Nahum 



//Declaramos las variables 
let camisetas = 50;    // Ingresar la cantidad de camisetas
let pantalones = 10;  // Ingresar la cantidad de pantalones
let zapatos = 70;     // Ingresar la cantidad de zapatos

// Total de nuestros productos de nuestro inventario
let totalProductos = camisetas + pantalones + zapatos;

// Imprimir el total de productos de nuestro inventario
console.log("Total de productos en el inventario: " + totalProductos);

// Inicializar el array para los productos a reponer
let productosAreponer = [];

// Verificaramos si es necesario reponer algún producto
if (camisetas < 100) {
    productosAreponer.push("camisetas");
}
if (pantalones < 100) {
    productosAreponer.push("pantalones");
}
if (zapatos < 100) {
    productosAreponer.push("zapatos");
}

// Imprimimos si es necesario reponer algún producto
if (productosAreponer.length > 0) {
    console.log("Es necesario reponer los siguientes productos: " + productosAreponer.join(", ") + ".");
} else {
    console.log("No es necesario reponer ningún producto.");
}
