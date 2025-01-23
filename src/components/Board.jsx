import React from 'react';
import Square from './Square';
import './board.css';
const Board = ({ board, toggleTurn, turn }) => {
  return (
    <div className="board">
      {board.map((value, index) => (
        <Square
          key={index}
          index={index}
          toggleTurn={toggleTurn}
          turn={turn}
          value={value}
        />
      ))}
    </div>
  );
};

export default Board;