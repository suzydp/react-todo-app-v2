import React, { Component } from 'react';
import TodoFilter from './components/TodoFilter';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

class App extends Component {

  // this data is sent from TodoForm
  addTodo = (todo) => {
    console.log("Todo: ", todo);
  };

  render() {
    return (
      <div>
        <h1>Hello from React todo app</h1>
        <TodoForm addTodo={this.addTodo}/>
        <TodoItem />
        <TodoFilter />
      </div>
    )
  }
}

export default App;