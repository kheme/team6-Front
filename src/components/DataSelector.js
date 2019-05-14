import React from "react";
import "../styles/custom.css";
import * as actions from "../redux/actions";
import { connect } from "react-redux";

class DataSelector extends React.Component {
  render() {
    return (
      <div className="data-selector">
        <div className="selector form-group">
          <label>FAQ</label>
          <br />
          <select
            className="form-control"
            onChange={e => this.props.filtering(e.target.value)}
          >
            <option disabled selected>
              Find out what is important
            </option>
            <option value="level of education">Level of Education</option>
            <option value="health">Condition of Health</option>
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
