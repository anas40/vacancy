import { Link } from 'react-router-dom'

import './header.css';

import UploadButton from 'components/uploadButton';

function Header() {
  return (
    <header>
      <div className="nav d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <div className="logo"><span>V</span>acancy</div>
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
