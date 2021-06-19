import './hero.css';

function Hero() {
  return (
    <section className="hero d-flex align-items-center justify-content-center">
      <div className="container d-flex justify-content-evenly align-items-center">
        <h1>Thousands of jobs<br /> in a single click.</h1>
        <h2>Stop refilling out the same applications over and over. Fill out Vacancy's common application to apply for thousands of jobs. Upload your resume now to get started.</h2>
        <div className="upload-button-container">
          <button className="btn">Upload resume</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
{/* <label htmlFor="resume">Uplaod resume</label>
          <input type="file" name="resume" id="resume" /> */}