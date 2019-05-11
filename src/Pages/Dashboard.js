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

class Dashboard extends Component {
  state = {
    sex: {
      active: "all"
    },
    devices: {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    },
    gender: {
      legend: {
        show: false,
        position: "bottom"
      },

      datasets: {
        colors: ["#FFC850", "#FF7151"]
      },

      fill: {
        colors: ["#FFC850", "#FF7151"]
      },
      series: [],
      labels: ["Male", "Female"]
    },

    donut: {
      legend: {
        show: false
      },

      fill: {
        colors: ["#FFC850", "#FF7151", "#444053"]
      },
      series: [45, 55, 30],
      labels: ["Tecno", "Infinix", "Samsung"]
    },
    browserSpendTime: [
      {
        name: "Browser Spend Time",
        data: {
          Mon: 2,
          Tue: 5,
          Wed: 2,
          Thu: 6,
          Fri: 8,
          Sat: 6,
          Sun: 10
        }
      },
      {
        name: "Peak period",
        data: {
          Mon: 10,
          Tue: 3,
          Wed: 5,
          Thu: 15,
          Fri: 89,
          Sat: 5,
          Sun: 10
        }
      }
    ],

    data: [
      {
        value: 80,
        label: "Desktop"
      },
      {
        value: 60,
        label: "Tablet"
      },
      {
        value: 70,
        label: "Mobile"
      }
    ]
  };
  componentDidMount() {
    this.props.filterData({});
    console.log(this.props);
  }

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
    let { data, filteredData } = this.props;
    return (
      <main className="dashboard">
        <div>
          <DataSelector />
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

            <Chart
              options={this.state.donut}
              series={this.state.donut.series}
              type="donut"
            />
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
