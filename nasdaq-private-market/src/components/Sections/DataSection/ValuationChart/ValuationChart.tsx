import "./ValuationChart.scss";
import { valuations } from "../../../../assets/datas";

export default function ValuationChart() {
  function getHeight(value: string) {
    const height = parseInt(value.slice(0, -1)) * 1.6;
    return height + "%";
  }
  return (
    <ul className="valuation__chart">
      {valuations.map((valuation) => (
        <li key={valuation.id}>
          {valuation.value}
          <strong style={{ height: `${getHeight(valuation.value)}` }}></strong>
          <p>{valuation.label}</p>
        </li>
      ))}
    </ul>
  );
}
