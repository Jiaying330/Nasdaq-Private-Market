import { useState } from "react";
import "./ServiceSection.scss";
import { accordionItems } from "../../../../assets/accordionItems";
import SectionHead from "../../SectionHead/SectionHead";
import AccordionBody from "./AccordionBody/AccordionBody";

export default function ServiceSection() {
  const [index, setIndex] = useState(-1);

  function handleOnClick(id: number) {
    setIndex((prev) => (prev == id ? -1 : id));
  }

  return (
    <section className="section section__service">
      <SectionHead
        headline="Who we Serve."
        title="Secondary Solutions for Companies + People to Transact with Confidence"
      />
      <ul className="accordion">
        {accordionItems.map((item) => {
          return (
            <li
              className={`accordion__item ${index === item.id ? "active" : ""}`}
              key={item.id}
              onClick={() => handleOnClick(item.id)}
            >
              <div className="accordion__head">
                {item.heading} ↓ <span>0{+item.id}</span>
              </div>
              <AccordionBody item={item} active={index === item.id} />
              {/* {index === item.id && <AccordionBody item={item} />} */}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
