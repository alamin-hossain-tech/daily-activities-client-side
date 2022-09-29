import React from "react";
import "./Info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Info = (props) => {
  // console.log(props);
  const requiredTimeArr = props.list.map((p) => p.time);
  console.log(requiredTimeArr);
  const requiredTime = requiredTimeArr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  // console.log(requiredTime);

  return (
    <div>
      <div className="profile">
        <img className="profile-img" src="profile-image.png" alt="" />

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
          <button>5 Min</button>
        </div>
        <div className="short-info">
          <button>5 MIn</button>
        </div>
        <div className="short-info">
          <button>5 Min</button>
        </div>
        <div className="short-info">
          <button>5 Min</button>
        </div>
        <div className="short-info">
          <button>5 Min</button>
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
          <p>20 Min</p>
        </div>
      </div>
      <button
        onClick={() => {
          toast.success("Congratulations 🎉 ");
          console.log("clicked");
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
