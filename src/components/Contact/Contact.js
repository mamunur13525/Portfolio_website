import React from "react";
import "./Contact.css";
import MapComponent from "./Maps";
import PageLoading from "../Share/PageLoading";
import { IoMdSend } from "react-icons/io";
const Contact = () => {
  //Mouse Hover Effect
  const addClass = (event) => {
    event.target.className += ` rabber_band`;
    setTimeout(() => {
      event.target.className = `blast`;
    }, 1000);
  };

  const onHandleChange = (e) => {
    if (e.target.value) {
      if (e.target.className !== `input_form focus`) {
        e.target.className += ` focus`;
      }
    } else {
      e.target.className = `input_form`;
    }
  };
  return (
    <div className="home_page about ">
      <PageLoading />
      <div className="home_main_text contact">
        <div className="main_text about_me_main contact_box">
          <h1 className="main_heading_title">
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              C
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              o
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              n
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              t
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              a
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              c
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              t
            </span>
            &nbsp;
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              M
            </span>
            <span onMouseEnter={(e) => addClass(e)} className="blast">
              e
            </span>
            <br />
            <span className="body_text ml-3">&lt;/h1&gt;</span>
          </h1>

          <p className="text_contact">
            I am interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to contact me using below form either.
          </p>

          <form className="contact_form">
            <div className="grid_box">
              <div className="span_input">
                <input
                  onBlur={(e) => onHandleChange(e)}
                  autoComplete="new password"
                  className={"input_form"}
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="nameFeild"
                />
                <label className="label_after" htmlFor="nameFeild"></label>
              </div>
              <div className="span_input">
                <input
                  onBlur={(e) => onHandleChange(e)}
                  autoComplete="new password"
                  className="input_form "
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
                onBlur={(e) => onHandleChange(e)}
                autoComplete="new password"
                className="input_form "
                type="text"
                name="subject"
                placeholder="Subject"
                id="subjectFeild"
              />
              <label className="label_after" htmlFor="subjectFeild"></label>
            </div>
            <div className="span_input">
              <textarea
                onBlur={(e) => onHandleChange(e)}
                className="input_form "
                placeholder="Message"
                name="msg"
                id="textarea"
              />
              <label
                className="label_after text_area_label"
                htmlFor="textarea"
              ></label>
            </div>
            <div className='btn_div'>

            <button className="contactMeBtn " type="submit">
              Send <IoMdSend/>
            </button>
            </div>
          </form>
        </div>
      </div>
      <div className="home_logo map_section">
        <div className="info_map">
          Mamun Ahmed,
          <br />
          Bangladesh,
          <br />
          Dhaka Bangladesh <br />
          Dhaka <br />
          <br />
          <span>mamun.ahmed13525@gmail.com</span>
        </div>
        <MapComponent />
      </div>
    </div>
  );
};

export default Contact;
