import React, { Compoenent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTodos } from '../actions/todos';

class TodoContainer extends Component {
  render() {
    return(
      <div></div>
    )
  }
}

// to map state to props
function mapStateToProps(state) {
  const { todos } = state;

  return {
    todos
  };
}

// to map dispatch to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getTodos: getTodos,
    },
    dispatch,
  );
}

export default connect(mapStateToProps,mapDispatchToProps,)(TodoContainer);