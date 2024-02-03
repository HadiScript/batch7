import React from "react";

const Heading = ({ title, para }) => {
  return (
    <div className="main-box">
      <span className="its-icon">🤖</span>
      <div className="its-child">
        <span className="its-heading">{title}</span>
        <small className="its-small">{para}</small>
      </div>
    </div>
  );
};

export default Heading;
