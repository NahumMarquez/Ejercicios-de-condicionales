// U20240745 GUSTAVO NAHUM MARQUEZ CRUZ

//Programa que sume los números de un array y calcule la media aritmética. 

let numeros = [5,9,10,12]; // Introducir los numero seguidos de una , por favor :)
let suma = 0;

// Sumar los números de nuestro array
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

// Calculado la media aritmética
let media = suma / numeros.length;

console.log(`La suma es ${suma} y la media es ${media}`);
