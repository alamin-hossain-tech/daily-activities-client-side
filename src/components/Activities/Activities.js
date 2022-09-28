import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import "./Activities.css";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("activity-data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  console.log(activities);
  return (
    <div>
      <h1>from activity</h1>
      <div className="activity-grid">
        {activities.map((activity) => (
          <Activity activity={activity} key={activity.id}></Activity>
        ))}
      </div>
    </div>
  );
};

export default Activities;
