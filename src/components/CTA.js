import React from "react";
import Nav from "./Nav";
import "../styles/home.css";
import { Button } from "reactstrap";

export default class HowItWorks extends React.Component {
  render() {
    return (
      <section className="cta">
        <div className="overlay">
          <h4>Get 30 days free trial</h4>
          <Button title="Get Started" className="btn-cta">
            Get Started
          </Button>
        </div>
      </section>
    );
  }
}
