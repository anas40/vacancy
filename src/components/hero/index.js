import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import './hero.css';

function Hero() {
  const history = useHistory()
  function pickFile() {
    document.querySelector('#resume').click()
  }
  function checkFile(element) {
    return function (event) {
      event.stopPropagation()
      if (element.value !== "") {
        const fd = new FormData()
        const resume = this.files[0]
        fd.append('resume',resume)
        fetch('http://ec2-3-108-44-173.ap-south-1.compute.amazonaws.com:3000/upload',{
          method:'POST',
          body:fd
        })
        .then(res=>{
          console.log(res)
          history.push('/register')
        })
        .catch((er)=>{
          console.log(er)
          alert("Upload failed, please try again")
        })
      }
    }
  }

  useEffect(() => {
    const resumeElement = document.querySelector('#resume')
    resumeElement.addEventListener('change', checkFile(resumeElement))
    return function () {
      resumeElement.removeEventListener('change', checkFile(resumeElement))
    }
  }, [])

  return (
    <section id="hero" className="hero d-flex align-items-center justify-content-center">
      <div className="container d-flex justify-content-evenly align-items-center">
        <h1>Thousands of jobs<br /> in a single click.</h1>
        <h2>Stop refilling out the same applications over and over. Fill out Vacancy's common application to apply for thousands of jobs. Upload your resume now to get started (*.docx and *.pdf formats).</h2>
        <div className="upload-button-container">
          <button className="btn" onClick={pickFile}>Upload Resume</button>
          <input style={{ position: 'absolute', zIndex: '-10', left: '0' }} type="file" id="resume" name="resume" accept="application/pdf application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
        </div>
      </div>
    </section>
  );
}

export default Hero;