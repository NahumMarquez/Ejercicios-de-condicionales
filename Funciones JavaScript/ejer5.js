//Gustavo Nahum Marquez Cruz U20240745

// 5. Función que recibe un número y devuelve true si es primo

function esPrimo(numero) {
    if (numero <= 1) return false; 
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false; 
        }
    }
    return true; 
}

let result= esPrimo(7);
console.log(result);  // INGRESA UN NUMERO