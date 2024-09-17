import { Headline } from "../../SectionHead/SectionHead";
import "./StatSection.scss";

export default function StatSection() {
  return (
    <section className="section__stat">
      <div className="section__inner">
        <div className="section__aside">
          <Headline headline="Key Stats." />
          <div>
            <h6>Total Transaction Value</h6>
            <p>$50B+</p>
          </div>
        </div>
        <div className="section__main">
          <ul className="section__list">
            <li>
              <h6>Total Company-Sponsored Programs</h6>
              <p>700+</p>
            </li>
            <li>
              <h6>Number of Eligible Program Participants</h6>
              <p>190K+</p>
            </li>
            <li>
              <h6>Private Companies' Data Tracked</h6>
              <p>15K+</p>
            </li>
            <li>
              <h6>Onboarded Institutional Investors</h6>
              <p>320+</p>
            </li>
            <li>
              <h6>Total Number of Unicorn Clients</h6>
              <p>250+</p>
            </li>
          </ul>
          <p>Data as of January 2024</p>
        </div>
      </div>
      {/* <img
        className="section__stat-background"
        src="images/map.webp"
        alt="map"
      /> */}
      {/* <div className="section--1">
        <div className="section__inner">
          <div className="section__aside">
            <Headline headline="Key Stats." />
            <div>
              <h6>Total Transaction Value</h6>
              <p>$50B+</p>
            </div>
          </div>
          <ul className="section__list">
            <li>
              <h6>Total Company-Sponsored Programs</h6>
              <p>700+</p>
            </li>
            <li>
              <h6>Number of Eligible Program Participants</h6>
              <p>190K+</p>
            </li>
            <li>
              <h6>Private Companies' Data Tracked</h6>
              <p>15K+</p>
            </li>
            <li>
              <h6>Onboarded Institutional Investors</h6>
              <p>320+</p>
            </li>
            <li>
              <h6>Total Number of Unicorn Clients</h6>
              <p>250+</p>
            </li>
          </ul>
        </div>
      </div> */}
    </section>
  );
}
