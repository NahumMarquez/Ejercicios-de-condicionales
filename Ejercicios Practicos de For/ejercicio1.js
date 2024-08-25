// U20240745 GUSTAVO NAHUM MARQUEZ CRUZ


// Se quiere un bucle que genere una lista con todos los números pares positivos pordebajo del número tecleado por el usuario.

let numero = 9;  // ingresar un numero :)

numero = parseInt(numero);
let pares = [];

for (let i = 0; i < numero; i += 2) {
    pares.push(i);
}

console.log(pares.join(" "));
