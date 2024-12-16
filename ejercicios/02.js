// Solicitar la nota al usuario
let nota = prompt("Introduce una nota del 0 al 10:");

// Validar si es un número válido
if (isNaN(nota)) {
    alert("Introduce un número válido.");
} else {
    // Convertir la nota a número
    nota = Number(nota);

    // Validar si la nota está en el rango de 0 a 10
    if (nota < 0 || nota > 10) {
        alert("Número erróneo.");
    } else {
        // Mostrar la calificación según el rango
        if (nota >= 0 && nota <= 2) {
            alert("Muy deficiente.");
        } else if (nota >= 3 && nota <= 4) {
            alert("Insuficiente.");
        } else if (nota >= 5 && nota <= 6) {
            alert("Suficiente.");
        } else if (nota === 7) {
            alert("Bien.");
        } else if (nota >= 8 && nota <= 9) {
            alert("Notable.");
        } else if (nota === 10) {
            alert("Sobresaliente.");
        }
    }
}
