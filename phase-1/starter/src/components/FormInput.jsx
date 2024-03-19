import React, { useState } from "react";

const FormInput = ({ addEleIntoList, inputValue, setInputValue }) => {
  return (
    <div style={{ padding: "10px 10px" }}>
      <input
        style={{ minWidth: "300px", padding: "10px", borderRadius: "20px", border: "1px solid black", color: "white", outline: "none", background: "transparent" }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => addEleIntoList(inputValue)}>Add </button>
    </div>
  );
};

export default FormInput;
