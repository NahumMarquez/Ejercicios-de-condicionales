
//GUSTAVO NAHUM MARQUEZ CRUZ   U20240745



//5. Detener un Temporizador Después de 5 Ejecuciones

function ejecutarTarea() {
    console.log("Ejecutando tarea...");
    executionCount++;

    if (executionCount === 5) {
        clearInterval(taskTimer);
        console.log("Tarea detenida después de 5 ejecuciones.");
    }
}

let executionCount = 0;
let taskTimer = setInterval(ejecutarTarea, 1000); // 1000 = 1 segundo
