import { Headline } from "../../Assets/SectionHead/SectionHead";
import InvestorCard from "./InvestorCard/InvestorCard";
import "./InvestorSection.scss";

const investors = [
  {
    id: 1,
    logo: "images/nasdaq-logo.webp",
  },
  {
    id: 2,
    logo: "images/allen-company-logo.webp",
  },
  {
    id: 3,
    logo: "images/bofa-logo.webp",
  },
  {
    id: 4,
    logo: "images/BNP-Paribas-logo.webp",
  },
  {
    id: 5,
    logo: "images/citi-logo.webp",
  },
  {
    id: 6,
    logo: "images/DRW-logo.webp",
  },
  {
    id: 7,
    logo: "images/goldman-sachs-logo.webp",
  },
  {
    id: 8,
    logo: "images/hijojopartners-logo.svg",
  },
  {
    id: 9,
    logo: "images/morgan-stanley-logo.webp",
  },
  {
    id: 10,
    logo: "images/UBS-logo.webp",
  },
  {
    id: 11,
    logo: "images/wells-fargo-logo.webp",
  },
];
export default function InvestorSection() {
  return (
    <section className="section--round section__investor">
      <div className="section__container">
        <Headline headline="Our Investors + Partners." />
        <ul className="investors">
          {investors.map((investor) => (
            <InvestorCard key={investor.id} logo={investor.logo} />
          ))}
        </ul>
      </div>
    </section>
  );
}
