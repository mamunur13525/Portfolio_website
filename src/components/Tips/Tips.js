import React from "react";
import js from "../../image/js.png";
import ts from "../../image/ts.png";
import redux from "../../image/redux.png";
import react from "../../image/react.png";
import mongodb from "../../image/mongodb.png";
import css from "../../image/css.png";
import TitleEffect from "../../Effect/TitleEffect";
import './Tips.css';

const tipsItems = [
  {
    id: 0,
    name: 'Javascript',
    icon: js
  },
  {
    id: 1,
    name: 'Typescript',
    icon: ts
  },
  {
    id: 2,
    name: 'React',
    icon: react
  },
  {
    id: 3,
    name: 'CSS',
    icon: css
  },
  {
    id: 4,
    name: 'Redux',
    icon: redux
  },
  {
    id: 5,
    name: 'MongoDB',
    icon: mongodb
  },

]
const Tips = () => {
  return (
    <div className="home_page tips">
      <div className="home_main_text tip_section">
        <div className="main_text tip_main_text">
          {/* <p className="h1_tag mt-5">&lt;h1&gt;</p> */}
          <TitleEffect
            h1={<span className="body_text ml-3">&lt;/h1&gt;</span>}
            title="Frontend Tips"
            sectinoName="tip_title"
          />

          <div className="icon">
            {
              tipsItems.map(tip => (
                <div key={tip.id} className="tech_div">
                  <img className="technology_icon" src={tip.icon} alt="js" />
                  <p>{tip.name}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
