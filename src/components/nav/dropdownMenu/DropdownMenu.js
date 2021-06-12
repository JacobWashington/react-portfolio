import React from "react";
import "./DropdownMenu.css";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

const DropdownMenu = () => {
  return (
    <div className="dd-menu">
      <div className="menu-container">
          <Link to="/" className="dd-logo" style={{textDecoration: 'none'}}>
              <Logo />
          </Link>
      </div>
    </div>
  );
};

export default DropdownMenu;
