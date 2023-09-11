import React from "react";
import ReactDOM from "react-dom";

const BatteryManager = (props) => {
  var batReport;
  if (props.battery < 20) {
    batReport = <p>Please charge me</p>;
  } else if (props.battery < 40) {
    batReport = <p>I may need a charge soon</p>;
  } else {
    batReport = <p>I have enough power</p>;
  }

  return (
    <div>
      <h3>Battery Manager</h3>
      {batReport}
    </div>
  );
};

ReactDOM.render(
  <BatteryManager battery={30} />,
  document.getElementById("root")
);

export default BatteryManager;
