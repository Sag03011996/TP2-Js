// Inicializar una variable para almacenar la suma
let sumaTotal = 0;

// Bucle para pedir números hasta que se cancele
while (true) {
    // Pedir al usuario un número
    let input = prompt("Introduce un número (o pulsa 'Cancelar' para salir):");

    // Verificar si se pulsó "Cancelar"
    if (input === null) {
        break; // Salir del bucle
    }

    // Convertir el input a número
    let numero = Number(input);

    // Verificar si el valor ingresado es un número válido
    if (isNaN(numero)) {
        alert("Por favor, introduce un número válido.");
    } else {
        // Sumar el número al total
        sumaTotal += numero;
    }
}

// Mostrar la suma total
alert("La suma total de los números introducidos es: " + sumaTotal);
