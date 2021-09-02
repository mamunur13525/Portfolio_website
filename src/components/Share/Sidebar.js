import React from "react";
import { Link, useHistory } from "react-router-dom";
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
  const { push } = useHistory();
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
            <div onClick={() => push("/home")} className="icon_name_div">
              <HomeIcon className="sidebar_icon" />
              <p className="nav-link">Home</p>
            </div>
          </li>
          <li className="nav-item">
            <div onClick={()=>push('/about')} className="icon_name_div">
              <PersonOutlineIcon className="sidebar_icon" />
              <p className="nav-link" >
                About
              </p>
            </div>
          </li>
          <li className="nav-item">
            <div onClick={()=>push('/skills')} className="icon_name_div">
              <SettingsOutlinedIcon className="sidebar_icon" />
              <p className="nav-link" >
                Skills
              </p>
            </div>
          </li>
          <li className="nav-item">
            <div onClick={()=>push('/tips')} className="icon_name_div">
              <WbIncandescentOutlinedIcon className="sidebar_icon" />
              <p className="nav-link" >
                Tips
              </p>
            </div>
          </li>
          <li className="nav-item">
            <div onClick={()=>push('/home')} className="icon_name_div">
              <VisibilityOutlinedIcon className="sidebar_icon" />
              <p className="nav-link" >
                My Works
              </p>
            </div>
          </li>
          <li className="nav-item">
            <div onClick={()=>push('/contact')} className="icon_name_div">
              <EmailOutlinedIcon className="sidebar_icon" />
              <p className="nav-link" >
                Contact
              </p>
            </div>
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
