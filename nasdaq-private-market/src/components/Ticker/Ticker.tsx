import "./Ticker.scss";
import { tickerItems } from "../../assets/tickerItems";
import TickerItem from "./TickerItem/TickerItem";

export default function Ticker() {
  return (
    <>
      <section className="ticker">
        <div className="ticker__container">
          {tickerItems.map((tickerItem) => (
            <TickerItem key={tickerItem.id} item={tickerItem} />
          ))}
        </div>
      </section>
      <div className="disclaimer">
        *Valuation represents the estimated valuation from a company’s last
        funding round, derived from any combination of sources such as company,
        state, or federal filings and press releases.
      </div>
    </>
  );
}
