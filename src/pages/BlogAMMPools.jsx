import { Link } from 'react-router-dom';
import './BlogPost.css';

function BlogAMMPools() {
  return (
    <div className="blog-post">
      <section className="blog-header">
        <div className="container">
          <Link to="/publications" className="back-link">
            Back to Publications
          </Link>
          <div className="blog-header-content">
            <div className="blog-meta">
              <span className="blog-category">DeFi</span>
              <span className="blog-divider">•</span>
              <span className="blog-read-time">4 min read</span>
            </div>
            <h1 className="blog-title">
              Automated Market Maker Pools
            </h1>
            <p className="blog-intro">
              Understanding how AMM pools work in decentralized finance, covering liquidity provision, price determination through demand and supply dynamics, and the concept of impermanent loss.
            </p>
          </div>
        </div>
      </section>

      <section className="blog-body">
        <div className="container">
          <div className="blog-content">
            <div className="content-section">
              <p>
                In the world of asset trading, the prices of assets are traditionally determined by the demand and supply dynamics. Both the participants, buyers and sellers, place bid and ask orders. Trade gets executed when the compatible orders align. This approach is known as order-book trading.
              </p>
              <p>
                An alternate approach called Automated Market Maker (AMM) Pool Trading got popularized in 2018 when Hayden Adams developed the first AMM-based decentralized exchange protocol called Uniswap. Their innovative approach led to the widespread adoption of AMM pool trading in the DeFi ecosystem.
              </p>
            </div>

            <div className="content-section">
              <h2>So how does AMM Pool Trading work?</h2>
              <p>
                Instead of buyers and sellers interacting with each other, all the assets are traded against a pool. The entire process is automated without the need for any intermediary.
              </p>
              <p>
                To understand the working, it is important to understand 3 components:
              </p>
              <ol className="amm-components-list">
                <li>Liquidity Pools</li>
                <li>Liquidity Providers</li>
                <li>Mathematical Algorithms</li>
              </ol>
            </div>

            <div className="content-section">
              <h2>What are Liquidity Pools?</h2>
              <p>
                A Liquidity Pool is like a reservoir of two assets. In other words, they are smart contracts where cryptographic tokens are locked in.
              </p>
              <p>
                Liquidity Pools also have two participants; Liquidity Providers and Traders (people who use the pool)
              </p>
              <p>
                The Liquidity Pools are created and managed by the Liquidity Providers. They deposit their tokens in the pool and receive 'Liquidity Provider Tokens' or LP Tokens which represent the share, of the provider, in the pool. Anyone can become a Liquidity Provider by just depositing their tokens in the pool.
              </p>
              <p>
                A Liquidity Provider has to deposit the tokens in pairs. They earn fees from the traders who use the pool. The fees earned are proportional to the amount of liquidity provided.
              </p>
              <p>
                On the other hand, the traders use Liquidity Pools to swap one cryptographic token in exchange for the other token. How much of a token can a trader get for the other token is determined using mathematical algorithms.
              </p>
            </div>

            <div className="content-section">
              <h2>How do Liquidity Pools Work?</h2>
              <p>
                Liquidity pools have special algorithms to determine the prices of the assets traded.
              </p>
              <p>
                One of the most common algorithms is the 'Constant Product Market Maker' model. Here, the product of the quantities of both the assets in the pools needs to be constant. If the quantity of Asset A increases in a pool, the quantity of Asset B decreases proportionally to keep the product constant.
              </p>
              <p>
                Let's understand this better using an example:
              </p>
              <div className="blog-image-container">
                <img
                  src="/images/amm1.webp"
                  alt="AMM Pool Example - Token quantities before and after trade"
                  className="blog-image"
                />
              </div>
              <p>
                The 'Constant Product Market Maker' Formula (x*y=k) can be represented on a graph:
              </p>
              <div className="blog-image-container">
                <img
                  src="/images/amm2.webp"
                  alt="Constant Product Market Maker Formula Graph"
                  className="blog-image"
                />
              </div>
              <p>
                Point A represents the quantities of the assets before the trade.
              </p>
              <p>
                Point B represents them after the trade.
              </p>
              <p>
                Now, let's consider the price of these two tokens. The price is determined by the ratio of the tokens in the pool.
              </p>
              <div className="blog-image-container">
                <img
                  src="/images/amm3.webp"
                  alt="Token price calculation based on pool ratios"
                  className="blog-image"
                />
              </div>
            </div>

            <div className="content-section">
              <h2>Impermanent Loss and Arbitrage</h2>
              <p>
                The Liquidity Providers face a certain type of risk known as Impermanent Loss. This happens when there is a divergence between the price of their assets in the pool and the current price of the asset in the market.
              </p>
              <p>
                Consider the above example again. Suppose a liquidity provider deposited 15 Bitcoins in the pool when the value of each Bitcoin was 0.5 XRP
              </p>
              <p>
                After the trade, the value had gotten reduced to 0.32 XRP and the market value of Bitcoin is close to 0.51 XRP. The loss per Bitcoin to the liquidity provider of Bitcoin is the impermanent loss.
              </p>
              <p>
                A new trader realizes that the price of Bitcoin in this trading pool is lower as compared to other pools and the market value. He sees this as an arbitrage opportunity. Let's assume the trader swaps 110 XRP coins for Bitcoins.
              </p>
              <div className="blog-image-container">
                <img
                  src="/images/amm4.webp"
                  alt="Arbitrage opportunity in AMM pool"
                  className="blog-image"
                />
              </div>
              <p>
                Now, the price of Bitcoin comes close to the market value again due to arbitrage. Arbitrageurs constantly monitor many pools to identify price discrepancies and earn profits.
              </p>
              <p>
                Therefore, Arbitrageurs help in removing the impermanent losses to liquidity providers. However, if a liquidity provider withdraws their tokens from the pool when the prices are lower, it can result in permanent losses.
              </p>
            </div>

            <div className="content-section">
              <h2>Conclusion</h2>
              <p>
                Automatic Market Makers have a significant role in the growth and expansion of decentralized finance (DeFi). They empower continuous asset trading without reliance on intermediaries, promoting market liquidity and efficiency through increased participation levels.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogAMMPools;
