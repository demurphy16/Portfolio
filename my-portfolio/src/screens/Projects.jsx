import React from 'react'
import './Projects.css'
import cooked from '../assets/cooked.gif'
import block from '../assets/block.gif'
import beer from '../assets/beer.gif'

function Projects() {

  return (
    <div className="project-page-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="project-container cooked">
        <img alt ="cooked gif"className="project-img" src={cooked}/>
        <div className="project-description-container">
        <p className="project-description">Cooked was my final project for General Assembly's software engineering immersive bootcamp. 
          It's a full-stack application that was built with Ruby on Rails for the backend and React for the fontend. Users can sign-in or register
          and then proceed to create a recipe with an image, cooktime, and ingredients. It is an unfinished application that is missing 
          some functionality and styling but works nonetheless. 
        </p>
        <button className="project-button cooked-button">
          <a className="project-anchor" rel="noreferrer" target="_blank" href="http://superb-memory.surge.sh/">Use Project</a>    
        </button>
        </div>
      </div>
      <div className="project-container block">
        <img alt="block gif"className="project-img" src={block}/>
        <div className="project-description-container">
        <p className="project-description">Block is a collaborative full-stack application that was built by myself and three other students.
          Block was desgined by a team of UX students and uses Express for the backend with React on the frontend.
          I was responsible for building out the pages and pair programming the backend. 
        </p>
        <button className="project-button"> 
          <a className="project-anchor" rel="noreferrer" target="_blank" href="https://the-block-app.netlify.app/">Use Project</a>    
        </button>
        </div>
      </div>
      <div className="project-container beer-storage">
        <img alt="beer gif"className="project-img" src={beer}/>
        <div className="project-description-container">
        <p className="project-description">Beer-Storage was the second application I ever built. It is a fontend application designed to help Users
          find the right beer. Beer-Storage uses React to render its information and was built after just 2 weeks of instruction. 
        </p>
        <button className="project-button"> 
          <a className="project-anchor" rel="noreferrer" target="_blank" href="https://happy-bell-026f8e.netlify.app">Use Project</a>    
        </button>
        </div>
      </div>
    </div>
  )
}
export default Projects

