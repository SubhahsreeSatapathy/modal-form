import { Button, Tooltip } from "@material-ui/core";
import React from "react";
import "./popup.css";

const Popup = (props) => {
  return (
    <div className="popup-box" onClick={props.handleClose}>
     
        <Button> {props.content}</Button>
    </div>
  );
};

export default Popup;
