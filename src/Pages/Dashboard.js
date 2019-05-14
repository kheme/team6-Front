import React, { Component } from "react";
import * as actions from "../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import CustomGraph from "../components/CustomGraph";
import PercentageChart from "../components/PercentageChart";
import DataSelector from "../components/DataSelector";
import "../styles/dashboard.css";
import Chart from "react-apexcharts";
import BrowserSpendTime from "../components/BrowserSpendTime";
import level from "../assets/images/level of education.PNG";
import health from "../assets/images/Condition of Health.PNG";

import ReactChartkick, { LineChart, ColumnChart } from "react-chartkick";
ReactChartkick.addAdapter(Chart);

class Dashboard extends Component {
  state = {
    sex: {
      active: "all"
    },
    filter: null
  };
  componentDidMount() {
    this.props.filterData({});
    console.log(this.props);
  }

  showImages = level => {
    console.log(level);
    this.setState({ ...this.state, filter: level });
  };

  changeFilter = ({ key, value }) => {
    if (key === "gender") {
      const sex = {
        active: value
      };
      this.setState({ ...this.state, sex });
    }

    this.props.filterData({ key, value });
  };
  render() {
    let filteredSites = null;
    let {
      data,
      filteredData,

      data: { sites }
    } = this.props;

    if (filteredData) {
      filteredSites = filteredData.gender.sites;
    }

    console.log(filteredSites);
    return (
      <main className="dashboard">
        <div>
          <DataSelector filtering={this.showImages} />
        </div>
        <div className="visualization">
          <div className="data-chart">
            <h5>Top Devices Used</h5>
            {filteredData !== null ? (
              <PercentageChart data={this.props.filteredData.gender.devices} />
            ) : data ? (
              <PercentageChart data={this.props.data.devices} />
            ) : null}
          </div>
          <div className="data-chart">
            <h5>Gender</h5>

            <div className="chart-legend">
              <button
                className={[
                  "btn btn-all",
                  this.state.sex.active === "all" && " active"
                ]}
                onClick={() =>
                  this.changeFilter({ key: "gender", value: "all" })
                }
              >
                <span className="color" />
                All
              </button>
              <button
                className={[
                  "btn btn-male ",
                  this.state.sex.active === "male" ? " active" : ""
                ]}
                onClick={() =>
                  this.changeFilter({ key: "gender", value: "male" })
                }
              >
                <span className="color" />
                Male
              </button>
              <button
                className={[
                  "btn btn-female ",
                  this.state.sex.active === "female" ? " active" : ""
                ]}
                onClick={() =>
                  this.changeFilter({ key: "gender", value: "female" })
                }
              >
                <span className="color" />
                Female
              </button>
            </div>
            {this.props.data.gender && (
              <Chart
                options={this.props.data.gender}
                series={[
                  this.props.data.gender.male.count,
                  this.props.data.gender.female.count
                ]}
                type="pie"
              />
            )}
          </div>

          <div className="data-chart">
            <h5>Top Sites Visited</h5>
            {filteredSites !== null ? (
              <ColumnChart
                data={[
                  ["helsinginuutiset.fi", filteredSites[0].visits],
                  ["ksml.fi", filteredSites[1].visits],
                  ["kaleva.fi", filteredSites[2].visits],
                  ["savonsanomat.fi", filteredSites[3].visits],
                  ["t13.cl", filteredSites[4].visits],
                  ["13.cl", filteredSites[5].visits],
                  ["ts.fi", filteredSites[6].visits],
                  ["search.izlesene.com", filteredSites[7].visits],
                  ["m.eluniversal.com.co", filteredSites[7].visits],
                  ["ess.fi", filteredSites[9].visits]
                ]}
              />
            ) : sites ? (
              <ColumnChart
                data={[
                  ["helsinginuutiset.fi", sites["helsinginuutiset.fi"].count],
                  ["ksml.fi", sites["ksml.fi"].count],
                  ["kaleva.fi", sites["kaleva.fi"].count],
                  ["savonsanomat.fi", sites["savonsanomat.fi"].count],
                  ["t13.cl", sites["t13.cl"].count],
                  ["13.cl", sites["13.cl"].count],
                  ["ts.fi", sites["ts.fi"].count],
                  ["search.izlesene.com", sites["search.izlesene.com"].count],
                  ["m.eluniversal.com.co", sites["m.eluniversal.com.co"].count],
                  ["ess.fi", sites["ess.fi"].count]
                ]}
              />
            ) : null}
          </div>
        </div>
        <div className="visualization-2">
          <BrowserSpendTime data={this.state.browserSpendTime} />

          {/* <div className="data-chart">
            <h5>Top Sites Visited</h5>
            <p>In the last hour</p>
            <PercentageChart data={this.state.data} />
          </div> */}
        </div>
        <div className="visualization-2">
          {/* <div className="data-chart">
            <h5>Top Sites Visited</h5>
            <p>In the last hour</p>
            <PercentageChart data={this.state.data} />
          </div> */}
        </div>

        {this.state.filter === "level of education" && (
          <div className="image">
            <div
              onClick={() => this.setState({ ...this.state, filter: null })}
              style={{
                background: "red",
                color: "#fff",
                width: 100,
                height: 50,
                position: "absolute",
                right: 0
              }}
            >
              <h4>Close</h4>
            </div>
            <img src={level} />
          </div>
        )}

        {this.state.filter === "health" && (
          <div className="image">
            <div
              onClick={() => this.setState({ ...this.state, filter: null })}
              style={{
                background: "red",
                color: "#fff",
                width: 100,
                height: 50,
                position: "absolute",
                right: 0
              }}
            >
              <h4>Close</h4>
            </div>
            <img src={health} />
          </div>
        )}
      </main>
    );
  }
}

const mapStateToProps = state => {
  let { data } = state;
  console.log("Datatatat", data);
  return {
    data: data.data,
    filteredData: data.filteredData
  };
};

export default connect(
  mapStateToProps,
  actions
)(Dashboard);
