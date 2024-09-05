
    let calificacion = 95; // Ingrese Su Calificación

    if (calificacion >= 90 && calificacion <= 100) {
        console.log ("grado A");
    } else if (calificacion >= 80 && calificacion <= 89) {
        console.log ("grado B");
    } else if (calificacion >= 70 && calificacion <= 79) {
        console.log ("grado C");
    } else if (calificacion >= 60 && calificacion <= 69) {
        console.log ("grado D");
    } else if (calificacion >= 0 && calificacion <= 59) {
        console.log ("grado F");
    }  else {(isNaN(calificacion) || calificacion < 0) }
        console.log("Por favor, ingresa una calificacion válida.");

