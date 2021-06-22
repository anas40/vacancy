import { useLocation, Link } from 'react-router-dom'
import './footer.css'
import copyrighticon from "assets/icons/copyright.svg" 
import UploadButton from 'components/uploadButton';
import faqs from 'assets/data/faq'
function Footer() {
  return (
    <footer>
      <section className="links">
        <Link to="/" >Home</Link>
        <Link to="/" >Terms & Conditions</Link>
        <Link to="/" >Privacy Policy</Link>
        <UploadButton />
      </section>
      <section className="faq-container">
        {faqs.map((faq, index) => (
          <section className="faq" key={index}>
            <p className="question">{faq.q}</p>
            <p className="answer">{faq.a}</p>
          </section>
        ))
        }
      </section>
      <p className="copyright-message">Copyright <img src={copyrighticon} alt="copyright"/> 2021 Vacancy</p>
    </footer>
  );
}



export default Footer;
