import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-header">
          <div className="footer-logo-section">
           <img src="../src/assets/Header/logo.png" alt="UNSA Racing Team" className="footer-logo" />
            <h3 className="footer-title">UNSA Racing Team</h3>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact</h4>
            <a href="mailto:info@unsaracing.com" className="footer-email">
              info@unsaracing.com
            </a>
          </div>

          <div className="footer-section">
            <h4>Location</h4>
            <p className="footer-location">
              Udruženje studenata Univerziteta u Sarajevu "UNSA RT"<br />
              Vilsonovo šetalište 9<br />
              71000 Sarajevo
            </p>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <div className="footer-links">
               <Link to="/impressum" className="footer-link">Impressum</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Formula Student Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;