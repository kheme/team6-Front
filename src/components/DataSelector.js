import React from "react";
import "../styles/custom.css";
import * as actions from "../redux/actions";
import { connect } from "react-redux";

class DataSelector extends React.Component {
  render() {
    return (
      <div className="data-selector">
        <div className="selector">
          <label>By Gender</label>
          <select
            className="form-control"
            onChange={e =>
              this.props.filterData({ key: "country", value: e.target.value })
            }
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="selector">
          <label>By Top Sites</label>
          <select className="form-control">
            <option>Nigeria</option>
          </select>
        </div>
        <div className="selector">
          <label>By Devices</label>
          <select className="form-control">
            <option>Nigeria</option>
          </select>
        </div>
        <div className="selector form-group">
          <label>FAQ</label>
          <br />
          <select className="form-control">
            <option disabled selected>
              Find out what is important
            </option>
            <option value="device">What type of device is being used</option>
            <option value="peak period">What is the peak period</option>
          </select>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(DataSelector);
