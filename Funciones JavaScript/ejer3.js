//Gustavo Nahum Marquez Cruz U20240745

// 3. Función que recibe un string y devuelve el número de vocales que contiene

function contarVocales(texto) {
    let vocales = 'aeiouAEIOU';
    let contador = 0;
    
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    
    return contador;
}

let resultado = contarVocales("Hola Mundo"); // INGRESE LA PALABRA O FRASE 



console.log("Número de vocales:", resultado); 
