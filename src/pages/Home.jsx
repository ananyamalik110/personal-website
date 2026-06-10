import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Ananya Malik</h1>
              <p className="hero-subtitle">
                Management Consultant focused on operational strategy, AI automation, and product systems design.
              </p>
              <p className="hero-description">
                I help businesses streamline operations, design product workflows, and implement data-driven solutions.
              </p>
            </div>
            <div className="hero-image">
              <img src="/images/profile.png" alt="Ananya Malik" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">About</h2>
          <div className="about-content">
            <p>
              My background spans fintech, digital assets, and operations consulting, with experience designing product features, building operational frameworks, and implementing AI-enabled solutions in fast-paced environments.
            </p>
            <p>
              I'm particularly drawn to problems where product thinking, analytical rigor, and operational design converge—turning ambiguity into structured systems and insights into execution.
            </p>
            <p>
              My interests span Web3 development, AI automation, and cryptocurrency markets—always exploring how emerging tech can solve operational challenges.
            </p>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3 className="service-title">Product Strategy & Systems Design</h3>
              <p className="service-description">
                Designing product features, operational workflows, and scalable systems aligned with business objectives.
              </p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Business Analysis & Process Optimization</h3>
              <p className="service-description">
                Analyzing workflows, identifying inefficiencies, and implementing data-informed solutions.
              </p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Web3 & Digital Asset Operations</h3>
              <p className="service-description">
                Building operational frameworks, compliance workflows, and product systems for crypto-native businesses.
              </p>
            </div>
            <div className="service-card">
              <h3 className="service-title">AI Automation & Implementation</h3>
              <p className="service-description">
                Integrating intelligent automation, workflow tools, and AI solutions to improve efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
