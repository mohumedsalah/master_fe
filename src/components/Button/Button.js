import React from "react";
import "./Button.css";

const Button = ({ onClick, children, type, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={"general-button " + type}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};
export default Button;
