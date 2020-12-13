import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {

  return (
    <div className="nav-bar">
      <div className="left-nav nav-content">
      <Link to='/'>Home</Link>
      </div>
      <div className="right-nav nav-content">
          <Link to='/AboutMe'>About Me</Link>
          <Link to='/projects'>Projects</Link>
          <a rel="noreferrer" href="https://www.docdroid.net/SRVGoOT/david-murphy-resume-pdf" target="_blank">Resume</a>
      </div>

    </div>
  )
}

export default Nav