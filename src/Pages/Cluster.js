import React, { Component } from "react";
import * as actions from "../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/cluster.css";
import native from "../assets/images/native.png";
import migrant from "../assets/images/migrant.png";
import traditionalist from "../assets/images/traditionalist.png";
import alien from "../assets/images/alien.png";

class Cluster extends Component {
  state = {};
  componentDidMount() {
    this.setState({
      ...this.state,
      cluster: {
        type: "digital_native",
        conversations: [
          "I represent the digital native",
          "I mostly browse social media sites at 8:00pm"
        ]
      }
    });
  }
  renderCluster = () => {
    let { cluster } = this.state;
    return (
      <div className="cluster-set">
        <div className="left">
          {cluster.conversations.map((convo, i) => {
            if (i % 2 !== 0) {
              return <div className="speech-bubble">{convo}</div>;
            }
          })}
        </div>
        <div className="cluster-image">
          <img
            src={
              cluster.type === "digital_native"
                ? native
                : cluster.type === "digital_migrant"
                ? migrant
                : cluster.type === "digital_alien"
                ? alien
                : traditionalist
            }
            alt="cluster type"
          />
        </div>
        <div className="right">
          {cluster.conversations.map((convo, i) => {
            if (i % 2 === 0) {
              return <div className="speech-bubble">{convo}</div>;
            }
          })}
        </div>
      </div>
    );
  };

  render() {
    return (
      <main className="cluster">
        {this.state.cluster && this.renderCluster()}
      </main>
    );
  }
}

export default connect(
  null,
  actions
)(Cluster);
