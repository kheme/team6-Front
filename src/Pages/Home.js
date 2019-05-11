import React, { Component } from "react";
import * as actions from "../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import "../styles/home.css";
import Footer from "../components/Footer";
import How from "../components/How";
import CTA from "../components/CTA";
class Dashboard extends Component {
  componentDidMount() {}

  render() {
    return (
      <section>
        <Header />
        <div className="home">
          <HomeContent />
          <How />
        </div>
        <CTA />
        <Footer />
      </section>
    );
  }
}

export default connect(
  null,
  actions
)(Dashboard);
