// U202407 45 Gustavo Nahum Marquez Cruz Tec.

// Sumar todos los elementos de un array:

let arr = [1, 2, 3, 4, 5]; // introducimos numeros para sumar despues
let sum = 0;
let i = 0;

do {
    sum += arr[i];
    i++;
} while (i < arr.length);

console.log("La suma de todos los elementos del array es: " + sum);
