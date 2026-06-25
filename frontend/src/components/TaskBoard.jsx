import { useEffect } from "react";

function TaskBoard({ tasks = [], setTasks }) {

  const loadTasks = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/tasks`
      );

      const data = await response.json();

      const formattedTasks = data.map((task) => ({
        ...task,
        status: task.status || "Backlog",
        supervisor: "Hermes",
      }));

      setTasks(formattedTasks);
    } catch (error) {
      console.error("Failed to load tasks:", error);
    }
  };

  useEffect(() => {
    loadTasks();

    // AJAX Auto Refresh every 2 seconds
    const interval = setInterval(() => {
      loadTasks();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const moveTask = async (id, newStatus) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: newStatus,
        }),
      });

      loadTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
        method: "DELETE",
      });

      loadTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const renderColumn = (columnStatus) => (
    <div
      style={{
        flex: 1,
        background: "#147914",
        padding: "15px",
        borderRadius: "10px",
      }}
    >
      <h3>{columnStatus}</h3>

      {tasks
        .filter((task) => task.status === columnStatus)
        .map((task) => (
          <div
            key={task.id}
            style={{
              background: "white",
              color: "black",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <strong>{task.title}</strong>

            <br />

            {task.description}

            <br />

            Priority: {task.priority}

            <br />

            Supervisor: Hermes

            <br />

            {columnStatus === "Backlog" && (
              <button
                onClick={() =>
                  moveTask(task.id, "In Progress")
                }
              >
                Start
              </button>
            )}

            {columnStatus === "In Progress" && (
              <button
                onClick={() =>
                  moveTask(task.id, "Review")
                }
              >
                Review
              </button>
            )}

            {columnStatus === "Review" && (
              <button
                onClick={() =>
                  moveTask(task.id, "Done")
                }
              >
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

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        {renderColumn("Backlog")}
        {renderColumn("In Progress")}
        {renderColumn("Review")}
        {renderColumn("Done")}
      </div>
    </div>
  );
}

export default TaskBoard;