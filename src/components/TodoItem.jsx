import React, { Component } from 'react';
import '../app.scss';

class TodoItem extends React.Component {
  render() {
    // Add dummyTodos to render in this component
    const { todos, clickTodo } = this.props;
    console.log(todos);

    return (
      <ul>
        {/* this index is a default parameter of map (!needs to confirm!) */}
        {todos.map((todo, index) => 
          <li
            key={index}
            onClick={() => clickTodo(index)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
            {todo.text}
          </li>
        )}
      </ul>
    )
  }
}

export default TodoItem;