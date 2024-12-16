// Declaro una variable para almacenar las cadenas
let resultado = "";

// Bucle para pedir cadenas de texto hasta que se cancele
while (true) {
    // Pedir al usuario una cadena de texto
    let texto = prompt("Introduce una cadena de texto (o pulsa 'Cancelar' para salir):");
    
    // Verificar si se pulsó "Cancelar"
    if (texto === null) {
        break; // Salir del bucle
    }
    
    // Concatenar la cadena con un guión si ya hay texto en 'resultado'
    if (resultado !== "") {
        resultado += "-";
    }
    resultado += texto;
}

// Mostrar el resultado concatenado
alert("Cadenas concatenadas: " + resultado);
