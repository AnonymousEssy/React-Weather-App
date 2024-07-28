// src/Todo.js
import React from 'react';

const Todo = ({ todo, index, removeTodo }) => {
  return (
    <div className="todo">
      {todo.text}
      <button onClick={() => removeTodo(index)}>Remove</button>
    </div>
  );
};

export default Todo;
