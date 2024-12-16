// Bucle para recorrer los números del 1 al 500
for (let i = 1; i <= 500; i++) {
    let mensaje = i.toString(); // Convertir el número en cadena para mostrar

    // Verificar si el número es múltiplo de 4
    if (i % 4 === 0) {
        mensaje += " (Múltiplo de 4)";
    }

    // Verificar si el número es múltiplo de 9
    if (i % 9 === 0) {
        mensaje += " (Múltiplo de 9)";
    }

    // Mostrar el número con sus anotaciones
    console.log(mensaje);

    // Cada 5 líneas, mostrar una línea horizontal
    if (i % 5 === 0) {
        console.log("————————————————————-");
    }
}
