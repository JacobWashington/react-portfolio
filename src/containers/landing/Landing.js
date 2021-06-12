import React from "react";
import avatar from "../../images/Avatar-Maker.svg";
import coders from "../../images/coders.svg";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <p className="lc-title">Jacob Washington</p>
      <p className="lc-subtitle">Full Stack Developer</p>
      <p className="lc-heading">I create beautiful, simple applications, from front to back.</p>
      <img className="avatar" src={avatar} alt="avatar" />
      <img className="coders-image" src={coders} />
    </div>
  );
};

export default Landing;
