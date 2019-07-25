import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello from React todo app</h1>
        <TodoForm />
        <TodoItem />
        <TodoList />
      </div>
    )
  }
}

export default App;