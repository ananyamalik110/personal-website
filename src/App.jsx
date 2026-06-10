import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import CaseStudyLeadLifecycle from './pages/CaseStudyLeadLifecycle';
import CaseStudyOnboarding from './pages/CaseStudyOnboarding';
import CaseStudyAISupport from './pages/CaseStudyAISupport';
import Publications from './pages/Publications';
import BlogCryptoInvestments from './pages/BlogCryptoInvestments';
import BlogEthereumTokenomics from './pages/BlogEthereumTokenomics';
import BlogImpermanentLoss from './pages/BlogImpermanentLoss';
import BlogAMMPools from './pages/BlogAMMPools';
import BlogBitcoinTokenomics from './pages/BlogBitcoinTokenomics';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/lead-lifecycle" element={<CaseStudyLeadLifecycle />} />
            <Route path="/case-studies/onboarding" element={<CaseStudyOnboarding />} />
            <Route path="/case-studies/ai-support" element={<CaseStudyAISupport />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/publications/crypto-investments" element={<BlogCryptoInvestments />} />
            <Route path="/publications/ethereum-tokenomics" element={<BlogEthereumTokenomics />} />
            <Route path="/publications/impermanent-loss" element={<BlogImpermanentLoss />} />
            <Route path="/publications/amm-pools" element={<BlogAMMPools />} />
            <Route path="/publications/bitcoin-tokenomics" element={<BlogBitcoinTokenomics />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
