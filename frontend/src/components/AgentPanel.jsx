import React from "react";

function AgentPanel({ agents = [] }) {
  const defaultAgents = [
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

  const agentList = agents.length ? agents : defaultAgents;

  return (
    <div className="container">
      <h2>🤖 Active AI Agents</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {agentList.map((agent) => (
          <div className="card" key={agent.name}>
            <h3>{agent.name}</h3>

            <p>{agent.role}</p>

            <p
              className={
                "status-" +
                agent.status.toLowerCase()
              }
            >
              ● {agent.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgentPanel;