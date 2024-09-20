import "./InvestorCard.scss";

export default function InvestorCard({ logo }: { logo: string }) {
  return (
    <div className="investor-card">
      <img src={logo} alt="logo" className="card__logo" />
    </div>
  );
}
