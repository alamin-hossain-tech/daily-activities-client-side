import React from "react";
import Activity from "../Activity/Activity";
import "./Activities.css";

const Activities = (props) => {
  return (
    <div>
      <h3>Select Today's Activities</h3>
      <div className="activity-grid">
        {props.activities.map((activity) => (
          <Activity
            activity={activity}
            key={activity.id}
            addToList={props.addToList}
          ></Activity>
        ))}
      </div>
    </div>
  );
};

export default Activities;
