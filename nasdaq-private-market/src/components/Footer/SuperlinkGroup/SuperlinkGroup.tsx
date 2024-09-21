import "./SuperlinkGroup.scss";

export default function SuperlinkGroup() {
  return (
    <div className="superlinks">
      <div className="menu">
        <a className="menu__title" href="#">
          Who We Serve
        </a>
        <div className="menu__lists">
          <ul className="menu__list">
            <li>
              <a href="#">Private Companies</a>
            </li>
            <li>
              <a href="#">Investors</a>
            </li>
            <li>
              <a href="#">Employee Shareholders</a>
            </li>
            <li>
              <a href="#">Banks + Brokers</a>
            </li>
            <li>
              <a href="#">Law Firms</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="menu">
        <a className="menu__title" href="#">
          Our Products
        </a>
        <div className="menu__lists">
          <ul className="menu__list">
            <li>Settlement Technology</li>
            <li>
              <a href="#">Transfer + Settlement</a>
            </li>
          </ul>
          <ul className="menu__list">
            <li>Data + Analytics</li>
            <li>
              <a href="#">Tape D™: Data (Coming Soon)</a>
            </li>
            <li>
              <a href="#">Company Profiles</a>
            </li>
          </ul>
          <ul className="menu__list">
            <li>Company Platform + Liquidity Programs</li>
            <li>
              <a href="#">Tender Offers</a>
            </li>
            <li>
              <a href="#">Auctions + Capital Introduction</a>
            </li>
            <li>
              <a href="#">Option Extensions, RSUs, M&A + More</a>
            </li>
            <li>
              <a href="#">Pre-Direct Listing Programs</a>
            </li>
          </ul>
          <ul className="menu__list">
            <li>Trading Marketplace</li>
            <li>
              <a href="#">SecondMarket™ Trading Platform</a>
            </li>
            <li>
              <a href="#">Investor Trading Tools</a>
            </li>
            <li>
              <a href="#">Employee Trading: Sell Stock</a>
            </li>
          </ul>
          <ul className="menu__list">
            <li>Enterprise Software</li>
            <li>
              <a href="#">Bank + Broker Technology</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="menu">
        <a href="#" className="menu__title">
          About Us
        </a>
        <div className="menu__lists">
          <ul className="menu__list">
            <li>
              <a href="#">About Nasdaq Private Market</a>
            </li>
            <li>
              <a href="#">Leadership</a>
            </li>
            <li>
              <a href="#">In The News</a>
            </li>
            <li>
              <a href="#">Insights</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
