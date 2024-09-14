import ArrowButtonFilled from "../../ArrowButtonFilled/ArrowButtonFilled";
import { Headline } from "../../SectionHead/SectionHead";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import "./WhySection.scss";
import InfoGrid from "./InfoGrid/InfoGrid";

export default function WhySection() {
  return (
    <section className="section section__why">
      <div className="section__why-title">
        <Headline headline="Why Nasdaq Private Market." />
        <h3>
          Expertly Navigating the Private Market with Disruptive Technology +
          Dedicated Product Specialists
        </h3>
        <ArrowButtonFilled text="Sign Up" />
      </div>
      <div className="section__why-infos">
        <InfoGrid
          icon={VerifiedOutlinedIcon}
          heading="Decade of Experience"
          infos={[
            "Ten years of delivering shareholder, employee, investor, and leadership team solutions",
            "Precisely trading private company stock pre-IPO and uncovering actionable market data",
          ]}
        />
        <InfoGrid
          icon={PublicOutlinedIcon}
          heading="Premier Global Network"
          infos={[
            "Network of private companies, employees, shareholders, investors, banks, and brokers",
            "Clients driven to trusted trading platform for ability to connect credible buyers and sellers",
          ]}
        />
        <InfoGrid
          icon={QueryStatsOutlinedIcon}
          heading="Tech-Forward"
          infos={[
            "Proprietary, next-generation private market technology, software, infrastructure, and connectivity",
            "Trading marketplace, company liquidity programs, and settlement powered by advanced trading tools",
          ]}
        />
        <InfoGrid
          icon={LanguageOutlinedIcon}
          heading="Data-Driven"
          infos={[
            "High information platform sourcing trade data, valuations, and market intelligence",
            "Market structure commentary, industry trend analysis, benchmarks, and financial products",
          ]}
        />
      </div>
    </section>
  );
}
