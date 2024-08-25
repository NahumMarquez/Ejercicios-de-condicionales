// U20240745 GUSTAVO NAHUM MARQUEZ CRUZ


//crear una aplicación que calcule la suma de todos los números enteros

let num = 5; //Introduce un número :)
num = parseInt(num);
let suma = 0;
let secuencia = "";

for (let i = 1; i <= num; i++) {
    suma += i;
    
}
console.log(`Los enteros de 1 a ${num} suman ${suma} (${secuencia})`);

