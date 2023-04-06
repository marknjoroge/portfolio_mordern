import { useState } from 'react'
import { data } from './assets/project_images/projects.js';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav className='my-navbar'>
        <div id='nav-logo' className="nav-section">
          <div className='logo'>
            <a href='/'>mark</a>
          </div>
        </div>
        <div id='nav-links' className="nav-section">
          <a href=''>projects</a>
          <a href=''>about me</a>
        </div>
        <div id='nav-socials' className="nav-section">
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
        <div id='nav-contact' className="nav-section">
          <a href=''>hire me</a>
        </div>
      </nav>

      <main>
        <article>
          <div className='main-section' id='main-image'>
            <img src='src/assets/project_images/elizabeth_wangari/1.png' />
          </div>
          <div className='main-section' id='main-desc'></div>
          <div className='main-section' id='main-header'></div>
          <div className='main-section' id='main-controlls'></div>
        </article>
      </main>
    </div>
  )
}

export default App
