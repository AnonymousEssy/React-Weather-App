// src/TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, removeTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default TodoList;
