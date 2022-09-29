import React from "react";
import Activity from "../Activity/Activity";
import "./Activities.css";

const Activities = ({ activities, addToList }) => {
  return (
    <div>
      <h3>Select Today's Activities</h3>
      <div className="activity-grid">
        {activities.map((activity) => (
          <Activity
            activity={activity}
            key={activity.id}
            addToList={addToList}
          ></Activity>
        ))}
      </div>
    </div>
  );
};

export default Activities;
