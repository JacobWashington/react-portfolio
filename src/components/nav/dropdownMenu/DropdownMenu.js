import { React, useState } from "react";
import "./DropdownMenu.css";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import { FaBars, FaTimes } from "react-icons/fa";

const DropdownMenu = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
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
              onClick={handleClick}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-link"
              style={{ textDecoration: "none" }}
              onClick={handleClick}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/tech"
              className="nav-link"
              style={{ textDecoration: "none" }}
              onClick={handleClick}
            >
              Tech
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className="nav-link"
              style={{ textDecoration: "none" }}
              onClick={handleClick}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/education"
              className="nav-link"
              style={{ textDecoration: "none" }}
              onClick={handleClick}
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/experience"
              className="nav-link"
              style={{ textDecoration: "none" }}
              onClick={handleClick}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/testimonies"
              className="nav-link"
              style={{ textDecoration: "none" }}
              onClick={handleClick}
            >
              Testimonials
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link"
              style={{ textDecoration: "none" }}
              onClick={handleClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DropdownMenu;
