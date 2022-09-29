import React from "react";
import Activities from "../Activities/Activities";
import "./Home.css";
import logo from "../../Daily.png";

const Home = () => {
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
          <h1>right</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
