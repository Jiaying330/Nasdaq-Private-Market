import ArrowButtonFilled from "../Assets/ArrowButtonFilled/ArrowButtonFilled";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__video-wrapper">
        <video
          src="https://www.nasdaqprivatemarket.com/wp-content/themes/npm-2-0-0/resources/videos/NPM_v2.mp4"
          preload="auto"
          muted={true}
          loop={true}
          autoPlay={true}
          playsInline={true}
        ></video>
      </div>
      <div className="hero__shell">
        <div className="hero__inner">
          <div className="hero__content">
            <h6 className="hero__subtitle">
              Buy + Sell Private Company Shares.
              <span className="separator"></span>
              Trading, Settlement, Market Data.
            </h6>
            <h1 className="hero__title">
              Technology That Fuels The Private Market
            </h1>
            <ArrowButtonFilled text="get started" />
          </div>
        </div>
      </div>
    </section>
  );
}
