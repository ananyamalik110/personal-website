import { Link } from 'react-router-dom';
import './CaseStudyDetail.css';

function CaseStudyOnboarding() {
  return (
    <div className="case-study-detail">
      <section className="case-study-header">
        <div className="container">
          <Link to="/case-studies" className="back-link">
            Back to Case Studies
          </Link>
          <div className="case-study-header-content">
            <h1 className="case-study-detail-title">
              Digital Client Onboarding & KYB/KYC Workflow Platform
            </h1>
            <div className="case-study-tags">
              <span className="tag">React</span>
              <span className="tag">Fintech</span>
              <span className="tag">Compliance</span>
            </div>
            <p className="case-study-intro">
              Built a React-based KYB/KYC onboarding system with automated stakeholder alerts and integrated verification workflows, replacing fragmented email-based onboarding processes.
            </p>
            <div className="project-link">
              <a href="https://kyc.hedgit.io/" target="_blank" rel="noopener noreferrer" className="live-project-link">
                View Live Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="case-study-body">
        <div className="container">
          <div className="case-study-content">
            <div className="content-section">
              <h2>Overview</h2>
              <p>
                Designed and developed a custom onboarding platform to replace fragmented email-based KYB/KYC workflows and create a more structured, scalable onboarding experience.
              </p>
              <p>
                Built using React and AI-assisted development workflows, the system transformed onboarding from a manual exchange of documents into a streamlined process with automated notifications and integrated verification workflows.
              </p>
            </div>

            <div className="content-section">
              <h2>The Challenge</h2>
              <p>
                Client onboarding was previously managed through email exchanges.
              </p>
              <p>
                Teams manually requested documents, tracked submissions across long email threads, and coordinated onboarding progress internally. While workable at small scale, the process introduced friction as client volume increased.
              </p>
              <p>
                Key challenges included:<br />
                • Scattered document collection<br />
                • Repetitive manual coordination<br />
                • Poor onboarding visibility<br />
                • Inconsistent client experience<br />
                • Slower onboarding cycles
              </p>
              <p>
                In a digital asset environment, onboarding required both operational efficiency and compliance consistency.
              </p>
            </div>

            <div className="content-section">
              <h2>Discovery & Process Audit</h2>
              <p>
                Instead of optimizing email workflows, I approached onboarding as a systems problem.
              </p>
              <p>
                The objective was to create:<br />
                • A professional client-facing onboarding experience<br />
                • Centralized information collection<br />
                • Secure document handling workflows<br />
                • Real-time internal visibility<br />
                • Downstream verification integration
              </p>
            </div>

            <div className="content-section">
              <h2>Solution Design</h2>

              <div className="solution-item">
                <h3>Custom KYB/KYC Platform</h3>
                <p>
                  Designed and coded a dedicated onboarding portal in React using AI-assisted development workflows.
                </p>
                <p>
                  The platform introduced:<br />
                  • Guided onboarding flows<br />
                  • Structured client information capture<br />
                  • Secure document submission workflows<br />
                  • Standardized onboarding requirements<br />
                  • Reduced onboarding friction
                </p>
                <p>
                  This replaced unstructured email exchanges with a centralized onboarding layer.
                </p>
              </div>

              <div className="solution-item">
                <h3>Automated Stakeholder Alerts</h3>
                <p>
                  Once onboarding forms were completed:<br />
                  • Submission alerts were triggered automatically<br />
                  • Onboarding visibility expanded across leadership teams<br />
                  • C-suite stakeholders received real-time notifications<br />
                  • Manual coordination reduced significantly
                </p>
              </div>

              <div className="solution-item">
                <h3>Integrated Verification Workflow</h3>
                <p>
                  The onboarding process connected directly into an automated verification pipeline.
                </p>
                <p>
                  The system supported workflows such as:<br />
                  • PEP screening<br />
                  • Compliance checks<br />
                  • Onboarding verification workflows<br />
                  • Entity validation processes
                </p>
                <p>
                  This reduced repetitive manual review effort and created a more scalable onboarding operation.
                </p>
              </div>

              <div className="solution-item">
                <h3>Tech Stack</h3>
                <p>
                  • React<br />
                  • Claude Code (AI-assisted development workflow)<br />
                  • Workflow automation & notification logic<br />
                  • Verification pipeline integration
                </p>
              </div>
            </div>

            <div className="content-section">
              <h2>Outcomes</h2>
              <ul className="outcomes-list">
                <li>Replaced email-based onboarding with a dedicated platform</li>
                <li>Improved onboarding experience and professionalism</li>
                <li>Reduced operational coordination overhead</li>
                <li>Increased visibility across onboarding workflows</li>
                <li>Created a scalable onboarding infrastructure</li>
              </ul>
            </div>

            <div className="content-section takeaway">
              <h2>Key Takeaway</h2>
              <p>
                High-friction operational processes often appear to be communication problems, but many are actually workflow design problems. Structuring the process itself can improve both user experience and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudyOnboarding;
