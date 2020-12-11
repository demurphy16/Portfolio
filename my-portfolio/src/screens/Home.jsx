import React from 'react'
import Self from '../assets/linkedIn.JPG'

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
        </div>
      </div>
      <div className="most-recent">
          <h2 className="most-recent-title">Most Recent Project</h2>
        </div>
    </div>
  )
}

export default Home