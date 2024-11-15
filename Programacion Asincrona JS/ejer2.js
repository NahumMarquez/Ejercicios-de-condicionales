
//GUSTAVO NAHUM MARQUEZ CRUZ   U20240745


//2. Temporizador de Cuenta Regresiva

function cuentaRegresiva() {
    console.log(countdown);
    countdown--;

    if (countdown < 0) {
    clearInterval(timer);
    console.log("¡Tiempo terminado!");
    }
    }
    
    let countdown = 5;
    let timer = setInterval(cuentaRegresiva, 1000); // 1000 = 1 segundo
