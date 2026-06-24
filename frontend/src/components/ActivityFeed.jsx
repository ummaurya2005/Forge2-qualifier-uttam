import React from "react";

function ActivityFeed() {
  const logs = [
    "Hermes assigned 'Build React Dashboard' to Frontend Agent",
    "Hermes assigned 'Create User API' to Backend Agent",
    "OpenClaw generated API endpoints",
    "QA Agent verified Login Module",
    "Task moved to Done",
  ];

  return (
    <div className="container">
      <h2>📜 Activity Feed</h2>

      {logs.map((log, index) => (
        <div
          key={index}
          className="card"
          style={{
            marginBottom: "10px",
          }}
        >
          {log}
        </div>
      ))}
    </div>
  );
}

export default ActivityFeed;