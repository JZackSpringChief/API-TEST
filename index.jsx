import React, { useState } from "react";
import ReactDOM from "react-dom";

const Counter = () => {
  const [count, setCount] = useState(0);
  const AddCount = () => {
    setCount(count + 1);
  };
  const SubtractCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="counter">
      <div className="count">
        <h1>{count}</h1>
      </div>
      <div className="buttons">
        <button name="add" onClick={AddCount}>
          +
        </button>
        <button name="subtract" onClick={SubtractCount}>
          -
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById("root"));

export default Counter;
