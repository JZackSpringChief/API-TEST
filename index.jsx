import React from "react";
import ReactDOM from "react-dom";

const Image = (props) => {
  if ((props.src = null)) {
    //(props.src == null) there is a diffence
    return <p>No Image</p>;
  }
  return <img src={props.src} />;
};

ReactDOM.render(
  <Image src="https://mimo.app/i/moto1.png" />,
  document.getElementById("root")
);

export default Image;
