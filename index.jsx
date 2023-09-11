import React from "react";
import ReactDOM from "react-dom";

const Goal = (props) => {
  var announcement;

  if (props.isGoal === true) {
    announcement = (
      <div>
        <h1>Goal!</h1>
        <p>It's a goal!</p>
      </div>
    );
  } else {
    announcement = (
      <div>
        <h1>Miss</h1>
        <p>Doh! It's a miss...</p>
      </div>
    );
  }

  return announcement;
};

ReactDOM.render(<Goal isGoal={true} />, document.getElementById("root"));

export default Goal;
