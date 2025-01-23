import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // Estado del tablero
  const [turn, setTurn] = useState('X'); // Turno actual
  const [winner, setWinner] = useState(null); // Ganador

  // Combinaciones ganadoras
  const winningCombinations = [
    [0, 1, 2], // Fila superior
    [3, 4, 5], // Fila central
    [6, 7, 8], // Fila inferior
    [0, 3, 6], // Columna izquierda
    [1, 4, 7], // Columna central
    [2, 5, 8], // Columna derecha
    [0, 4, 8], // Diagonal principal
    [2, 4, 6], // Diagonal inversa
  ];

  // Verificar si hay un ganador
  const checkWinner = (board) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  // Manejar clic en una casilla
  const handleSquareClick = (index) => {
    if (board[index] || winner) return; // Ignorar si ya hay un ganador o la casilla está ocupada

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (!newBoard.includes(null)) {
      setWinner('Empate'); // Empate si no quedan casillas vacías
    } else {
      toggleTurn();
    }
  };

  // Cambiar el turno
  const toggleTurn = () => {
    setTurn((prevTurn) => (prevTurn === 'X' ? 'O' : 'X'));
  };

  // Reiniciar el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn('X');
    setWinner(null);
  };

  return (
    <div>
      <h1>{winner ? (winner === 'Empate' ? '¡Empate!' : `¡Ganó ${winner}!`) : `Turno de ${turn}`}</h1>
      <Board board={board} toggleTurn={handleSquareClick} turn={turn} />
      <button onClick={resetGame}>Reiniciar Juego</button>
    </div>
  );
};

export default Game;