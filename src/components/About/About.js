import React from "react";
import "./About.css";
import BoxRotate from "../BoxRotate";
import "animate.css";
import Particale from "../../Effect/Particale";
import TitleEffect from "../../Effect/TitleEffect";
import PageLoading from "../Share/PageLoading";
const About = () => {
  return (
    <div className="home_page about">
      <PageLoading />
      <div className="home_main_text about_me">
        <div className="main_text about_me_main">
          {/* <p className="h1_tag mt-5">&lt;h1&gt;</p> */}

          <TitleEffect
            h1={<span className="body_text ml-3">&lt;/h1&gt;</span>}
            title={["A", "b", "o", "u", "t"]}
            sectinoName="about_title"
          />

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
      </div>
      <div className="home_logo">
        <Particale />
        <BoxRotate />
      </div>
    </div>
  );
};

export default About;
