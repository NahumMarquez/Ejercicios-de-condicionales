// Función para cambiar el texto del título
function cambiarElTexto() {
    let titulo = document.getElementById("titulo");
    titulo.textContent = "Hola Mundo con JavaScript";
}

// Función para cambiar el color del texto del título a rojo
function cambiarElColor() {
    let titulo = document.getElementById("titulo");
    titulo.style.color = "red";
}

// Función para cambiar la alineación del texto del título al centro
function cambiarAlineacion() {
    let titulo = document.getElementById("titulo");
    titulo.style.textAlign = "center";
}

// Función para crear un nuevo texto debajo del título
function creacionTexto() {
    // Verifica si el texto ya existe para no crearlo nuevamente
    if (!document.getElementById("nuevoTexto")) {
        let nuevoTexto = document.createElement("p");
        nuevoTexto.id = "nuevoTexto";
        nuevoTexto.textContent = "JavaScript permite crear páginas dinámicas";
        document.body.appendChild(nuevoTexto);
    }
}

// Función para borrar el texto creado
function borrarElTexto() {
    let nuevoTexto = document.getElementById("nuevoTexto");
    if (nuevoTexto) {
        nuevoTexto.remove();
    }
}

// Asignar eventos a los botones
document.getElementById("btnCambiarTexto").addEventListener("click", cambiarElTexto);
document.getElementById("btnCambiarColor").addEventListener("click", cambiarElColor);
document.getElementById("btnCambiarAlineacion").addEventListener("click", cambiarAlineacion);
document.getElementById("btnCrearTexto").addEventListener("click", creacionTexto);
document.getElementById("btnBorrarTexto").addEventListener("click", borrarElTexto);
