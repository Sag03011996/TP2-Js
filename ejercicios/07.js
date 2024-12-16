// Pedir al usuario un número entre 1 y 50
let numero = prompt("Introduce un número entre 1 y 50 para la pirámide inversa:");

// Validar la entrada del usuario
if (isNaN(numero) || numero < 1 || numero > 50) {
    alert("Por favor, introduce un número válido entre 1 y 50.");
} else {
    // Convertir el input en número
    numero = Number(numero);

    // Construir la pirámide inversa
    let piramide = ""; // Para almacenar el resultado final
    for (let i = numero; i >= 1; i--) {
        piramide += i.toString().repeat(i) + "\n";
    }

    // Mostrar la pirámide en la consola
    console.log(piramide);

    // Mostrar la pirámide en una alerta (opcional, pero con limitaciones de visualización)
    alert(piramide);
}
