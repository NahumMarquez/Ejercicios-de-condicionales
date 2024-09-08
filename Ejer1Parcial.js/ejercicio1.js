// Gustavo Nahum Marquez Cruz 


let nombreDelArray = [
    { categoria: "Vivienda", valor: 300 },   // Gasto en Vivienda
    { categoria: "Alimentos", valor: 400 },   // Gasto en Alimentos
    { categoria: "Transporte", valor: 300 },  // Gasto en Transporte
    { categoria: "Entretenimiento", valor: 200 }  // Gasto en Entretenimiento
];

// 2. Definir el ingreso mensual total de la familia
let ingresoMensual = 1700;  // Ingreso total de los miembros de la familia

// 3. Calcular el gasto total sumando cada categoría (usando nombreDelArray[indice].Propiedad)
let totalGastos = nombreDelArray[0].valor + nombreDelArray[1].valor + nombreDelArray[2].valor + nombreDelArray[3].valor;


// 4. Evaluar el presupuesto según el ingreso mensual y el total de gastos
if (totalGastos < ingresoMensual) {
    // Si los gastos son menores que el ingreso, hay ahorro
    let ahorro = ingresoMensual - totalGastos;
    console.log(`El presupuesto está equilibrado y tienes un ahorro de: $${ ahorro }`);
    
} else if (totalGastos === ingresoMensual) {
    // Si los gastos son iguales al ingreso, el presupuesto está equilibrado sin ahorro
    console.log("El presupuesto está equilibrado y no tienes ahorros.");

} else {
    // Si los gastos superan el ingreso, hay un déficit
    let deficit = totalGastos - ingresoMensual;
    console.log(`El presupuesto está excedido.Te faltan $${ deficit } para cubrir los gastos.`);
}