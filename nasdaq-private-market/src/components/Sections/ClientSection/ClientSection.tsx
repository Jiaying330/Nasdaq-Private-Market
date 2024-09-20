import { Headline } from "../../Assets/SectionHead/SectionHead";
import "./ClientSection.scss";
import { clientItems } from "../../../assets/clientItems";
import ClientCard from "./ClientCard/ClientCard";

export default function ClientSection() {
  return (
    <section className="section--round section__client">
      <div className="section__container">
        <Headline headline="SELECT COMPANY PROGRAM CLIENTS." />
        <div className="ticker__container">
          <div className="ticker__inner">
            {clientItems.map((clientItem) => (
              <ClientCard client={clientItem} />
            ))}
            {clientItems.map((clientItem) => (
              <ClientCard client={clientItem} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
