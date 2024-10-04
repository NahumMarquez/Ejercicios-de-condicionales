//Gustavo Nahum Marquez Cruz U20240745

// 4. Función que recibe un array de strings y devuelve un nuevo array con las strings en mayúsculas

function convertirMayusculas(arr) {
    return arr.map(str => str.toUpperCase());
}

let result= convertirMayusculas(["hola", "mundo"]);
console.log(result);