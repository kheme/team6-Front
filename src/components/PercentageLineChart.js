import React from "react";
import "../styles/custom.css";
export default ({ value, color, text }) => {
  return (
    <div className="chart-line">
      <div className="text">{text}</div>
      <div className="matix-color">
        <div
          className="line-animation"
          style={{
            width: `${value}%`,
            backgroundColor: color,
            height: "100%",
            borderRadius: "10px",
            color: "#fff",
            display: "flex",
            justifyContent: "center"
          }}
        >
          {`${value.toFixed(2)}%`}
        </div>
      </div>
    </div>
  );
};
