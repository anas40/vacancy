import 'assets/css/signup.css'
import { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { fileContext } from 'context/fileContext'

import fileIcon from 'assets/icons/fileIcon.png'

function Signup() {
  const [file] = useContext(fileContext)
  const history = useHistory()
  console.log(window.screen.height, window.screen.width);
  function submitForm(event) {
    event.preventDefault()
    const form = document.querySelector('#form')
    const body = new FormData(form)
    body.append('resume', file)


    fetch('http://ec2-3-108-44-173.ap-south-1.compute.amazonaws.com:3000/upload-full', {
      method: 'POST',
      body
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        alert("success")
      })
      .catch(error => {
        console.log(error)
        alert("fail")
      })
  }

  useEffect(() => {
    if (!file) history.push('/')
  })

  return (
    <main>
      <div className="fullView d-flex align-items-center">
        <div className="form-container">
          <form className="signup-form" id="form" name="signup-form" onSubmit={submitForm}>
            <h1 className="my-4">Signup Form </h1>
            <div>
              {
                file && (
                  <div className="fileContainer d-flex justify-content-center align-items-center">
                    <img src={fileIcon} alt="Your uploaded resume" />
                    <div>{file.name}</div>
                  </div>
                )
              }
            </div>

            <div className="name">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullname" required placeholder="Your full name" maxLength="50" minLength="2" />
            </div>
            <div className="contact">
              <label htmlFor="contact">Contact No.</label>
              <input type="text" id="contact" name="contact" required placeholder="Your 10 digit contact no." maxLength="10" minLength="10" />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="Your email" />
            </div>
            <button className="btn d-flex align-items-center justify-content-between" type="submit">
              <span>Submit</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Signup;
