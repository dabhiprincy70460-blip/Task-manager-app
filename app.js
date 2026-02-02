import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks", {
      headers: { Authorization: token }
    }).then(res => setTasks(res.data));
  }, []);

  return (
    <div>
      <h2>Task Manager</h2>
      {tasks.map(task => (
        <p key={task._id}>{task.title}</p>
      ))}
    </div>
  );
}

export default App;
