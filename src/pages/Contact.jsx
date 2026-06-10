import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-description">
            I'm always open to discussing new projects, opportunities, or collaborations.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h3 className="contact-label">Email</h3>
                <a href="mailto:ananyamalik110@gmail.com" className="contact-link">
                  ananyamalik110@gmail.com
                </a>
              </div>

              <div className="contact-item">
                <h3 className="contact-label">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/ananya-malik-94ab7b215/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            <div className="contact-cta">
              <h2 className="cta-title">Let's Work Together</h2>
              <p className="cta-description">
                Whether you're looking to optimize operations, implement intelligent automation,
                or build scalable systems, I'd love to hear from you.
              </p>
              <a href="mailto:ananyamalik110@gmail.com" className="cta-button">
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
