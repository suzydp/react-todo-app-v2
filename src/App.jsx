import React, { Component } from 'react';
import './app.scss';

class App extends Component {
  render() {
    return (
      <div id="main">
        <h1>Hello, {this.props.name}</h1>
      </div>
    )
  }
}

export default App;