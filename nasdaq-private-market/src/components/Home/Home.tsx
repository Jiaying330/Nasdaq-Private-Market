import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Ticker from "../Ticker/Ticker";
import Sections from "../Sections/Sections";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Sections />
      <Footer />
    </>
  );
}
