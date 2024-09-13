type accordionItem = {
  id: number;
  heading: string;
  title: string;
  text: string;
  image: string;
  link: string;
};

const accordionItems: accordionItem[] = [
  {
    id: 1,
    heading: "Private Companies",
    title:
      "Liquidity Opportunities Across Each Stage of Growth: Multiple Products. One Partner.",
    text: "The liquidity needs of private companies are continually evolving. We help you expertly navigate secondary activity at each stage of your company lifecycle.",
    image: "images/Tender-Offer-Image-Desktop.webp",
    link: "#",
  },
  {
    id: 2,
    heading: "Employees + Shareholders",
    title: "Sell Your Shares Through A Global Marketplace",
    text: "Access accredited institutional investors and brokers with deep pools of capital. Sell your holdings via our trading platform SecondMarketTM and support from our experienced product specialists.",
    image: "images/employees-shareholders.svg",
    link: "#",
  },
  {
    id: 3,
    heading: "Investors",
    title:
      "Join An Institutional Marketplace. Intelligently Invest in Unicorns + Disruptive Companies.",
    text: "Capitalize on untapped opportunities. Invest efficiently and confidently through SecondMarket™, our advanced trading platform.",
    image: "images/investors.svg",
    link: "#",
  },
  {
    id: 4,
    heading: "Banks + Brokers",
    title: "Private Market Trading Technology",
    text: "Enterprise software and an institutional marketplace SecondMarket™ for banks, brokers, investors, and shareholders to connect. Turnkey services to scale your private market franchise.",
    image: "images/banks-brokers.svg",
    link: "#",
  },
  {
    id: 5,
    heading: "Law Firms",
    title: "Liquidity Platform Chosen by Law Firms and Legal Counsels",
    text: "Act as a trusted advisor to clients by partnering with an experienced deal team to structure and facilitate secondary transactions.",
    image: "images/NPM-Law-Firm-Graph-Dark-e1707435770266.webp",
    link: "#",
  },
];

export { type accordionItem, accordionItems };
