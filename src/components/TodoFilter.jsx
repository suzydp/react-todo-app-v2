import React, { Component } from 'react';
import '../app.scss'

class TodoFilter extends Component {
  // init state
  state = {
    activeFilter: 'all',
  };

  handleFilter = (filter) => {

    const { clickFilter } = this.props;

    this.setState({
      activeFilter: filter,
    }, () => {
      // to enable filter
      const { activeFilter } = this.state;
      clickFilter(activeFilter);
    });
  }

  render () {
    // init activeFiilter to render in this class
    const { activeFilter } = this.state;

    return (
      <div>
        <span>Show: </span>
        <button 
          // change state to active when onClick triggered
          disabled={activeFilter === 'all'}
          onClick={() => this.handleFilter('all')}
        >
          All
        </button>

        <button 
          // change state to active when onClick triggered
          disabled={activeFilter === 'active'}
          onClick={() => this.handleFilter('active')}
        >
          Active
        </button>

        <button
          // change state to completed when onClick triggered
          disabled={activeFilter === 'completed'}
          onClick={() => this.handleFilter('completed')}
        >
          Completed
        </button>

      </div>
    )
  }
}

export default TodoFilter;