import React from "react";
import Nav from "./Nav";
import "../styles/header.css";
import image from "../assets/images/header-image.png";
import logo from "../assets/images/header-image.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";
import { NavLink } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="ss" style={{ backgroundColor: "#FF7151" }}>
          <h2>BS</h2>
        </div>
        <main>{this.props.children}</main>
      </div>
    );
  }
}
