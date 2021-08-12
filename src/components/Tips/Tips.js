import React from 'react';
import PageLoading from '../Share/PageLoading';
import Sidebar from '../Share/Sidebar';
import './Tips.css';
import js from '../../image/js.png';
import ts from '../../image/ts.png';
import redux from '../../image/redux.png';
import react from '../../image/react.png';
import mongodb from '../../image/mongodb.png';
import css from '../../image/css.svg';

const Tips = () => {
    return (
        <div className="home_page">
        <PageLoading />
        <Sidebar />
        <div className="start_tag_box">
          <p className="body_tag">&lt;body&gt;</p>
        </div>
        <div className="home_main_text">
          <p className="h1_tag mt-5">&lt;h1&gt;</p>
          <h1 className="main_heading_title about_header">FrontEnd Tips</h1>
          <p className="h1_tag mt-4">&lt;/h1&gt;</p>
          <p className="h1_tag mt-4">&lt;img&gt;</p>
  
  
         <div className="icon">
               <img className='technology_icon' src={js}  alt="js" /> 
               <img className='technology_icon' src={ts}  alt="ts" /> 
               <img className='technology_icon' src={react}  alt="react" /> 
               <img className='technology_icon' src={redux}  alt="redux" /> 
               <img className='technology_icon css' src={css}  alt="css" /> 
               <img className='technology_icon mongodb' src={mongodb}  alt="mongodb" /> 
         </div>
          <p className="h1_tag mt-4">&lt;/img&gt;</p>
  
        </div>
        <div className="end_tag_box">
          <p className="body_tag mt-5">&nbsp;&nbsp;&nbsp; &lt;/body&gt;</p>
          <p className="body_tag">&lt;/html&gt;</p>
        </div>
      </div>
    );
};

export default Tips;