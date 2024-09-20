import "./ClientCard.scss";
import { clientItem } from "../../../../assets/clientItems";

export default function ClientCard({ client }: { client: clientItem }) {
  return (
    <div className="client-card">
      <img src={client.image} alt="logo" />
      <h6>{client.name}</h6>
      <p>{client.industry}</p>
      <div className="pill">{client.country}</div>
    </div>
  );
}
