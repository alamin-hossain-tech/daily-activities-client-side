import React from "react";
import "./Activity.css";

const Activity = (props) => {
  console.log(props);

  return (
    <div>
      <div className="activity">
        <div className="activity-img">
          <img src={props.activity.img} alt="" />
        </div>
        <h4>{props.activity.name}</h4>
        <p className="description">{props.activity.description}</p>
        <p>{props.activity.category}</p>
        <p>{props.activity.time} </p>
        <button className="add-list-btn">Added to List</button>
      </div>
    </div>
  );
};

export default Activity;
