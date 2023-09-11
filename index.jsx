import React from "react";
import ReactDOM from "react-dom";

const PrintPrice = (props) => {
  return (
    <div className="price_tag">
      {" "}
      <div className="details">
        {" "}
        <h1>
          $
          {
            //Add code below
            props.member ? props.price * 0.75 : props.price
          }{" "}
        </h1>
        <p>{props.item}</p>{" "}
      </div>
      <div className="bar"></div>{" "}
    </div>
  );
};

ReactDOM.render(
  <PrintPrice item="aPhone 7 - Case" price={13.0} member={true} />,
  document.getElementById("root")
);

export default PrintPrice;
