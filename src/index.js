import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./TodoApp";

import "./styles.css";

function App() {
  return <TodoApp />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
