import React, { useEffect } from "react";
import TagCanvus from "../../Effect/TagCanvus";
import PageLoading from "../Share/PageLoading";
import "./Skills.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TitleEffect from "../../Effect/TitleEffect";

const Skills = () => {

  useEffect(() => {
    setTimeout(() => {
      toast.dark("Scroll to Zoom In/Out");
    }, 1500);
  }, []);

  return (
    <div className="home_page skill">
      <PageLoading/>
      <div style={{ width: "100%" }} className="home_main_text skill_section">
        {/* <div className="body_tag top">
          <p className="body_text">&lt;html&gt;</p>

          <p className="body_text">&nbsp;&nbsp;&nbsp; &lt;body&gt;</p>
        </div> */}
        <div className="main_text skill_main_text">
          {/* <p className="h1_tag mt-5">&lt;h1&gt;</p> */}

         
          <TitleEffect
            h1={<span className="body_text ml-3">&lt;/h1&gt;</span>}
            title={[
              "S",
              "k",
              "i",
              "l",
              "l",
              "",
              "&",
              "<br/>",
              "E",
              "x",
              "p",
              "e",
              "r",
              "i",
              "e",
              "n",
              "c",
              "e",
            ]}
          />

          <p
            style={{ width: "100%", fontSize: "0.9rem" }}
            className="about_sub_title"
          >
            Expert in front-end development including technologies like
            <span className="tech_name">HTML5</span>,
            <span className="tech_name">CSS3</span>,
            <span className="tech_name">Javascript</span>,
            <span className="tech_name">JQuery</span>,
            <span className="tech_name">React</span>,
            <span className="tech_name">TypeScript</span>,
            <span className="tech_name">Angular</span>,
            <span className="tech_name">Bootstarp</span>,
            <span className="tech_name">Sass</span>,
            <span className="tech_name">Git</span>, etc.
            <br />
            <br />
            I create successful responsive websites that are fast, easy to use,
            and built with best practices. The main area of my expertise is
            front-end development, HTML, CSS, JS, building small and medium web
            apps, custom plugins, features, animations, and coding interactive
            layouts. I also have full-stack developer experience with popular
            open-source CMS like (WordPress, Drupal, Magento, Keystone.js and
            others) .
            <br />
            <br />
            Visit my{" "}
            <a className="link_tag" href="/linkdie" target="_blank">
              LinkedIn
            </a>{" "}
            profile for more details or just contact me.
          </p>
        </div>
        {/* <div className="body_tag bottom">
          <p className="body_text">&nbsp;&nbsp;&nbsp; &lt;/body&gt;</p>
          <p className="body_text">&lt;/html&gt;</p>
        </div> */}
      </div>
      <div className="home_logo tag_canvus_">
        <TagCanvus />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Skills;
