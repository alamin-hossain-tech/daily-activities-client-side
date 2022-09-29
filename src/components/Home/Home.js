import React from "react";
import React, { useEffect, useState } from "react";
import Activities from "../Activities/Activities";
import "./Home.css";
import logo from "../../Daily.png";
import Info from "../Info/Info";

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("activity-data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  // console.log(activities);
  const addToList = (id) => {
    console.log(id);
    setList([id]);
  };
  return (
    <div>
      <div className="home-container">
        <div className="left-container">
          <div className="container">
            <img className="logo" src={logo} alt="" />
            <Activities></Activities>
          </div>
        </div>
        <div className="right-container">
          <div className="space"></div>
          <Info></Info>
        </div>
      </div>
    </div>
  );
};

export default Home;
