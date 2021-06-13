import { React, useState } from "react";
import "./DropdownMenu.css";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import { FaBars, FaTimes } from "react-icons/fa";

const DropdownMenu = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-link"
              style={{ textDecoration: "none" }}
            >
              AboutMe
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/tech"
              className="nav-link"
              style={{ textDecoration: "none" }}
            >
              Tech
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className="nav-link"
              style={{ textDecoration: "none" }}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/education"
              className="nav-link"
              style={{ textDecoration: "none" }}
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/experience"
              className="nav-link"
              style={{ textDecoration: "none" }}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link"
              style={{ textDecoration: "none" }}
            >
              ContactMe
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
