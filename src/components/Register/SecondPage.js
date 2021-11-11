import {
  Add,
  AddAPhotoOutlined,
  AddCircleOutline,
  ArrowBack,
  InfoOutlined,
} from "@material-ui/icons";
import React from "react";

const SecondPage = ({ setActiveStep, setSecondStepCompleted }) => {
  const handleContinue = () => {
    setActiveStep(2);
    setSecondStepCompleted(true);
  };
  return (
    <div className="second-page-section">
      <div className="form-header">
        <ArrowBack className="icon back" />
        <h2 className="form-heading">Sign-Up</h2>
        <InfoOutlined className="icon info" />
      </div>
      <div className="second-header">
        <h6>Personal Details</h6>
        <p>Enter your Personal Details</p>
      </div>
      <div className="second-page-fields">
        <div className="input-group ">
          <input className="input" type="text" placeholder="Firstname*" />
          <input className="input" type="text" placeholder="Middle name" />
          <input className="input" type="text" placeholder="Lastname*" />
        </div>
        <div className="profile-pic">
          <AddAPhotoOutlined className="profile-add" />
        </div>
      </div>
      <div className="input-group second-page-preferences">
        <input className="input" type="email" placeholder="Age*" />
        <select className="input">
          <option>Gender*</option>
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </select>
        <div className="add-profile-pic">
          <input className="input" type="button" value={"Profile Photo*"} />
          <AddCircleOutline className="add-circle" />
        </div>
      </div>
      <button className="continue" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default SecondPage;
