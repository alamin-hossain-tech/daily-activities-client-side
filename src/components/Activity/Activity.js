import React from "react";
import "./Activity.css";

const Activity = (props) => {
  // (props);

  return (
    <div>
      <div className="activity">
        <div className="activity-img">
          <img src={props.activity.img} alt="" />
        </div>
        <h3>{props.activity.name}</h3>
        <p className="description">{props.activity.description}</p>
        <p>
          <strong>Category: </strong>
          {props.activity.category}
        </p>
        <p>
          <strong>Required Time: </strong>
          {props.activity.time} Minutes
        </p>
        <button
          onClick={() => props.addToList(props.activity)}
          className="add-list-btn"
        >
          Added to List
        </button>
      </div>
    </div>
  );
};

export default Activity;
