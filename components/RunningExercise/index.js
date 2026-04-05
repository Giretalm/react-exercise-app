import React, { useState, useEffect } from "react";

function RunningExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let timer = null;

    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  // Format timer to 00:00
  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;

    const paddedMins = String(mins).padStart(2, "0");
    const paddedSecs = String(secs).padStart(2, "0");

    return `${paddedMins}:${paddedSecs}`;
  };

  // Record Lap
  const recordLap = () => {
    const currentTime = formatTime(seconds);
    setLaps((prevLaps) => [...prevLaps, currentTime]);
  };

  return (
    <div>
      <h1>{name}</h1>
      <h2>{formatTime(seconds)}</h2>

      {!running && (
        <button onClick={() => setRunning(true)}>Start</button>
      )}

      {running && (
        <button onClick={() => setRunning(false)}>Stop</button>
      )}

      {running && (
        <button onClick={recordLap}>Record Lap</button>
      )}

      <button onClick={() => {
        setRunning(false);
        setSeconds(0);
      }}>
        Reset</button>
      
      <h2>Laps</h2>
      <ul className="lap-list">
        {laps.map((lap, index) => (
          <li key={index}>
            Lap {index + 1}: {lap}
        </li>
      ))}
      </ul>
    </div>
  );
}

export default RunningExercise;