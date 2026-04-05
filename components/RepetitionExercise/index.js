import React, { useState } from "react";

function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{name}</h2>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>+1 Rep</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default RepetitionExercise;