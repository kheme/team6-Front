import React from "react";
import Nav from "./Nav";
import "../styles/home.css";
import paper from "../assets/images/paper.png";
import analyze from "../assets/images/analyze.png";
import metric from "../assets/images/metric.png";

export default class HowItWorks extends React.Component {
  render() {
    return (
      <section className="how-content">
        <div className="how-header">
          <span className="how">How it Works</span>
        </div>
        <div className="tags">
          <article>
            <img src={paper} alt="data" />
            <h5>You provide us with your raw data</h5>
            <p>
              Lorem ipsizzle dolor sit yippiyo, elizzle. Nullizzle you son of a
              bizzle shit, sizzle volutpat.
            </p>
          </article>
          <article>
            <img src={analyze} alt="data" />
            <h5>We help you anlayze the data</h5>
            <p>
              Lorem ipsizzle dolor sit yippiyo, elizzle. Nullizzle you son of a
              bizzle shit, sizzle volutpat.
            </p>
          </article>
          <article>
            <img src={metric} alt="data" />
            <h5>You get back meaningful insight</h5>
            <p>
              Lorem ipsizzle dolor sit yippiyo, elizzle. Nullizzle you son of a
              bizzle shit, sizzle volutpat.
            </p>
          </article>
        </div>
      </section>
    );
  }
}
