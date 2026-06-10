import { Link } from 'react-router-dom';
import './BlogPost.css';

function BlogImpermanentLoss() {
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
              Impermanent Loss Calculation Explained
            </h1>
            <p className="blog-intro">
              A detailed explanation of the risk liquidity providers encounter in AMM pools, including calculation methods and practical implications for DeFi participants.
            </p>
          </div>
        </div>
      </section>

      <section className="blog-body">
        <div className="container">
          <div className="blog-content">
            <div className="content-section">
              <p>
                The Liquidity Providers in AMM Pools encounter a certain risk when depositing their tokens into any pool, which is known as Impermanent Loss. It happens when the value of the tokens in the pool deviates from their market value.
              </p>
              <p>
                Let's delve into understanding the calculation of impermanent loss using a practical example.
              </p>
            </div>

            <div className="content-section">
              <h2>The Scenario</h2>
              <p>
                Imagine an individual named Mark, who holds 1 ETH and 100 USDT.
              </p>
              <p>
                Mark now has two alternatives:
              </p>
              <ol className="alternatives-list">
                <li>He retains both the tokens in his wallet.</li>
                <li>He deposits his tokens in an ETH/USDT Pool to own a stake in that pool.</li>
              </ol>
              <p>
                For simplicity's sake, let's assume the prices of these tokens at time T₁ as:
              </p>
              <ul className="price-list">
                <li>1 ETH = $100</li>
                <li>1 USDT = $1</li>
              </ul>
              <p className="formula-text">
                Therefore at time T₁: <strong>1 ETH = 100 USDT</strong>
              </p>
              <p>
                A month later, the price of ETH had risen to $300, while the price of USDT remained unchanged.
              </p>
              <p className="formula-text">
                Therefore at time T₂: <strong>1 ETH = 300 USDT</strong>
              </p>
            </div>

            <div className="content-section">
              <h2>Scenario 1: Holding Tokens in Wallet</h2>
              <p>
                Let's consider the first scenario where Mark held his tokens in his wallet.
              </p>
              <p>
                Due to the increase in the value of ETH, the overall value of Mark's assets becomes equal to:
              </p>
              <p className="calculation-text">
                1($300) + 100($1) = <strong>$400</strong>
              </p>
            </div>

            <div className="content-section">
              <h2>Scenario 2: Providing Liquidity to Pool</h2>
              <p>
                Now let's explore the scenario where he had added 1 ETH and 100 USDT to an ETH/USDT pool.
              </p>
              <p>
                The pool uses the <strong>'Constant Product Formula'</strong>. It means that the product of the quantities of both assets in the pool is equal at all times. For simplification, we assume there are no trading fees in this pool.
              </p>
              <p>
                After Mark's deposits, the pool has 10 ETH and 1,000 USDT.
              </p>
              <p>
                Hence, Mark's stake in this pool is 10%, entitling him to 10% of the pool's profits or losses.
              </p>
              <p className="formula-text">
                K = 10 × 1,000 (Quantity of ETH × Quantity of USDT)
              </p>
              <p className="formula-text">
                <strong>K = 10,000</strong>
              </p>
              <p>
                Given the increase in the price of ETH, arbitrageurs would have seized the opportunity to purchase discounted ETH from this pool.
              </p>
              <p>
                Let's assume they purchased 'X' quantity of ETH and, in return, added 'Y' quantity of USDT to the pool.
              </p>
              <p>
                Therefore at time T₂:
              </p>
              <ul className="price-list">
                <li>Quantity of ETH in the pool: (10 - X)</li>
                <li>Quantity of USDT in the pool: (1,000 + Y)</li>
              </ul>
              <p>
                Since the product of the quantities of both assets remains constant within the pool:
              </p>
              <p className="formula-text">
                (10 - X) × (1,000 + Y) = 10,000 — — — — — (I)
              </p>
              <p>
                The arbitrageurs would exchange their USDT for ETH until the ratio of ETH to USDT equals the market price, i.e. 1 ETH = 300 USDT.
              </p>
              <p>
                Therefore we can say:
              </p>
              <p className="formula-text">
                (10 - X) / (1000 + Y) = 1/300
              </p>
              <p className="formula-text">
                (1000 + Y) = 300(10 - X) — — — — — (II)
              </p>
              <p>
                By solving (I) and (II):
              </p>
              <ul className="price-list">
                <li>X = 4.23</li>
                <li>Y = 732.8</li>
              </ul>
              <p className="formula-text">
                Therefore at T₂: The pool has <strong>5.77 ETH and 1732.8 USDT</strong>
              </p>
              <p>
                The value of the pool at T₂:
              </p>
              <p className="calculation-text">
                = (5.77)$300 + (1732.8)$1
              </p>
              <p className="calculation-text">
                = <strong>$3463.8</strong>
              </p>
              <p>
                Mark's stake in the pool is 10%
              </p>
              <p className="calculation-text">
                Therefore the value of his assets = 10% of $3463.8 = <strong>$346.38</strong>
              </p>
            </div>

            <div className="content-section">
              <h2>Calculating Impermanent Loss</h2>
              <p>
                Now let's compare the two values:
              </p>
              <ul className="comparison-list">
                <li>Value of Mark's assets if he hadn't provided liquidity = <strong>$400</strong></li>
                <li>Value of Mark's assets if had provided liquidity = <strong>$346.38</strong></li>
              </ul>
              <p>
                The difference in these values is the impermanent loss of Mark.
              </p>
              <p className="calculation-text">
                Impermanent Loss = 400 - 346.38 = <strong>$53.62</strong>
              </p>
              <p className="calculation-text">
                Impermanent Loss Percentage = (53.62 / 400) × 100
              </p>
              <p className="calculation-text">
                Therefore, the <strong>IL Percentage = 13.4%</strong>
              </p>
            </div>

            <div className="content-section">
              <h2>The General Formula</h2>
              <p>
                We can now encapsulate this entire calculation in a single formula.
              </p>
              <p>
                We can calculate the quantities of both assets in a pool directly using the price ratio of the assets and the constant product, denoted by K.
              </p>
              <div className="formula-box">
                <p className="formula-text">R = Price of Asset 1 in terms of Asset 2</p>
                <p className="formula-text">Quantity of Asset 1 = (K / R)^1/2</p>
                <p className="formula-text">Quantity of Asset 2 = (K × R)^1/2</p>
              </div>
              <p>
                Let's utilize this formula to determine the quantities of both assets in the pool directly at T₂.
              </p>
              <p className="formula-text">
                R at T₂ = 300 (Since 1 ETH = 300 USDT)
              </p>
              <p className="formula-text">
                K = 10,000
              </p>
              <p>
                <strong>Quantity of ETH (Asset A)</strong>
              </p>
              <p className="calculation-text">
                = (10,000 / 300)^1/2
              </p>
              <p className="calculation-text">
                = <strong>5.77</strong>
              </p>
              <p>
                <strong>Quantity of USDT (Asset B)</strong>
              </p>
              <p className="calculation-text">
                = (10,000 × 300)^1/2
              </p>
              <p className="calculation-text">
                = <strong>1732.05</strong>
              </p>
              <p>
                Now we can calculate the value of Mark's share in the Pool and calculate the Impermanent Loss.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogImpermanentLoss;
