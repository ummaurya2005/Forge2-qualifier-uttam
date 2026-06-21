import { useState } from "react";

function TaskBoard() {
  const [taskTitle, setTaskTitle] = useState("");
  const [agent, setAgent] = useState("OpenClaw");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Build Laravel API",
      agent: "OpenClaw",
      status: "Backlog",
    },
    {
      id: 2,
      title: "Create Sprint Plan",
      agent: "Hermes",
      status: "In Progress",
    },
  ]);

  const addTask = () => {
    if (!taskTitle.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: taskTitle,
        agent,
        status: "Backlog",
      },
    ]);

    setTaskTitle("");
  };

  const moveTask = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const renderColumn = (title) => (
    <div
      style={{
        flex: 1,
        background: "#f3f4f6",
        padding: "15px",
        borderRadius: "10px",
      }}
    >
      <h3>{title}</h3>
      {tasks
        .filter((task) => task.status === title)
        .map((task) => (
          <div
            key={task.id}
            style={{
              background: "white",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <strong>{task.title}</strong>
            <br />
            Agent: {task.agent}
            <br />
            <br />

            {title === "Backlog" && (
              <button onClick={() => moveTask(task.id, "In Progress")}>
                Start
              </button>
            )}

            {title === "In Progress" && (
              <button onClick={() => moveTask(task.id, "Review")}>
                Review
              </button>
            )}

            {title === "Review" && (
              <button onClick={() => moveTask(task.id, "Done")}>
                Complete
              </button>
            )}

            <button
              onClick={() => deleteTask(task.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>📋 Task Board</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Task title"
          style={{ padding: "10px", width: "250px" }}
        />

        <select
          value={agent}
          onChange={(e) => setAgent(e.target.value)}
          style={{ marginLeft: "10px", padding: "10px" }}
        >
          <option>Hermes</option>
          <option>OpenClaw</option>
          <option>Uttam</option>
        </select>

        <button
          onClick={addTask}
          style={{
            marginLeft: "10px",
            padding: "10px",
          }}
        >
          Add Task
        </button>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        {renderColumn("Backlog")}
        {renderColumn("In Progress")}
        {renderColumn("Review")}
        {renderColumn("Done")}
      </div>
    </div>
  );
}

export default TaskBoard;
