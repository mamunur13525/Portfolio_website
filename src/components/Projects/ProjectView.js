import React,{useEffect, useRef} from "react";
import "./ProjectView.css";
import CloseIcon from "@material-ui/icons/Close";
import Particale from "../../Effect/Particale";
import TitleEffect from "../../Effect/TitleEffect";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


function useOutsideAlerter(ref,setShowProjectDetails) {
  useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
              setShowProjectDetails(false)
          }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [ref]);
}



const ProjectView = ({ setShowProjectDetails }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setShowProjectDetails);
  return (
    <div className='Modal_view' ref={wrapperRef}>
      {/* <Particale /> */}
      <div className="product_view_header">
        <TitleEffect
          h1={""}
          title={["P", "r", "o", "j", "e", "c", "t", "", "V", "i", "e", "w"]}
        />
        <CloseIcon
          className="closeIcon"
          onClick={() => setShowProjectDetails(false)}
        />
      </div>
      <div className="project_details_page">
        <div className="project_view_details_text">
          <div className="container-fliud">
            <div style={{marginLeft:'0px', width:'100%'}} className="row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src="http://placekitten.com/800/855" alt="cat" />
                  </div>
                  <div className="tab-pane" id="pic-2">
                    <img src="http://placekitten.com/800/852" alt="cat" />
                  </div>
                  <div className="tab-pane" id="pic-3">
                    <img src="http://placekitten.com/800/856" alt="cat" />
                  </div>
                  <div className="tab-pane" id="pic-4">
                    <img src="http://placekitten.com/800/859" alt="cat" />
                  </div>
                </div>
                <ul className="preview-thumbnail nav nav-tabs">
                  <li>
                    <a href="#/" data-target="#pic-1" data-toggle="tab">
                      <img src="http://placekitten.com/400/255" alt="cat" />
                    </a>
                  </li>
                  <li>
                    <a href="#/" data-target="#pic-2" data-toggle="tab">
                      <img src="http://placekitten.com/400/252" alt="cat" />
                    </a>
                  </li>
                  <li>
                    <a href="#/" data-target="#pic-3" data-toggle="tab">
                      <img src="http://placekitten.com/400/256" alt="cat" />
                    </a>
                  </li>
                  <li>
                    <a href="#/" data-target="#pic-4" data-toggle="tab">
                      <img src="http://placekitten.com/400/259" alt="cat" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="details col-md-6">
                <h2 className="project_title">Project Title Is Here</h2>
                <p className="project_sub_title">
                  Project Sub title description
                </p>

                <p className="project_description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Explicabo dicta a reiciendis quisquam blanditiis voluptate
                  culpa sint saepe doloribus? Sint repudiandae enim praesentium
                  dignissimos veniam soluta laboriosam temporibus nobis
                  explicabo.
                </p>
                <p className='project_use'>
                    Which Tecnology are use
                </p>
                <div className="project_write">
                  <ul className="project_ul">
                    <li>Javascript</li>
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>TypeScript</li>
                  </ul>
                  <ul className="project_ul">
                    <li>Node</li>
                    <li>Express</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                  </ul>
                </div>
                <div className='project_button'>
                    <button className='contactMeBtn mt-4 '>
                       <span> View Code </span> <ArrowForwardIcon className='btn_icon'/></button>
                    <button className='contactMeBtn mt-4 '>
                       <span> Live Site </span> <ArrowForwardIcon className='btn_icon'/></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
