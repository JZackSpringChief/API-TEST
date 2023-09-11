import React, { useState } from "react";
import ReactDOM from "react-dom";

const Counter = () => {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>The Gazillionth Counter</h1>
      <label for="button">The Internet's full of counters, aren't they?</label>
      <button id="button" onClick={Increment}>
        +1
      </button>
      <h3>{count}</h3>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById("root"));

export default Counter;
