import React, { useEffect, useState } from "react";
import "./Activities.css";

const Activities = () => {
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    fetch("activity-data.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>from activity</h1>
    </div>
  );
};

export default Activities;
