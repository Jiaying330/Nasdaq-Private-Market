import ProductSection from "./ProductSection/ProductSection";
import ServiceSection from "./ServiceSection/ServiceSection";
import "./Section.scss";
import WhySection from "./WhySection/WhySection";
import ActionSection from "./ActionSection/ActionSection";
import InvestorSection from "./InvestorSection/InvestorSection";
import StatSection from "./StatSection/StatSection";
import ClientSection from "./ClientSection/ClientSection";
import DataSection from "./DataSection/DataSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import InsightSection from "./InsightSection/InsightSection";

export default function Sections() {
  return (
    <>
      <ProductSection />
      <ServiceSection />
      <WhySection />
      <ActionSection />
      <InvestorSection />
      <StatSection />
      <ClientSection />
      <DataSection />
      <TestimonialSection />
      <InsightSection />
    </>
  );
}
