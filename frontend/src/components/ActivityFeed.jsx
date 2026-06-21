function ActivityFeed() {
const logs = [
"Hermes generated sprint plan",
"OpenClaw created API routes",
"Board migration completed",
"Task moved to Done",
];

return (
  <div style={{ padding: "20px" }}>
    <h2>📜 Activity Feed</h2>

    {logs.map((log, index) => (
      <div
        key={index}
        style={{
          background: "white",
          padding: "10px",
          marginBottom: "8px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        {log}
      </div>
    ))}
  </div>
);
}

export default ActivityFeed;
