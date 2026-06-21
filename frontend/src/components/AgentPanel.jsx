function AgentPanel() {
const agents = [
{ name: "Hermes", role: "Planner", status: "Online" },
{ name: "OpenClaw", role: "Developer", status: "Online" },
{ name: "Uttam", role: "Supervisor", status: "Online" },
];

return (
  <div style={{ padding: "20px" }}>
    <h2>🤖 Agent Status</h2>

    {agents.map((agent, index) => (
      <div
        key={index}
        style={{
          background: "white",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <strong>{agent.name}</strong> - {agent.role}
        <br />
        Status: 🟢 {agent.status}
      </div>
    ))}
  </div>
);
}

export default AgentPanel;
