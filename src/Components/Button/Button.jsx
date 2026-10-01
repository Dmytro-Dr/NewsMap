import React from "react";
import "./Button.scss";
const Button = ({ onClick }) => {
  return (
    <button className="Load_more-btn" type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
