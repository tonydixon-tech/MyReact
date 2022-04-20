import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./function-based/components/TodoContainer"
import { BrowserRouter as Router} from "react-router-dom"

//stylesheet
import "./function-based/App.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);