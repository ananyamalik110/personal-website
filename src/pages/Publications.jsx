import './Publications.css';

function Publications() {
  const publications = [
    {
      id: 1,
      title: 'Your Guide to Finding Great Cryptocurrency Investments',
      description:
        'A comprehensive guide covering research methodologies for evaluating crypto projects, including whitepaper analysis, team verification, VC backing, tokenomics indicators, market capitalization, and community assessment.',
      category: 'Investment Research',
      date: 'June 2024',
      readTime: '4 min read',
      link: 'https://medium.com/@ananyamalik0309/your-guide-to-finding-great-cryptocurrency-investments-92bb285d5737',
    },
    {
      id: 2,
      title: 'Ethereum Token Economics',
      description:
        'An exploration of Ethereum\'s tokenomics covering its uncapped supply, the historic transition from Proof of Work to Proof of Stake, smart contract utility, governance through EIPs, and the factors influencing its market value.',
      category: 'Blockchain',
      date: 'October 2023',
      readTime: '4 min read',
      link: 'https://medium.com/@ananyamalik0309/ethereum-token-economics-1d6c44c49aa3',
    },
    {
      id: 3,
      title: 'Impermanent Loss Calculation Explained',
      description:
        'A detailed explanation of the risk liquidity providers encounter in AMM pools, including calculation methods and practical implications for DeFi participants.',
      category: 'DeFi',
      date: 'October 2023',
      readTime: '4 min read',
      link: 'https://medium.com/@ananyamalik0309/impermanent-loss-calculation-explained',
    },
    {
      id: 4,
      title: 'Automated Market Maker Pools',
      description:
        'Understanding how AMM pools work in decentralized finance, covering liquidity provision, price determination through demand and supply dynamics, and the concept of impermanent loss.',
      category: 'DeFi',
      date: 'September 2023',
      readTime: '4 min read',
      link: 'https://medium.com/@ananyamalik0309/automated-market-maker-pools',
    },
    {
      id: 5,
      title: 'Bitcoin Token Economics',
      description:
        'An analysis of Bitcoin\'s economic model examining its fixed supply cap, halving mechanism, mining rewards, transaction fees, and the various market factors that influence BTC price movements.',
      category: 'Cryptocurrency',
      date: 'September 2023',
      readTime: '6 min read',
      link: 'https://medium.com/@ananyamalik0309/bitcoin-token-economics',
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
            {publications.map((publication) => (
              <a
                key={publication.id}
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="publication-card"
              >
                <div className="publication-category">{publication.category}</div>
                <h3 className="publication-title">{publication.title}</h3>
                <p className="publication-description">{publication.description}</p>
                <div className="publication-meta">
                  <span className="publication-date">{publication.date}</span>
                  <span className="publication-divider">•</span>
                  <span className="publication-read-time">{publication.readTime}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Publications;
