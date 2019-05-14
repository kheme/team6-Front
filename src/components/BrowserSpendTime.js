import React from "react";
import Chart from "chart.js";
import ReactChartkick, { LineChart, PieChart } from "react-chartkick";
ReactChartkick.addAdapter(Chart);

export default ({ data }) => (
  <div className="chart-data">
    <div className="labels">
      <div>
        <h6>Impression by Months</h6>
      </div>
    </div>
    <LineChart
      data={{
        "2018-01": 69713,
        "2018-02": 156734,
        "2018-03": 162119,
        "2018-04": 99251,
        "2018-05": 72843,
        "2018-06": 50688,
        "2018-07": 46848,
        "2018-08": 49534,
        "2018-09": 41018,
        "2018-10": 31021,
        "2018-11": 1,

        "2018-12": 15358,

        "2019-01": 62466,
        "2019-02": 67786,
        "2019-03": 82691,
        "2019-04": 82247,
        "2019-05": 31152
      }}
      colors={["#FF7151", "#666"]}
    />
  </div>
);
