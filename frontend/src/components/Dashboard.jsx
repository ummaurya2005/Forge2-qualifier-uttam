import React from "react";

function Dashboard({ agents = [], tasks = [] }) {
  const activeAgents = agents.length;
  const tasksManaged = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === "Done"
  ).length;

  return (
    <div className="container">
      <div className="title">
        🚀 TaskForge AI Agent Command Center
      </div>

      <div className="grid stats" style={{ marginTop: "20px" }}>
        <div className="card">
          <h2>{activeAgents}</h2>
          <p>Active Agents</p>
        </div>

        <div className="card">
          <h2>{tasksManaged}</h2>
          <p>Tasks Managed</p>
        </div>

        <div className="card">
          <h2>{completedTasks}</h2>
          <p>Completed Tasks</p>
        </div>

        <div className="card">
          <h2 className="status-online">Online</h2>
          <p>Hermes Supervisor</p>
        </div>
      </div>

      <div
        className="card"
        style={{ marginTop: "20px" }}
      >
        <h2>🧠 Hermes AI Supervisor</h2>

        <p>
          Hermes continuously analyzes incoming tasks,
          selects the most suitable agent,
          assigns work automatically,
          and records every action in the activity feed.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;