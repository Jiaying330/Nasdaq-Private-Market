import "./SlideProgressor.scss";

export default function SlideProgressor({
  count,
  currIndex,
  handleNumberOnClick,
}: {
  count: number;
  currIndex: number;
  handleNumberOnClick: (number: number) => void;
}) {
  return (
    <ul className="slide-progressor">
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <li key={i} className={currIndex === i ? "active" : ""}>
            <span onClick={() => handleNumberOnClick(i)}>0{i + 1}</span>
          </li>
        ))}
    </ul>
  );
}
