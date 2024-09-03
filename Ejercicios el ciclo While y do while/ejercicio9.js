// U202407 45 Gustavo Nahum Marquez Cruz Tec.

// Generar una secuencia de Fibonacci hasta el número 20:

let a = 0, b = 1;  // Iniciamos la variable de la secuencia de Fibonacci: `a` es 0 y `b` es 1.
let fibonacci = [a, b];  // Crea un array `fibonacci` y lo inicializa con los primeros dos números de la secuencia (0 y 1).

while (true) {
    let next = a + b;
    if (next > 20) break;
    fibonacci.push(next);
    a = b;
    b = next;
}

console.log("Secuencia de Fibonacci hasta 20: " + fibonacci.join(", "));
