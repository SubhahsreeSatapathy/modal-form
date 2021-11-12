import { Link, Tooltip } from "@material-ui/core";
import {
  InfoOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./login.css";
import Popup from "./Popup";

const Form = () => {
  const [isLock, setIsLock] = useState(true);

  const togglePassword = () => {
    setIsLock(!isLock);
  };
  return (
    <div className="sign-in">
      <section>
        <div className="contentBx">
          <div className="formBx">
            <div className="header">
              <h2>Login</h2>

              <Tooltip
                title="This is to keep data for easy service to you."
                arrow
              >
                <InfoOutlined className="icons" />
              </Tooltip>
            </div>
            <form>
              <div className="inputBx">
                <input type="email" name="email" placeholder="Email Address" />
              </div>
              <div className="inputBx password-field">
                <input
                  type={isLock ? "password" : "text"}
                  name="password"
                  placeholder="Enter Password"
                />
                <span className="eye">
                  {isLock ? (
                    <VisibilityOutlined onClick={togglePassword} />
                  ) : (
                    <VisibilityOffOutlined onClick={togglePassword} />
                  )}
                </span>
              </div>

              <div className="inputBx">
                <p>
                  Don't have an account?&nbsp;
                  <a href="/register">
                    <Link to="/register" className="link">
                       Sign Up
                    </Link>
                  </a>
                </p>
              </div>

              <div className="inputBx">
                <button type="submit" value="login">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
