import { useState } from "react";
import Dashboard from "./components/Dashboard";
import AgentPanel from "./components/AgentPanel";
import TaskBoard from "./components/TaskBoard";
import ActivityFeed from "./components/ActivityFeed";
import CreateTask from "./components/CreateTask";

const agents = [
  {
    name: "Hermes",
    role: "Supervisor Agent",
    status: "Online",
  },
  {
    name: "OpenClaw",
    role: "Execution Agent",
    status: "Online",
  },
  {
    name: "Frontend Agent",
    role: "React Specialist",
    status: "Online",
  },
  {
    name: "Backend Agent",
    role: "API Specialist",
    status: "Online",
  },
  {
    name: "QA Agent",
    role: "Testing Agent",
    status: "Online",
  },
];

function App() {
  const [refreshTasks, setRefreshTasks] = useState(false);
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <Dashboard agents={agents} tasks={tasks} />
      <CreateTask onTaskCreated={() => setRefreshTasks((prev) => !prev)} />
      <AgentPanel agents={agents} />
      <TaskBoard
        refreshTasks={refreshTasks}
        tasks={tasks}
        setTasks={setTasks}
      />
      <ActivityFeed />
    </>
  );
}

export default App;