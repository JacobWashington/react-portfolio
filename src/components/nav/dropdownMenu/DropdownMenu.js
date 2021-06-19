import { React, useState } from "react";
import "./DropdownMenu.css";
import { a } from "react-router-dom";
import Logo from "../logo/Logo";
import { FaBars, FaTimes } from "react-icons/fa";

const DropdownMenu = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-logo" style={{ textDecoration: "none" }}>
          <Logo />
        </a>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/" className="nav-a" onClick={handleClick}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-a" onClick={handleClick}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/tech" className="nav-a" onClick={handleClick}>
              Tech
            </a>
          </li>
          <li className="nav-item">
            <a href="/projects" className="nav-a" onClick={handleClick}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="/education" className="nav-a" onClick={handleClick}>
              Education
            </a>
          </li>
          <li className="nav-item">
            <a href="/experience" className="nav-a" onClick={handleClick}>
              Experience
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DropdownMenu;
