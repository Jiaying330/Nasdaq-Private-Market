import ArrowButtonUnderlined from "../../../Assets/ArrowButtonUnderlined/ArrowButtonUnderlined";
import "./ActionCell.scss";
import { SvgIconComponent } from "@mui/icons-material";

type propType = {
  icon: SvgIconComponent;
  heading: string;
  link: string;
};
export default function ActionCell(prop: propType) {
  return (
    <div className="action__cell">
      <div className="section__icon">
        <prop.icon />
      </div>
      <div className="action__info">
        <h4>{prop.heading}</h4>
        <ArrowButtonUnderlined text="Learn More" link={prop.link} />
      </div>
    </div>
  );
}
