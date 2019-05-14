import React from "react";
import Nav from "./Nav";
import "../styles/footer.css";
import { Input } from "reactstrap";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <section>
            <article>
              <h3>BI-Stack</h3>
              <p>
                Lorem ipsizzle dolor sit yippiyo, the bizzle adipiscing elizzle.
                Nullizzle you son of a bizzle shit, sizzle volutpat,fizzle
                hizzle, pizzle you son of a bizzle, shizznit. Pellentesque
                shizznit tortizzle.
              </p>
            </article>
          </section>
          <section>
            <article>
              <div className="links">
                <span>Pricing</span>
                <span>FAQ</span>
                <span>Contact</span>
              </div>
              <div className="newsletter">
                <h6>Join our mailing list</h6>

                <Input type="email" required placeholder="email@example.com" />
              </div>
            </article>
          </section>
        </div>
        <div className="copy-socials">
          <span>&copy; Copyright 2019 </span>
          <div className="socials">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
      </footer>
    );
  }
}
