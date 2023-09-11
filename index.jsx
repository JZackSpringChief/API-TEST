import React from "react";
import ReactDOM from "react-dom";

const CustomInput = (props) => {
  let bColor = props.error ? "red" : "lightgray";

  return (
    <div>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        style={{ borderColor: bColor }}
      />
    </div>
  );
};

ReactDOM.render(
  <CustomInput
    error="Something is wrong"
    value="This must have a red border"
  />,
  document.getElementById("root")
);

export default CustomInput;
