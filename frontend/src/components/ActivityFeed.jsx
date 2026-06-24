import React, { useEffect, useState } from "react";

function ActivityFeed() {
  const [activities, setActivities] = useState([]);

  const loadActivities = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/activities"
      );
      const data = await response.json();
      setActivities(data);
    } catch (error) {
      console.error("Failed to load activities", error);
    }
  };

  useEffect(() => {
    loadActivities();

    const interval = setInterval(loadActivities, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h2>📜 Activity Feed</h2>

      {activities.length === 0 ? (
        <div className="card">No activities yet</div>
      ) : (
        activities.map((activity) => (
          <div
            key={activity.id}
            className="card"
            style={{ marginBottom: "10px" }}
          >
            <strong>{activity.message}</strong>
            <br />
            <small>{new Date(activity.created_at).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default ActivityFeed;
