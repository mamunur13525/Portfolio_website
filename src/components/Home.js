import React from "react";
import "./Home.css";
import logo from "../image/logo.PNG";
import "animate.css";
import PageLoading from "./Share/PageLoading";
import { useHistory } from "react-router-dom";
import TitleEffect from "../Effect/TitleEffect";
// import About from "./About/About";
// import Skills from "./Skills/Skills";
// import Tips from "./Tips/Tips";
// import Projects from "./Projects/Projects";
// import Contact from "./Contact/Contact";

// import Particale from "../Effect/Particale";
const Home = () => {
  const { push } = useHistory();
  //Mouse Hover Effect
  const addClass = (event) => {
    event.target.className += ` rabber_band`;
    setTimeout(() => {
      event.target.className = `colorWhite`;
    }, 1000);
  };
  const contact = () => {
    push("/contact");
  };

  return (

    <div className="home_page home">
      <div className="home_main_text ">
        <div className="main_text home">
          {/* <p className="h1_tag mt-5">&lt;h1&gt;</p> */}
          <TitleEffect
            h1=''
            title="Hi,"
            sectinoName="skill_title"
          />
          <TitleEffect
            h1=''
            title="I'm Mamun Ahmed,"
            sectinoName="skill_title"
          />
          <TitleEffect
            h1=''
            title="Web developer"
            sectinoName="skill_title"
          />
          <span className="body_text ml-3">&lt;/h1&gt;</span>
          <p className="sub_title">
            Front End Developer / Javascript Expert / Freelancer
          </p>
          <button onClick={contact} className="contactMeBtn mt-4 ">
            contact me
          </button>
        </div>
      </div>
      <div className="home_logo landing_logo">
        <img src={logo} alt="logo" />
      </div>
    </div>


  );
};

export default Home;
{/* <About />
      <Skills />
      <Tips />
      <Projects />
      <Contact /> */}