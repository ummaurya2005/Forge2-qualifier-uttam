function Dashboard() {
const cardStyle = {
flex: 1,
background: "white",
padding: "20px",
borderRadius: "10px",
textAlign: "center",
boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};

return (
  <div style={{ padding: "20px" }}>
    <h1>🚀 TaskForge Agent Command Center</h1>

    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
      <div style={cardStyle}>
        <h2>3</h2>
        <p>Agents</p>
      </div>

      <div style={cardStyle}>
        <h2>8</h2>
        <p>Tasks</p>
      </div>

      <div style={cardStyle}>
        <h2>5</h2>
        <p>Completed</p>
      </div>

      <div style={cardStyle}>
        <h2>🟢</h2>
        <p>System Online</p>
      </div>
    </div>
  </div>
);
}

export default Dashboard;
