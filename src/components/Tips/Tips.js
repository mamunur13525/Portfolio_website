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
      <div className="home_main_text tip_section">
        <div className="main_text tip_main_text">
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
            sectinoName="tip_title"
          />

          <div className="icon">
            <div className="tech_div">
              <img className="technology_icon" src={js} alt="js" />
            </div>
            <div className="tech_div">
              <img className="technology_icon" src={ts} alt="ts" />
            </div>
            <div className="tech_div">
              <img className="technology_icon" src={react} alt="react" />
            </div>
            <div className="tech_div">
              <img className="technology_icon" src={redux} alt="redux" />
            </div>
            <div className="tech_div">
              <img className="technology_icon css" src={css} alt="css" />
            </div>
            <div className="tech_div">
              <img
                className="technology_icon mongodb"
                src={mongodb}
                alt="mongodb"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
