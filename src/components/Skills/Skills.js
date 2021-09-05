import React from "react";
import PageLoading from "../Share/PageLoading";
import Sidebar from "../Share/Sidebar";
import "./Skills.css";

const Skills = () => {
  //Mouse Hover Effect
  const addClass = (event) => {
    event.target.className += ` rabber_band`;
    setTimeout(() => {
      event.target.className = `blast`;
    }, 1000);
  };

  return (
    <div className="home_page">
      {/* <Particale/> */}
      <div className="home_main_text about_me">
        <div className="body_tag top">
          <p className="body_text">&nbsp;&nbsp;&nbsp; &lt;body&gt;</p>
        </div>
        <div className="main_text about_me_main">
          {/* <p className="h1_tag mt-5">&lt;h1&gt;</p> */}

          <h1 className="main_heading_title">
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              S
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              k
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              i
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              l
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              l
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              s
            </span>
            &nbsp;
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              &
            </span>
            <br />
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              E
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              x
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              p
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              e
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              r
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              i
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              e
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              n
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              c
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              e
            </span>
            <br />
            <span className="body_text ml-3">&lt;/h1&gt;</span>
          </h1>

          <p className="about_sub_title">
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
        <div className="body_tag bottom">
          <p className="body_text">&nbsp;&nbsp;&nbsp; &lt;/body&gt;</p>
          <p className="body_text">&lt;/html&gt;</p>
        </div>
      </div>
      <div className="home_logo">

        
      </div>
    </div>
  );
};

export default Skills;
