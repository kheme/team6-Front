import React from "react";
import PercentageLineChart from "./PercentageLineChart";
import "../styles/custom.css";
export default class PercentageChart extends React.Component {
  state = {
    labels: [],
    colors: [
      "#6C63FF",
      "#FF7151",
      "#5A9D69",
      "#FFD037",
      "#01669a",
      "#0db32e",
      "#0dd5cc",
      "#095f02",
      "#0957d1",
      "#0d78eb",
      "#049746",
      "#0d4674",
      "#02ac6c",
      "#0bab4e",
      "#0eec2c",
      "#077fd9",
      "#0005c1",
      "#0cb227",
      "#045b66",
      "#088b6e",
      "#0b19d7",
      "#012f98",
      "#0bdcc4",
      "#087bf4",
      "#0729b7",
      "#0103f7",
      "#07cfdd",
      "#09f049",
      "#0ec5db",
      "#0884c1",
      "#0514d7",
      "#0cc121",
      "#00889a",
      "#00c6d9",
      "#030c6b",
      "#047a4e",
      "#03113a",
      "#062ee7",
      "#0d8764",
      "#052f71",
      "#0af702",
      "#09ac0a",
      "#006808",
      "#03a3e4",
      "#0d4f5d",
      "#049eee",
      "#0691cf",
      "#00606a",
      "#0185e3",
      "#063e43",
      "#0cf09d",
      "#0f2daf",
      "#06ae68",
      "#0a8d11",
      "#055a90",
      "#08fa2d",
      "#0b6235",
      "#0ad8a7",
      "#087baf",
      "#0b78b8",
      "#0de2de",
      "#058989",
      "#0b2032",
      "#0e8cd3",
      "#04a079",
      "#08e15f",
      "#0cf3dc",
      "#055e7d",
      "#0ce135",
      "#07d6b5",
      "#02d6e3",
      "#0b38df",
      "#025986",
      "#003da1",
      "#03e46b",
      "#087604",
      "#0ed063",
      "#07f8b9",
      "#0bd4a4",
      "#04e024",
      "#06f8b2",
      "#09f375",
      "#0e08dd",
      "#06fb40",
      "#0eeb26"
    ]
  };

  renderData = () => {
    let data = this.props.data;
    console.log("desktop", data);
    if (data.desktop.count) {
      const count = data.desktop.count + data.tablet.count + data.tablet.count;

      return [
        <PercentageLineChart
          key={1}
          color={this.state.colors[0]}
          value={(data.desktop.count / count) * 100}
          text={"Desktop"}
        />,
        <PercentageLineChart
          key={2}
          color={this.state.colors[1]}
          value={(data.mobile.count / count) * 100}
          text={"Mobile"}
        />,
        <PercentageLineChart
          key={3}
          color={this.state.colors[2]}
          value={(data.tablet.count / count) * 100}
          text={"Tablet"}
        />
      ];
    } else {
      const count = data.desktop + data.tablet + data.tablet;

      return [
        <PercentageLineChart
          key={1}
          color={this.state.colors[0]}
          value={(data.desktop / count) * 100}
          text={"Desktop"}
        />,
        <PercentageLineChart
          key={2}
          color={this.state.colors[1]}
          value={(data.mobile / count) * 100}
          text={"Mobile"}
        />,
        <PercentageLineChart
          key={3}
          color={this.state.colors[2]}
          value={(data.tablet / count) * 100}
          text={"Tablet"}
        />
      ];
    }
  };
  render() {
    return (
      <div className="custom-percentage-chart">
        {this.props.data && this.renderData()}
      </div>
    );
  }
}
