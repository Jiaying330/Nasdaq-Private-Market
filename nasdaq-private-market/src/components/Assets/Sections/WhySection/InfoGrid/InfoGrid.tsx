import "./InfoGrid.scss";
import { SvgIconComponent } from "@mui/icons-material";

type propType = {
  icon: SvgIconComponent;
  heading: string;
  infos: string[];
};

export default function InfoGrid(prop: propType) {
  return (
    <div className="info">
      <div className="section__icon">
        <prop.icon />
      </div>
      <h4>{prop.heading}</h4>
      <ul className="info__content">
        {prop.infos.map((info) => (
          <li>{info}</li>
        ))}
      </ul>
    </div>
  );
}
