import React, { useState } from "react";
import ReactDOM from "react-dom";

const Questionnaire = (props) => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  const updateFirst = (e) => {
    setFirst(e.target.value);
  };
  const updateSecond = (e) => {
    setSecond(e.target.value);
  };

  let ending;
  if (first.length > 0 && second.length < 0) {
    ending = <button>Submit Form</button>;
  } else {
    ending = <p>Please answer all the questions above.</p>;
  }

  return (
    <div>
      <h1>Boogle Forms</h1>
      <p>
        <strong>What is your favorite computer program/app?</strong>
      </p>
      <input name="first" type="text" value={first} onChange={updateFirst} />
      <p>
        <strong>What computer model do you use?</strong>
      </p>
      <input name="second" type="text" value={second} onChange={updateSecond} />
      {ending}
    </div>
  );
};

ReactDOM.render(<Questionnaire />, document.getElementById("root"));

export default Questionnaire;
