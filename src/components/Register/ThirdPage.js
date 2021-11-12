import { ArrowBack, InfoOutlined } from "@material-ui/icons";
import React from "react";

const ThirdPage = ({ setActiveStep, setThirdStepCompleted }) => {
  const handleContinue = () => {
    setActiveStep(3);
    setThirdStepCompleted(true);
  };
  return (
    <div>
      <div className="form-header">
        <ArrowBack className="icon back" />
        <h2 className="form-heading">Sign-Up</h2>
        <InfoOutlined className="icon info" />
      </div>
      <div className="second-header">
        <h6>Additional Details</h6>
        <p>Enter some Additional Details.</p>
      </div>
      <div className="input-group">
        <div className="first-info">
          <input
            className="input"
            type="text"
            placeholder="Aadhaar Card number*"
          />
          <input
            className="input"
            type="text"
            placeholder="Place of residence*"
          />
        </div>
        <div className="second-info">
          <div className="admin-select">
            <span className="left-span">Rah Admin ?</span>
            <span className="right-span">Hospital Admin ?</span>
          </div>
          <div className="third-page-preferences">
            <select className="input">
              <option>Select*</option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
            <select className="input">
              <option>Select*</option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
          </div>
        </div>
        <button className="continue" onClick={handleContinue}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default ThirdPage;
