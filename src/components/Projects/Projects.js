import React, { useEffect, useRef } from "react";
import "./Projects.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageLoading from "../Share/PageLoading";
import { fakeData } from "../FakeData";
import TitleEffect from "../../Effect/TitleEffect";
import { FaGithub } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
import { useState } from "react";
import { AiOutlineEye } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

const menuBar = [
  {
    id: 1,
    name: 'React'
  },
  {
    id: 2,
    name: 'Javscript'
  },
  {
    id: 3,
    name: 'MongoDB'
  },
  {
    id: 4,
    name: 'HTML'
  },
  {
    id: 5,
    name: 'CSS'
  },
]

const Projects = () => {

  const [activeMenu, setActiveMenu] = useState(menuBar[0]?.name || '');
  const [videoOn, setVideoOn] = useState({ status: false, url: '' });
  const ref = useRef()

  //Toast End Timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      toast.dark("Click to Full Details");
    }, 500);
    return () => clearTimeout(timer);
  });


  //click outside to close div
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (videoOn.status && ref.current && !ref.current.contains(e.target)) {
        setVideoOn({ status: false, url: '' })
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [videoOn.status])



  return (
    <div style={{ height: "100%" }} className="home_page projects">
      <PageLoading />
      <div className="project_div">
        <div className="projects_title">
          <TitleEffect
            h1={""}
            title={["P", "r", "o", "j", "e", "c", "t", "s"]}
          />
        </div>
        <div>
          <div className="row m-auto mt-5">
            <ul className="d-flex">
              {
                menuBar.map(menu => (
                  <li onClick={() => setActiveMenu(menu.name)} key={menu.id} className={`btn-category ${activeMenu === menu.name ? 'active' : ''}`}>{menu.name}</li>
                ))
              }
            </ul>
          </div>
        </div>
        {
          videoOn.status &&
          <div className='fixed_video_player'>
            <div className='videoPlayer_div'>
              <p className="closeIcon_p">
                <IoMdClose onClick={() => setVideoOn({ status: false, url: '' })} className="iconCloseVideoPlayer" />
              </p>
              <iframe ref={ref} style={{ width: '100%', height: '100%' }} src="https://www.youtube.com/embed/rt-2cxAiPJk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        }
        <div className="row m-auto mt-3">
          {fakeData.map((item, ind) => (
            <Project setVideoOn={setVideoOn} key={ind} item={item} />
          ))}
        </div>
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



const Project = ({ setVideoOn, item }) => {
  if (item) return (
    <div className="col-md-4">
      <div className="single_project">
        <p className="category_name">{item.category}</p>
        <h3 className="font-weight-bold">{item.title}</h3>
        <p className="mb-2">{item.sub_title}</p>
        <ul className="d-flex ">
          {
            item.github_Link.map((link, ind) => (
              <li key={ind} className="link_icon">
                <a title={link.title} href={link.url} target="blank">
                  <FaGithub />
                </a>
              </li>
            ))
          }
          <li className="link_icon">
            <a
              title="Live Preview"
              href={item.live_link}
              target="blank"
            >
              <MdExitToApp />
            </a>
          </li>
        </ul>
        <ul className="ul_technology_used">
          {item.technology_used.map((tech, ind) => (
            <li key={ind} className="tech_name">
              {tech},
            </li>
          ))}
        </ul>

        {item.thumbail_image && (
          <div className="image_trailer_div">
            <img className="pointer" src={item.thumbail_image} alt="thumbnail" />
            <p onClick={() => setVideoOn({ status: true, url: 'https://www.youtube.com/watch?v=rt-2cxAiPJk' })} className="project_trailer">
              <AiOutlineEye style={{ fontSize: '1.5rem', marginRight: '.4rem' }} />
              View Project Trailer</p>
          </div>
        )}
      </div>
    </div>
  )
}