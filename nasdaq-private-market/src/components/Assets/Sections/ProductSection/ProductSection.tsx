import "./ProductSection.scss";
// import "../section.scss";
import SectionHead from "../../SectionHead/SectionHead";
import Slide from "./Slide/Slide";

export default function ProductSection() {
  return (
    <section className="section section__product">
      <SectionHead headline="what we offer." title="Products + Services" />
      <div className="section__product-slides">
        <div className="section__product-slides-container">
          <Slide />
          <Slide />
        </div>
        <div className="section__product-slides-btns">
          <div className="section__product-slides-btn">&#8592;</div>
          <div className="section__product-slides-btn">&#8594;</div>
        </div>
        <ul className="section__product-slides-progress">
          <li className="active">01</li>
          <li>02</li>
          <li>03</li>
          <li>04</li>
          <li>05</li>
        </ul>
      </div>
    </section>
  );
}
