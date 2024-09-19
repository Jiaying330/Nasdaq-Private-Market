import ArrowButtonUnderlined from "../../ArrowButtonUnderlined/ArrowButtonUnderlined";
import SectionHead from "../../SectionHead/SectionHead";
import "./DataSection.scss";
import IndustryChart from "./IndustryChart/IndustryChart";
import NetworkChart from "./NetworkChart/NetworkChart";
import PartnersChart from "./PartnersChart/PartnersChart";
import ValuationChart from "./ValuationChart/ValuationChart";

export default function DataSection() {
  return (
    <section className="section section__data">
      <SectionHead
        headline="Powerful Private Market Data."
        title="Access Institutional-Grade Metrics + Analytics"
      />
      <div className="graphs">
        <div className="graphs__col graphs__col--small">
          <div className="partners">
            <h6>Top Referring Law Firms for Private Company Transactions</h6>
            <PartnersChart />
            <ArrowButtonUnderlined text="Explore Law Firm Solutions" link="#" />
          </div>
        </div>
        <div className="graphs__col graphs__col--large">
          <div className="graphs__boxes">
            <div className="graphs__box graphs__box--large">
              <div className="industry">
                <h6>Client Industry Breakdown</h6>
                <IndustryChart />
                <ArrowButtonUnderlined text="Explore Data Solutions" link="#" />
              </div>
            </div>
            <div className="graphs__box graphs__box--small">
              <div className="valuation">
                <h6>Our Recent Client Valuations</h6>
                <ValuationChart />
                <ArrowButtonUnderlined text="Explore Data Solutions" link="#" />
              </div>
            </div>
            <div className="graphs__box graphs__box--small">
              <div className="network">
                <h6>Global Client + Investment Network</h6>
                <NetworkChart />
                <ArrowButtonUnderlined
                  text="Explore Trading Marketplace"
                  link="#"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
