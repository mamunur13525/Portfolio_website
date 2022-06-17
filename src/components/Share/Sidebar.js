import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Sidebar.css";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
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
import { IoClose } from "react-icons/io5";


const Sidebar = () => {
  const [navShow, setNavShow] = useState(false)
  const { push } = useHistory();
  const { pathname } = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/home" className="navbar-brand text-light">
        <img className="brand_image" src={logo} alt="logo" />
      </Link>
      <button
        onClick={() => setNavShow((prev) => !prev)}
        className="navbar-toggler ml-auto custom-toggler"
        type="button"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={navShow ? "navbar-collapse show_nav" : "navbar-collapse  hide_nav"} >
        <div onClick={() => setNavShow(false)} className='close_icon'>
          <IoClose className='close_btn' />
        </div>
        <ul className="navbar-nav mr-auto">
          <li onClick={() => setNavShow(false)} type="button"
            className="nav-item active">
            <div onClick={() => push("/home")} className="icon_name_div">
              <HomeOutlinedIcon className={pathname === '/home' || pathname === '/' ? "sidebar_icon active" : "sidebar_icon"} />
              <p className={`nav-link ${pathname === '/home' ? 'active' : ''}`}>Home</p>
            </div>
          </li>
          <li onClick={() => setNavShow(false)} type="button"
            className="nav-item">
            <div onClick={() => push('/about')} className="icon_name_div">
              <PersonOutlineIcon className={pathname === '/about' ? "sidebar_icon active" : "sidebar_icon"} />
              <p className={`nav-link ${pathname === '/about' ? 'active' : ''}`} >
                About
              </p>
            </div>
          </li>
          <li onClick={() => setNavShow(false)} type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent" className="nav-item">
            <div onClick={() => push('/skills')} className="icon_name_div">
              <SettingsOutlinedIcon className={pathname === '/skills' ? "sidebar_icon active" : "sidebar_icon"} />
              <p className={`nav-link ${pathname === '/skills' ? 'active' : ''}`} >
                Skills
              </p>
            </div>
          </li>
          <li onClick={() => setNavShow(false)} className="nav-item">
            <div onClick={() => push('/tips')} className="icon_name_div">
              <WbIncandescentOutlinedIcon className={pathname === '/tips' ? "sidebar_icon active" : "sidebar_icon"} />
              <p className={`nav-link ${pathname === '/tips' ? 'active' : ''}`}>
                Tips
              </p>
            </div>
          </li>
          <li onClick={() => setNavShow(false)} className="nav-item">
            <div onClick={() => push('/projects')} className="icon_name_div">
              <VisibilityOutlinedIcon className={pathname === '/projects' ? "sidebar_icon active" : "sidebar_icon"} />
              <p className={`nav-link ${pathname === '/projects' ? 'active' : ''}`} >
                Projects
              </p>
            </div>
          </li>
          <li onClick={() => setNavShow(false)} className="nav-item">
            <div onClick={() => push('/contact')} className="icon_name_div">
              <EmailOutlinedIcon className={pathname === '/contact' ? "sidebar_icon active" : "sidebar_icon"} />
              <p className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>
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
