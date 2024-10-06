// Array de notas definidas directamente en el código
let notas = [8, 9, 8, 9, 10];
let nombre = "Gustavo";

// Función que recibe un array de notas, calcula la suma y el promedio usando for...of
function calcularPromedio(notas) {
    // Inicializar variable para la suma
    let suma = 0;
    let contador = 0;

    // Recorrer el array con un bucle for...of para sumar las notas
    for (let nota of notas) {
        contador++;
        suma += nota;

        console.log("Sumando la nota " + contador + ": " + nota + ". Suma actual es: " + suma);
    }

    // Calcular el promedio
    let promedio = suma / notas.length;

    // Mostrar el resultado en la consola
    console.log("El promedio de las notas de " + nombre + " es: " + promedio.toFixed(2));
}

// Llamamos a la función para calcular el promedio
calcularPromedio(notas);