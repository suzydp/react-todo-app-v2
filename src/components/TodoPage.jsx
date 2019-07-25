import React, { Component } from 'react';
import TodoFilter from './TodoFilter';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

export default class TopPage extends Component {
  state = {
    // init state for filter
    activeFilter: [],
  };

  // todoClick = (id) => {
  //   const { todos } = this.state;
  //   const todoData = todos[id];

  //   // create new todo object as newTodo
  //   const newTodo = {
  //     ...todoData,
  //     completed: !todoData.completed
  //   };

  //   todos[id] = newTodo

  //   this.setState({
  //     todos
  //   });
  // }

  // // this data is sent from TodoForm
  // addTodo = (todoText) => {
  //   const { todos } = this.state;

  //   // init new todo as newTodo
  //   const newTodo = {
  //     id: todos.length,
  //     text: todoText,
  //     completed: false,
  //   }

  //   // convert to array by spread operator to apply to setState( ! Needs to confirm ! )
  //   const newTodos = [
  //     ...todos,
  //     newTodo
  //   ];

  //   this.setState({
  //     todos: newTodos,
  //   });
  // };

  // handle filter
  clickFilter = (filter) => {
    console.log(filter);

    this.setState({
      activeFilter: filter,
    });
  };

  filterTodos = (todos) => {
    const { activeFilter } = this.state;

    if(activeFilter === 'active') {
      return todos.filter(todo => !todo.completed);
    }

    if(activeFilter === 'completed') {
      return todos.filter(todo => todo.completed);
    }
    return todos;
  };

  render() {
    // change state to props because props handling everything thanks to redux
    const { todos, addTodo, clickTodo } = this.props;

    return (
      <div>
        <TodoForm addTodo={addTodo}/>
        <TodoItem todos={this.filterTodos(todos)} clickTodo={clickTodo}/>
        <TodoFilter clickFilter={this.clickFilter}/>
      </div>
    )
  }
}
