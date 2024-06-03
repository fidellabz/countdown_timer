import React, { useState, useEffect } from 'react';
import TimerInput from './components/TimerInput';
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';
import './App.css';

function App() {
  const [initialTime, setInitialTime] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const handleSetTime = (seconds) => {
    setInitialTime(seconds);
    setTime(seconds);
  };

  const handleStart = () => {
    if (time > 0) {
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="App">
      <TimerInput onSetTime={handleSetTime} />
      <TimerDisplay time={time} />
      <TimerControls 
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
        isRunning={isRunning}
      />
    </div>
  );
}

export default App;
