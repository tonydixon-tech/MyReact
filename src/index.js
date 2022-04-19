import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./function-based/components/TodoContainer"

//stylesheet
import "./function-based/App.css"

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
);