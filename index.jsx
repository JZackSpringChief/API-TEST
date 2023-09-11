import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [completed, toggleComplete] = useState(false);

  let text = "I'm still working on my tasks.",
    buttonText = "Declare complete";
  if (completed) {
    text = "I've completed the task!";
    buttonText = "Declare incomplete";
  }

  return (
    <div>
      <h1>Corporate Employee Brother Tracker</h1>
      <p>Are you done with your tasks?</p>
      <button
        onClick={() => {
          toggleComplete(!completed);
        }}
      >
        {buttonText}
      </button>
      <p>
        <strong>
          <i>{text}</i>
        </strong>
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
