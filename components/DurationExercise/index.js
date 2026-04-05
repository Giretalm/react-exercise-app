import React, { useState, useEffect } from "react";

function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer = null;

    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;

    const paddedMins = String(mins).padStart(2, "0");
    const paddedSecs = String(secs).padStart(2, "0");

    return `${paddedMins}:${paddedSecs}`;
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

      <button onClick={() => {
        setRunning(false);
        setSeconds(0);
      }}>
        Reset</button>
    </div>
  );
}

export default DurationExercise;