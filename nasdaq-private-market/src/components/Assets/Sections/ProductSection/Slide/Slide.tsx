import { Headline } from "../../../SectionHead/SectionHead";
import "./Slide.scss";

export default function Slide({
  style,
  disabled,
}: {
  style: { transform: string };
  disabled: boolean;
}) {
  return (
    <div
      className={`section__product-slide ${disabled ? "disabled" : ""}`}
      style={style}
    >
      <Headline headline="secondmarket&trade;" />
      <div className="section__product-slide-content">
        <div className="section__product-slide-content-left">
          <h3>Trading Marketplace</h3>
          <p>
            Powerful private market trading technology and actionable data opens
            the door to opportunities. Log in to our purpose-built platform that
            reduces friction and allows you to transact with confidence.
          </p>
        </div>
        <div className="section__product-slide-content-right">
          <img src="images/Laptop-Mockup-2048x1233.webp" alt="laptop" />
        </div>
      </div>
    </div>
  );
}
