import React, { Component } from "react"

class InputTodo extends Component {
  state = {
    title: "",
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: ""
      })
    } else {
      alert("Please enter some text");
    }
  };

  render() {
    return (
      <div className="input-div"> 
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        &nbsp;
        <button className="input-submit">Submit</button>
      </form>
      </div>
    )
  }
}
export default InputTodo