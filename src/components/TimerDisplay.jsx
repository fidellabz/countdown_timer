import React from 'react';

function TimerDisplay({ time }) {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
    </div>
  );
}

export default TimerDisplay;
