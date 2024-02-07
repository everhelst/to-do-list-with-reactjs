import "../style-sheets/Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Task({ id, text, completed, completeTask, deleteTasks }) {
  return (
    <div className={completed ? "task-container completed" : "task-container"}>
      <div className="task-text" onClick={() => completeTask(id)}>
        {text}
      </div>
      <div className="task-container-icon" onClick={() => deleteTasks(id)}>
        <AiOutlineCloseCircle className="task-icon" />
      </div>
      <div className="task-container-icon" onClick={() => completeTask(id)}>
        <AiOutlineCheckCircle className="task-icon" />
      </div>
    </div>
  );
}

export default Task;
