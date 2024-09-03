
// U202407 45 Gustavo Nahum Marquez Cruz Tec.

//Contar cuántas veces aparece un número en un array:

let arr = [1, 2, 3, 4, 2, 2, 5, 2, 6]; // indroducimos numeros en nuestro arrays 
let num = 6;  // indroducimos el numero que queremos contar
let count = 0;
let i = 0;

do {
    if (arr[i] === num) {
        count++;
    }
    i++;
} while (i < arr.length);

console.log(`El número ${num} aparece ${count} veces en el array.`);
