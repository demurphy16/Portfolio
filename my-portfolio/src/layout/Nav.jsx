import './Nav.css'

function Nav() {

  return (
    <div className="nav-bar">
      <div className="left-nav nav-content">
        <a className="nav-logo">Logo</a>
      </div>
      <div className="right-nav nav-content">
          <a>About Me</a>
          <a>Projects</a>
          <a>Contact</a>
      </div>

    </div>
  )
}

export default Nav