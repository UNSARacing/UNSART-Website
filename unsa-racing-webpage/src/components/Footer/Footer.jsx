import './Footer.css';

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
              University Campus, Sarajevo<br />
              Faculty of Mechanical Engineering
            </p>
          </div>

          <div className="footer-section">
            <h4>Socials</h4>
            {/*<div className="footer-socials">
              <a 
                href="https://instagram.com/unsaracing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/unsaracing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <Facebook size={20} />
              </a>
            </div> */}
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