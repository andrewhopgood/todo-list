import React from "react";
import "../styles/Form.css";
import AddIcon from "@material-ui/icons/Add";

function Form({ inputText, setInputText, setTodos, todos }) {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    if (inputText === "") {
      return;
    }
    setTodos((prev) => [
      ...todos,
      { id: Math.random(), text: inputText, completed: false },
    ]);
    setInputText("");
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      addTodo(e);
      return;
    }
    handleInputText(e);
  };

  return (
    <div>
      <form id="form" onKeyPress={handleEnterKey}>
        <input type="text" onChange={handleInputText} value={inputText}></input>
        <AddIcon id="btn__addTodo" onClick={addTodo} />
      </form>
    </div>
  );
}

export default Form;
