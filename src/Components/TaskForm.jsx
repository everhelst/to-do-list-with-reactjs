import { useState } from "react";
import "../style-sheets/TaskForm.css";
import { v4 as uuidv4 } from "uuid";

function TaskForm(props) {
  const [userInput, setUserInput] = useState("");

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: userInput,
      completed: false,
    };
    props.onSubmit(newTask);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        placeholder="Please add a task"
        onChange={handleInput}
      />
      <button className="task-button">Add new Task</button>
    </form>
  );
}

export default TaskForm;
