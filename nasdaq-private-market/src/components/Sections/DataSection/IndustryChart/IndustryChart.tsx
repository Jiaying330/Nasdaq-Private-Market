import "./IndustryChart.scss";
import { industries } from "../../../../assets/datas";

export default function IndustryChart() {
  const endColor = [2, 51, 108];
  const startColor = [170, 208, 252];

  function interpolateColor(start: number[], end: number[], factor: number) {
    return start.map((startValue, index) => {
      return Math.round(startValue + (end[index] - startValue) * factor);
    });
  }

  function getColorForValue(value: string) {
    const normalizedValue = parseInt(value.slice(0, -1)) / 22;
    const color = interpolateColor(startColor, endColor, normalizedValue);
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  }
  return (
    <ul className="industry__chart">
      {industries.map((industry) => (
        <li
          key={industry.id}
          style={{
            height: `calc(${industry.value} - 4px)`,
            backgroundColor: `${getColorForValue(industry.value)}`,
          }}
        >
          <p>{industry.text}</p>
          <p>{industry.value}</p>
        </li>
      ))}
    </ul>
  );
}
