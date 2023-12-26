import React from 'react';

const Controls = ({ onDecrement, onIncrement }) => {
  return (
    <div className="controls">
      <button type="button" onClick={onDecrement}>
        Decrement
      </button>
      <button type="button" onClick={onIncrement}>
        Increment
      </button>
    </div>
  );
};

export default Controls;
