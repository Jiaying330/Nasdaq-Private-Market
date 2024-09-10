import "./ServiceSection.scss";
import SectionHead from "../../SectionHead/SectionHead";

export default function ServiceSection() {
  return (
    <section className="section section__service">
      <SectionHead
        headline="Who we Serve."
        title="Secondary Solutions for Companies + People to Transact with Confidence"
      />
      <ul className="section__service-list">
        <li className="section__service-item">
          Private Companies ↓ <span>01</span>
        </li>
        <li className="section__service-item">
          Employees + Shareholders ↓ <span>02</span>
        </li>
        <li className="section__service-item">
          Investors ↓ <span>03</span>
        </li>
        <li className="section__service-item">
          Banks + Brokers ↓ <span>04</span>
        </li>
        <li className="section__service-item">
          Law Firms ↓ <span>05</span>
        </li>
      </ul>
    </section>
  );
}
