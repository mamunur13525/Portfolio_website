import React from "react";
import Sidebar from "./Share/Sidebar";
import "./Home.css";
import logo from '../image/logo.PNG';
const Home = () => {
  return (
    <div className="home_page">
      <Sidebar />

    
          <div className="start_tag_box">
            
          <p className="body_tag">&lt;body&gt;</p>
          
          </div>
        <div className='home_main_text'>
          
        <p className="h1_tag mt-5">&lt;h1&gt;</p>
          <h1 className="main_heading_title">
            Hi,<br/>
             I'm Mamun Ahmed<br/>              web developer
             <p className="h1_tag">&lt;/h1&gt;</p>
          </h1>
         
          <p className="sub_title">
            Front End Developer / Javascript Expert / Freelancer
          </p>
          <button className="contactMeBtn mt-4 ">contact me</button>

        </div>
        <div className="end_tag_box">
          <p className="body_tag mt-5">&nbsp;&nbsp;&nbsp; &lt;/body&gt;</p>
            <p className="body_tag">&lt;/html&gt;</p>
        </div>

        <div className='home_logo'>
          <img src={logo} alt="logo" />
        </div>
       
       
      
    </div>
  );
};

export default Home;
