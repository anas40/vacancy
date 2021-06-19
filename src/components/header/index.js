import './header.css';


function Header() {
  function pickFile(){
    document.querySelector('#resume').click()
  }
  return (
    <header>
      <div className="nav d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <div className="logo"><span>V</span>acancy</div>
        </div>
        <div className="navbar d-flex justify-content-between ">
          <div><a href="/">Home</a></div>
          <div>
            <button className="btn" onClick={pickFile}>Upload resume</button>
          </div>
        </div>
      </div>
    </header>
  );
}


export default Header;
