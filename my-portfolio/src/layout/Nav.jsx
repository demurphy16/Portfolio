import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {

  return (
    <div className="nav-bar">
      <div className="left-nav nav-content">
        <a className="nav-logo">Logo</a>
      </div>
      <div className="right-nav nav-content">
          <Link to='/AboutMe'>About Me</Link>
          <Link to='/AboutMe'>Projects</Link>
          <Link to='/AboutMe'>Contact</Link>
      </div>

    </div>
  )
}

export default Nav