import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Validity = (props) => {
  const [valid, isValid] = useState(false);

  useEffect(() => {
    if (props.user != null && props.user.isAuthenticated) isValid(true);
    else isValid(false);
  }, []);

  return <div>{valid ? props.children : <p>This is an invalid user</p>}</div>;
};

ReactDOM.render(
  <Validity user={{ name: "Jill", isAuthenticated: true }}>
    <h3>Hello, Jill</h3>
  </Validity>,
  document.getElementById("root")
);

export default Validity;
