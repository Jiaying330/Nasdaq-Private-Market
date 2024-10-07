import "./GridItem2.scss";
import { dropdown2Item } from "../../../../assets/navbar";
export default function GridItem2({
  heading,
  items,
}: {
  heading: string;
  items: dropdown2Item[];
}) {
  return (
    <div className="grid__item--2">
      <div className="item__title">{heading}</div>
      <ul className="item__list">
        {items.map((item) => {
          return (
            <li className="item">
              {<item.icon />}
              <div className="item__info">
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
