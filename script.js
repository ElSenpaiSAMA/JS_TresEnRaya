let primerJugador = 'X';
let tablero = ['', '', '', '', '', '', '', '', ''];
let juego = true;

const celdas = document.querySelectorAll('.celdas');
const reset = document.getElementById('reset');
const ganar = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

celdas.forEach(celda => {
    celda.addEventListener('click', CeldaClick);
});
reset.addEventListener('click', reiniciar);

function CeldaClick(event) {
    const clickedceldas = event.target;
    const clickedceldasIndex = clickedceldas.getAttribute('data-index');
    if (tablero[clickedceldasIndex] !== '' || !juego) {
        return;
    }
    tablero[clickedceldasIndex] = primerJugador;
    clickedceldas.textContent = primerJugador;
    ganador();
    primerJugador = primerJugador === 'X' ? 'O' : 'X';
}

function ganador() {
    let ga = false;

    for (let i = 0; i < ganar.length; i++) {
        const [a, b, c] = ganar[i];
        if (tablero[a] === '' || tablero[b] === '' || tablero[c] === '') {
            continue;
        }
        if (tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
            ga = true;
            break;
        }
    }

    if (ga) {
        alert(`¡El jugador ${primerJugador} ha ganado!`);
        juego = false;
        return;
    }

    if (!tablero.includes('')) {
        alert("¡Es un empate!");
        juego = false;
    }
}

function reiniciar() {
    primerJugador = 'X';
    tablero = ['', '', '', '', '', '', '', '', ''];
    juego = true;
    celdas.forEach(celda => {
        celda.textContent = '';
    });
}


