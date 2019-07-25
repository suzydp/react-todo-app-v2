import React, { Component } from 'react';
import '../app.scss';

class TodoItem extends React.Component {
  render() {
    // Add dummyTodos to render in this component
    const dummyTodos = [
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
    ];

    return (
      <ul>
        {dummyTodos.map(todo => 
          <li
            key={todo.id}
            onClick={todo.todoClick}
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