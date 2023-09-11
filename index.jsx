import React from "react";
import ReactDOM from "react-dom";
import { Todo } from "./Todo";

export const App = () => {
  return (
    <div>
      <h1>To Do List</h1>
      <h2>First Task:</h2>
      <Todo title="Study" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
