import React from "react";
import "./Activity.css";

const Activity = (props) => {
  console.log(props);
  // (props);
  const { activity, addToList } = props;
  const { img, name, category, time, description } = activity;
  return (
    <div>
      <div className="activity">
        <div className="activity-img">
          <img src={img} alt="" />
        </div>
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p>
          <strong>Category: </strong>
          {category}
        </p>
        <p>
          <strong>Required Time: </strong>
          {time} Minutes
        </p>
        <button onClick={() => addToList(activity)} className="add-list-btn">
          Added to List
        </button>
      </div>
    </div>
  );
};

export default Activity;
