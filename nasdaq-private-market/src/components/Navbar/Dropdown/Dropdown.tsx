import "./Dropdown.scss";
import GridItem1 from "./GridItem1/GridItem1";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import {
  dropdown2Items_1,
  dropdown2Items_2,
  dropdown2Items_3,
  dropdown2Items_4,
} from "../../../assets/navbar";
import GridItem2 from "./GridItem2/GridItem2";
export default function Dropdown({
  show,
  children,
}: {
  show: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`dropdown ${show ? "show" : "close"}`}>{children}</div>
  );
}

function Dropdown1({ show }: { show: boolean }) {
  return (
    <Dropdown show={show}>
      <div className="dropdown__inner dropdown__inner--1">
        <div className="dropdown__grid--1">
          <GridItem1
            icon={LocalOfferOutlinedIcon}
            heading="Employee Shareholders"
            subtitle="Sell Pre-IPO Shares."
          />
          <GridItem1
            icon={TrendingUpOutlinedIcon}
            heading="Investors"
            subtitle="Buy + sell private company shares. Leverage financial technology to scale."
          />
          <GridItem1
            icon={CorporateFareOutlinedIcon}
            heading="Private Companies"
            subtitle="Launch Company Liquidity Programs. Leverage transfer + settlement tools."
          />
          <GridItem1
            icon={AccountBalanceOutlinedIcon}
            heading="Bankers + Brokers"
            subtitle="Leverage financial technology to scale private market franchises."
          />
          <GridItem1
            icon={BalanceOutlinedIcon}
            heading="Law Firms"
            subtitle="Support Client Secondary Activities."
          />
        </div>
        <div className="dropdown__right">
          <div>
            <h6>One Powerful Platform</h6>
            <p>
              Trading technology and integral data open the door to private
              market opportunities. Join our marketplace to transact with
              confidence and execute efficiently.
            </p>
          </div>

          <a href="#">
            Get Started <EastOutlinedIcon />{" "}
          </a>
        </div>
      </div>
    </Dropdown>
  );
}

function Dropdown2({ show }: { show: boolean }) {
  return (
    <Dropdown show={show}>
      <div className="dropdown__inner dropdown__inner--2">
        <h6>
          SecondMarket™ – A premier secondary trading platform for private
          companies, employees + investors from Nasdaq Private Market.
        </h6>
        <div className="dropdown__grid--2">
          <GridItem2 heading="Trading Marketplace" items={dropdown2Items_1} />
          <GridItem2
            heading="Company Platform + Liquidity Programs"
            items={dropdown2Items_2}
          />
          <div>
            <GridItem2
              heading="Settlement Technology"
              items={dropdown2Items_3}
            />
            <GridItem2 heading="Data + Analytics" items={dropdown2Items_4} />
          </div>
        </div>
      </div>
    </Dropdown>
  );
}

function Dropdown3({ show }: { show: boolean }) {
  return (
    <Dropdown show={show}>
      <div className="dropdown__inner dropdown__inner--1">
        <div className="dropdown__grid--1">
          <GridItem1
            icon={InfoOutlinedIcon}
            heading="About Nasdaq Private Market"
            subtitle="Our Mission, Histor + Commitment to the Private Market."
          />
          <GridItem1
            icon={GroupsOutlinedIcon}
            heading="Leaderships"
            subtitle="Meet Our Executive Leadership Team."
          />
          <GridItem1
            icon={NewspaperOutlinedIcon}
            heading="In The News"
            subtitle="Latest Private Market News, Press Releases + More."
          />
          <GridItem1
            icon={ContactSupportOutlinedIcon}
            heading="Contact Us"
            subtitle="Get In Touch with Our Team."
          />
          <GridItem1
            icon={BadgeOutlinedIcon}
            heading="Careers"
            subtitle="Join a Team of Professionals Advancing the Private Market."
          />

          <GridItem1
            icon={TipsAndUpdatesOutlinedIcon}
            heading="Insights"
            subtitle="Private Market Reports, Trends, Analytics + More."
          />
        </div>
        <div className="dropdown__right">
          <div>
            <h6>Join Our Team</h6>
            <p>
              Help us transform the private markets, create critical
              infrastructure, and establish market access for private companies,
              banks, brokers, shareholders, and investors. Explore Opportunities
              with Us.
            </p>
          </div>

          <a href="#">
            Explore Openings <EastOutlinedIcon />{" "}
          </a>
        </div>
      </div>
    </Dropdown>
  );
}

export { Dropdown1, Dropdown2, Dropdown3 };
