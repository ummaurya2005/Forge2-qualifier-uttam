import React, { useEffect, useState } from "react";

function AgentPanel() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/agents`)
      .then((res) => res.json())
      .then((data) => setAgents(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h2>🤖 Active AI Agents</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {agents.map((agent) => (
          <div className="card" key={agent.id}>
            <h3>{agent.name}</h3>
            <p>{agent.role}</p>
            <p className={"status-" + (agent.status || "offline").toLowerCase()}>
              ● {agent.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgentPanel;