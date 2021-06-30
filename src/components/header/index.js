import { Link } from 'react-router-dom'

import './header.css';

import UploadButton from 'components/uploadButton';

function Header() {
  function showMenu(event){
    event.currentTarget.classList.toggle('active')
    document.querySelector('.nav .navbar').classList.toggle('navbar-small')
  }
  return (
    <header>
      <div className="nav d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <div className="logo"><span>V</span>acancy</div>
        </div>
        <div className="hamburger" onClick={showMenu} style={window.screen.width > 768 ? { display: 'none' } : { display: 'block' }}>
          <div></div>
        </div>
        <div className="navbar d-flex justify-content-between ">
          <div><Link to="/">Home</Link></div>
          <UploadButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
