import React from "react";
import PageLoading from "../Share/PageLoading";
import "./Tips.css";
import js from "../../image/js.png";
import ts from "../../image/ts.png";
import redux from "../../image/redux.png";
import react from "../../image/react.png";
import mongodb from "../../image/mongodb.png";
import css from "../../image/css.svg";
import TitleEffect from "../../Effect/TitleEffect";

const Tips = () => {
  return (
    <div className="home_page tips">
      <PageLoading/>
      <div className="home_main_text about_me">
        <div className="body_tag top">
          <p className="body_text">&lt;html&gt;</p>

          <p className="body_text">&nbsp;&nbsp;&nbsp; &lt;body&gt;</p>
        </div>
        <div className="main_text about_me_main">
          {/* <p className="h1_tag mt-5">&lt;h1&gt;</p> */}

          <TitleEffect
            h1={<span className="body_text ml-3">&lt;/h1&gt;</span>}
            title={[
              "F",
              "r",
              "o",
              "n",
              "t",
              "e",
              "n",
              "d",
              "",
              "T",
              "i",
              "p",
              "s",
            ]}
          />

          <div className="icon">
            <img className="technology_icon" src={js} alt="js" />
            <img className="technology_icon" src={ts} alt="ts" />
            <img className="technology_icon" src={react} alt="react" />
            <img className="technology_icon" src={redux} alt="redux" />
            <img className="technology_icon css" src={css} alt="css" />
            <img
              className="technology_icon mongodb"
              src={mongodb}
              alt="mongodb"
            />
          </div>
        </div>
        <div className="body_tag bottom">
          <p className="body_text">&nbsp;&nbsp;&nbsp; &lt;/body&gt;</p>
          <p className="body_text">&lt;/html&gt;</p>
        </div>
      </div>
      <div className="home_logo"></div>
    </div>
  );
};

export default Tips;
