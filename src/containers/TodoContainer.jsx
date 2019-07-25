import React, { Compoenent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTodos, addTodo, clickTodo } from '../actions/todos';
import TodoPage from '../components/TodoPage';

class TodoContainer extends Component {
  render() {
    return(
      <div>
        <TodoPage 
          todos={this.props.todos.todos}
          addTodo={this.props.actions.addTodo}
          clickTodo={this.props.actions.clickTodo}
        />
      </div>
    )
  }
}

// to map state to props
function mapStateToProps(state) {
  const { todos } = state;

  console.log("hi", todos);

  return {
    todos,
  };
}

// to map dispatch to props
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getTodos: getTodos,
        addTodo: addTodo,
        clickTodo: clickTodo,
      },
      dispatch,
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps,)(TodoContainer);