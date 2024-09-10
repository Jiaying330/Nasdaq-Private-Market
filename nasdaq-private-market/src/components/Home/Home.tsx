import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Ticker from "../Ticker/Ticker";
import Sections from "../Assets/Sections/Sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Sections />
    </>
  );
}
