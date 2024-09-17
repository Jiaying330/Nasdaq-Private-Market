import SectionHead from "../../SectionHead/SectionHead";
import "./ActionSection.scss";
import TransformOutlinedIcon from "@mui/icons-material/TransformOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone";
import ActionCell from "./ActionCell/ActionCell";
export default function ActionSection() {
  return (
    <div className="section section__action">
      <SectionHead
        headline="How to Get Started."
        title="Unlock the Private Market Today"
      />
      <div className="action__cells">
        <ActionCell
          icon={TransformOutlinedIcon}
          heading="Access Transfer + Settlement Technology"
          link=""
        />
        <ActionCell
          icon={ShoppingCartCheckoutOutlinedIcon}
          heading="Buy Shares in Private Companies"
          link=""
        />
        <ActionCell
          icon={SellOutlinedIcon}
          heading="Sell Shares in Private Companies"
          link=""
        />
        <ActionCell
          icon={RocketLaunchOutlinedIcon}
          heading="Launch Company Liquidity Program"
          link=""
        />
        <ActionCell
          icon={StorefrontOutlinedIcon}
          heading="Join Trading Marketplace (Banks, Brokers, Investors + Shareholders)"
          link=""
        />
        <ActionCell
          icon={InsertChartOutlinedTwoToneIcon}
          heading="Explore Private Market Data + Intelligence"
          link=""
        />
      </div>
    </div>
  );
}
