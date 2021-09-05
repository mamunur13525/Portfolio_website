import React from "react";
import "./Home.css";
import logo from "../image/logo.PNG";
import "animate.css"
import PageLoading from "./Share/PageLoading";
// import Particale from "../Effect/Particale";
const Home = () => {

  //Mouse Hover Effect
  const addClass = (event)=> {
    event.target.className += ` rabber_band`;
    setTimeout(()=>{
      event.target.className = `colorWhite`;
    },1000)
  } 

  return (
    <div className="home_page home">
      {/* <Particale/> */}
    <PageLoading/>
      <div className="home_main_text ">
        <div className="body_tag top">
          <p className="body_text">&lt;html&gt;</p>
          <p className="body_text">&nbsp;&nbsp;&nbsp; &lt;body&gt;</p>
        </div>
        <div className="main_text">
          {/* <p className="h1_tag mt-5">&lt;h1&gt;</p> */}
          <h1 className="main_heading_title">
          <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">H</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">i</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">,</span>
            <br />
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">I</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">'</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">m</span>&nbsp;
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">M</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">a</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">m</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">u</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">n</span>&nbsp;
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">A</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">h</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">m</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">e</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">d</span>
             
            <br />
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">w</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">e</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">b</span>&nbsp;
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">d</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">e</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">v</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">e</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">l</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">o</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">p</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">e</span>
            <span  onMouseEnter={(e)=> addClass(e)} className="colorWhite">r</span>
          
            <span className="body_text ml-3">&lt;/h1&gt;</span>
          </h1>

          <p className="sub_title">
            Front End Developer / Javascript Expert / Freelancer
          </p>
          <button className="contactMeBtn mt-4 ">contact me</button>
        </div>
        <div className="body_tag bottom">
          <p className="body_text">&nbsp;&nbsp;&nbsp; &lt;/body&gt;</p>
          <p className="body_text">&lt;/html&gt;</p>
        </div>
      </div>

      <div className="home_logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Home;
