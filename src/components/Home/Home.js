import React, { useEffect, useState } from "react";
import Activities from "../Activities/Activities";
import "./Home.css";
import logo from "../../logo.png";
import Info from "../Info/Info";
import { toast } from "react-toastify";
import Faq from "../Faq/Faq";

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("activity-data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const addToList = (id) => {
    // const isExist = list.find((listId) => listId.id === id.id);
    // if (isExist) {
    //   toast.error("Selected Already");
    // } else {
    // }
    const newList = [...list, id];
    setList(newList);
  };
  return (
    <div>
      <div className="home-container">
        <div className="left-container">
          <div className="container">
            <img className="logo" src={logo} alt="" />
            <Activities
              activities={activities}
              addToList={addToList}
            ></Activities>
            <Faq></Faq>
          </div>
        </div>
        <div className="right-container">
          <div className="space"></div>
          <Info list={list}></Info>
        </div>
      </div>
    </div>
  );
};

export default Home;
