import { useState } from "react";
import "./App.css";

type TodoListType = { id: string; title: string }[];

const TodoList: TodoListType = [
  { id: "1", title: "dished" },
  { id: "2", title: "clean room" },
  { id: "3", title: "tasks" },
  { id: "4", title: "shower" },
];

function App() {
  const [tasks, setTasks] = useState(TodoList);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return; // Prevent empty tasks
    setTasks((prev) => [...prev, { id: Date.now() + "", title: newTask }]);
    setNewTask("");
  };

  const handleRemove = (id: string) => {
    const updatedTasks = tasks.filter((item) => item.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          aria-label="New task input"
          onKeyDown={(e) => e.key === "Enter" && addTask()} // Add task on Enter key
        />
        <button className="AddButton" onClick={addTask} aria-label="Add task">
          Add Task
        </button>
      </div>
      {tasks.length === 0 ? (
        <p className="empty-state">No tasks yet. Add one above!</p>
      ) : (
        tasks.map((item) => (
          <div key={item.id} className="TaskItem">
            <p>{item.title}</p>
            <button
              onClick={() => handleRemove(item.id)}
              aria-label={`Remove ${item.title} task`}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;