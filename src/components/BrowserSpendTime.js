import React from "react";
import Chart from "chart.js";
import ReactChartkick, { LineChart, PieChart } from "react-chartkick";
ReactChartkick.addAdapter(Chart);

export default ({ data }) => (
  <div className="chart-data">
    <div className="labels">
      <div>
        <h6>Browser Spend Time</h6>
      </div>
      <div className="buttons">
        <button className="btn btn-custom">Month</button>
        <button className="btn btn-outline">Week</button>
      </div>
    </div>
    <LineChart data={data} colors={["#FF7151", "#666"]} />
  </div>
);
