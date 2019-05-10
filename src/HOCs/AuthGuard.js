import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

export default function(OriginalComponent) {
  class Auth extends Component {
    checkAuth = () => {
      if (!this.props.isAuthenticated) this.props.history.push("/");
    };

    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }
    render() {
      return <OriginalComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ auth }) => {
    console.log(auth);
    return {
      isAuthenticated: auth.isAuthenticated
    };
  };

  return connect(mapStateToProps)(Auth);
}
