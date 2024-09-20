import "./TestimonialCard.scss";
import { testimonial } from "../../../../assets/testimonials";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: testimonial;
}) {
  return (
    <div className="testimonial-card">
      <div className="images">
        <img src={testimonial.image} alt="head shot" className="headshot" />
        <img src={testimonial.logo} alt="logo" className="logo" />
      </div>
      <blockquote>{testimonial.testimonial}</blockquote>
      <div className="info">
        <p className="name">{testimonial.name}</p>
        <p className="description">{testimonial.description}</p>
      </div>
    </div>
  );
}
