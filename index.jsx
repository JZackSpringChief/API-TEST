import React from "react";
import ReactDOM from "react-dom";

const IsAQuestion = (props) => {
  const hasQuestionMark =
    props.query != null && props.query[props.query.length - 1] == "?";

  let response;
  if (hasQuestionMark) {
    response = <p>A question, this is</p>;
  } else {
    response = <p>A question, this is not</p>;
  }

  return (
    <div>
      <h1>Is this a Question??</h1>
      <p>
        <strong>Question:</strong> <i>{props.query}</i>
      </p>
      {response}
    </div>
  );
};

ReactDOM.render(
  <IsAQuestion query="Is the Moon really made of cheese?" />,
  document.getElementById("root")
);

export default IsAQuestion;
