import { insight } from "../../../../assets/insights";
import "./InsightCard.scss";

export default function InsightCard({ insight }: { insight: insight }) {
  return (
    <a href={insight.link} className="insight-card">
      <img src={insight.image} alt="" />
      <p>{insight.date}</p>
      <h4>{insight.title}</h4>

      <div>
        By <span className="highlight-link">Nasdaq Private Market</span>
      </div>
    </a>
  );
}
