import React from "react";
import Sidebar from "./Share/Sidebar";
import "./Home.css";
import logo from "../image/logo.PNG";
import PageLoading from "./Share/PageLoading";
import Particale from "../Effect/Particale";
const Home = () => {
  return (
    <div className="home_page">
      <Particale/>
      <PageLoading />
      <Sidebar />
      {/* <div className="start_tag_box">
        <p className="body_tag">&lt;body&gt;</p>
      </div> */}
      <div className="home_main_text">
        <div className="main_text">
          {/* <p className="h1_tag mt-5">&lt;h1&gt;</p> */}
          <h1 className="main_heading_title">
            Hi,
            <br />
            <span className='scale_text'>I</span>
            <span className='scale_text'>'</span>
            <span className='scale_text'>m</span>&nbsp;
            <span></span>  Mamun Ahmed
            <br /> web developer
            {/* <p className="h1_tag">&lt;/h1&gt;</p> */}
          </h1>

          <p className="sub_title">
            Front End Developer / Javascript Expert / Freelancer
          </p>
          <button className="contactMeBtn mt-4 ">contact me</button>
        </div>
      </div>
      {/* <div className="end_tag_box">
        <p className="body_tag mt-5">&nbsp;&nbsp;&nbsp; &lt;/body&gt;</p>
        <p className="body_tag">&lt;/html&gt;</p>
      </div> */}

      <div className="home_logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Home;
