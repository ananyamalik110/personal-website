import { Link } from 'react-router-dom';
import './Publications.css';

function Publications() {
  const publications = [
    {
      id: 1,
      title: 'Your Guide to Finding Great Cryptocurrency Investments',
      description: 'Research methodologies for evaluating crypto projects and identifying promising opportunities.',
      category: 'Investment Research',
      date: 'June 2024',
      readTime: '4 min read',
      link: '/publications/crypto-investments',
      internal: true,
    },
    {
      id: 2,
      title: 'Impermanent Loss Calculation Explained',
      description: 'Understanding the risks liquidity providers face in AMM pools with practical examples.',
      category: 'DeFi',
      date: 'October 2023',
      readTime: '4 min read',
      link: '/publications/impermanent-loss',
      internal: true,
    },
    {
      id: 3,
      title: 'Automated Market Maker Pools',
      description: 'How AMM pools enable decentralized trading through liquidity provision and price algorithms.',
      category: 'DeFi',
      date: 'September 2023',
      readTime: '4 min read',
      link: '/publications/amm-pools',
      internal: true,
    },
    {
      id: 4,
      title: 'Ethereum Token Economics',
      description: 'Exploring Ethereum\'s supply model, PoS transition, and market dynamics.',
      category: 'Blockchain',
      date: 'October 2023',
      readTime: '4 min read',
      link: '/publications/ethereum-tokenomics',
      internal: true,
    },
    {
      id: 5,
      title: 'Bitcoin Token Economics',
      description: 'Analyzing Bitcoin\'s fixed supply, halving mechanism, and market factors influencing price.',
      category: 'Cryptocurrency',
      date: 'September 2023',
      readTime: '6 min read',
      link: '/publications/bitcoin-tokenomics',
      internal: true,
    },
  ];

  return (
    <div className="publications-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Publications</h1>
          <p className="page-description">
            Research and writing on digital assets, DeFi, and cryptocurrency markets.
          </p>
        </div>
      </section>

      <section className="publications-section">
        <div className="container">
          <div className="publications-list">
            {publications.map((publication) => {
              const CardContent = (
                <>
                  <h3 className="publication-title">{publication.title}</h3>
                  <p className="publication-description">{publication.description}</p>
                </>
              );

              return publication.internal ? (
                <Link
                  key={publication.id}
                  to={publication.link}
                  className="publication-card"
                >
                  {CardContent}
                </Link>
              ) : (
                <a
                  key={publication.id}
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-card"
                >
                  {CardContent}
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Publications;
