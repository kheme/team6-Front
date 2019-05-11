import React from "react";
import Nav from "./Nav";
import "../styles/header.css";
import image from "../assets/images/header-image.png";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Nav />
        <section className="header-content">
          <article className="header-text">
            <h3>
              Grow innovatively with us. See what your customers like and want
              from you
            </h3>
            <p>
              Lorem ipsizzle dolor sit yippiyo, the bizzle adipiscing elizzle.
              Nullizzle you son of a bizzle shit, sizzle volutpat, fizzle
              hizzle, pizzle you son of a bizzle, shizznit. Pellentesque
              shizznit tortizzle.
            </p>
          </article>
          <article>
            <img src={image} alt="Our product" />
          </article>
        </section>
      </header>
    );
  }
}
