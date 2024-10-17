const prompt = require("prompt-sync")();

let alumno = {
    nombre: prompt("Ingresa el nombre del alumno:"),
    ingles: Number(prompt("Calificación en Inglés: ")),
    programacion: Number(prompt("Calificación en Programación: ")),
    matematica: Number(prompt("Calificación en Matemáticas: ")),
};

let promedio = (alumno.ingles + alumno.programacion + alumno.matematica) / 3;

console.log(`Nombre: ${alumno.nombre}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);
