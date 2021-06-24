import './hero.css';

function Hero({ setFile,setSelectedFirst }) {

  function pickFile() {
    document.querySelector('#resume').click()
  }

  return (
    <section id="hero" className="hero d-flex align-items-center justify-content-center">
      <div className="container d-flex justify-content-evenly align-items-center">
        <h1>Thousands of jobs<br /> in a single click.</h1>
        <h2>Stop refilling out the same applications over and over. Fill out Vacancy's common application to apply for thousands of jobs. Upload your resume now to get started (*.docx and *.pdf formats).</h2>
        <div className="upload-button-container">
          <button className="btn" onClick={pickFile}>Upload Resume</button>
          <input onChange={e=>{setFile(e.target.files[0]);setSelectedFirst(true)}} style={{ position: 'absolute', zIndex: '-10', left: '0' }} type="file" id="resume" name="resume" accept="application/pdf application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
        </div>
      </div>
    </section>
  );
}

export default Hero;