import { useState } from "react";
import "./ProductSection.scss";
import SectionHead from "../../Assets/SectionHead/SectionHead";
import Slide from "./Slide/Slide";
import SlideProgressor from "../../Assets/SlideProgressor/SlideProgressor";
import SlideController from "../../Assets/SlideController/SlideController";

export default function ProductSection() {
  const [index, setIndex] = useState(0);

  function handleLeftBtnOnClick() {
    if (index > 0) setIndex((prev) => prev - 1);
  }
  function handleRightBtnOnClick() {
    if (index < 4) setIndex((prev) => prev + 1);
  }
  function handleNumberOnClick(number: number) {
    setIndex(number);
  }

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
        <SlideController
          currIndex={index}
          count={5}
          handleLeftBtnOnClick={handleLeftBtnOnClick}
          handleRightBtnOnClick={handleRightBtnOnClick}
        />
        {/* <div className="section__product-slides-btns">
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
        </div> */}
        <SlideProgressor
          count={5}
          currIndex={index}
          handleNumberOnClick={handleNumberOnClick}
        />
      </div>
    </section>
  );
}
