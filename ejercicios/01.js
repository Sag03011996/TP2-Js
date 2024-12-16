// Solicitar la edad al usuario
let edad = prompt("Por favor, ingresa tu edad:");

// Validar es un número válido
if (isNaN(edad)) {
    console.log("Por favor, ingresa un número válido.");
} else {
    edad = Number(edad);
    if (edad >= 18) {
        console.log("¡Puedes conducir!");
    } else {
        console.log("Aún no puedes conducir.");
    }
}
