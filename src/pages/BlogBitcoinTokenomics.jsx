import { Link } from 'react-router-dom';
import './BlogPost.css';

function BlogBitcoinTokenomics() {
  return (
    <div className="blog-post">
      <section className="blog-header">
        <div className="container">
          <Link to="/publications" className="back-link">
            Back to Publications
          </Link>
          <div className="blog-header-content">
            <div className="blog-meta">
              <span className="blog-category">Cryptocurrency</span>
              <span className="blog-divider">•</span>
              <span className="blog-read-time">6 min read</span>
            </div>
            <h1 className="blog-title">
              Bitcoin Token Economics
            </h1>
            <p className="blog-intro">
              An analysis of Bitcoin's economic model examining its fixed supply cap, halving mechanism, mining rewards, transaction fees, and the various market factors that influence BTC price movements.
            </p>
          </div>
        </div>
      </section>

      <section className="blog-body">
        <div className="container">
          <div className="blog-content">
            <div className="content-section">
              <p>
                Token economics is the study of the economic characteristics of a cryptographic token to understand the factors that affect the price, demand, and supply of a token. The tokenomics of a project is one of the most important factors responsible for the success of the project. A project with well-designed tokenomics performs better than others and the value of the token strengthens in the long run. Therefore, tokenomics becomes an important component to consider before making a judgment about a project.
              </p>
              <p>
                Let's take a look at the tokenomics of the first cryptocurrency ever created. Bitcoin was created in 2009 and over the years, many new projects have come up but Bitcoin is still the market dominator with a market share of 47%. Consequently, the price movements of Bitcoin often have an impact on the entire cryptocurrency market, and its achievements may be considered as a performance indicator for the entire market. All of this makes its token economics of great significance.
              </p>
              <p>
                To understand Bitcoin Tokenomics, we consider the following aspects:
              </p>
              <ol className="bitcoin-aspects-list">
                <li>Total Supply of Bitcoin</li>
                <li>Mining Rewards</li>
                <li>Transaction Fees</li>
                <li>Market-driven value of Bitcoin</li>
              </ol>
            </div>

            <div className="content-section">
              <h2>Bitcoin Supply</h2>
              <p>
                An interesting feature of Bitcoin is that it has a limited supply. The supply is capped at 21 million by its founders and is encoded in Bitcoin's source code.
              </p>
              <p>
                Let's understand why it's capped at exactly 21 million.
              </p>
              <p>
                New Bitcoin is only created as block rewards — whenever a block is mined.
              </p>
              <p>
                According to the Bitcoin Protocol, the block time is 10 minutes, the miner who mines the block first gets the reward, and the block rewards are halved every 2,10,000 blocks.
              </p>
              <p>
                The initial block reward — i.e. the block reward on the first 2,10,000 blocks was 50 BTC.
              </p>
              <p>
                The reward on the next 2,10,000 blocks was halved and was 25 BTC.
              </p>
              <p>
                Therefore, the supply of Bitcoin can mathematically be given by:
              </p>
              <div className="blog-image-container">
                <img
                  src="/images/btc1.webp"
                  alt="Bitcoin supply formula part 1"
                  className="blog-image"
                />
              </div>
              <div className="blog-image-container">
                <img
                  src="/images/btc2.webp"
                  alt="Bitcoin supply formula part 2"
                  className="blog-image"
                />
              </div>
            </div>

            <div className="content-section">
              <h2>Mining Rewards / Block Rewards</h2>
              <p>
                The Bitcoin network uses the Proof of Work (PoW) consensus mechanism to validate transactions and add new blocks to the blockchain. The miner who successfully mines the block first is rewarded with newly minted bitcoins in the 'Coinbase transaction' which is the first transaction in a block. This mechanism ensures the security of the network.
              </p>
              <p>
                As stated earlier, the block rewards are halved every 2,10,000 blocks which is approximately 4 years. Decreasing rewards over the years prevents inflationary pressures, and may lead to increased demand and price of the asset. When the block rewards become close to zero, miners would be incentivized solely by transaction fees.
              </p>
            </div>

            <div className="content-section">
              <h2>Transaction Fees</h2>
              <p>
                Along with block rewards, miners also get a fee for including transactions in the block. The transaction fees are calculated by the demand and supply dynamics of the blockspace.
              </p>
              <p>
                The blockspace is the amount of transactions which can be processed in a fixed time. If the demand for blockspace is low, the transaction fees will be low, and vice versa.
              </p>
              <p>
                If a user wants their transaction to be processed on priority, they can pay a higher transaction fee, which acts as an incentive to the miner to include that transaction first.
              </p>
            </div>

            <div className="content-section">
              <h2>Market Driven Value</h2>
              <p>
                Various factors influence the price of bitcoin:
              </p>

              <h3>1. Demand and Supply</h3>
              <p>
                Like all assets, the price is majorly influenced by demand and supply. If the demand for Bitcoin exceeds its supply, the price tends to rise.
              </p>
              <p>
                In late 2017, Bitcoin started getting a lot of media coverage and hype. Bitcoin's price saw a sharp rise, mainly due to increased demand for bitcoins due to Investor FOMO.
              </p>
              <div className="blog-image-container">
                <img
                  src="/images/btc3.webp"
                  alt="Bitcoin price surge in 2017"
                  className="blog-image"
                />
              </div>

              <h3>2. Investor Sentiment</h3>
              <p>
                Investor sentiment refers to investors' emotions and overall outlook towards an asset. It can have a significant impact on the price of an asset. Investor sentiments can be understood as FOMO (Fear Of Missing Out) and FUD (Fear, Uncertainty, Doubt).
              </p>
              <p>
                FOMO refers to the feeling when investors think that others are making profitable investments and they are missing out on gains. On the other hand, FUD happens when people spread misleading information and rumors which makes investors sell off their investments hastily. FOMO-driven buying leads to sharp price rises and FUD-driven selling leads to sharp price drops.
              </p>
              <p>
                Let's look at the Terra-Luna crash in May 2022, triggered by the de-peg of UST. It cost investors billions of dollars and led to distress and uncertainty in the entire crypto market.
              </p>
              <p>
                The confidence of people in cryptocurrencies took a hit.
              </p>
              <p>
                As a result, the price of Bitcoin fell drastically.
              </p>
              <div className="blog-image-container">
                <img
                  src="/images/BTC4.webp"
                  alt="Bitcoin price drop after Terra-Luna crash"
                  className="blog-image"
                />
              </div>

              <h3>3. Macroeconomic Conditions</h3>
              <p>
                Macroeconomic conditions like inflation, growth, interest rates, and fiscal policies have a significant impact on the prices of various assets like the stock market, bonds, and even cryptocurrencies.
              </p>
              <p>
                In June 2022, the US Fed raised interest rates by 75 basis points. Increased interest rates mean an increased cost of borrowing. Due to higher interest rates, the dollar's value rises which causes cryptocurrencies and other assets with dollar values to decline. Moreover, during such periods investors opt for less volatile and risky assets, leading to falling demand and prices for cryptocurrencies.
              </p>

              <h3>4. Regulatory Changes</h3>
              <p>
                Regulatory Changes by governments on the use and acceptance of Bitcoin have a direct impact on the prices.
              </p>
              <p>
                When China imposed a ban on Bitcoin trading and mining in September 2021, all mining farms in the country had to shut down. As a result, the price of Bitcoin dropped by $10,000 within a month.
              </p>
              <div className="blog-image-container">
                <img
                  src="/images/BTC5.webp"
                  alt="Bitcoin price drop after China ban"
                  className="blog-image"
                />
              </div>
              <p>
                At the same time, El Salvador became the first country to adopt Bitcoin as a legal tender. This brought a lot of media coverage and attention to Bitcoin.
              </p>

              <h3>5. Technological Developments</h3>
              <p>
                Technological Advancements affect the scalability and usability of a cryptocurrency which in turn have positive impacts on prices.
              </p>
              <p>
                U.S. Securities and Exchange Commission approved the first US Bitcoin-linked ETF: the ProShares Bitcoin Strategy ETF (BITO) in October 2021. BITO allows investors indirect exposure to Bitcoins through the futures contract instead of actually buying them on a crypto exchange.
              </p>
              <p>
                As a result, the price of Bitcoin surged and touched new highs.
              </p>
              <div className="blog-image-container">
                <img
                  src="/images/BTC6.webp"
                  alt="Bitcoin price surge after ETF approval"
                  className="blog-image"
                />
              </div>

              <h3>6. Global Events</h3>
              <p>
                Like all assets, cryptocurrencies are also sensitive to global events.
              </p>
              <p>
                The Covid-19 pandemic caused widespread economic instability, resulting in price fluctuations in all asset markets. The prices of all cryptocurrencies, including Bitcoin, fell drastically as people sold off their investments for liquidity.
              </p>

              <h3>7. Elon Musk's Tweets</h3>
              <p>
                A study conducted by NCRI showed that Musk's tweets are powerful enough to cause the values of some cryptocurrencies to rise by as much as 50% in a single day.
              </p>
              <p>
                In May 2021, Elon Musk announced that Tesla had suspended Bitcoin as a payment method for their electric cars for environmental concerns. The price of Bitcoin fell by 10% after the tweet.
              </p>
              <div className="blog-image-container">
                <img
                  src="/images/BTC7.webp"
                  alt="Bitcoin price drop after Elon Musk tweet"
                  className="blog-image-small"
                />
              </div>
            </div>

            <div className="content-section">
              <h2>Conclusion</h2>
              <p>
                Bitcoin continues to be one of the most popular cryptocurrencies, not just because it is a pioneer, but also due to its scarcity-driven token economics. Over the years, many networks have emerged with different token economics, but Bitcoin token economics have stood the test of time. However, there are certain concerns about the sustainability of the network in the future, due to decreasing block rewards. When the rewards get close to zero, miners may be incentivized due to an increase in the value of Bitcoin or the transaction fees may increase in the future. Moreover, it also depends on whether Bitcoin then is used largely as a store of value or just for purchases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogBitcoinTokenomics;
