import React from "react";
import Nav from "./Nav";
import "../styles/home.css";
import image from "../assets/images/body-image.png";

export default class HomeContent extends React.Component {
  render() {
    return (
      <section className="body-content">
        <article>
          <img src={image} alt="Our product" />
        </article>
        <article className="body-text">
          <h5>
            Grow innovatively with us. See what your customers like and want
            from you
          </h5>
          <p>
            Lorem ipsizzle dolor sit yippiyo, the bizzle adipiscing elizzle.
            Nullizzle you son of a bizzle shit, sizzle volutpat.
          </p>
          <p>
            Fizzle hizzle, pizzle you son of a bizzle, shizznit. Pellentesque
            shizznit tortizzle. Izzle fo shizzle.
          </p>
        </article>
      </section>
    );
  }
}
