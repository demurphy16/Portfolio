import React from 'react'
import Self from '../assets/linkedIn.JPG'
import cooked from '../assets/cooked.gif'

import './Home.css'

function Home() {

  return (
    <div className="home-container">
      <div className="body">
        <div className="welcome-text-container">
          <p className="name">David Murphy</p>
          <p className="home-text results">Results Driven Software-Engineer</p>
          <p className="home-text energized">Energized and Curious</p>
          <p className="home-text change">Aspirations to Create Change</p>
        </div>
        <div className="welcome-img-container">
          <img alt="David" className="welcome-img" src={Self} />
          <p>demurphy16@brandeis.edu - 978-877-1945</p>
        </div>
      </div>
      <div className="most-recent">
        <h2 className="most-recent-title">Most Recent Project</h2>
        <div className="recent-project-container">
          <div className="recent-img-container">
            <img className="recent-img" alt="cooked" src={cooked}/>
          </div>
          <div className="recent-descirption-container">
            <p>Cooked is an unfinished application that is designed to help amateur
             chefs create, update, delete and share their recipes. Future iterations 
             will likely include the ability save other users recipes and easily convert ingredient
             lists in shopping lists. To see more about Cooked and past projects, visits the projects page.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home