type partnerItem = {
  id: number;
  label: string;
  totalCouncel: string;
  companyCouncel: string;
};
const partners: partnerItem[] = [
  {
    id: 1,
    label: "Goodwill",
    totalCouncel: "100%",
    companyCouncel: "100%",
  },
  {
    id: 2,
    label: "Wilson Sonsini",
    totalCouncel: "87.5%",
    companyCouncel: "100%",
  },
  {
    id: 3,
    label: "Cooley",
    totalCouncel: "71.4%",
    companyCouncel: "100%",
  },
  {
    id: 4,
    label: "Fenwick",
    companyCouncel: "100%",
    totalCouncel: "42.9%",
  },
  {
    id: 5,
    label: "Latham & Watkins",
    companyCouncel: "66.7%",
    totalCouncel: "42.9%",
  },
  {
    id: 6,
    label: "Kirkland & Ellis",
    totalCouncel: "42.9%",
    companyCouncel: "33.3%",
  },
  {
    id: 7,
    label: "Gunderson Dettmer",
    totalCouncel: "28.6%",
    companyCouncel: "100%",
  },
  {
    id: 8,
    label: "McDermott",
    totalCouncel: "28.6%",
    companyCouncel: "100%",
  },
  {
    id: 9,
    label: "DLA Piper",
    totalCouncel: "14.3%",
    companyCouncel: "100%",
  },
  {
    id: 10,
    label: "Orrick",
    totalCouncel: "14.3%",
    companyCouncel: "100%",
  },
];

const industries = [
  {
    id: 1,
    text: "Banking, Payments, Investments + Insurance",
    value: "22%",
  },
  {
    id: 2,
    text: "Information Technology",
    value: "19%",
  },
  {
    id: 3,
    text: "Entertainment Products + Services",
    value: "14%",
  },
  {
    id: 4,
    text: "Business Support Services",
    value: "11%",
  },
  {
    id: 5,
    text: "Household Goods + Services",
    value: "11%",
  },
  {
    id: 6,
    text: "Biotech, Pharma + Health Care",
    value: "8%",
  },
  {
    id: 7,
    text: "Energy",
    value: "6%",
  },
  {
    id: 8,
    text: "Food + Beverages",
    value: "5%",
  },
  {
    id: 9,
    text: "Media",
    value: "5%",
  },
];

const valuations = [
  {
    id: 1,
    value: "14%",
    label: "$0-$250M",
  },
  {
    id: 2,
    value: "6%",
    label: "$500M-$1B",
  },
  {
    id: 3,
    value: "17%",
    label: "$1B-$2B",
  },
  {
    id: 4,
    value: "40%",
    label: "$2B-$5B",
  },
  {
    id: 5,
    value: "23%",
    label: "$5B+",
  },
];

const networks = [
  {
    id: 1,
    country: "Australia",
    flag: "🇦🇺",
  },
  {
    id: 2,
    country: "Bermuda",
    flag: "🇧🇲",
  },
  {
    id: 3,
    country: "Brazil",
    flag: "🇧🇷",
  },
  {
    id: 4,
    country: "Canada",
    flag: "🇨🇦",
  },
  {
    id: 5,
    country: "Cayman Islands",
    flag: "🇰🇾",
  },
  {
    id: 6,
    country: "Colombia",
    flag: "🇨🇴",
  },
  {
    id: 7,
    country: "Estonia",
    flag: "🇪🇪",
  },
  {
    id: 8,
    country: "Finland",
    flag: "🇫🇮",
  },
  {
    id: 9,
    country: "Germany",
    flag: "🇩🇪",
  },
  {
    id: 10,
    country: "Hong Kong",
    flag: "🇭🇰",
  },
  {
    id: 11,
    country: "Indonesia",
    flag: "🇮🇩",
  },
  {
    id: 12,
    country: "Israel",
    flag: "🇮🇱",
  },
  {
    id: 13,
    country: "Japan",
    flag: "🇯🇵",
  },
  {
    id: 14,
    country: "Luxembourg",
    flag: "🇱🇺",
  },
  {
    id: 15,
    country: "Mexico",
    flag: "🇲🇽",
  },
  {
    id: 16,
    country: "Singapore",
    flag: "🇸🇬",
  },
  {
    id: 17,
    country: "Switzerland",
    flag: "🇨🇭",
  },
  {
    id: 18,
    country: "Sweden",
    flag: "🇸🇪",
  },
  {
    id: 19,
    country: "Ukraine",
    flag: "🇺🇦",
  },
  {
    id: 20,
    country: "United Kingdom",
    flag: "🇬🇧",
  },
  {
    id: 21,
    country: "United States",
    flag: "🇺🇸",
  },
];

export { partners, industries, valuations, networks };
