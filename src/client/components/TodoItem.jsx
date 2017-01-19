/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component, PropTypes } from 'react';
import styles from './TodoItem.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleOnClickDelete = this.handleOnClickDelete.bind(this);
  }

  handleToggleClick() {
    const { id, onToggleTodo } = this.props;
    onToggleTodo(id);
  }

  handleOnClickDelete(e) {
    const { id, onDeleteTodo } = this.props;
    onDeleteTodo(id);
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  render() {
    const { title, isDone } = this.props;
    return (
      <li>
        <span
          onClick={this.handleToggleClick}
          className={isDone ? styles['done-item'] : styles['not-done-item']}
        >{title} </span>
        <button onClick={this.handleOnClickDelete}>Delete</button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};
export default TodoItem;
