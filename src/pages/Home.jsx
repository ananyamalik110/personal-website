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
                Management Consultant focused on AI Automation, Operations, and Intelligent Systems.
              </p>
              <p className="hero-description">
                I help businesses redesign workflows, optimise operations, and build scalable systems
                through intelligent automation and process architecture.
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
              I work at the intersection of operational strategy and intelligent automation — helping
              businesses rethink workflows, remove inefficiencies, and build systems designed to scale.
            </p>
            <p>
              My background spans financial services, digital assets, and operations, with experience
              designing AI-enabled workflows, automation systems, and process infrastructure across
              fast-moving environments.
            </p>
            <p>
              I'm particularly interested in practical applications of AI: not as standalone tools,
              but as systems that improve decision-making, reduce friction, and help teams operate
              more effectively.
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
              <h3 className="service-title">AI Automation & Workflow Design</h3>
              <p className="service-description">
                Designing intelligent systems that reduce manual effort, automate repetitive
                processes, and improve operational efficiency.
              </p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Operational Strategy & Systems Design</h3>
              <p className="service-description">
                Translating business objectives into scalable workflows, SOPs, and operating
                structures that support long-term growth.
              </p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Digital Asset Operations</h3>
              <p className="service-description">
                Building operational frameworks and decision systems within crypto-native
                environments and fast-moving markets.
              </p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Team Enablement</h3>
              <p className="service-description">
                Helping teams adopt smarter workflows, improve collaboration, and integrate AI
                into day-to-day operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
