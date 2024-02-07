import TaskList from "./Components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="app-tasks">
      <div className="task-main-list">
        <h1>To Do List</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
