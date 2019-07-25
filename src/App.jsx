import React, { Component } from 'react';
import TodoContainer from './containers/TodoContainer';

class App extends Component {

  render() {

    const { todos } = this.state;

    return (
      <div>
        <h1>Hello from React todo app</h1>
        <TodoContainer />
      </div>
    )
  }
}

export default App;