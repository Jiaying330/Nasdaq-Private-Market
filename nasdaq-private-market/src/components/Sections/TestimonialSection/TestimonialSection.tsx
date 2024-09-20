import { useState } from "react";
import { Headline } from "../../Assets/SectionHead/SectionHead";
import SlideProgressor from "../../Assets/SlideProgressor/SlideProgressor";
import "./TestimonialSection.scss";
import { testimonials } from "../../../assets/testimonials";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  function handleNumberOnClick(number: number) {
    setIndex(number);
  }
  return (
    <section className="section section__testimonial">
      <Headline headline="Client Testimonials." />
      <div
        className="section__testimonial-sliders"
        style={{ transform: `translateX(${(0 - index) * 102}%)` }}
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard testimonial={testimonial} />
        ))}
      </div>
      <SlideProgressor
        count={4}
        currIndex={index}
        handleNumberOnClick={handleNumberOnClick}
      />
    </section>
  );
}
