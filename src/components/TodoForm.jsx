import React, { Component } from 'react';

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <p className="title">Add your Todo</p>
        <form id="form">
          <input type="text" name="todo" placeholder="Phone call to Dan" />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;