import "./GridItem1.scss";
import { SvgIconComponent } from "@mui/icons-material";

type propType = {
  icon: SvgIconComponent;
  heading: string;
  subtitle: string;
};

export default function GridItem1(prop: propType) {
  return (
    <div className="grid__item--1">
      <prop.icon />
      <div>
        <h6>{prop.heading}</h6>
        <p>{prop.subtitle}</p>
      </div>
    </div>
  );
}
