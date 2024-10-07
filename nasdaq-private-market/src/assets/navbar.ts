// const dropdown1 = [

// ]
import { SvgIconComponent } from "@mui/icons-material";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import ChecklistRtlOutlinedIcon from "@mui/icons-material/ChecklistRtlOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import TransformOutlinedIcon from "@mui/icons-material/TransformOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import SourceOutlinedIcon from "@mui/icons-material/SourceOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

type dropdown2Item = {
  id: number;
  icon: SvgIconComponent;
  title: string;
  description: string;
};

const dropdown2Items_1: dropdown2Item[] = [
  {
    id: 1,
    icon: PublicOutlinedIcon,
    title: "SecondMarket Trading Platform",
    description:
      "Learn about the Marketplace + Workstations That Connect Employees, Investors + Companies.",
  },
  {
    id: 2,
    icon: InsertChartOutlinedRoundedIcon,
    title: "Employee Trading: Sell Stock",
    description: "Sell Shares + Discover the Value of Your Equity.",
  },
  {
    id: 3,
    icon: ChecklistRtlOutlinedIcon,
    title: "Investor Trading: Buy + Sell Stock",
    description: "Trade Shares + Access Market Insights.",
  },
  {
    id: 4,
    icon: AccountBalanceOutlinedIcon,
    title: "Bank + Broker Technology",
    description: "Trading Technology for Banks + Brokers.",
  },
];

const dropdown2Items_2: dropdown2Item[] = [
  {
    id: 1,
    icon: SwapHorizOutlinedIcon,
    title: "Tender Offers",
    description: "Custom Corporate-Sponsored Liquidity Programs.",
  },
  {
    id: 2,
    icon: GavelOutlinedIcon,
    title: "Auctions + Capital Introduction",
    description:
      "Custom Corporate-Sponsored Liquidity Programs with Price Discovery.",
  },
  {
    id: 3,
    icon: HowToRegOutlinedIcon,
    title: "Option Extensions, RSUs, M&A + More",
    description:
      "Sell Vested Units + RSUs. Manage M&A Documents + Payments. Convert Stock Options.",
  },
  {
    id: 4,
    icon: ListOutlinedIcon,
    title: "Pre-Direct Listing Programs",
    description:
      "Bespoke Continuous Secondary Company Marketplaces for Pre-Direct Listings.",
  },
];

const dropdown2Items_3: dropdown2Item[] = [
  {
    id: 1,
    icon: TransformOutlinedIcon,
    title: "Transfer + Settlement",
    description: "End-to-End Workflow + Dashboards for All Transfer Activity.",
  },
];

const dropdown2Items_4: dropdown2Item[] = [
  {
    id: 1,
    icon: InsightsOutlinedIcon,
    title: "Tape D - Data (Coming Soon)",
    description:
      "Differentiated Trading Insights, Valuation Data + Market Intelligence.",
  },
  {
    id: 2,
    icon: SourceOutlinedIcon,
    title: "Company Profiles",
    description: "View Firmographic Information on Trending Private Companies.",
  },
];

export {
  dropdown2Items_1,
  dropdown2Items_2,
  dropdown2Items_3,
  dropdown2Items_4,
};
