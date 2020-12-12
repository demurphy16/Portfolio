import React from 'react'
import Self from '../assets/linkedIn.JPG'
import './AboutMe.css'

function AboutMe() {

  return (
   <div>
    <div className="about-ultra-container">
      <div className="about-page-container">
        <div className="about-img-container">
          <img className="about-img"src={Self} />
          <p className="about-name">David Murphy</p>
        </div>
        <div className="about-text-container">
          <p className="about-text">
            Hello, My name is David Murphy. After graduating from Brandeis University
            in the Spring of 2020 with majors in econoimcs and politics, I decided that it would beneficial for me to further my 
            education and pursue a certification in software engineering. With hopes to make a difference in the everyday lives 
            of individuals, combining a background in economics and politics with one in software seemed like a good place to start.
            Software Engineering requires creativity, logical problem solving, critical thinking, reasoning, and much more on a daily basis 
            and these are all skills I hope to strengthen every day.
          </p>
          <p className="about-text">At Brandeis, I was a member of the men's varsity soccer program which qualified for back to back
          NCAA Final Four's during my freshmen and sophmore years and acheived a national ranking of 4 both times. As a competition based individual,
          I like coding because it allows me to dig deep into the intricacies of problems and chase the feeling of success acheived through hard work and determination. 
          Through my passion for success, I hope to utilize all my areas of education to further the ideals of teamwork, determination, and curiousity wherever I end up. 
          </p>
          <p className="about-text">In my "free time" I like to spend time outdoors, read up on current events, or relax with a good book. My favorite author is John Grisham and the book I am 
           reading currently is called Sapiens by, Yuval Noah Harari.
          </p>
          </div>
        </div>
      </div>
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        <img className="about-icon" alt="icon" src="https://image.flaticon.com/icons/svg/919/919827.svg"/>
        <img className="about-icon" alt="icon" src="https://image.flaticon.com/icons/svg/919/919826.svg"/>
        <img className="about-icon" alt="icon" src="https://image.flaticon.com/icons/svg/919/919828.svg"/>
        <img className="about-icon" alt="icon" src="https://www.flaticon.com/svg/static/icons/svg/919/919852.svg"/>
        <img className="about-icon" alt="icon" src="https://image.flaticon.com/icons/svg/919/919825.svg"/>
        <img className="about-icon" alt="icon" src="https://cdn.iconscout.com/icon/free/png-512/mongodb-3-1175138.png"/>
        <img className="about-icon" alt="icon" src="https://image.flaticon.com/icons/svg/919/919842.svg"/>
        <img className="about-icon" alt="icon" src="https://cdn.worldvectorlogo.com/logos/rails-1.svg"/>
        <img className="about-icon" alt="icon" src="https://www.flaticon.com/svg/static/icons/svg/1265/1265531.svg"/>
      </div>
    </div> 
  )
}

export default AboutMe