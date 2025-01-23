import React from 'react';
import './Square.css';

const Square = ({ toggleTurn, turn, index, value }) => {
  return (
    <button
      className="square"
      id={index}
      onClick={() => toggleTurn(index)}
    >
      {value}
    </button>
  );
};

export default Square;