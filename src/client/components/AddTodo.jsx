import React, { Component, PropTypes } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
    };
    this.handleNewTodoChange = this.handleNewTodoChange.bind(this);
    this.handleAddNewTodo = this.handleAddNewTodo.bind(this);
  }

  handleNewTodoChange(e) {
    this.setState({ newTodo: e.target.value });
  }

  handleAddNewTodo() {
    if (this.state.newTodo.length === 0) return;
    const { onAddTodo } = this.props;
    onAddTodo(this.state.newTodo)
      .then(() => { this.setState({ newTodo: '' }); });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleNewTodoChange} value={this.state.newTodo} />
        <button onClick={this.handleAddNewTodo}>Add</button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
export default AddTodo;
