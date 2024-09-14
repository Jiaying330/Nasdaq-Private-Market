import ProductSection from "./ProductSection/ProductSection";
import ServiceSection from "./ServiceSection/ServiceSection";
import "./Section.scss";
import WhySection from "./WhySection/WhySection";

export default function Sections() {
  return (
    <>
      <ProductSection />
      <ServiceSection />
      <WhySection />
    </>
  );
}
