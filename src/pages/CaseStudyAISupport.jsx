import { Link } from 'react-router-dom';
import './CaseStudyDetail.css';

function CaseStudyAISupport() {
  return (
    <div className="case-study-detail">
      <section className="case-study-header">
        <div className="container">
          <Link to="/case-studies" className="back-link">
            Back to Case Studies
          </Link>
          <div className="case-study-header-content">
            <h1 className="case-study-detail-title">
              AI Client Support & Knowledge Automation System
            </h1>
            <div className="case-study-tags">
              <span className="tag">AI</span>
              <span className="tag">OpenAI</span>
              <span className="tag">Automation</span>
            </div>
            <p className="case-study-intro">
              Built a Telegram-based AI assistant with a centralized knowledge base capable of answering client queries, generating responses, and streamlining support workflows.
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
                Designed and developed an AI-powered client support assistant to centralize company knowledge, reduce repetitive queries, and improve access to information across client interactions.
              </p>
              <p>
                The chatbot transformed scattered documentation and FAQs into a searchable conversational system capable of handling support requests, generating communication drafts, and assisting with business conversations.
              </p>
            </div>

            <div className="content-section">
              <h2>The Challenge</h2>
              <p>
                As client conversations increased, a large amount of information remained distributed across documents, FAQs, founder discussions, company material, and internal knowledge sources.
              </p>
              <p>
                Common challenges included:<br />
                • Repetitive client queries<br />
                • Repeated explanation of company information<br />
                • Fragmented knowledge sources<br />
                • Time spent drafting responses<br />
                • Inconsistent communication across interactions
              </p>
              <p>
                Accessing information quickly became increasingly difficult as content volume expanded.
              </p>
            </div>

            <div className="content-section">
              <h2>Discovery & Process Audit</h2>
              <p>
                Rather than treating support as isolated conversations, I approached it as a knowledge infrastructure problem.
              </p>
              <p>
                The objective was to create:<br />
                • Centralized knowledge access<br />
                • Faster client support workflows<br />
                • Standardized responses<br />
                • Communication assistance<br />
                • Scalable information retrieval
              </p>
            </div>

            <div className="content-section">
              <h2>Solution Design</h2>

              <div className="solution-item">
                <h3>AI Knowledge Base Architecture</h3>
                <p>
                  Built a centralized knowledge repository containing:<br />
                  • Company information<br />
                  • Founder information<br />
                  • Roadmap details<br />
                  • Previous client FAQs<br />
                  • Historical support material<br />
                  • Internal documentation
                </p>
                <p>
                  This created a structured source of truth for client interactions.
                </p>
              </div>

              <div className="solution-item">
                <h3>Conversational Support Layer</h3>
                <p>
                  Developed an AI-powered chatbot integrated through Telegram.
                </p>
                <p>
                  The assistant could:<br />
                  • Answer client queries<br />
                  • Retrieve company information<br />
                  • Provide FAQ responses<br />
                  • Draft emails<br />
                  • Generate short pitches<br />
                  • Assist with communication workflows
                </p>
                <p>
                  By combining retrieval and generation capabilities, the system reduced repetitive support effort.
                </p>
              </div>

              <div className="solution-item">
                <h3>Workflow Integration</h3>
                <p>
                  Hosted through Telegram Bot infrastructure to create a lightweight and accessible interface.
                </p>
                <p>
                  The platform allowed users to access information without searching across documents or internal resources.
                </p>
              </div>

              <div className="solution-item">
                <h3>Tech Stack</h3>
                <p>
                  • OpenAI API (GPT)<br />
                  • Telegram Bot integration<br />
                  • AI-powered knowledge retrieval workflows<br />
                  • Custom prompt design<br />
                  • Structured knowledge base architecture
                </p>
              </div>
            </div>

            <div className="content-section">
              <h2>Outcomes</h2>
              <ul className="outcomes-list">
                <li>Reduced repetitive support interactions</li>
                <li>Centralized institutional knowledge</li>
                <li>Improved information accessibility</li>
                <li>Standardized communication quality</li>
                <li>Enabled faster response generation</li>
              </ul>
            </div>

            <div className="content-section takeaway">
              <h2>Key Takeaway</h2>
              <p>
                Information bottlenecks often emerge not because information is unavailable, but because it is difficult to access in the moment it is needed. Structuring knowledge into conversational workflows can significantly reduce operational friction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudyAISupport;
