import React from "react";
import PageLoading from "../Share/PageLoading";
import Sidebar from "../Share/Sidebar";
import './About.css';

const About = () => {
  return (
    <div className="home_page">
      <PageLoading />
      <Sidebar />
      <div className="start_tag_box">
        <p className="body_tag">&lt;body&gt;</p>
      </div>
      <div className="home_main_text">
        <p className="h1_tag mt-5">&lt;h1&gt;</p>
        <h1 className="main_heading_title about_header">About me</h1>
        <p className="h1_tag mt-4">&lt;/h1&gt;</p>
        <p className="h1_tag mt-4">&lt;p&gt;</p>


        <p className="about_sub_title">
          I’m a Front-End Developer located in Poland. I have a serious passion
          for UI effects, animations and creating intuitive, dynamic user
          experiences. Well-organised person, problem solver, independent
          employee with high attention to detail. Fan of MMA, outdoor
          activities, TV series and English literature. A family person and
          father of two fractious boys, Interested in the entire frontend
          spectrum and working on ambitious projects with positive people.
        </p>
        <p className="h1_tag mt-4">&lt;/p&gt;</p>

      </div>
      <div className="end_tag_box">
        <p className="body_tag mt-5">&nbsp;&nbsp;&nbsp; &lt;/body&gt;</p>
        <p className="body_tag">&lt;/html&gt;</p>
      </div>
    </div>
  );
};

export default About;
