import React from "react";
import "./Home.css";
import logo from "../image/logo.PNG";
import "animate.css";
import PageLoading from "./Share/PageLoading";
import { useHistory } from "react-router-dom";

// import Particale from "../Effect/Particale";
const Home = () => {
  const { push } = useHistory();
  //Mouse Hover Effect
  const addClass = (event) => {
    event.target.className += ` rabber_band`;
    setTimeout(() => {
      event.target.className = `colorWhite`;
    }, 1000);
  };
  const contact = () => {
    push("/contact");
  };

  return (
    <div className="home_page home">
      <PageLoading />
      <div className="home_main_text ">
        <div className="main_text home">
          {/* <p className="h1_tag mt-5">&lt;h1&gt;</p> */}
          <h1 className="main_heading_title">
            <div className="d-flex">
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                H
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                i
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                ,
              </span>
            </div>
            <div className="d-flex">
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                I
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                '
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                m
              </span>
              &nbsp;
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                M
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                a
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                m
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                u
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                n
              </span>
              &nbsp;
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                A
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                h
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                m
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                e
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                d
              </span>
            </div>
            <div className="d-flex">
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                w
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                e
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                b
              </span>
              &nbsp;
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                d
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                e
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                v
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                e
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                l
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                o
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                p
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                e
              </span>
              <span onMouseEnter={(e) => addClass(e)} className="colorWhite">
                r
              </span>
            </div>
            <span className="body_text ml-3">&lt;/h1&gt;</span>
          </h1>
          <p className="sub_title">
            Front End Developer / Javascript Expert / Freelancer
          </p>
          <button onClick={contact} className="contactMeBtn mt-4 ">
            contact me
          </button>
        </div>
      </div>
      <div className="home_logo landing_logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Home;
