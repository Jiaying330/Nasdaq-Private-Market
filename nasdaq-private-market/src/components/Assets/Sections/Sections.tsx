import ProductSection from "./ProductSection/ProductSection";
import ServiceSection from "./ServiceSection/ServiceSection";
import "./Section.scss";
import WhySection from "./WhySection/WhySection";
import ActionSection from "./ActionSection/ActionSection";
import InvestorSection from "./InvestorSection/InvestorSection";

export default function Sections() {
  return (
    <>
      <ProductSection />
      <ServiceSection />
      <WhySection />
      <ActionSection />
      <InvestorSection />
    </>
  );
}
