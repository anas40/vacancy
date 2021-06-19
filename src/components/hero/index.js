import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import './hero.css';

function Hero() {
  const history = useHistory()
  function pickFile(){
    document.querySelector('#resume').click()
  }
  function checkFile(){
    const id = setInterval(()=>{
      if(document.getElementById("resume").value != "") {
        history.push('/register')
     }
    },2000)
    console.log(id);
    return id
  }
  useEffect(()=>{
    const id = checkFile()
    return function (){
      clearInterval(id)
    }
  },[])

  return (
    <section id="hero" className="hero d-flex align-items-center justify-content-center">
      <div className="container d-flex justify-content-evenly align-items-center">
        <h1>Thousands of jobs<br /> in a single click.</h1>
        <h2>Stop refilling out the same applications over and over. Fill out Vacancy's common application to apply for thousands of jobs. Upload your resume now to get started.</h2>
        <div className="upload-button-container">
          <button className="btn" onClick={pickFile}>Upload resume</button>
          <input style={{position:'absolute',zIndex:'-10',left:'0'}} type="file" id="resume" name="resume" accept="application/pdf" />
        </div>
      </div>
    </section>
  );
}

export default Hero;