import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">© {currentYear} Ananya Malik. All rights reserved.</p>
          <div className="footer-links">
            <a href="mailto:ananyamalik0309@gmail.com" className="footer-link">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/ananya-malik-94ab7b215/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
