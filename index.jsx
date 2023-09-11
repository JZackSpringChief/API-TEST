import React, { useState } from "react";
import ReactDOM from "react-dom";

const CreateAccount = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  if (props.user != null) {
    return <p>You are already logged in!</p>;
  }

  return (
    <div>
      <p>Email:</p>
      <input type="email" name="email" value={email} onChange={handleInput} />
      <p>Password:</p>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleInput}
      />
    </div>
  );
};

ReactDOM.render(
  <CreateAccount user={{ username: "MeIsJohnDoe" }} />,
  document.getElementById("root")
);

export default CreateAccount;
