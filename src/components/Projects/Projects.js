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
    id: 0,
    name: 'All',
    category: 'all'
  },
  {
    id: 1,
    name: 'e-commerce',
    category: 'e-commerce'
  },
  {
    id: 2,
    name: 'admin dashboard',
    category: 'admin_dashboard'
  },

  {
    id: 3,
    name: 'live chat',
    category: 'live_chat'
  },
  {
    id: 4,
    name: 'blogs',
    category: 'blogs'
  },
  {
    id: 5,
    name: 'movies',
    category: 'movies'
  },
  {
    id: 6,
    name: 'agency',
    category: 'agency'
  },
  {
    id: 7,
    name: 'portfolio',
    category: 'portfolio'
  },
]

const Projects = () => {
  const [activeMenu, setActiveMenu] = useState(menuBar[0]?.category || '');
  const [videoOn, setVideoOn] = useState({ status: false, url: '' });
  const [filterData, setFilterData] = useState([]);
  const ref = useRef()

  //Toast End Timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      toast.dark("Click to Full Details");
    }, 500);
    return () => clearTimeout(timer);
  }, []);


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

  useEffect(() => {
  
    if (activeMenu !== '') {
      let filter = [];
      if (activeMenu === 'all') {
        filter = fakeData;
      } else {
        filter = fakeData.filter(item => item.category === activeMenu)
      }
      setFilterData([...filter])
    }
  }, [activeMenu])

  return (
    <div style={{ height: "100%" }} className="home_page projects">
      <div className="project_div">
        <div className="projects_title">
          <TitleEffect
            h1={""}
            title="Projects"
          />
        </div>
        <div>
          <div className="row m-auto mt-5">
            <ul className="d-flex category_ul">
              {
                menuBar.map(menu => (
                  <li onClick={() => setActiveMenu(menu.category)} key={menu.id} className={`btn-category ${activeMenu === menu.category ? 'active' : ''}`}>{menu.name}</li>
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
          {
            filterData?.length ?
              filterData.map((item, ind) => (
                <Project setVideoOn={setVideoOn} key={ind} item={item} />
              ))
              :
              <p>No Data Foud!</p>
          }
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
  const [hover, setHover] = useState(false)
  if (item) return (
    <div onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} style={hover ? { zIndex: 124 } : { zIndex: 0 }} className="col-md-4 animate__animated animate__fadeInUp">
      <div className="single_project">
        <p className="category_name">{item.category}</p>
        <h3 className="font-weight-bold">{item.title}</h3>
        <div className="project_info">
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
        </div>
        <div style={{ position: 'relative', height: '250px' }}>
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
    </div>
  )
}