// Gustavo Nahum Marquez Cruz 

// Array de películas con título y género
const peliculas = [
    { titulo: "Inception", genero: "Ciencia ficción" },
    { titulo: "El Padrino", genero: "Crimen" },
    { titulo: "Capitán América.", genero: "Acción" },
    { titulo: "Perdidas", genero: "Suspenso" },
    { titulo: "Toy Story", genero: "Animación" }
];

// Género de película que el usuario desea ver
let generoDeseado = "Ciencia ficción"; // Seleccione el genero que desea ver

// Búsqueda de película recomendada
let recomendacion = "";
for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].genero === generoDeseado) {
        recomendacion = peliculas[i].titulo;
        break;
    }
}

// Mostrar resultado
if (recomendacion) {
    console.log("Te recomendamos ver: " + recomendacion);
} else {
    console.log("No hay películas disponibles para el género seleccionado.");
}
