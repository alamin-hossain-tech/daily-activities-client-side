import React from "react";
import "./Info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
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
            75 <span>kg</span>
          </h3>
          <h4>Weight</h4>
        </div>
        <div className="short-info">
          <h3>
            75 <span>kg</span>
          </h3>
          <h4>Weight</h4>
        </div>
        <div className="short-info">
          <h3>
            75 <span>kg</span>
          </h3>
          <h4>Weight</h4>
        </div>
      </div>

      {/* -------------break-----------  */}

      <h3>Add a Break</h3>
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
      <h3>Activity Details</h3>
      <div className="activity-info">
        <div className="activity-short-info">
          <h4>Required Time:</h4>
        </div>
      </div>
      <div className="activity-info">
        <div className="activity-short-info">
          <h4>Required Time:</h4>
        </div>
      </div>
    </div>
  );
};

export default Info;
