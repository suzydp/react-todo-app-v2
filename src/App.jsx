import React, { Component } from 'react';
import TodoFilter from './components/TodoFilter';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

class App extends Component {
  state = {
    todos: [
      {
        id: 1, 
        text: "Do some laundry", 
        isDone: false, 
        todoClick: ()=>console.log("clicked"),
      },
      {
        id: 2, 
        text: "Buy Apple at grocery", 
        isDone: false, 
        todoClick: ()=>console.log("clicked"),
      },
      {
        id: 3, 
        text: "Clean up my room", 
        isDone: true, 
        todoClick: ()=>console.log("clicked"),
      },
    ],
  };

  todoClick = (id) => {
    const { todos } = this.state;
    const todoData = todos[id];

    // create new todo object as newTodo
    const newTodo = {
      ...todoData,
      completed: !todoData.completed
    };

    todos[id] = newTodo

    this.setState({
      todos
    });
  }

  // this data is sent from TodoForm
  addTodo = (todoText) => {
    const { todos } = this.state;

    // init new todo as newTodo
    const newTodo = {
      id: todos.length,
      text: todoText,
      completed: false,
    }

    // convert to array by spread operator to apply to setState( ! Needs to confirm ! )
    const newTodos = [
      ...todos,
      newTodo
    ];

    this.setState({
      todos: newTodos,
    });
  };

  render() {

    const { todos } = this.state;

    return (
      <div>
        <h1>Hello from React todo app</h1>
        <TodoForm addTodo={this.addTodo}/>
        <TodoItem todos={todos} clickTodo={this.todoClick}/>
        <TodoFilter />
      </div>
    )
  }
}

export default App;