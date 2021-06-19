import React from "react";
import "./Logo.css";

const Logo = (props) => {
  return (
    <a href="/">
      <div className="logo">
        <div className={props.class ? props.class : "logo-container"}>
          <p className="logo-text">j.Dev</p>
        </div>
      </div>
    </a>
  );
};

export default Logo;
