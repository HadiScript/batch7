import React from "react";
import { Check } from "react-feather";

const Item = ({ title, removeEle }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minWidth: "500px",
        backgroundColor: "#67e8f9",
        padding: "5px",
        borderRadius: "10px",
        color: "#083344",
      }}
    >
      <h3>{title}</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <span onClick={removeEle}>X</span>
        <span>
          <Check />
        </span>
      </div>
    </div>
  );
};

export default Item;
