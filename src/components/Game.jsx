import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); 
  const [turn, setTurn] = useState('X'); 
  const [winner, setWinner] = useState(null); 


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

  
  const checkWinner = (board) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  
  const handleSquareClick = (index) => {
    if (board[index] || winner) return; 

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (!newBoard.includes(null)) {
      setWinner('Empate'); 
    } else {
      toggleTurn();
    }
  };


  const toggleTurn = () => {
    setTurn((prevTurn) => (prevTurn === 'X' ? 'O' : 'X'));
  };


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