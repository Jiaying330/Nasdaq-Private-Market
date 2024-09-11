import { useState, useEffect } from "react";
import "./ProductSection.scss";
import SectionHead from "../../SectionHead/SectionHead";
import Slide from "./Slide/Slide";

export default function ProductSection() {
  const [index, setIndex] = useState(0);

  function handleLeftBtnOnClick() {
    if (index > 0) setIndex((prev) => prev - 1);
  }
  function handleRightBtnOnClick() {
    if (index < 4) setIndex((prev) => prev + 1);
  }
  function handleNumberOnClick(number: number) {
    console.log("number");
    setIndex(number);
  }
  useEffect(() => {
    const listItem = document.querySelector(
      ".section__product-slides-progress li"
    );
    if (listItem) {
      listItem.addEventListener("click", () =>
        console.log("Vanilla JS Clicked!")
      );
    }
  }, []);

  return (
    <section className="section section__product">
      <SectionHead headline="what we offer." title="Products + Services" />
      <div className="section__product-slides">
        <div className="section__product-slides-container">
          <Slide
            style={{ transform: `translateX(${(0 - index) * 105}%)` }}
            disabled={index !== 0}
          />
          <Slide
            style={{ transform: `translateX(${(1 - index) * 105}%)` }}
            disabled={index !== 1}
          />
          <Slide
            style={{ transform: `translateX(${(2 - index) * 105}%)` }}
            disabled={index !== 2}
          />
          <Slide
            style={{ transform: `translateX(${(3 - index) * 105}%)` }}
            disabled={index !== 3}
          />
          <Slide
            style={{ transform: `translateX(${(4 - index) * 105}%)` }}
            disabled={index !== 4}
          />
        </div>
        <div className="section__product-slides-btns">
          <button
            className={`section__product-slides-btn ${
              index === 0 ? "disabled" : ""
            }`}
            onClick={handleLeftBtnOnClick}
          >
            &#8592;
          </button>
          <button
            className={`section__product-slides-btn ${
              index === 4 ? "disabled" : ""
            }`}
            onClick={handleRightBtnOnClick}
          >
            &#8594;
          </button>
        </div>
        <ul className="section__product-slides-progress">
          {[...Array(5)].map((_, i) => (
            <li key={i} className={index === i ? "active" : ""}>
              <span onClick={() => handleNumberOnClick(i)}>0{i + 1}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
