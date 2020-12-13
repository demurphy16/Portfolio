import React from 'react'
import './Projects.css'
import cooked from '../assets/cooked.gif'
import block from '../assets/block.gif'

function Projects() {

  return (
    <div className="project-page-container">
      <h1>My Projects</h1>
      <div className="project-container cooked">
        <img className="project-img" src={cooked}/>
        <div className="project-description-container">
        <p className="project-description">Cooked was my final project for General Assembly's software engineering immersive bootcamp. 
          It is a full-stack application that was built to showcase what I learned over the course of the final two weeks of the program.
          Cooked is built with Ruby on Rails for the backend and React for the fontend. Users can sign-in or register
          and then proceed to create a recipe with an image, cooktime, and ingredients. It is an unfinished application that is missing 
          some functionality and styling but works nonetheless. 
        </p>
        </div>
      </div>
      <div className="project-container block">
        <img className="project-img" src={block}/>
        <div className="project-description-container">
        <p className="project-description">Block is a collaborative full-stack application that was built by myself and three other students.
          Block was desgined by a team of UX students and uses Express for the backend with React on the frontend.
          I was responsible for building out the pages and pair programming the backend. 
        </p>
        </div>
      </div>
      <div className="project-container beer-storage">
        <img className="project-img" />
        <div className="project-description-container">
        <p className="project-description">Beer-Storage was the second application I ever built. It is a fontend application designed to help Users
          find the right beer. Beer-Storage uses React to render its information and was built after just 2 weeks of instruction. 
        </p>
        </div>
      </div>
    </div>
  )
}
export default Projects