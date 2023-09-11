import React, { useState } from "react";
import ReactDOM from "react-dom";

const PasswordInput = (props) => {
  const [password, setPassword] = useState("MyVeryunsecurePass");
  const handleInput = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <input type="password" value={password} onChange={handleInput} />
      {password.length < 30 && (
        <p>Please enter a password equal to or greater than 30 characters</p>
      )}
    </div>
  );
};

ReactDOM.render(<PasswordInput />, document.getElementById("root"));

export default PasswordInput;
