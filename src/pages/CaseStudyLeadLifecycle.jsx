import { Link } from 'react-router-dom';
import './CaseStudyDetail.css';

function CaseStudyLeadLifecycle() {
  return (
    <div className="case-study-detail">
      <section className="case-study-header">
        <div className="container">
          <Link to="/case-studies" className="back-link">
            Back to Case Studies
          </Link>
          <div className="case-study-header-content">
            <h1 className="case-study-detail-title">
              Lead Lifecycle & Sales Operations Automation System
            </h1>
            <div className="case-study-tags">
              <span className="tag">Automation</span>
              <span className="tag">Sales Operations</span>
              <span className="tag">Workflow Design</span>
            </div>
            <p className="case-study-intro">
              Designed and implemented a lightweight sales operations system to streamline lead management, automate follow-ups, and improve pipeline visibility for a high-volume business development workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="case-study-body">
        <div className="container">
          <div className="case-study-content">
            <div className="content-section">
              <h2>Overview</h2>
              <p>
                Designed and implemented a lightweight sales operations system to streamline lead management, automate follow-ups, and improve pipeline visibility for a high-volume business development workflow. The solution was built around real user behaviour, reducing CRM friction while preserving structured reporting and operational consistency.
              </p>
            </div>

            <div className="content-section">
              <h2>The Challenge</h2>
              <p>
                The Chief Business Officer conducted multiple client meetings each day across coffee meetings, calls, and Zoom sessions, continuously generating new leads and relationship opportunities.
              </p>
              <p>
                As lead volume increased, maintaining follow-ups, tracking context from previous conversations, monitoring revenue opportunities, and updating CRM records became increasingly difficult.
              </p>
              <p>
                Although the organisation used Zoho CRM, updating records between meetings involved multiple steps and significant manual effort, creating friction in day-to-day usage. The result was inconsistent tracking, dependency on memory, and limited visibility across the sales pipeline.
              </p>
            </div>

            <div className="content-section">
              <h2>Discovery & Process Audit</h2>
              <p>
                Before redesigning the workflow, I conducted an operational review of the existing sales process.
              </p>
              <p>
                The analysis focused on:<br />
                • Follow-up cadence and ownership<br />
                • Lead source tracking<br />
                • Revenue opportunity management<br />
                • Pipeline progression visibility<br />
                • Conversion bottlenecks<br />
                • Lead prioritisation systems<br />
                • Referral workflows<br />
                • Lost-deal tracking<br />
                • Handoff procedures between sales and operations
              </p>
              <p>
                This surfaced a key insight: The problem was not the absence of a CRM. The issue was that the existing workflow did not align with how the sales team actually operated.
              </p>
            </div>

            <div className="content-section">
              <h2>Solution Design</h2>
              <p className="solution-description">
                Rather than replacing existing tools, I designed a lightweight operational layer on top of Zoho.
              </p>

              <div className="solution-item">
                <h3>Centralised Lead Tracker</h3>
                <p>
                  • Lead categorisation and priority mapping<br />
                  • Meeting summaries and contextual notes<br />
                  • Structured action tracking<br />
                  • Multi-stage follow-up scheduling<br />
                  • Revenue opportunity tagging
                </p>
                <p>
                  Each interaction could be updated in seconds through a simplified spreadsheet interface, reducing multiple CRM clicks into quick single-cell updates.
                </p>
              </div>

              <div className="solution-item">
                <h3>Automated Follow-Up Engine</h3>
                <p>
                  Using Google Apps Script and workflow logic, the system automatically:<br />
                  • Validated follow-up schedules<br />
                  • Identified due follow-ups<br />
                  • Surfaced overdue actions<br />
                  • Generated daily email summaries<br />
                  • Included context and next actions
                </p>
                <p>
                  Each morning, the sales team received a prioritised list of outreach actions rather than manually checking CRM records.
                </p>
              </div>

              <div className="solution-item">
                <h3>Sales Reporting & Pipeline Intelligence</h3>
                <p>
                  Built weekly dashboards and reporting infrastructure using Zoho Analytics:
                </p>
                <p>
                  Tracked metrics including:<br />
                  • New leads generated<br />
                  • Active revenue opportunities<br />
                  • Deal pipeline movement<br />
                  • Lead category breakdown<br />
                  • Stage progression<br />
                  • Weekly additions<br />
                  • Deal-of-the-month visibility
                </p>
                <p>
                  A parallel pipeline management workflow tracked opportunities across multiple deal stages and visualised movement through the funnel.
                </p>
              </div>

              <div className="solution-item">
                <h3>Sales → Operations Handoff SOP</h3>
                <p>
                  Once a lead converted:<br />
                  • Designed onboarding SOP documentation<br />
                  • Standardised ticket formats<br />
                  • Created structured information requirements<br />
                  • Reduced handoff ambiguity between teams
                </p>
                <p>
                  This ensured smoother onboarding and reduced operational delays.
                </p>
              </div>
            </div>

            <div className="content-section">
              <h2>Outcomes</h2>
              <ul className="outcomes-list">
                <li>Reduced administrative friction during lead capture</li>
                <li>Improved follow-up consistency and accountability</li>
                <li>Increased visibility into active opportunities</li>
                <li>Standardised sales tracking across the lead lifecycle</li>
                <li>Built a scalable workflow connecting sales and operations</li>
              </ul>
            </div>

            <div className="content-section takeaway">
              <h2>Key Takeaway</h2>
              <p>
                Operational systems fail when they force people to change natural working behaviour. Designing workflows around how teams already operate often creates better adoption than adding more process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudyLeadLifecycle;
