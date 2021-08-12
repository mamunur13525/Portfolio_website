import React from "react";
import PageLoading from "../Share/PageLoading";
import Sidebar from "../Share/Sidebar";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="home_page">
      <PageLoading />
      <Sidebar />
      <div className="row">
        <div className="col-md-6 contatct-half">
          <div className="start_tag_box">
            <p className="body_tag">&lt;body&gt;</p>
          </div>
          <div className="home_main_text">
            <p className="h1_tag mt-5">&lt;h1&gt;</p>
            <h1 className="main_heading_title about_header">Contact me</h1>
            <p className="h1_tag mt-4">&lt;/h1&gt;</p>
            <p className="text_contact">
              I am interested in freelance opportunities – especially ambitious
              or large projects. However, if you have other request or question,
              don’t hesitate to contact me using below form either.
            </p>

            <form className="contact_form">
              <div className='d-flex justify-content-between'>
                <div className="span_input">
                  <input
                    autoComplete="new password"
                    className="input_form name_feild"
                    type="text"
                    placeholder="Name"
                    name="name"
                    id="nameFeild"
                  />
                  <label className="label_after" htmlFor="nameFeild"></label>
                </div>
                <div className="span_input">
                  <input
                    autoComplete="new password"
                    className="input_form email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="emailFeild"
                  />
                  <label className="label_after" htmlFor="emailFeild"></label>
                </div>
              </div>
              <div className="span_input">
                <input
                  autoComplete="new password"
                  className="input_form subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  id="subjectFeild"
                />
                <label className="label_after" htmlFor="subjectFeild"></label>
              </div>
              <div className="span_input">
                <textarea
                  className="input_form message"
                  placeholder="Message"
                  name="msg"
                  id="textarea"
                />
                <label className="label_after" htmlFor="textarea"></label>
              </div>
            </form>
          </div>
          <div className="end_tag_box">
            <p className="body_tag mt-5">&nbsp;&nbsp;&nbsp; &lt;/body&gt;</p>
            <p className="body_tag">&lt;/html&gt;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
