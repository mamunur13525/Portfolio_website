import React from "react";
import Sidebar from "./Share/Sidebar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home_page">
      <Sidebar />

      <div className="row">
        <div className="col-md-6 home_left_side">
          <p className="body_tag my-5">&lt;body&gt;</p>
          <p className="h1_tag mt-5">&lt;h1&gt;</p>
          <h1 className="main_heading_title">
            Hi,<br/>
             I'm Mamun Ahmed<br/>              web developer
             <p className="h1_tag">&lt;/h1&gt;</p>
          </h1>
         
          <p className="sub_title">
            Front End Developer/Javascript Expert/Freelancer
          </p>
          <button className="contactMeBtn my-5 ">contact me</button>

          <p className="body_tag mt-5">&nbsp;&nbsp;&nbsp; &lt;/body&gt;</p>
          <p className="body_tag">&lt;/html&gt;</p>
        </div>
        <div className="col-md-6">logo site</div>
      </div>
    </div>
  );
};

export default Home;
