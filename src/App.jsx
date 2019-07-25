import React, { Component } from 'react';
import TodoFilter from './components/TodoFilter';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello from React todo app</h1>
        <TodoForm />
        <TodoItem />
        <TodoFilter />
      </div>
    )
  }
}

export default App;