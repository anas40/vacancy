import { useLocation } from 'react-router-dom'

import './header.css';

function Header() {
  return (
    <header>
      <div className="nav d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <div className="logo"><span>V</span>acancy</div>
        </div>
        <div className="navbar d-flex justify-content-between ">
          <div><a href="/">Home</a></div>
          <UploadButton />
        </div>
      </div>
    </header>
  );
}

function UploadButton() {
  const { pathname } = useLocation()
  function pickFile() {
    document.querySelector('#resume').click()
  }
  if (pathname === "/register") return ""
  return (<div>
    <button className="btn" onClick={pickFile}>Upload Resume</button>
  </div>)
}

export default Header;
