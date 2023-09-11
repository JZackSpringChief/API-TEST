import React, { useState } from "react";
import ReactDOM from "react-dom";

const NameForm = () => {
  //Add code below
  const [firstname, setFirst] = useState("");
  const [lastname, setLast] = useState("");

  const handleFirst = (event) => {
    setFirst(event.target.value);
  };
  const handleSecond = (event) => {
    setLast(event.target.value);
  };

  return (
    <div className="form">
      <h1>Your Credentials</h1>
      <div className="form_content">
        <p>
          <strong>
            Please tell us your first and last name, in that order.
          </strong>
        </p>
        <div className="form_row">
          <input
            type="text"
            name="first"
            value={firstname}
            onChange={handleFirst}
            placeholder="First Name"
          />
          <input
            type="text"
            name="last"
            value={lastname}
            onChange={handleSecond}
            placeholder="Last Name"
          />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<NameForm />, document.getElementById("root"));

export default NameForm;
