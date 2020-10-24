import React from "react";
import Todo from "./Todo";
import "../styles/TodoList.css";

function TodoList({ todos, deleteTodo, setTodos }) {
  return (
    <div id="todo__list">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}

export default TodoList;
