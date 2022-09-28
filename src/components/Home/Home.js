import React from "react";
import Activities from "../Activities/Activities";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="left-container">
          <div className="container">
            <h1>left</h1>
            <Activities></Activities>
          </div>
        </div>
        <div className="right-container">
          <h1>right</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
