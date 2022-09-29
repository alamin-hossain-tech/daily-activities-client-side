import React, { useEffect, useState } from "react";
import "./Info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Info = ({ list }) => {
  const [restTime, setRestTime] = useState(0);

  const requiredTimeArr = list.map((p) => p.time);

  const requiredTime = requiredTimeArr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  useEffect(() => {
    getBreakTime();
  }, []);

  const breakTime = (time) => {
    console.log(time);
    setRestTime(time);
    localStorage.setItem("break-time", time);
  };

  const getBreakTime = () => {
    const storedBreakTime = localStorage.getItem("break-time");
    console.log(storedBreakTime);
    setRestTime(+storedBreakTime);
  };

  return (
    <div>
      <div className="profile">
        <img
          className="profile-img"
          src="https://i.ibb.co/bbTvH7Z/profile-image.png"
          alt=""
        />

        <div className="profile-info">
          <h3>Al-Amin Hossain</h3>
          <p>
            <span style={{ paddingRight: "10px" }}>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            {""}
            Dhaka,Bangladesh
          </p>
        </div>
      </div>
      <div className="body-info">
        <div className="short-info">
          <h3>
            60 <span>kg</span>
          </h3>
          <h4>Weight</h4>
        </div>
        <div className="short-info">
          <h3>5.4</h3>
          <h4>Height</h4>
        </div>
        <div className="short-info">
          <h3>
            24 <span>yrs</span>
          </h3>
          <h4>Age</h4>
        </div>
      </div>

      {/* -------------break-----------  */}

      <h3 className="activity-tittle">Add a Break</h3>
      <div className="break-info">
        <div className="short-info">
          <button onClick={() => breakTime(5)}>5 Min</button>
        </div>
        <div className="short-info">
          <button onClick={() => breakTime(10)}>10 MIn</button>
        </div>
        <div className="short-info">
          <button onClick={() => breakTime(15)}>15 Min</button>
        </div>
        <div className="short-info">
          <button onClick={() => breakTime(30)}>30 Min</button>
        </div>
        <div className="short-info">
          <button onClick={() => breakTime(60)}>60 Min</button>
        </div>
      </div>
      {/* -------------break-----------  */}
      <h3 className="activity-tittle">Activity Details</h3>
      <div className="activity-info">
        <div className="activity-short-info">
          <h4>Required Time: </h4>
          <p>{requiredTime} Min</p>
        </div>
      </div>
      <div className="activity-info">
        <div className="activity-short-info">
          <h4>Break Time:</h4>
          <p>{restTime} Min</p>
        </div>
      </div>
      <button
        onClick={() => {
          toast.success("Congratulations 🎉 for completion. ");
        }}
        className="add-list-btn activity-complete-btn"
      >
        Activity Completed
      </button>
      <ToastContainer />
    </div>
  );
};

export default Info;
