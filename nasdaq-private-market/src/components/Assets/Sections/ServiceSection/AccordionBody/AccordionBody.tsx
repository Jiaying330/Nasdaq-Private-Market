import "./AccordionBody.scss";
import { type accordionItem } from "../../../../../assets/accordionItems";
import ArrowButtonUnderlined from "../../../ArrowButtonUnderlined/ArrowButtonUnderlined";

export default function AccordionBody({
  item,
  active,
}: {
  item: accordionItem;
  active: boolean;
}) {
  const { title, text, image, link } = item;

  return (
    <div className={`accordion__body ${active ? "active" : ""}`}>
      <div className="accordion__content">
        <h3>{title}</h3>
        <p>{text}</p>
        <ArrowButtonUnderlined text="learn more" link={link} />
      </div>
      <div className="accordion__img">
        <img src={image} alt="accordion image" />
      </div>
    </div>
  );
}
