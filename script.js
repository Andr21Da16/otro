let tablero = ["", "", "", "", "", "", "", "", ""];
let turnoJugador = true;
let juegoTerminado = false;

// Combinaciones ganadoras
const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Función para seleccionar una celda
function seleccionarCelda(index) {
    if (!juegoTerminado && tablero[index] === "") {
        if (turnoJugador) {
            tablero[index] = "X";
        } else {
            tablero[index] = "O";
        }
        actualizarTablero();
        verificarGanador();
        turnoJugador = !turnoJugador;
    }
}

// Función para actualizar el tablero
function actualizarTablero() {
    const celdas = document.querySelectorAll(".celda");
    tablero.forEach((valor, index) => {
        celdas[index].innerText = valor;
    });
}

// Función para verificar si hay un ganador
function verificarGanador() {
    for (let combinacion of combinacionesGanadoras) {
        const [a, b, c] = combinacion;
        if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
            juegoTerminado = true;
            mostrarPregunta();
            return;
        }
    }
    if (tablero.every(celda => celda !== "")) {
        mostrarPregunta();
    }
}

// Función para mostrar la pregunta
function mostrarPregunta() {
    document.getElementById("pregunta").classList.remove("hidden");
}

// Función para procesar la respuesta del usuario
function respuesta(respuesta) {
    document.getElementById("pregunta").classList.add("hidden");
    if (respuesta === "no") {
        document.getElementById("mensajeFinal").classList.remove("hidden");
    } else if (respuesta === "si") {
        document.getElementById("mensajeRosa").classList.remove("hidden");
    } else {
        alert("Por favor, selecciona una de las opciones disponibles.");
        mostrarPregunta();
    }
}

// Función para abrir el mensaje rosa
function abrirMensaje() {
    alert("Te amo, nunca lo olvides, siempre estaré para ti");
}
