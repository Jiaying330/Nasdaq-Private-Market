import "./PartnersChart.scss";
import { partners } from "../../../../../assets/datas";

export default function PartnersChart() {
  return (
    <>
      <ul className="partners__chart">
        {partners.map((partner) => (
          <li key={partner.id}>
            <p>{partner.label}</p>
            <strong>
              <em style={{ width: `${partner.totalCouncel}` }}>
                <span style={{ width: `${partner.companyCouncel}` }}></span>
              </em>
            </strong>
          </li>
        ))}
      </ul>
      <div className="partners__chart-labels">
        <div className="company-councel">
          <span></span>Company Councel
        </div>
        <div className="buyer-councel">
          <span></span>Buyer Councel
        </div>
      </div>
    </>
  );
}
