import React from "react";
export default ({ value, color, text, index }) => {
  console.log(index);
  return (
    <div
      style={{
        width: `${value}%`,
        backgroundColor: color,
        marginTop: -2,
        textAlign: "center",
        color: "#fff",
        zIndex: index
      }}
    >
      {`${text} ${value}%`}{" "}
    </div>
  );
};
