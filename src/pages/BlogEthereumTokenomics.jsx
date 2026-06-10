import { Link } from 'react-router-dom';
import './BlogPost.css';

function BlogEthereumTokenomics() {
  return (
    <div className="blog-post">
      <section className="blog-header">
        <div className="container">
          <Link to="/publications" className="back-link">
            Back to Publications
          </Link>
          <div className="blog-header-content">
            <div className="blog-meta">
              <span className="blog-category">Blockchain</span>
              <span className="blog-divider">•</span>
              <span className="blog-read-time">4 min read</span>
            </div>
            <h1 className="blog-title">
              Ethereum Token Economics
            </h1>
            <p className="blog-intro">
              An exploration of Ethereum's tokenomics covering its uncapped supply, the historic transition from Proof of Work to Proof of Stake, smart contract utility, governance through EIPs, and the factors influencing its market value.
            </p>
          </div>
        </div>
      </section>

      <section className="blog-body">
        <div className="container">
          <div className="blog-content">
            <div className="content-section">
              <p>
                In 2014, the Ethereum blockchain was launched to overcome the limitations of existing blockchains, particularly Bitcoin. The most distinct feature of the Ethereum Blockchain was its diverse use cases. Ethereum enabled the creation of smart contracts and decentralized applications (DApps).
              </p>
              <p>
                The Tokenonomics of Ethereum is responsible for making it the second-largest cryptocurrency by market capitalization and close competition to Bitcoin.
              </p>
              <p>
                The five important aspects of Ethereum Token Economics are:
              </p>
              <ol className="ethereum-aspects">
                <li>Supply of Ethereum</li>
                <li>Consensus Mechanism</li>
                <li>Utility</li>
                <li>Governance</li>
                <li>Market-Driven value</li>
              </ol>
            </div>

            <div className="content-section">
              <h2>Supply of Ethereum</h2>
              <p>
                The supply of Ethereum is not capped like Bitcoin. When Ethereum was launched in 2014, a crowdfunding model was used to raise financial resources for development. Tokens were distributed to all the contributors in exchange for their funds.
              </p>
              <p>
                During the Initial Coin Offering (ICO), 60 Million ETH were sold to early investors and supporters in July 2014. 12 Million ETH were then sold to the public at a slightly higher price.
              </p>
              <p>
                A part of these funds raised were allocated towards a 'Development Fund' and 'Ethereum Foundation' for support and growth of the Ethereum ecosystem.
              </p>
              <p>
                The current circulating supply of Ethereum is a little over 120 million.
              </p>
            </div>

            <div className="content-section">
              <h2>Consensus Mechanism</h2>
              <p>
                One of the most significant upgrades in the Ethereum ecosystem was its transformation to 'Ethereum 2.0'
              </p>
              <p>
                During this transition in September 2022, Ethereum's consensus mechanism was upgraded from Proof of Work (PoW) mechanism to Proof of Stake (PoS).
              </p>
              <p>
                When Ethereum used the PoW Consensus Mechanism, new tokens (block reward) were issued to the miner who solved the cryptographic puzzle first and added the block to the chain.
              </p>
              <p>
                The users who executed new transactions paid two types of fees- the base fee and the optional fee. The base fee was paid to include the transaction in a block and if a user wanted to prioritize their transaction, they paid the optional fee.
              </p>
              <p>
                The base fee was burned and removed from the supply and the optional fee went to the miner who added that transaction to the chain. The base fees reduced the supply of Ethereum whereas the optional fee and block reward increased the supply.
              </p>
              <p>
                The rate of new tokens entering the circulation was more than the tokens exiting it.
              </p>
              <p>
                As a result, the token supply was inflationary.
              </p>
              <p>
                The switch to PoS solved this problem.
              </p>
              <p>
                In the PoS Consensus Mechanism, miners are replaced with validators.
              </p>
              <p>
                To become a validator, a user has to stake 32 ETH in a smart contract.
              </p>
              <p>
                The validators take turns to propose the block and the number of turns a validator gets is proportional to the amount they have staked. When a validator proposes a block, all other validators verify it, and once consensus is achieved among all validators, the block gets added to the chain and the validator gets his reward.
              </p>
              <p>
                This transition reduced the issuance rate of Ethereum drastically. In the PoW Mechanism, miners were issued approximately 13,000 ETH/day.
              </p>
              <p>
                The validators are issued approximately 1,700 ETH/day (based on about 14 million total ETH staked)
              </p>
              <p>
                The Proof of Stake mechanism offers numerous additional benefits:
              </p>

              <h3>More Secure</h3>
              <p>
                PoS offers greater network security as compared to a PoW Mechanism. If a validator acts maliciously, his stakes ETH gets slashed. Therefore, the chances of a 51% attack are lower because controlling 51% of the staked ETH is very costly.
              </p>

              <h3>Environmentally Sustainable</h3>
              <p>
                PoS eliminates hardware power required to verify transactions and isn't energy-intensive, thereby reducing the carbon footprint substantially.
              </p>

              <h3>A higher degree of Participation</h3>
              <p>
                The capital required to become a validator in the Proof of Stake (PoS) mechanism is generally lower than that needed to become a miner in a Proof of Work (PoW) mechanism, as miners have to invest in costly hardware.
              </p>

              <h3>Greater Scalability</h3>
              <p>
                The block confirmation time is lesser in PoS which makes the blockchain more resource-efficient and secure.
              </p>
            </div>

            <div className="content-section">
              <h2>Utility</h2>
              <p>
                Utility in the context of a cryptographic token refers to the practical value or usefulness of that token. Ethereum serves as much more than just a medium of exchange; it has a wide range of use cases. Crucially, Ethereum is required for interacting with smart contracts on the network.
              </p>
              <p>
                Here is an excerpt from the book "Mastering Ethereum" that elaborates on the diverse use cases of a token.
              </p>
              <div className="blog-image-container">
                <img
                  src="/images/ethereum-token-use-cases.webp"
                  alt="Token use cases from Mastering Ethereum book"
                  className="blog-image"
                />
              </div>
            </div>

            <div className="content-section">
              <h2>Governance</h2>
              <p>
                Changes and upgrades to the Ethereum network can be brought about through a process of voting and reaching consensus. Diverse stakeholders in the network can suggest improvements by submitting Ethereum Improvement Proposals (EIPs). The community thoroughly discusses these proposals and carries out votes to ascertain their support or opposition to the suggested upgrades. The Ethereum community plays an active role in both overseeing the platform's management and executing protocol upgrades.
              </p>
            </div>

            <div className="content-section">
              <h2>Market-Driven Value</h2>
              <p>
                The following factors influence the price of Ethereum:
              </p>
              <ul className="market-factors-list">
                <li>Demand and Supply</li>
                <li>Investor Sentiment</li>
                <li>Macroeconomic Conditions</li>
                <li>Regulatory Changes</li>
                <li>Global Events</li>
                <li>Price movements of Bitcoin</li>
              </ul>
              <p>
                You can find a comprehensive exploration of how these factors impact prices in my article on "Bitcoin Token Economics."
              </p>
            </div>

            <div className="content-section">
              <h2>Conclusion</h2>
              <p>
                Bitcoin currently maintains its dominant position in the market with a market share of 47%. However, Ethereum's distinct features, such as the ability to create smart contracts and decentralized applications (DApps), its advantages in scalability and flexibility, and its token economics, position it as a formidable competitor to Bitcoin.
              </p>
              <p>
                With Ethereum's ongoing efforts to address scalability challenges and improve its network, it has the potential to become an even stronger contender in the blockchain space. It is not out of the realm of possibility that Ethereum could surpass Bitcoin as the most popular blockchain in the future.
              </p>
              <p>
                The competition and evolution in the cryptocurrency and blockchain industry are dynamic, and market dynamics can shift rapidly. The future will largely depend on how both Bitcoin and Ethereum adapt to changing demands, scalability needs, and emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogEthereumTokenomics;
