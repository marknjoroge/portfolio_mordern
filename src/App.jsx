import { useState } from 'react'
import { data } from './assets/project_images/projects.js';
import './App.css'
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav className='my-navbar row'>
        <div id='nav-logo' className="nav-section col-12 col-md-2">
          <div className='logo'>
            <a href='/'>mark</a>
          </div>
        </div>
        <div id='nav-links' className="nav-section col-5 col-md-6">
          <a href=''>projects</a>
          <a href=''>about me</a>
        </div>
        <div id='nav-socials' className="nav-section col-5 col-md-2">
          <a href=''>
            <i className="fab fa-github"></i>
          </a>
          <a href=''>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href=''>
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <div id='nav-contact' className="nav-section col-2 col-md-2">
          <a href=''>hire me</a>
        </div>
      </nav>

      <main>
        <article>
          <div className='row'>
            <div className='main-section col-lg-8' id='main-image'>
              <img src='src/assets/project_images/elizabeth_wangari/1.png' />
            </div>
            <div className='main-section col-lg-4' id='main-desc'></div>
          </div>
          <div className='row'>
            <div className='main-section col-md-8' id='main-header'>
              <p className='project-stack'>website · <span>react js</span></p>
              <h1>Elizabeth Wangari <br /> & Co Advocates</h1>
            </div>
            <div className='main-section col-md-4' id='main-controlls'>
              <div className="row">
                <div className="col">
                  <button className='btn' data-tooltip-id="my-tooltip" data-tooltip-content="Previous Project">{'<'}</button>
                </div>
                <div className="col">
                  <button className='btn' data-tooltip-id="my-tooltip" data-tooltip-content="Next Project">{'>'}</button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Tooltip id="my-tooltip" />
    </div>
  )
}

export default App
