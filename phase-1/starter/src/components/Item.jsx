import React from "react";
import { motion } from "framer-motion";
import { Check } from "react-feather";

const Item = ({ title, removeEle, isCompleted, makeCompleted, clickItem, updateItem }) => {
  return (
    <motion.div
      drag
      dragConstraints={{ top: 0, bottom: 200 }}
      onClick={clickItem}
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
      <h3 style={{ textDecoration: `${isCompleted ? "line-through" : ""}` }}>
        {isCompleted ? "yes" : "noe"} {title}
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <span onClick={removeEle}>X</span>
        <span onClick={makeCompleted}>
          <Check />
        </span>

        <button onClick={updateItem}>Update</button>
      </div>
    </motion.div>
  );
};

export default Item;
