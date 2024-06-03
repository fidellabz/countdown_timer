import React, { useState } from 'react';

function TimerInput({ onSetTime }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const seconds = parseInt(input);
    if (!isNaN(seconds) && seconds > 0) {
      onSetTime(seconds);
    }
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>CountDown Timer</h2>
      <input 
        type="number" 
        value={input} 
        onChange={handleChange} 
        placeholder="Set time in seconds" 
      />
      <button type="submit">Set Timer</button>
    </form>
  );
}

export default TimerInput;
