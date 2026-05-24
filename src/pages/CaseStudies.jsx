import { Link } from 'react-router-dom';
import './CaseStudies.css';

function CaseStudies() {

  const caseStudies = [
    {
      id: 1,
      title: 'Lead Lifecycle & Sales Operations Automation System',
      description:
        'Designed and implemented a lightweight sales operations system to streamline lead management, automate follow-ups, and improve pipeline visibility for a high-volume business development workflow.',
      tags: ['Automation', 'Sales Operations', 'Workflow Design'],
      link: '/case-studies/lead-lifecycle',
    },
    {
      id: 2,
      title: 'Digital Client Onboarding & KYB/KYC Workflow Platform',
      description:
        'Built a React-based KYB/KYC onboarding system with automated stakeholder alerts and integrated verification workflows, replacing fragmented email-based onboarding processes.',
      tags: ['React', 'Fintech', 'Compliance'],
      link: '/case-studies/onboarding',
    },
    {
      id: 3,
      title: 'AI Client Support & Knowledge Automation System',
      description:
        'Built a Telegram-based AI assistant with a centralized knowledge base capable of answering client queries, generating responses, and streamlining support workflows.',
      tags: ['AI', 'OpenAI', 'Automation'],
      link: '/case-studies/ai-support',
    },
  ];

  return (
    <div className="case-studies-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Selected Case Studies</h1>
          <p className="page-description">
            Real-world implementations of intelligent automation and operational systems design.
          </p>
        </div>
      </section>

      <section className="case-studies-section">
        <div className="container">
          <div className="case-studies-list">
            {caseStudies.map((study) => (
              <Link key={study.id} to={study.link} className="case-study-card">
                <div className="case-study-content">
                  <h3 className="case-study-title">{study.title}</h3>
                  <p className="case-study-description">{study.description}</p>
                  <div className="case-study-tags">
                    {study.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="read-more-link">
                    Read Full Case Study →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;
