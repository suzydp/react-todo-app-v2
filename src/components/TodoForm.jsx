import React, { Component } from 'react';

class TodoForm extends React.Component {
  // init state
  state = {
    inputValue: "",
  }

  // handle form data
  handleChange = (event) => {
    // change state by using setState
    this.setState({
      inputValue: event.target.value,
    });
  }

  // handle data submitting
  handleSubmit = (event) => {
    // To prevent executing unstoppable event, use event.preventDefault
    event.preventDefault();
    // Appear result when the data successfully sent
    console.log(this.state.inputValue);
    // send the data to props
    this.props.addTodo(this.state.inputValue)
  }

  render() {
    return (
      <div>
        <p className="title">Add your Todo</p>
        <form id="form">
          <input onChange={this.handleChange} type="text" name="todo" placeholder="Phone call to Dan" />
          <button onClick={this.handleSubmit}>Add</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;