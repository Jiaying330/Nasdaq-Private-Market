type insight = {
  id: number;
  image: string;
  date: string;
  title: string;
  link: string;
};

const insights: insight[] = [
  {
    id: 1,
    image: "images/500M-TS.webp",
    date: "Sep 05, 2024",
    title:
      "Nasdaq Private Market Surpasses $500M in Total Volume for Transfer & Settlement Solutions",
    link: "#",
  },
  {
    id: 2,
    image: "images/ReportImages-MidYear-24.webp",
    date: "Aug 29, 2024",
    title: "Private Market Pulse: 2024 Mid Year Review",
    link: "#",
  },
  {
    id: 3,
    image: "images/Selling-Stock-Essentials-1.webp",
    date: "Aug 02, 2024",
    title: "Selling Your Private Stock: Understanding the Essentials",
    link: "#",
  },
  {
    id: 4,
    image: "images/Hijojo-Press-Release-1.webp",
    date: "Aug 01, 2024",
    title:
      "Nasdaq Private Market Adds HiJoJo Partners to Consortium of Investors to Expand Secondary Solutions and Private Market Access in Japan",
    link: "#",
  },
];
export { type insight, insights };
