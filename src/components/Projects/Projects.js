import React, { useState, useEffect } from "react";
import "./Projects.css";
import ProjectView from "./ProjectView";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageLoading from "../Share/PageLoading";

const Projects = () => {
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      toast.dark("Click to Full Details");
    }, 500);
  }, []);
  return (
    <div style={{ height: "100%" }} className="home_page projects">
      {/* <PageLoading/> */}
      <div className="project_div">
        <div className="row project_row">
          <div onClick={() => setShowProjectDetails(true)} className="col-md-3">
            <div className="project_box">
              <div className="project_img">
                <img
                  className="img"
                  src="https://source.unsplash.com/pWkk7iiCoDM/400x300"
                  alt=""
                />
              </div>
              <div className="project_content">
                <p className="content_title">Title</p>
                <p className="content_sub_title">Sub Title</p>
              </div>
            </div>
          </div>
          <div onClick={() => setShowProjectDetails(true)} className="col-md-3">
            <div className="project_box">
              <div className="project_img">
                <img
                  className="img"
                  src="https://source.unsplash.com/pWkk7iiCoDM/400x300"
                  alt=""
                />
              </div>
              <div className="project_content">
                <p className="content_title">Title</p>
                <p className="content_sub_title">Sub Title</p>
              </div>
            </div>
          </div>
          <div onClick={() => setShowProjectDetails(true)} className="col-md-3">
            <div className="project_box">
              <div className="project_img">
                <img
                  className="img"
                  src="https://source.unsplash.com/aob0ukAYfuI/400x300"
                  alt=""
                />
              </div>
              <div className="project_content">
                <p className="content_title">Title</p>
                <p className="content_sub_title">Sub Title</p>
              </div>
            </div>
          </div>
          <div onClick={() => setShowProjectDetails(true)} className="col-md-3">
            <div className="project_box">
              <div className="project_img">
                <img
                  className="img"
                  src="https://source.unsplash.com/EUfxH-pze7s/400x300"
                  alt=""
                />
              </div>
              <div className="project_content">
                <p className="content_title">Title</p>
                <p className="content_sub_title">Sub Title</p>
              </div>
            </div>
          </div>{" "}
          <div onClick={() => setShowProjectDetails(true)} className="col-md-3">
            <div className="project_box">
              <div className="project_img">
                <img
                  className="img"
                  src="https://source.unsplash.com/sesveuG_rNo/400x300"
                  alt=""
                />
              </div>
              <div className="project_content">
                <p className="content_title">Title</p>
                <p className="content_sub_title">Sub Title</p>
              </div>
            </div>
          </div>{" "}
          <div onClick={() => setShowProjectDetails(true)} className="col-md-3">
            <div className="project_box">
              <div className="project_img">
                <img
                  className="img"
                  src="https://source.unsplash.com/AvhMzHwiE_0/400x300"
                  alt=""
                />
              </div>
              <div className="project_content">
                <p className="content_title">Title</p>
                <p className="content_sub_title">Sub Title</p>
              </div>
            </div>
          </div>{" "}
          <div onClick={() => setShowProjectDetails(true)} className="col-md-3">
            <div className="project_box">
              <div className="project_img">
                <img
                  className="img"
                  src="https://source.unsplash.com/2gYsZUmockw/400x300"
                  alt=""
                />
              </div>
              <div className="project_content">
                <p className="content_title">Title</p>
                <p className="content_sub_title">Sub Title</p>
              </div>
            </div>
          </div>{" "}
          <div onClick={() => setShowProjectDetails(true)} className="col-md-3">
            <div className="project_box">
              <div className="project_img">
                <img
                  className="img"
                  src="https://source.unsplash.com/EMSDtjVHdQ8/400x300"
                  alt=""
                />
              </div>
              <div className="project_content">
                <p className="content_title">Title</p>
                <p className="content_sub_title">Sub Title</p>
              </div>
            </div>
          </div>{" "}
          <div onClick={() => setShowProjectDetails(true)} className="col-md-3">
            <div className="project_box">
              <div className="project_img">
                <img
                  className="img"
                  src="https://source.unsplash.com/8mUEy0ABdNE/400x300"
                  alt=""
                />
              </div>
              <div className="project_content">
                <p className="content_title">Title</p>
                <p className="content_sub_title">Sub Title</p>
              </div>
            </div>
          </div>{" "}
          <div onClick={() => setShowProjectDetails(true)} className="col-md-3">
            <div className="project_box">
              <div className="project_img">
                <img
                  className="img"
                  src="https://source.unsplash.com/G9Rfc1qccH4/400x300"
                  alt=""
                />
              </div>
              <div className="project_content">
                <p className="content_title">Title</p>
                <p className="content_sub_title">Sub Title</p>
              </div>
            </div>
          </div>{" "}
          <div onClick={() => setShowProjectDetails(true)} className="col-md-3">
            <div className="project_box">
              <div className="project_img">
                <img
                  className="img"
                  src="https://source.unsplash.com/aJeH0KcFkuc/400x300"
                  alt=""
                />
              </div>
              <div className="project_content">
                <p className="content_title">Title</p>
                <p className="content_sub_title">Sub Title</p>
              </div>
            </div>
          </div>{" "}
          <div onClick={() => setShowProjectDetails(true)} className="col-md-3">
            <div className="project_box">
              <div className="project_img">
                <img
                  className="img"
                  src="https://source.unsplash.com/p2TQ-3Bh3Oo/400x300"
                  alt=""
                />
              </div>
              <div className="project_content">
                <p className="content_title">Title</p>
                <p className="content_sub_title">Sub Title</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          showProjectDetails
            ? "project_details_view show"
            : "project_details_view hide"
        }
      >
        
         <ProjectView setShowProjectDetails={setShowProjectDetails} />
        
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Projects;
