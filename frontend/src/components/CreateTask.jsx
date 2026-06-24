import { useState } from "react";

function CreateTask({ onTaskCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createTask = async () => {
    const response = await fetch(
      "http://127.0.0.1:8000/api/tasks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          status: "Backlog",
          priority: "High",
        }),
      }
    );

    const data = await response.json();

    alert(`Hermes assigned task to: ${data.assigned_agent}`);

    if (onTaskCreated) {
      onTaskCreated();
    }

    setTitle("");
    setDescription("");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>➕ Create Task</h2>

        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <button
          onClick={createTask}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Create Task
        </button>
      </div>
    </div>
  );
}

export default CreateTask;