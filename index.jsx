import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Fruits, Vegetables } from "./types.jsx";

const FruitSelector = () => {
  const [value, setValue] = useState("fruits");

  const handleSelect = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <p>Select the plant type you enjoy eating more:</p>
      <select value={value} onChange={handleSelect}>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
      </select>
      {value == "fruits" ? <Fruits /> : <Vegetables />}
    </div>
  );
};

ReactDOM.render(<FruitSelector />, document.getElementById("root"));

export default FruitSelector;
