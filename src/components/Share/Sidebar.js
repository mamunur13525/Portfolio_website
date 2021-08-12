import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import logo from "../../image/logo.PNG";

const Sidebar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/home" className="navbar-brand text-light">
        <img className="brand_image" src={logo} alt="logo" />
        <span>Mamun</span>
      </Link>
      <button
        className="navbar-toggler ml-auto custom-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <HomeIcon className="sidebar_icon" />
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <PersonOutlineIcon className="sidebar_icon" />
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <SettingsOutlinedIcon className="sidebar_icon" />
            <Link className="nav-link" to="/skills">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <WbIncandescentOutlinedIcon className="sidebar_icon" />
            <Link className="nav-link" to="/tips">
              Tips
            </Link>
          </li>
          <li className="nav-item">
            <VisibilityOutlinedIcon className="sidebar_icon" />
            <Link className="nav-link" to="/home">
              My Works
            </Link>
          </li>
          <li className="nav-item">
            <EmailOutlinedIcon className="sidebar_icon" />
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="social_icon_div">
        <ul className="social_icon_ul">
          <li>
            <a
              rel="noreferrer"
              href="https://linkedin.com/in/mamunahmed13525/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mamunur13525"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </li>
          <li>
            <YouTubeIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
