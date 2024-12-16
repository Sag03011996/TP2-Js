// Pedir al usuario un número entre 1 y 50
let numero = prompt("Introduce un número entre 1 y 50 para generar la pirámide:");

// Validar la entrada del usuario
if (isNaN(numero) || numero < 1 || numero > 50) {
    alert("Por favor, introduce un número válido entre 1 y 50.");
} else {
    // Convertir el input en número
    numero = Number(numero);

    // Construir la pirámide
    let piramide = ""; // Para almacenar el resultado final
    for (let i = 1; i <= numero; i++) {
        for (let j = 1; j <= i; j++) {
            piramide += j; // Agregar los números en cada fila
        }
        piramide += "\n"; // Agregar un salto de línea después de cada fila
    }

    // Mostrar la pirámide en la consola
    console.log(piramide);

    // Mostrar la pirámide en una alerta (opcional)
    alert(piramide);
}
