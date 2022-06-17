import React from "react";
import './BoxRotate.css';
import js from '../image/js.png'
import html from '../image/htmlFull.png'
import css from '../image/css.png'
import react from '../image/react.png'
import redux from '../image/redux.png'
import ts from '../image/ts.png'

const BoxRotate = () => {
  return (
      <>
    <div className="wrapper">
      <div className="box-area">
        <div className="box1">
            <img className='box_image' src={js} alt="" />
        </div>
        <div className="box2">
            <img className='box_image' src={html} alt="" />
        </div>
        <div className="box3">
            <img className='box_image' src={react} alt="" />
        </div>
        <div className="box4">
            <img className='box_image' src={css} alt="" />
        </div>
        <div className="box5">
            <img className='box_image' src={redux} alt="" />
        </div>
        <div className="box6">
            <img className='box_image' src={ts} alt="" />
        </div>
      </div>
    </div>
    </>
  );
};

export default BoxRotate;
