import { useState, useRef, useEffect } from 'react'
import { data } from './assets/project_images/projects.js';
import './App.css'

import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

import { Modal } from '@mui/material';

function App() {

  const [project, setProject] = useState(data[0]);
  const [active, setActive] = useState([true, false, true]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNext = () => {
    const index = data.indexOf(project);
    if (index === data.length - 1) {
      setProject(data[0]);
    } else {
      setProject(data[index + 1]);
    }
  }

  const handlePrev = () => {
    const index = data.indexOf(project);
    if (index === 0) {
      setProject(data[data.length - 1]);
    } else {
      setProject(data[index - 1]);
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      handleNext();
    } else if (event.key === 'ArrowLeft') {
      handlePrev();
    }
  }

  const toogleActive = (index) => {
    var newActive = [...active];
    newActive[index] = !newActive[index];
    setActive(newActive);
    console.log(active);
  }

  return (
    <div className="App">
      <nav className='my-navbar row'>
        <div id='nav-logo' className="nav-section col-12 col-md-6 col-lg-2">
          <div className='logo'>
            <a href='/'>mark</a>
          </div>
        </div>
        <div id='nav-links' className="nav-section col-5 col-md-6">
          <a href='#projects'>projects</a>
          <a href='#about'>about me</a>
        </div>
        <div id='nav-socials' className="nav-section col-5 col-lg-2 col-md-6">
          <a
            href='https://github.com/marknjoroge'
            target='_blank'
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Github: marknjoroge"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href='https://linkedin.com/in/mark-or-njoroge'
            target='_blank'
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Linkedin: mark-or-njoroge"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href='mailto:marknnjorogeh@gmail.com'
            target='_blank'
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Email: marknnjorogeh@gmail.com"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <div id='nav-contact' className="nav-section col-2 col-lg-2 col-md-6">
          <button className='btn' onClick={handleOpen}>hire me</button>
        </div>
      </nav>

      <main>
        <article id="projects">
          <div className='row'>
            <div className='main-section col-lg-8' id='main-image'>
              <div style={{ justifyContent: 'center', placeItems: 'center', alignItems: 'center' }}>
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="mySwiper"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="GrabN'Drag"
                >
                  {project["images"].map((image, index) => {
                    return (
                      <SwiperSlide key={index} ><img src={`https://github.com/marknjoroge/portfolio-images/blob/main/${image}?raw=true`} /></SwiperSlide>
                    )
                  }
                  )}
                </Swiper>
              </div>
              {/* <img src='src/assets/project_images/elizabeth_wangari/1.png' /> */}
            </div>
            <div className='main-section col-lg-4' id='main-desc'>
              <p className='project-stack'>
                {project["type"]} ·
                {project["tech"].map((stack, index) => {
                  return (
                    <span key={index}>
                      {stack}
                    </span>
                  )
                }
                )}
              </p>
              <br />
              <h1>{project["name"]}</h1>
              <br />
              <p>{project["description"]}</p>
              <br />
              <a href={project["link"]} target='_blank' rel="noreferrer">View Project</a>
            </div>
          </div>

          <div className='row'>
            <div className='main-section col-md-8' id='main-list'>
              <button
                className={active[0] ? "btn active" : "btn"}
                onClick={() => toogleActive(0)}
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Mobile Applications (hybrid and native)"
              >
                Apps
                <i className={active[0] ? "fa-solid fa-icon fa-circle-check" : "fa-regular fa-icon fa-circle"}></i>
              </button>
              <button
                className={active[1] ? "btn active" : "btn"}
                onClick={() => toogleActive(1)}
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Websites I have created"
              >
                Websites
                <i className={active[1] ? "fa-solid fa-icon fa-circle-check" : "fa-regular fa-icon fa-circle"}></i>
              </button>
              <button
                className={active[2] ? "btn active" : "btn"}
                onClick={() => toogleActive(2)}
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Other projects I am proud of"
              >
                Others
                <i className={active[2] ? "fa-solid fa-icon fa-circle-check" : "fa-regular fa-icon fa-circle"}></i>
              </button>
            </div>
            <div className='main-section col-md-4' id='main-controlls'>
              <div className="row">
                <div className="col">
                  <button
                    className='btn'
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Previous Project"
                    onClick={handlePrev}
                    onKeyDown={handleKeyDown}
                  >{'<'}</button>
                </div>
                <div className="col">
                  <button
                    className='btn'
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Next Project"
                    onClick={handleNext}
                    onKeyDown={handleKeyDown}
                    autoFocus
                  >{'>'}</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* <article id="about">
          <h1 className='section-title'>About Me</h1> */}
          {/* <div className='infinity-container'>
            Job status
            <div className='infinity'>
              <i className="fa-solid fa-search"></i>
            </div>
          </div> */}
          {/* <h3>Jobs</h3> */}
          {/* An interpunct */}
          {/* <div className="job">
            <h3 className='job-title'>Accounts Escrow<br /><span> · May 2022 - February 2023</span></h3>
            <h6 className='job-tech'>Fullstack Developer <br/> <span>React JS, Express JS, MySQL, Firebase</span></h6>
            <p className='job-desc'>I was responsible for building the frontend and backend of the application. I also partially helped on implementing the design of the application.</p>
          </div>
        </article> */}
      </main>

      <Tooltip id="my-tooltip" />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-modal-description"
        id="hire-modal"
      >
        <div className="hire-body">
          <h2 id="modal-title">Hire Me</h2>
          <p id="modal-modal-description">
            I am available for hire. I am a full stack developer with experience in building mobile applications, websites and other projects. I am also a UI/UX designer. I am currently looking for a job as a full stack developer. I am also available for freelance work.
          </p>
          <div className="hire-links">
            <a href="mailto:marknnjorogeh@gmail.com" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="telto:+254702015937" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default App
