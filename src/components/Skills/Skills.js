import React from 'react';
import PageLoading from '../Share/PageLoading';
import Sidebar from '../Share/Sidebar';
import './Skills.css';

const Skills = () => {
    return (
        <div className="home_page">
        <PageLoading />
        <Sidebar />
        <div className="start_tag_box">
          <p className="body_tag">&lt;body&gt;</p>
        </div>
        <div className="home_main_text">
          <p className="h1_tag mt-5">&lt;h1&gt;</p>
          <h1 className="main_heading_title about_header">Skills &
Experience</h1>
          <p className="h1_tag mt-4">&lt;/h1&gt;</p>
          <p className="h1_tag mt-4">&lt;p&gt;</p>
  
  
          <p className="about_sub_title">
            Expert in front-end development including technologies like
            <span className='tech_name'>HTML5</span>,
            <span className='tech_name'>CSS3</span>,
            <span className='tech_name'>Javascript</span>,
            <span className='tech_name'>JQuery</span>,
            <span className='tech_name'>React</span>,
            <span className='tech_name'>TypeScript</span>,
            <span className='tech_name'>Angular</span>,
            <span className='tech_name'>Bootstarp</span>,
            <span className='tech_name'>Sass</span>,
            <span className='tech_name'>Git</span>,
            etc.
            <br/><br/>

I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.

I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others) .
<br/><br/>
Visit my <a className="link_tag" href="/linkdie" target='_blank'>LinkedIn</a> profile for more details or just contact me.
          </p>
          <p className="h1_tag mt-4">&lt;/p&gt;</p>
  
        </div>
        <div className="end_tag_box">
          <p className="body_tag mt-5">&nbsp;&nbsp;&nbsp; &lt;/body&gt;</p>
          <p className="body_tag">&lt;/html&gt;</p>
        </div>
      </div>
    );
};

export default Skills;