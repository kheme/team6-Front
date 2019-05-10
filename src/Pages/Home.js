import React, { Component } from "react";
import * as actions from "../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

class Dashboard extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <h3>
        <Link to="/users">HOME</Link>
      </h3>
    );
  }
}

export default connect(
  null,
  actions
)(Dashboard);
