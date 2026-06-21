import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/boards")
      .then((res) => setBoards(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>TaskForge</h1>

      {boards.map((board) => (
        <div
          key={board.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            borderRadius: "8px",
          }}
        >
          {board.name}
        </div>
      ))}
    </div>
  );
}

export default App;