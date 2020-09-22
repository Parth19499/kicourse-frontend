import { Avatar, IconButton } from "@material-ui/core";
import { getRandomAvatarSrc } from "../utils/getRandomAvatar";
import "./css/Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/courses">
              <h2>
                <span className="badge badge-primary">KiCourse</span>
              </h2>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/courses">
              Courses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/new-course">
              Add New Course
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <IconButton>
              <Avatar src={getRandomAvatarSrc()} />
            </IconButton>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
