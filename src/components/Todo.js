import React from "react";
import "../styles/Todo.css";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";

function Todo({ todo, todos, setTodos }) {
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const handleComplete = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div id="todo__container">
      <p className={`todo__text ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </p>
      <CheckIcon id="btn__complete" onClick={handleComplete} />
      <DeleteIcon id="btn__delete" onClick={handleDelete} />
    </div>
  );
}

export default Todo;
