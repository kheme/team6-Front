import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "../styles/layout.css";

import Dashboard from "../Pages/Dashboard";

import Cluster from "../Pages/Cluster";

import Sidebar from "../components/Sidebar.js";

export default class DefaultLayout extends Component {
  render() {
    return (
      <Fragment>
        <div id="sidebar">
          <Sidebar history={this.props.history}>
            <div id="page">
              <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/cluster" component={Cluster} />
              </Switch>
            </div>
          </Sidebar>
        </div>
      </Fragment>
    );
  }
}
