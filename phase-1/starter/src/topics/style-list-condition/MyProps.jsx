import React from "react";

const MyProps = ({ num, heading, arr }) => {
  return (
    <div style={{ minWidth: "500px", backgroundColor: "black", color : "white" }}>
      <h6>{heading}</h6>

      {arr
        .filter((x) => x >= num)
        .map((x) => (
          <div style={{ color: x > 5 ? "red" : "purple" }}>{x} </div>
        ))}
    </div>
  );
};

export default MyProps;
