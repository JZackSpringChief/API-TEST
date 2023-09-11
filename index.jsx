import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [on, setOn] = useState(true);
  const [count, setCount] = useState(50);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (count > 0 && on) setCount((c) => c - 1);
    }, 25);
    return () => {
      if (timeout != null) clearTimeout(timeout);
    };
  }, [count]);

  const cancelCountdown = () => {
    setOn(false);
  };
  const resetCountdown = () => {
    setOn(true);
    setCount(50);
  };

  const content =
    count > 0 ? (
      on ? (
        <button name="hurry" onClick={cancelCountdown}>
          Hurry, click me!
        </button>
      ) : (
        <div>
          <p>You win!</p>
          <button name="reset_win" onClick={resetCountdown}>
            Reset Game
          </button>
        </div>
      )
    ) : (
      <div>
        <p>Oh no, game over...</p>
        <button name="reset_lose" onClick={resetCountdown}>
          Reset Game
        </button>
      </div>
    );

  return (
    <div>
      <h1>Click the button before it counts down to 0!</h1>
      <h3>{count}</h3>
      {content}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
