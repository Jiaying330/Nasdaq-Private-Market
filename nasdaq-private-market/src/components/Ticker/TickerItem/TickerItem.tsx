import "./TickerItem.scss";
import { tickerItem } from "../../../assets/tickerItems";

export default function TickerItem({ item }: { item: tickerItem }) {
  const { name, image, link, valuation } = item;
  return (
    <a href={link} className="ticker__item-link" target="_self">
      <div className="ticker__item">
        <div className="ticker__item-name">
          <img
            src={image}
            alt={`${name} logo`}
            className="ticker__item-image"
          />
          <p>{name}</p>
        </div>
        <div className="ticker__item-info">
          <h6>Valuation</h6>
          <p>{valuation}</p>
        </div>
      </div>
    </a>
  );
}
