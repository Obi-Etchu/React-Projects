// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [stopValue, setStopValue] = useState('');
  const [isCounting, setIsCounting] = useState(false);

  const startCounting = () => {
    if (stopValue && parseInt(stopValue) > 0) {
      setIsCounting(true);
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount + 1 >= parseInt(stopValue)) {
            clearInterval(interval);
            setIsCounting(false);
            return parseInt(stopValue);
          }
          return prevCount + 1;
        });
      }, 1000); 
    } else {
      alert('Please enter a valid positive number.');
    }
  };

  const resetCounter = () => {
    setCount(0);
    setStopValue('');
    setIsCounting(false);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-display">Counter: {count}</h1>
      <div className="counter-controls">
        <input
          type="number"
          className="counter-input"
          placeholder="Enter stop value"
          value={stopValue}
          onChange={(e) => setStopValue(e.target.value)}
          disabled={isCounting}
        />
        <button
          className="counter-button"
          onClick={startCounting}
          disabled={isCounting}
        >
          Start
        </button>
        <button className="counter-button reset" onClick={resetCounter}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
