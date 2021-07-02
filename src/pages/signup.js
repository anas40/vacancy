import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { fileContext } from 'context/fileContext'
import 'assets/css/signup.css'

import fileIcon from 'assets/icons/fileIcon.png'
import successLogo from 'assets/icons/right.svg'
import failedLogo from 'assets/icons/wrong.svg'


function Signup() {
  const [file, setFile] = useContext(fileContext)
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)
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
      .then(async res => {
        if (res.status >= 300)
          return {
            error: true,
            message: await res.text()
          }
        return {
          error: false,
          message: await res.text()
        }
      })
      .then(res => {
        console.log(res)
        if (res.error) {
          setFailed(res.message)
        }
        else {
          setSuccess(true)
          setFile(undefined)
        }
      })
      .catch(error => {
        setFailed("Failed, either you are already registered or try again later!")
        console.log(error)
      })
  }

  useEffect(() => {
    if (!file) history.push('/')
  }, [])

  if (success) {
    return (
      <main>
        <div className="fullView  justify-content-center d-flex align-items-center">
          <div className="form-container msg-box">
            <img src={successLogo} alt="request successful" />
            <div className="text success">Resume uploaded successfully!</div>
          </div>
        </div>
      </main>
    )
  }

  if (failed) {
    return (
      <main>
        <div className="fullView  justify-content-center d-flex align-items-center">
          <div className="form-container msg-box">
            <img src={failedLogo} alt="request failed, try again" />
            <div className="text error">{failed}</div>
            <button className="btn" onClick={() => setFailed(false)}>Try Again</button>
          </div>
        </div>
      </main>
    )
  }
  return (
    <main>
      <div className="fullView justify-content-center d-flex align-items-center">
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
              <div className="d-flex">
                <div className="country-code">+65</div>
                <input type="text" id="contact" name="contact" required placeholder="Your 8 digit contact no." maxLength="8" minLength="8" />
              </div>
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
