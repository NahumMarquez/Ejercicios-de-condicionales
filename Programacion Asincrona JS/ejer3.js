
//GUSTAVO NAHUM MARQUEZ CRUZ   U20240745


//3. Mostrar Fecha y Hora Actual Cada Segundo

function mostrarFechaHora() {
    const now = new Date();
    console.log(now.toLocaleString());
    }

  setInterval(mostrarFechaHora, 1000); // 1000 = 1 segundo
