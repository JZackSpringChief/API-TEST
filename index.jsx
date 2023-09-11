import React from "react";
import ReactDOM from "react-dom";

const Country = (props) => {
  return (
    <div>
      <h1>France</h1>
      <p> The capital is Paris</p>
      <img scr="https://mimo.app/i/eiffel.png" />
    </div>
  );
};

ReactDOM.render(<Country />, document.getElementById("root"));

export default Country;
