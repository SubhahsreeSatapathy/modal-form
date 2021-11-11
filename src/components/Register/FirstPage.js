import React from "react";
import { ArrowBack, InfoOutlined } from "@material-ui/icons";
import "./Page.css";

const FirstPage = ({ firstStepCompleted, setFirstStepCompleted }) => {
  const handleContinue = () => {
    setFirstStepCompleted(true);
  };
  return (
    <div>
      <div className="form-header">
        <ArrowBack className="icon back" />
        <h2 className="form-heading">Sign-Up</h2>
        <InfoOutlined className="icon info" />
      </div>
      <div className="second-header">
        <h6>{"Login ID & Password"}</h6>
        <p>Enter your Email Address and Password.</p>
      </div>
      <div className="input-group">
        <input className="input" type="email" placeholder="Email Address*" />
        <input className="input" type="password" placeholder="Password*" />
        <input
          className="input"
          type="password"
          placeholder="Confirm Password*"
        />
        <button className="continue" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default FirstPage;
