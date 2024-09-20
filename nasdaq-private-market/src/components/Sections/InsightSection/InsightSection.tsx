import { useState } from "react";
import { insights } from "../../../assets/insights";
import SectionHead from "../../Assets/SectionHead/SectionHead";
import SlideController from "../../Assets/SlideController/SlideController";
import InsightCard from "./InsightCard/InsightCard";
import "./InsightSection.scss";
import ArrowButtonFilled from "../../Assets/ArrowButtonFilled/ArrowButtonFilled";

export default function InsightSection() {
  const [index, setIndex] = useState(0);
  function handleLeftBtnOnClick() {
    if (index > 0) setIndex((prev) => prev - 1);
  }
  function handleRightBtnOnClick() {
    if (index < 1) setIndex((prev) => prev + 1);
  }

  return (
    <section className="section section__insight">
      <div className="section__insight-header">
        <SectionHead
          headline="Industry Commentary + Latest News."
          title="Insights"
        />
        <ArrowButtonFilled text="More Insights" />
      </div>

      <div className="section__insight-slider">
        <SlideController
          currIndex={index}
          count={2}
          handleLeftBtnOnClick={handleLeftBtnOnClick}
          handleRightBtnOnClick={handleRightBtnOnClick}
        />
        <div className="section__insight-slider-container">
          <div
            className="section__insight-slider-container-inner"
            style={{ transform: `translateX(${(0 - index) * 100}%)` }}
          >
            {insights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
