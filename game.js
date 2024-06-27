const board = document.getElementById('board');
const squares = document.querySelectorAll('.square');
const restartButton = document.getElementById('restartButton');

let players = ['X', 'O'];
let currentPlayer = players[0];
let gameOver = false;

squares.forEach((square) => {
    square.addEventListener('click', () => {
        if (!gameOver) {
            square.textContent = currentPlayer;
            checkWin();
            currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
        }
    });
});

restartButton.addEventListener('click', () => {
    squares.forEach((square) => {
        square.textContent = '';
    });
    currentPlayer = players[0];
    gameOver = false;
});

function checkWin() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i];
        if (
            squares[combination[0]].textContent === currentPlayer &&
            squares[combination[1]].textContent === currentPlayer &&
            squares[combination[2]].textContent === currentPlayer
        ) {
            alert('Player ' + currentPlayer + ' wins!');
            gameOver = true;
        }
    }
}