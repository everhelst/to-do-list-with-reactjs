import { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import "../style-sheets/TaskList.css";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    } else {
      alert("Please add a task");
    }
  };

  const deleteTasks = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className="tasks-list-container">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            deleteTasks={deleteTasks}
            completeTask={completeTask}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;
