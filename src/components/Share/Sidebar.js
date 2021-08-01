import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

const Sidebar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/home" className="navbar-brand text-light">
            <img className="brand_image" src="https://bobangajicsm.github.io/portfolio/assets/images/logo-s.png" alt="" />
           <span>
           Mamun 
               </span> 
        </Link>
        <button className="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <HomeIcon className="sidebar_icon"/>
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
                <PersonOutlineIcon className="sidebar_icon"/>
              <Link className="nav-link" to="/home">About</Link>
            </li>
            <li className="nav-item">
            <SettingsOutlinedIcon className="sidebar_icon" />
              <Link className="nav-link" to="/home">Skills</Link>
            </li>
            <li className="nav-item">
            <WbIncandescentOutlinedIcon className="sidebar_icon"/>
              <Link className="nav-link" to="/home">Tips</Link>
            </li>
            <li className="nav-item">
           <VisibilityOutlinedIcon className="sidebar_icon"/>
              <Link className="nav-link" to="/home">My Works</Link>
            </li>
            <li className="nav-item">
                <EmailOutlinedIcon className="sidebar_icon"/>
              <Link className="nav-link" to="/home">Contact</Link>
            </li>
          </ul>
        
        </div>
        <div className='social_icon_div'> 
            <ul className='social_icon_ul'>
            <li>
                <LinkedInIcon/>
            </li>
            <li>
                <GitHubIcon/>
            </li>
            <li>
                <YouTubeIcon/>
            </li>
            <li>
                <TwitterIcon/>
            </li>

            </ul>
        </div>
      </nav>
    );
};

export default Sidebar;