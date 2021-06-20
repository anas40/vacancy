import { useLocation, Link } from 'react-router-dom'
import './footer.css'
import UploadButton from 'components/uploadButton';
import faqs from '../../assets/data/faq'
function Footer() {
  return (
    <footer>
      <section className="links">
        <Link to="/" >Home</Link>
        <UploadButton />
      </section>
      <section className="faq-container">
        {faqs.map((faq,index) => (
          <section className="faq" key={index}>
            <p className="question">{faq.q}</p>
            <p className="answer">{faq.a}</p>
          </section>
        ))
        }
      </section>
    </footer>
  );
}



export default Footer;
