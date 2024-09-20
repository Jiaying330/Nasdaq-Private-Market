import "./NetworkChart.scss";
import { networks } from "../../../../assets/datas";

export default function NetworkChart() {
  return (
    <ul className="network__chart">
      {networks.map((network) => (
        <li key={network.id}>
          <span>{network.flag}</span>
          {network.country}
        </li>
      ))}
    </ul>
  );
}
