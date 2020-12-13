import './Footer.css'

function Footer() {

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">978-877-1945</p>
        <a href="https://github.com/demurphy16" target="_blank" className="icon-anchor">
          <img className="footer-icon" alt="icon" src="https://www.flaticon.com/svg/static/icons/svg/1322/1322104.svg"/>
        </a>
        <a href="https://www.linkedin.com/in/david-murphy-a46453181/" target="_blank"className="icon-anchor">
        <img className="footer-icon" alt="icon" src="https://www.flaticon.com/svg/static/icons/svg/725/725397.svg"/>
        </a>
        <p className="footer-text">demuprhy16@brandeis.edu</p>
      </div>
    </footer>
  )
}

export default Footer