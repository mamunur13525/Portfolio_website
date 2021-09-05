import React from "react";
import PageLoading from "../Share/PageLoading";
import Sidebar from "../Share/Sidebar";
import "./About.css";
import logo from "../../image/logo.PNG";
import BoxRotate from "../BoxRotate";
import "animate.css";
import Particale from '../../Effect/Particale'
const About = () => {
  

  //Mouse Hover Effect
const addClass = (event)=> {
    event.target.className += ` rabber_band`;
    setTimeout(()=>{
      event.target.className = `blast`;
    },1000)
  } 


  return (
    <div className="home_page about">
      {/* <Particale/> */}
      <div className="home_main_text about_me">
        <div className="body_tag top">
        <p className="body_text">&lt;html&gt;</p>

          <p className="body_text">&nbsp;&nbsp;&nbsp; &lt;body&gt;</p>
        </div>
        <div className="main_text about_me_main">
          {/* <p className="h1_tag mt-5">&lt;h1&gt;</p> */}

          <h1 className="main_heading_title">
            <span onMouseEnter={(e)=> addClass(e)} className="blast">A</span>
            <span onMouseEnter={(e)=> addClass(e)} className="blast">b</span>
            <span onMouseEnter={(e)=> addClass(e)} className="blast">o</span>
            <span onMouseEnter={(e)=> addClass(e)} className="blast">u</span>
            <span onMouseEnter={(e)=> addClass(e)} className="blast">t</span>
            &nbsp;
            <span onMouseEnter={(e)=> addClass(e)} className="blast">M</span>
            <span onMouseEnter={(e)=> addClass(e)} className="blast">e</span>
            <br />
            <span className="body_text ml-3">&lt;/h1&gt;</span>
          </h1>

          <p className="about_text">
            I’m very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p className="about_text">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p className="about_text">
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>
        <div className="body_tag bottom">
          <p className="body_text">&nbsp;&nbsp;&nbsp; &lt;/body&gt;</p>
          <p className="body_text">&lt;/html&gt;</p>
        </div>
      </div>
      <div className="home_logo">
      <Particale />
        <BoxRotate />
      </div>
    </div>
  );
};

export default About;
