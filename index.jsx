import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Did You Know?</h1>
      <p>Adult sea otters typically weigh between 14 and 45 kg.</p>
    </div>
  );

  ReactDOM.render(<App />, document.getElementById("root"));
};

export default App;
