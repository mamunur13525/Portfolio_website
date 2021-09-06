import React from "react";

const TitleEffect = ({ title, h1 }) => {
  //Mouse Hover Effect
  const addClass = (event) => {
    event.target.className += ` rabber_band`;
    setTimeout(() => {
      event.target.className = `blast`;
    }, 1000);
  };

  return (
    <h1 className="main_heading_title">
      {title.map((item, idx) => (
        <span key={idx} onMouseEnter={(e) => addClass(e)} className="blast">
          
         
          {
              item === ''&&  '\u00A0'
          }
          {
              item === '<br/>' ? <br/> : item
          }
        </span>
      ))}
      {
          h1
      }
    </h1>
  );
};

export default TitleEffect;
