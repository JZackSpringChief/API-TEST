import React from "react";
import ReactDOM from "react-dom";

const PopupNotice = (props) => {
  return (
    <div>
      {props.children}
      {props.message != null && <p>{props.message}</p>}
    </div>
  );
};

ReactDOM.render(
  <PopupNotice message="Make sure to stay warm and safe!">
    <h3>The cold season is coming in!</h3>
    <h5>We're expecting a cold front later this evening</h5>
  </PopupNotice>,
  document.getElementById("root")
);

export default PopupNotice;
