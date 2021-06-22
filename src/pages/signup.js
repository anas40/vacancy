import 'assets/css/signup.css'
function Signup() {
  function submitForm(event) {
    event.preventDefault()
    console.log("Form submitted");
  }
  return (
    <main>
      <div className="fullView d-flex align-items-center">
        <div className="form-container">
          <form className="signup-form" onSubmit={submitForm}>
            <h1>Signup Form </h1>
          
            <div className="name">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" required placeholder="Your full name" maxLength="50" minLength="2" />
            </div>
            <div className="contact">
              <label htmlFor="contact">Contact No.</label>
              <input type="text" id="contact" required placeholder="Your 10 digit contact no." maxLength="10" minLength="10" />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required placeholder="Your email" />
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
